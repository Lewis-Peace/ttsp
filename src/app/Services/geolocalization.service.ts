import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'

@Injectable({
  providedIn: 'root'
})
export class GeolocalizationService {

constructor(
) { }

  public async getGeolocalization() {
    return (await Geolocation.getCurrentPosition())
  }

  public async getLongitudeFormatted() {
    const location = await this.getGeolocalization();
    return this.degToDmsRational(location.coords.longitude);
  }

  public async getLatitudeFormatted() {
    const location = await this.getGeolocalization();
    return this.degToDmsRational(location.coords.latitude);
  }
  
  private degToDmsRational(degFloat: number) {
    var minFloat = degFloat % 1 * 60
    var secFloat = minFloat % 1 * 60
    var deg = Math.floor(degFloat)
    var min = Math.floor(minFloat)
    var sec = Math.round(secFloat * 100)

    deg = Math.abs(deg) * 1
    min = Math.abs(min) * 1
    sec = Math.abs(sec) * 1
  
    return [[deg, 1], [min, 1], [sec, 100]]
  }

}
