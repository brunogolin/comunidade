import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sms-config',
  templateUrl: './sms-config.component.html',
  styleUrls: ['./sms-config.component.css']
})
export class SmsConfigComponent implements OnInit {

  form = new FormGroup({
    TOKEN: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {

  }

}
