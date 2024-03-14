import { Injectable } from '@angular/core';
import { SHA256 } from 'crypto-js'
import { JSEncrypt } from 'jsencrypt';
import { FilesystemService } from './filesystem.service';
import { GlobalVariablesService } from './global-variables.service';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class SigningService {

constructor(
  private filesystemService: FilesystemService,
  private globalVariablesService: GlobalVariablesService
) { }

  private static jsEncrypt: JSEncrypt = new JSEncrypt({
    log: true
  });
  public privateKey: string = '';

  public async setKey(privateKey: string, publicKey: string) {
    console.log({private: privateKey, public: publicKey});
    SigningService.jsEncrypt.setKey(privateKey.toString());
    this.privateKey = privateKey;
    this.globalVariablesService.setPublicKey(publicKey);
  }

  public async storeKeys() {
    const privateKey = SigningService.jsEncrypt.getPrivateKey();
    const publicKey = SigningService.jsEncrypt.getPublicKey();
    console.log(privateKey, publicKey)
    await this.filesystemService.saveKeys(publicKey, privateKey);
  }

  public signData(data: string): string {
    const sign = SigningService.jsEncrypt.sign(data, (x) => {
      const hash = SHA256(x).toString(); 
      return hash
    }, 'sha256');
    if (sign == false) {
      throw Error('Failed to sign');
    }
    return sign;
  }

  public checkSign(base64Image: string, sign: string, publicKey: string) {
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setKey(publicKey.toString());
    const check = jsEncrypt.verify(base64Image, sign, (x) => SHA256(x).toString());
    console.log('Verify', check);
    return check;
  }

  public hashData(base64Image: string) {
    return SHA256(base64Image).toString();
  }
}
