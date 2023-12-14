import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.baseUrl;
  constructor(private http:HttpClient) { }

  GetProduct(){
    return this.http.get<any>(this.url+"api/Product/GetProduct").pipe(map((res:any)=>{return res;}))
  }
  PostProduct(date:any){
    return this.http.post<any>(this.url+"api/Product/CreateProudct",date).pipe(map((res:any)=>{return res;}))
  }

  UpdateProduct(date:any , Id:number){
    return this.http.put<any>(this.url+"api/Product/UpdateProudct",date).pipe(map((res:any)=>{return res;}))
  }
  DeleteProduct( Id:number){
    return this.http.delete<any>(this.url+"api/Product/DeleteProduct/"+Id).pipe(map((res:any)=>{return res;}))
  }
}
