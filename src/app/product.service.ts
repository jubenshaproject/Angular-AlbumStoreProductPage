import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Album } from './album';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  // private _http:HttpClient;
  private _albumUrl ="../assets/album.json";

  constructor(private _http:HttpClient) { }

  getAlbum(id:number):Observable<Album>{
    return this._http.get<Album>(this._albumUrl);
  }

}
