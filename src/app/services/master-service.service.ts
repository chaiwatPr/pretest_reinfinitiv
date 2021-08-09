import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MasterServiceService {
  private endPoint = 'https://api.publicapis.org/categories';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/*', 'Accept': 'application/*' })
  };
  constructor( private http: HttpClient) { }


  getDataCategories(){
    return  this.http.get(this.endPoint);
  }

}
