import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeusDadosService {

  url = 'https://fortniteapi.io/v1/lookup?username=Ninja'

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization':  'ec2f6bbe-1f2a6e72-591ffdc7-d69d06e4'
    })
  };

  constructor(private http: HttpClient) { }

  consultarDados() {
    return this.http.get<any>(this.url, this.httpOptions);
  }

}
