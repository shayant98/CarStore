import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { Part } from "../../models/Part.model";
import { PartsService } from '../../services/parts.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  parts: Part[]
  getPartsSubscription: Subscription
  constructor(private partService: PartsService, private route: ActivatedRoute) { }

  ngOnInit() {

    const currentCategory = this.route.snapshot.paramMap.get('cat');
    console.log(currentCategory);

    this.getPartsSubscription = this.partService.getParts(currentCategory).subscribe(parts => {
      this.parts = parts

    })
  }
  ngOnDestroy(): void {
    this.getPartsSubscription.unsubscribe()
  }

}
