import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  format = 'dd/MM/yyyy';
  birthdayDate = '1995-10-07';
  locale = 'es-ES';
  formattedDate = formatDate(this.birthdayDate, this.format, this.locale);
  date = new Date(1995,9,7);

  constructor() { }

  ngOnInit() {
  }

  getAge() {
    return this._calculateAge(this.date);
  }

  _calculateAge(birthday:Date) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
