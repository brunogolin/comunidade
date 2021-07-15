import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    EMAIL: new FormControl(''),
    SENHA: new FormControl('')
  })

  login = {
    email: '',
    password: ''
  };

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {

      this.login.email = this.form.controls['EMAIL'].value
      this.login.password = this.form.controls['SENHA'].value

      const result = await this.contaService.login(this.login);
      console.log(`Login efetuado: ${result}`)

      // navegar para a rota vazia
      this.router.navigate(['']);

    } catch (error) {
      console.error(error);
    }
  }

}
