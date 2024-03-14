import { SnackbarService } from './../Services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { CameraService } from '../Services/camera.service';
import { GeolocalizationService } from '../Services/geolocalization.service';
import { GlobalVariablesService } from '../Services/global-variables.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
  ) {}

  async ngOnInit() {
  }
}
