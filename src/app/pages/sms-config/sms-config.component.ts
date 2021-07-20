import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SmsConfigEditarComponent } from './sms-config-editar/sms-config-editar.component';

@Component({
  selector: 'app-sms-config',
  templateUrl: './sms-config.component.html',
  styleUrls: ['./sms-config.component.css']
})
export class SmsConfigComponent implements OnInit {

  form = new FormGroup({
    PARCEIRO: new FormControl(''),
    TOKEN: new FormControl('')
  })

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.form.controls['PARCEIRO'].disable()
    this.form.controls['PARCEIRO'].setValue('Teste')
  }

  executeAlterar() {

    let dialogRef = this.dialog.open(SmsConfigEditarComponent,  {
      
      data: {
        parceiro: this.form.controls['PARCEIRO'].value,
        token: this.form.controls['TOKEN'].value
      }
    });

    dialogRef.updateSize("750px", "auto");

    dialogRef.afterClosed().subscribe(result => {
      //Atualizar as informações
    });

  }

}
