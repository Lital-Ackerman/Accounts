import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationModel } from '../model/operation-model';
import { OpertaionType } from '../model/operationType-model';

@Injectable({
  providedIn: 'root'
})

export class OperationService {
  BASE_URL="http://localhost:5000/api/operations";

  constructor(private http: HttpClient) { }
  
  //Get request to Server
  getUserOperations(accountId:number): Observable<OperationModel[]>{
    console.log("in service-get");
    return this.http.get<OperationModel[]>(`${this.BASE_URL}/${accountId}`)
  }


  //Post new Operation- request to Server
  postOperation(newOperation:OperationModel): Observable<OperationModel>{
    console.log("in service-post");
    console.log(newOperation);
    return this.http.post<OperationModel>(`${this.BASE_URL}`, newOperation)
  }

  //Get operation types for select input- request to Server
  getOperationTypes(): Observable<OpertaionType[]>{
    console.log("in service-type");
    return this.http.get<OpertaionType[]>(`${this.BASE_URL}/select/types`)
  }
 
}
