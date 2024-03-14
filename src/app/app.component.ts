import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from './Services/global-variables.service';
import { GeolocalizationService } from './Services/geolocalization.service';
import { GPSLatitude, GPSLongitude } from './Model/Constants';
import { CameraService } from './Services/camera.service';
import { FilesystemService } from './Services/filesystem.service';
import { SigningService } from './Services/signing.service';
import { MetadataService } from './Services/metadata.service';
import { SnackbarService } from './Services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private filesystemService: FilesystemService,
    private signingService: SigningService,
    private snackbarService: SnackbarService
  ) {}

  async ngOnInit() {
    this.filesystemService.requirePermission();
    if (await this.filesystemService.keysExist()) {
      console.log('Keys loaded')
      try {
        const privateKey = await this.filesystemService.getPrivateKey();
        const publicKey = await this.filesystemService.getPublicKey();
        this.signingService.setKey(privateKey.toString(), publicKey.toString());
      } catch {
        this.snackbarService.openErrorSnackbar('Failed to load keys');
      }
    } else {
      console.log('Creating keys')
      await this.signingService.storeKeys();
    }
  }

}
