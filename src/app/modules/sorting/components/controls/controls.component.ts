import { Component, OnInit } from '@angular/core';
import { UserArrParamsService } from '../../services/user-arr-params.service';
import { SortTypeService } from "../../services/sort-type.service";
// models
import { UserParams } from '../../models/UserParams'
import { SortType } from "../../models/SortType";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  SortType = SortType;
  // sortType: SortType = SortType.None;
  msg: UserParams = {};
  // array params entered by user
  /**
   * isRandom: does user want to generate an array with random elements in it? (defaults to true if not provided)
   * arrSize: the size of the array enetered by user (defaults to -1 if not specified)
   */
  arrParams: UserParams = new UserParams();

  constructor(private paramsService: UserArrParamsService, private sortTypeService: SortTypeService) { }

  ngOnInit(): void {
    // this.paramsService.currentUserParams.subscribe(params => this.arrParams = params);
    this.paramsService.currentUserParams.subscribe(params => this.msg = params);
  }

  // default: isRandom=true, arrSize=-1
  setArrParams(params: UserParams) {
    
    if (params.isRandom !== undefined) {
      this.arrParams.isRandom = params.isRandom;
    }
    
    if (params.arrSize !== undefined) {
      this.arrParams.arrSize = params.arrSize;
    }
    
    console.log(this.arrParams);
    // share this object via a service to other conponents
    this.msg = this.arrParams;
    this.paramsService.changeUserParams(this.msg);
  }

  sortArray(type: SortType) {
    console.log(type);
    // send the sortType data to the ArrayOfBars component via a service 
    this.sortTypeService.setSortType(type);
  }

}
