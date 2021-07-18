import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { SmsEnvioService } from './sms-envio.service';

@Component({
  selector: 'app-sms-envio',
  templateUrl: './sms-envio.component.html',
  styleUrls: ['./sms-envio.component.css']
})
export class SmsEnvioComponent implements OnInit {

  form = new FormGroup({
    REMETENTE: new FormControl(''),
    DESTINATARIO: new FormControl(''),
    ASSUNTO: new FormControl(''),
    EMAIL: new FormControl('')
  })

  constructor(private smsEnvioService: SmsEnvioService) { }

  ngOnInit(): void {
  }

  enviar() {

    let remetente = this.form.controls['REMETENTE'].value
    let destinatario = this.form.controls['DESTINATARIO'].value
    let assunto = this.form.controls['ASSUNTO'].value
    let email = this.form.controls['EMAIL'].value

    this.smsEnvioService.enviarEmail(remetente, destinatario, assunto, email).subscribe(res => {
      Swal.fire(
        'Enviado!',
        `E-mail enviado para ${destinatario}`,
        'success'
      )
    });
  }

}
