import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonSearchbarCustomEvent, SearchbarChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-property-select',
  templateUrl: './property-select-modal.component.html',
  styleUrls: ['./property-select-modal.component.css']
})
export class PropertySelectModalComponent implements OnInit {

  @Input() selectOptions: string[] = []
  @Input() checkedOptions: string[] = []

  public filteredOptions: string[] = this.selectOptions

  constructor(private modalCtrl: ModalController) {}

  clear() {
    return this.modalCtrl.dismiss([], 'clear');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.checkedOptions, 'confirm');
  }

  ngOnInit() {
    this.filteredOptions = this.selectOptions;
  }

  filterList(event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) {
    const substring = event.target.value?.toLowerCase();
    if (!substring || substring === '') {
      this.filteredOptions = this.selectOptions;
      return;
    }
    this.filteredOptions = this.selectOptions.filter(x => x.toLowerCase().includes(substring));
  }

  checkElementEvent(option: string) {
    const idx = this.checkedOptions.indexOf(option)
    if (idx === -1) {
      this.checkedOptions.push(option);
    } else {
      this.checkedOptions.splice(idx, 1)
    }
  }

}
