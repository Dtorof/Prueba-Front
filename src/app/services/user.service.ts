import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8090/api/user/info';

  constructor(private http: HttpClient) { }

  getUserInfo(tipo: string, numero: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?tipo=${tipo}&numero=${numero}`);
  }
}
