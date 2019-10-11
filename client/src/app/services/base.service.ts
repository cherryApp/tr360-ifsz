import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiEndpoint: string = "https://localhost:5001";

  constructor(
    protected http: HttpClient,
    protected entity: string
  ) { }

  getUrl(...opts): string {
    let url: string = `${this.apiEndpoint}/${this.entity}`;
    if (opts.length === 0) {
      return url;
    }
    return `${url}/${opts.join('/')}`;
  }

  read(id?: string | number): Observable<any> {
    let url = id ? this.getUrl(id) : this.getUrl();
    return this.http.get(url);
  }

}
