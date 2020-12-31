import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortType } from "../models/SortType";

@Injectable({
  providedIn: 'root'
})
export class SortTypeService {

  defaultSortType: SortType = SortType.None;
  // private userParamsSource = new BehaviorSubject(this.defaultUsrParams);  
  private sortTypeSource = new BehaviorSubject<SortType>(this.defaultSortType);  
  // private userParamsSrc = new BehaviorSubject<string>("default usr param");
  currentSortType = this.sortTypeSource.asObservable();

  constructor() { }

  // change curr val of behaviorSubject, so all those subscribed to the service get the most up-to-date value of params 
  setSortType(type: SortType) {
    this.sortTypeSource.next(type);
    console.log("Sort Type Service Called!!!");
  }
}
