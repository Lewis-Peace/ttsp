import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnackbarService } from './Services/snackbar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalVariablesService } from './Services/global-variables.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GeolocalizationService } from './Services/geolocalization.service';
import { SigningService } from './Services/signing.service';
import { DatePipe } from '@angular/common';
import { MetadataService } from './Services/metadata.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SnackbarService,
    GlobalVariablesService,
    GeolocalizationService,
    SigningService,
    MetadataService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
