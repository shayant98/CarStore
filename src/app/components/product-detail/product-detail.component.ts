import { Component, OnInit } from '@angular/core';
import { Part } from '../../models/Part.model';
import { PartsService } from '../../services/parts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private partsService: PartsService, private routes: ActivatedRoute) { }

  part: Part

  ngOnInit() {

    const productId = this.routes.snapshot.paramMap.get('id');
    this.getPartInfo(productId)

  }

  getPartInfo(id: string) {
    // this.partsService.getPartInfo(id)

    console.log(id);

  }

}
