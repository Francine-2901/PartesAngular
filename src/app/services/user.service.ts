import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/4d79f512-e1b4-4ea6-874d-86d7c718b897';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpCliente: HttpClient) { }

  //C.R.U.D. - CREAT, READ, UPDATE, DELETE

  //Retorna a lista de usuários READ
  getUsers():Observable<User[]> {
    return this.httpCliente.get<User[]>(this.apiUrl);
  }

  //salva usuário no banco CREATE
  postUser(user: User):Observable<User> {
    return this.httpCliente.post<User>(this.apiUrl, user, this.httpOptions)
  }

  //Exclui o usuario do banco DELETE
  deleteUser(id: number):Observable<User> {
    return this.httpCliente.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //Edita usuario UPDATE
  updateUser(id: string, user: User):Observable<User> {
    return this.httpCliente.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
}

//Lista usuario unico
  getUser(id: string):Observable<User[]> {
    return this.httpCliente.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}