import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  private readonly http: HttpClient = inject(HttpClient)
  private readonly url = 'http://localhost:8080';


  add(denunciaData: any): Observable<any> {
    return this.http.post(this.url, denunciaData)
  }

  getTypes(): Observable<any> {
    return this.http.get(this.url+'/types');
  }
}
