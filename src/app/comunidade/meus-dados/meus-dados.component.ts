import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MeusDadosService } from './meus-dados.service';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {

  form = new FormGroup({
    NOME: new FormControl(''),
    EMAIL: new FormControl('')
  })

  constructor(private meusDadosService: MeusDadosService) { }

  ngOnInit(): void {

    this.form.controls['NOME'].setValue('Bruno')
    this.form.controls['EMAIL'].setValue('bruno.golin@gmail.com')

    this.consultarDados();

  }

  consultarDados() {
    this.meusDadosService.consultarDados().subscribe(res =>
        this.form.controls['EMAIL'].setValue(res.account_id)
      );
  }

  

}
