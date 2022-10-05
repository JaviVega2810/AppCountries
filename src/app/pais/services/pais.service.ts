import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RESTCountry } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  get httpParams(){
    return new HttpParams()
    .set('fields', 'name,capital,flags,cca2,population')
  }

  buscarPais(param: string): Observable<RESTCountry[]>{

    const url = `${this.apiUrl}/name/${param}`;
    return this.http.get<RESTCountry[]>(url, {params:this.httpParams});
  }

  buscarCapital(param: string): Observable<RESTCountry[]>{
    const url = `${this.apiUrl}/capital/${param}`;
    return this.http.get<RESTCountry[]>(url, {params:this.httpParams});
  }

  getPaisPorCodigo(id: string): Observable<RESTCountry>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<RESTCountry>(url);
  }

  buscarPorRegion(id: string): Observable<RESTCountry[]>{

    const url = `${this.apiUrl}/region/${id}`;
    return this.http.get<RESTCountry[]>(url, {params:this.httpParams})
    .pipe(
      tap(console.log)
    );
  }

}
