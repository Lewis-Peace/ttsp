declare var require: any
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { Piexif } from '../Model/Piexif';
import { GlobalVariablesService } from './global-variables.service';
import { MetadataService } from './metadata.service';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(
  ) { }

    public async takePicture() {
      let image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      if (image.format != 'jpeg') {
        throw new Error(`Image in wrong format. Images of format .${image.format} are not allowed`);
      }
      image.base64String = image.dataUrl;
      return image;
    }

    public async getImage() {
      return await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos
      });
    }
    
}
