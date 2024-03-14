import { Injectable } from '@angular/core';
import { Piexif } from '../Model/Piexif';
import { Metadata } from '../Model/Metadata';
import { GeolocalizationService } from './geolocalization.service';
import { GlobalVariablesService } from './global-variables.service';
import { SigningService } from './signing.service';
import { DatePipe } from '@angular/common';
import { Photo } from '@capacitor/camera';

const piexif: Piexif = require('piexifjs');

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(
    private geolocalizationService: GeolocalizationService,
    private globalVariablesService: GlobalVariablesService,
    private signingService: SigningService,
    private datePipe: DatePipe
  ) { }

  
  public setDefaultExifData(metadata: Metadata) {
    const date = this.formatDate(new Date());

    metadata['0th'][piexif.ImageIFD.Software] = "Trustworthy and secure Smartphone Photography";
    metadata['Exif'][piexif.ExifIFD.DateTimeOriginal] = date;
    // metadata['GPS'][piexif.GPSIFD.GPSDateStamp] = date;
    // metadata['GPS'][piexif.GPSIFD.GPSLatitude] = await this.geolocalizationService.getLatitudeFormatted();
    // metadata['GPS'][piexif.GPSIFD.GPSLongitude] = await this.geolocalizationService.getLongitudeFormatted();
    metadata['Exif'][piexif.ExifIFD.CameraOwnerName] = this.globalVariablesService.getPublicKey();
    delete metadata['Exif'][piexif.ExifIFD.ImageUniqueID]
    return metadata;
  }

  private formatDate(date: Date) {
    return this.datePipe.transform(date, 'yyy:MM:dd hh:mm:ss')
  }

  
  public addMetadata(image: Photo) {
    let metadata = this.globalVariablesService.getMetadata();
    metadata = this.setDefaultExifData(metadata);

    if (!image.dataUrl) {
      throw new Error('Image isn\'t in base64 format');
    }
    console.log('Inserting metadata', metadata)
    let base64Data = piexif.remove(image.dataUrl);
    base64Data = piexif.insert(piexif.dump(metadata), base64Data)
    const sign = this.signingService.signData(base64Data);
    metadata['Exif'][piexif.ExifIFD.ImageUniqueID] = sign;
    return piexif.insert(piexif.dump(metadata), base64Data);
  }

  public getMetadata(image: Photo | string) {
    if (typeof image == 'string') {
      const metadata: Metadata = piexif.load(image)
      return metadata;
    } else {
      if (!image.dataUrl) {
        throw new Error('Image isn\'t in base64 format');
      }
      const metadata: Metadata = piexif.load(image.dataUrl);
      return metadata;
    }
  }

  public getSign(image: Photo) {
    if (!image.dataUrl) {
      throw new Error('Image isn\'t in base64 format');
    }
    const metadata = piexif.load(image.dataUrl);
    return metadata['Exif'][piexif.ExifIFD.ImageUniqueID];
  }

  public getPublicKey(image: Photo) {
    if (!image.dataUrl) {
      throw new Error('Image isn\'t in base64 format');
    }
    const metadata = piexif.load(image.dataUrl);
    const key: string | undefined = metadata['Exif'][piexif.ExifIFD.CameraOwnerName]
    if (!key) {
      throw new Error(`Failed to extract public key`);
    }
    return key;
  }

  public clearSign(image: Photo): string {
    if (!image.dataUrl) {
      throw new Error('Image isn\'t in base64 format');
    }
    let metadata: Metadata = this.getMetadata(image);
    delete metadata['Exif'][piexif.ExifIFD.ImageUniqueID];
    
    const newMetadata = piexif.dump(metadata);
    const base64ImageWithoutSign = piexif.insert(newMetadata, piexif.remove(image.dataUrl));

    return base64ImageWithoutSign;
  }
}
