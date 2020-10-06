import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import {HeaderModule} from '../header/header.module';

@NgModule({
  declarations: [PageComponent],
  imports: [
    HeaderModule
  ],
  exports: [PageComponent]
})
export class PageModule {}
