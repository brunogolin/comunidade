import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SmsEnvioService {

  constructor(private http: HttpClient) { }

  enviarEmail(remetente, destinatario, assunto, email): Observable<any> {
    
    let url = 'https://api.sendinblue.com/v3/smtp/email'

    let headers = { 'api-key': environment.tokenEmail };
    
    let body =
    {
      "sender": {
           "name": "Bruno Golin",
           "email": remetente
      },
      "to": [
           {
                "email": destinatario,
                "name": "Bruno Golin"
           }
      ],
      "subject": assunto,
      "textContent": email
    }

    return this.http.post(url, body, { headers })
      .pipe(
        catchError(this.handleError)
      )

  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    Swal.fire(
      'Oops...',
      `Problema ao enviar o e-mail`,
      'error'
    )
    return throwError(errorMessage);
  };

}
