import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MdvComponent } from './mdv.component';
import { MaterialModule } from '@mdv2/material';

@NgModule({
  declarations: [
    MdvComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    MdvComponent
  ]
})
export class MdvModule {}
