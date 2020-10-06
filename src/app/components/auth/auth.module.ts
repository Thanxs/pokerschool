import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AuthComponent],
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, ReactiveFormsModule, FormsModule, MatButtonModule],
  exports: [AuthComponent]
})
export class AuthModule {}
