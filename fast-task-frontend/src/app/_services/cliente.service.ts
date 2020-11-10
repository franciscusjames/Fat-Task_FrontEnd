import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Cliente } from '../_models/cliente';
import { ServiceBase } from './service-base';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ServiceBase {

  cliente: Cliente;

  constructor(http: HttpClient) {
    super(http);
  }

  public async addClient(cliente: Cliente): Promise<any> {
    return await this.http.post(`${this.clienteUrl}/Add`, cliente)
      .pipe(
        catchError(async (err) => this.handleError(err)))
      .toPromise() as Cliente;
  }

  public async updateClient(cliente: Cliente): Promise<any> {
    return await this.http.put(`${this.clienteUrl}/Update`, cliente)
      .pipe(
        catchError(async (err) => this.handleError(err)))
      .toPromise() as number;
  }

  public async deleteClient(id: number): Promise<any> {
    return await this.http.delete(`${this.clienteUrl}/Delete/${id}`)
      .pipe(
        catchError(async (err) => this.handleError(err)))
      .toPromise() as number;
  }

  public handleError(error: HttpErrorResponse): void {
    console.log(error);
    this.errorMsg = error.name;
    if (error.status === 0) {
      this.errorMsg = 'Não foi possível conectar com o serviço.';
    }
    alert(this.errorMsg);
  }

}
