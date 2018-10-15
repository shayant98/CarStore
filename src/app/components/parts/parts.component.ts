import { Component, OnInit } from '@angular/core';
import { Part } from '../../models/Part.model';
import { Subscription, Subject, BehaviorSubject, observable, Observable, combineLatest } from 'rxjs';
import { PartsService } from '../../services/parts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  searchTerm: string = "";
  currentCategory
  parts: Part[]
  getPartsSubscription: Subscription

  startAt = new BehaviorSubject(this.searchTerm);
  endAt = new Subject();

  startObservable = this.startAt.asObservable()
  endObservable = this.endAt.asObservable()
  constructor(private partService: PartsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.startAt.next(this.searchTerm)
    const currentCategory = this.route.snapshot.paramMap.get('cat');
    this.currentCategory = currentCategory


    this.startObservable.subscribe(val => {
      if (!val) {
        this.getPartsSubscription = this.partService.getParts(currentCategory).subscribe(parts => {
          this.parts = parts
        })

      } else {
        combineLatest(this.startObservable, this.endObservable).subscribe(([start, end]) => {

          this.getPartsSubscription = this.partService.searchParts(start, end, currentCategory).subscribe(parts => {
            this.parts = parts

          })


        })

      }

    })



  }
  ngOnDestroy(): void {
    this.getPartsSubscription.unsubscribe()
  }
  searchPart($event) {
    let query = $event.target.value;
    this.startAt.next(query)
    this.endAt.next(query + '\uf8ff')

  }
}
