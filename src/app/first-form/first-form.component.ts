import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  constructor(private popup: MatSnackBar) { }

  ngOnInit() {
  }

  popupMessage() {
    this.popup.open(
      'Hi there! 🍕', 'Close',
      { duration: 2000 });
  }
}
