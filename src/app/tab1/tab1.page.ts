import { ModalController } from '@ionic/angular';
import { ImageIFD, ExifIFD, GPSIFD, ImageIFDProperties, ExifIFDProperties, GPSIFDProperties } from './../Model/Piexif';
import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../Services/global-variables.service';
import { Metadata, metadataNameToNumber } from '../Model/Metadata';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
    private globalVariables: GlobalVariablesService  
  ) {}

  public metadata: Metadata | undefined

  public imageMetadataSelected: string[] = []
  public exifMetadataSelected: string[] = []
  public gpsMetadataSelected: string[] = []

  ngOnInit() {
    this.globalVariables.settings$.subscribe(settings => {
      this.imageMetadataSelected = settings.imageMetadataSelected;
      this.gpsMetadataSelected = settings.gpsMetadataSelected;
      this.exifMetadataSelected = settings.exifMetadataSelected;
    })
    this.metadata = this.globalVariables.getMetadata();
    console.log(this.metadata)
  }

  public metadataNameToNumber(metadataName: string): number {
    return metadataNameToNumber(metadataName)
  }

  setMetadata() {
    console.log(this.metadata);
    this.globalVariables.setMetadata(this.metadata)
  }

}
