import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class ServiceBase {

  protected clienteUrl = environment.apiClienteUrl;
  protected servicoUrl = environment.apiServicoUrl;
  protected loginUrl = environment.apiLoginUrl;
  protected errorMsg: string;

  constructor(protected http: HttpClient) { }
}
