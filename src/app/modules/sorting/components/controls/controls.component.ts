import { Component, OnInit } from '@angular/core';
import { UserArrParamsService } from '../../services/user-arr-params.service';

// models
import { UserParams } from '../../models/UserParams'

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  // array params entered by user
  /**
   * isRandom: does user want to generate an array with random elements in it? (defaults to true if not provided)
   * arrSize: the size of the array enetered by user (defaults to -1 if not specified)
   */
  arrParams: UserParams = new UserParams();
  /*
  user input params
  isRandom: boolean, arrSize: number
  */
  constructor(private paramsService: UserArrParamsService) { }

  ngOnInit(): void {
    this.paramsService.currentUserParams.subscribe(params => this.arrParams = params);
  }

  // default: isRandom=true, arrSize=-1
  setArrParams(params: UserParams) {
    
    if (params.isRandom !== undefined) {
      console.log("Not Random Array to be generated");
      this.arrParams.isRandom = params.isRandom;
    }
    
    if (params.arrSize !== undefined) {
      console.log("no Array size given");
      this.arrParams.arrSize = params.arrSize;
    }
    
    console.log("clicked to setup Arr");
    console.log(this.arrParams);
    // share this object via a service to other conponents
    // this.initArray.emit(this.arrParams);
    this.paramsService.changeUserParams(this.arrParams);

  }

}
