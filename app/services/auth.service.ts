import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from 'src/app/models/user';
import { User2 } from 'src/app/models/user2';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL=environment.apiURL;
  isLoggedIn: boolean = false;

  constructor(private http:HttpClient) { }

  register(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}users`,user)
  }
  login(user2:User2):Observable<any>{
    return this.http.post(`${this.apiURL}login`,user2)
  }
  equipo(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}equipo`,user)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  saveSession(token: string, rol: any) {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.setItem('token', token);
    localStorage.setItem("rol", rol)
  }

  removeSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }

  isAuth(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return of(this.isLoggedIn);
  }

  getRol(): string {
    return localStorage.getItem("rol")
  }
}
