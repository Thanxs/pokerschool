import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public openLoginForm() {
    const dialogRef = this.dialog.open(AuthComponent);
  }
}
