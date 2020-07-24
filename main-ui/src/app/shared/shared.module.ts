import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
      MainHeaderComponent,
      FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
      MainHeaderComponent
  ]

})
export class SharedModule { }
