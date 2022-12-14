import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ProductService {
  // private _http:HttpClient;
  private _albumUrl ="../assets/album.json";

  constructor(private _http:HttpClient) { }

  getAlbum(id:number){
    var album=this._http.get<any>(this._albumUrl)
    return album;
  }

}
