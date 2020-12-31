import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserParams } from '../models/UserParams';

@Injectable({
  providedIn: 'root'
})
export class UserArrParamsService {
  defaultUsrParams: UserParams = new UserParams();
  private userParamsSource = new BehaviorSubject<UserParams>(this.defaultUsrParams);  
  // private userParamsSrc = new BehaviorSubject<string>("default usr param");
  currentUserParams = this.userParamsSource.asObservable();

  constructor() { }

  // change curr val of behaviorSubject, so all those subscripbed to the service get the most up-to-date value of params 
  changeUserParams(params: UserParams) {
    this.userParamsSource.next(params);
    console.log("Service Called!!!");

  }

}
