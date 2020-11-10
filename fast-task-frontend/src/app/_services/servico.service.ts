import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Servico } from '../_models/servico';
import { ServiceBase } from './service-base';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService extends ServiceBase {

  servico: Servico;

  constructor(http: HttpClient) {
    super(http);
  }

  public async addServico(servico: Servico): Promise<any> {
    return await this.http.post(`${this.servicoUrl}/Add`, servico)
      .pipe(
        catchError(async (err) => this.handleError(err)))
      .toPromise() as Servico;
  }

  public async updateServico(servico: Servico): Promise<any> {
    return await this.http.put(`${this.servicoUrl}/Update`, servico)
      .pipe(
        catchError(async (err) => this.handleError(err)))
      .toPromise() as number;
  }

  public async deleteServico(id: number): Promise<any> {
    return await this.http.delete(`${this.servicoUrl}/Delete/${id}`)
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
