import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { AuthModule } from '../auth/auth.module';
import { AuthComponent } from '../auth/auth.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [AuthModule, MatDialogModule, MatButtonModule],
  exports: [HeaderComponent],
  entryComponents: [AuthComponent]
})
export class HeaderModule {}
