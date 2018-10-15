import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Part } from "../models/Part.model";

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  partCollection: AngularFirestoreCollection<Part>
  partDocument: AngularFirestoreDocument<Part>
  parts: Observable<Part[]>
  part: Observable<Part>


  constructor(private afs: AngularFirestore) {
    //this.partCollection = this.afs.collection('parts', ref => ref.orderBy('partNumber'))
  }

  getParts(category): Observable<Part[]> {

    this.parts = this.afs.collection('parts', ref => ref.where('category', '==', category)).snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const part = action.payload.doc.data() as Part
        part.id = action.payload.doc.id
        return part
      })
    }));

    return this.parts

  }

  searchParts(startAt, EndAt, category): Observable<Part[]> {

    this.parts = this.afs.collection('parts', ref => ref.where('category', '==', category).orderBy('partNumber').startAt(startAt).endAt(EndAt)).snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const part = action.payload.doc.data() as Part
        part.id = action.payload.doc.id
        return part
      })
    }));

    return this.parts
  }
}


