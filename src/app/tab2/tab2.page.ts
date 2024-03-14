import { Component, OnInit } from '@angular/core';
import { CameraService } from '../Services/camera.service';
import { SnackbarService } from '../Services/snackbar.service';
import { Camera, CameraPermissionState, Photo } from '@capacitor/camera';
import { GlobalVariablesService } from '../Services/global-variables.service';
import { Router } from '@angular/router';
import { FilesystemService } from '../Services/filesystem.service';
import { Metadata } from '../Model/Metadata';
import { MetadataService } from '../Services/metadata.service';
import { SigningService } from '../Services/signing.service';
import JSEncrypt from 'jsencrypt';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(
    private cameraService: CameraService,
    private metadataService: MetadataService,
    private signingService: SigningService,
    private filesystemService: FilesystemService,
    private snackbarService: SnackbarService,
    private globalVariablesService: GlobalVariablesService,
    private router: Router
  ) {}

  public image: Photo | undefined

  async ngOnInit() {
    // Redirect to error page
    if ((await Camera.checkPermissions()).camera === 'denied') {
      this.router.navigate(['missing-permission'])
    }
  }

  public async checkImage() {
    const image = await this.cameraService.getImage();
    image.base64String = image.dataUrl;
    this.image = image;
    if (!image) {
      this.snackbarService.openErrorSnackbar('Missing image to check');
      return;
    }
    const metadata = this.metadataService.getMetadata(image);
    console.log('Loaded metadata', metadata);
    try {
      const publicKey: string = this.metadataService.getPublicKey(image);

      const sign = this.metadataService.getSign(image);
      const b64Image = this.metadataService.clearSign(image);

      const signCheck = this.signingService.checkSign(b64Image, sign, publicKey);
      if (signCheck) {
        this.snackbarService.openSuccessSnackbar('The image is correctly signed');
      } else {
        this.snackbarService.openErrorSnackbar('The image has been forged');
      }
    } catch (e) {
      if (typeof e == 'string') {
        this.snackbarService.openErrorSnackbar(e)
      } else if (e instanceof Error){
        this.snackbarService.openErrorSnackbar(e.message)
      }
    }
  }

  public async takePicture() {
    const pictureResult = await this.cameraService.takePicture()
    if (!pictureResult) {
      this.snackbarService.openErrorSnackbar('Failed to take picture');
    }
    this.image = pictureResult;
    try {
      const metadata = this.metadataService.getMetadata(pictureResult);
      this.globalVariablesService.setMetadata(metadata);
    } catch (e) {
      if (typeof e == 'string') {
        this.snackbarService.openErrorSnackbar(e)
      } else if (e instanceof Error){
        this.snackbarService.openErrorSnackbar(e.message)
      }
    }
  }

  public async savePicture() {
    if (!this.image) {
      this.snackbarService.openErrorSnackbar('No image to save')
      return;
    }
    try {
      const b64Image = this.metadataService.addMetadata(this.image)
      this.image.base64String = b64Image;
      const saveResult = await this.filesystemService.saveImage(b64Image, this.image.format);
      this.snackbarService.openSuccessSnackbar(`File saved at ${saveResult.uri}`)
    } catch (e) {
      if (typeof e == 'string') {
        this.snackbarService.openErrorSnackbar(e)
      } else if (e instanceof Error){
        this.snackbarService.openErrorSnackbar(e.message)
      }
    }
  }

}
