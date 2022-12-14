import { Component, OnInit } from '@angular/core';
import { Album } from 'app/album';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-trackinglist',
  templateUrl: './product-trackinglist.component.html',
  styleUrls: ['./product-trackinglist.component.css']
})
export class ProductTrackinglistComponent implements OnInit {

  albumInfo:Album;
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response=>this.albumInfo=response);
  }

}
