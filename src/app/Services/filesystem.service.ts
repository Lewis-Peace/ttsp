import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { AppSettings } from '../Model/AppSettings';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { DatePipe } from '@angular/common';
import { Piexif } from '../Model/Piexif';
import { SigningService } from './signing.service';
import { Metadata } from '../Model/Metadata';
import { GlobalVariablesService } from './global-variables.service';
import { GeolocalizationService } from './geolocalization.service';
import { CameraService } from './camera.service';
import { MetadataService } from './metadata.service';

@Injectable({
  providedIn: 'root'
})
export class FilesystemService {

  private settingsFilename = 'settings.json'

  constructor(
  ) { }

  public requirePermission() {
    Filesystem.requestPermissions();
  }

  public async saveStandardSettings() {
    const result = await this.makeFile(this.settingsFilename, btoa(JSON.stringify(new AppSettings())));
    return result;
  }

  public async saveSettings(settings: AppSettings) {
    const result = await this.makeFile(this.settingsFilename, btoa(JSON.stringify(settings)));
    return result;
  }

  private pictureNaming() {
    const datepipe = new DatePipe('en-US')
    return `xxxxxx-${datepipe.transform(new Date(), 'dd-MM-YYYY-HH-mm')}`.replace(/[x]/g, c => {
      const r = Math.random() * 16 | 0, 
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    })
  }

  public async saveImage(base64Image: string, imageFormat: string) {
    const filename = this.pictureNaming();
    const file = await this.makeFile(`${filename}.${imageFormat}`, base64Image)
    return file;
  }

  public async checkFile(path: string) {
    try {
      const result = await Filesystem.stat({
        path: path,
        directory: Directory.Documents
      });
      return result;
    } catch (error) {
      return undefined;
    }
  }

  private async makeFile(path: string, data: string) {
    return await Filesystem.writeFile({
      data: data,
      path: path,
      directory: Directory.Documents,
      recursive: true
    })
  }

  public async stopTutorial(path: string) {
    await Filesystem.writeFile({
      data: '',
      path: path,
      directory: Directory.Data,
      recursive: true
    })
  }

  public async saveKeys(publicKey: string, privateKey: string) {
    await Filesystem.writeFile({
      data: btoa(publicKey),
      path: '.publicKey',
      directory: Directory.Data,
      encoding: Encoding.UTF8
    });
    await Filesystem.writeFile({
      data: btoa(privateKey),
      path: '.privateKey',
      directory: Directory.Data,
      encoding: Encoding.UTF8
    });
  }

  public async keysExist() {
    try {
      await Filesystem.stat({
        path: '.publicKey',
        directory: Directory.Data
      });
      await Filesystem.stat({
        path: '.privateKey',
        directory: Directory.Data
      });
    } catch (error) {
      return false;
    }
    return true;
  }

  public async getPublicKey() {
    const publicKey = await Filesystem.readFile({
      path: '.publicKey',
      directory: Directory.Data,
      encoding: Encoding.UTF8
    });
    return atob(publicKey.data.toString());
  }

  public async getPrivateKey() {
    const privateKey = await Filesystem.readFile({
      path: '.privateKey',
      directory: Directory.Data,
      encoding: Encoding.UTF8
    });
    return atob(privateKey.data.toString());
  }

}
