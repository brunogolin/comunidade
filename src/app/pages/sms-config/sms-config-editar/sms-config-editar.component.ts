import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface parametros {
  parceiro: string;
  token: string;
}

@Component({
  selector: 'app-sms-config-editar',
  templateUrl: './sms-config-editar.component.html',
  styleUrls: ['./sms-config-editar.component.css']
})
export class SmsConfigEditarComponent implements OnInit {

  form = new FormGroup({
    PARCEIRO: new FormControl(''),
    TOKEN: new FormControl(''),
    TESTE: new FormControl('')
  })

  constructor(public dialogRef: MatDialogRef<SmsConfigEditarComponent>, @Inject(MAT_DIALOG_DATA) public data: parametros) { }

  ngOnInit(): void {
    this.form.controls['PARCEIRO'].setValue(this.data.parceiro);
    this.form.controls['TOKEN'].setValue(this.data.token);

    this.form.controls['TESTE'].setValue(this.data.parceiro);
  }

  executeSalvar() {
    // Salvar as informações
    this.dialogRef.close();
  }

}
