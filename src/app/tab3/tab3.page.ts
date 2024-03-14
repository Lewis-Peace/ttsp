import { Component, OnInit } from '@angular/core';
import { ExifIFD, ExifIFDProperties, GPSIFD, GPSIFDProperties, ImageIFD, ImageIFDProperties } from '../Model/Piexif';
import { PropertySelectModalComponent } from './property-select-modal/property-select-modal.component';
import { ModalController } from '@ionic/angular';
import { AppSettings } from '../Model/AppSettings';
import { GlobalVariablesService } from '../Services/global-variables.service';
import { SigningService } from '../Services/signing.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private modalController: ModalController,
    private globalVariables: GlobalVariablesService,
    private signingService: SigningService
  ) {}

  ngOnInit() {
    const settings = this.globalVariables.getSettings();

    this.imageMetadataSelected = settings.imageMetadataSelected;
    this.exifMetadataSelected = settings.exifMetadataSelected;
    this.gpsMetadataSelected = settings.gpsMetadataSelected;
  }

  public geolocalizationSign: boolean = false
  public secured: boolean = false
  public password: string = ''


  imageMetadataList = ImageIFDProperties;
  imageMetadataSelected: string[] = []
  exifMetadataList = ExifIFDProperties;
  exifMetadataSelected: string[] = []
  gpsMetadataList = GPSIFDProperties;
  gpsMetadataSelected: string[] = []


  async openModal(metadataList: string[], metadataChecked: string[], metadataProperty: string) {
    const modal = await this.modalController.create({
      component: PropertySelectModalComponent,
      componentProps: {
        selectOptions: metadataList,
        checkedOptions: metadataChecked
      }
    })
    type PageKeys = keyof this;
    const property = metadataProperty as PageKeys
    modal.onDidDismiss()
      .then(data => {
        this[property] = data.data
        this.saveSettings()
      })
    await modal.present()
  }

  public saveSettings() {
    let settings = new AppSettings();
    settings.geolocalizationSign = this.geolocalizationSign;
    settings.password = this.password;
    settings.secured = this.secured;
    settings.exifMetadataSelected = this.exifMetadataSelected;
    settings.gpsMetadataSelected = this.gpsMetadataSelected;
    settings.imageMetadataSelected = this.imageMetadataSelected;

    this.globalVariables.setSettings(settings);
    // TODO: Write settings in filesystem
  }
  public resetSettings() {

    this.globalVariables.setSettings(new AppSettings());
    // TODO: Write settings in filesystem
  }

  public hash(data: string) {
    // this.signingService.setKey(key);
    const signed = this.signingService.signData(data);
    console.log(signed)
  }
}
