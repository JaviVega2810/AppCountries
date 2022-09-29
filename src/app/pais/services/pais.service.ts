import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTCountry } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(param: string): Observable<RESTCountry[]>{

    const url = `${this.apiUrl}/name/${param}`;
    return this.http.get<RESTCountry[]>(url);
  }

  buscarCapital(param: string): Observable<RESTCountry[]>{
    const url = `${this.apiUrl}/capital/${param}`;
    return this.http.get<RESTCountry[]>(url);
  }

  getPaisPorCodigo(id: string): Observable<RESTCountry>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<RESTCountry>(url);
  }

}
