import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { PropertySelectModalComponent } from './property-select-modal/property-select-modal.component';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { FilesystemService } from '../Services/filesystem.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page, PropertySelectModalComponent],
  providers: [FilesystemService]
})
export class Tab3PageModule {}
