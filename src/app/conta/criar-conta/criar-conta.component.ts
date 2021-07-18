import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  form = new FormGroup({
    NOME: new FormControl(''),
    EMAIL: new FormControl(''),
    SENHA: new FormControl('')
  })

  account = {
    name: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

      this.account.name = this.form.controls['NOME'].value
      this.account.email = this.form.controls['EMAIL'].value
      this.account.password = this.form.controls['SENHA'].value


  }

}
