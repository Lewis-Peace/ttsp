import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppSettings } from '../Model/AppSettings';
import { Metadata } from '../Model/Metadata';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

constructor() { }

  private _metadata: Metadata = new Metadata();
  private metadata: BehaviorSubject<Metadata> = new BehaviorSubject<Metadata>(this._metadata);
  public metadata$: Observable<Metadata> = this.metadata.asObservable();

  public getMetadata() {
    return this._metadata;
  }

  public setMetadata(metadata: any) {
    this._metadata = metadata;
    this.metadata.next(metadata);
  }
  
  private _tutorial: any
  private tutorial: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public tutorial$: Observable<boolean> = this.tutorial.asObservable()

  public getTutorial() {
    return this._tutorial;
  }

  public setTutorial(tutorial: boolean) {
    this._tutorial = tutorial;
    this.tutorial.next(tutorial);
  }

  
  private _settings: AppSettings = new AppSettings()
  private settings: BehaviorSubject<AppSettings> = new BehaviorSubject<AppSettings>(this._settings)
  public settings$: Observable<AppSettings> = this.settings.asObservable()

  public getSettings(): AppSettings {
    return this._settings;
  }

  public setSettings(settings: AppSettings) {
    this._settings = settings;
    this.settings.next(settings);
  }

  
  private _publicKey: string = '';
  private publicKey: BehaviorSubject<string> = new BehaviorSubject<string>(this._publicKey)
  public publicKey$: Observable<string> = this.publicKey.asObservable()

  public getPublicKey(): string {
    return this._publicKey;
  }

  public setPublicKey(publicKey: string) {
    this._publicKey = publicKey;
    this.publicKey.next(publicKey);
  }

}
