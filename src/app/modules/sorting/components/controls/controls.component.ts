import { Component, OnInit } from '@angular/core';
import { UserArrParamsService } from '../../services/user-arr-params.service';

// models
import { UserParams } from '../../models/UserParams'


// enum SortType {
//   SelectionSort = 1,
//   BubbleSort,
//   InsertionSort,
//   MergeSort,
//   QuickSort,
// }

class SortType {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  toString() {
    return `SortType.${this.name}`;
  }
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  MySortType = class {
    static BubbleSort = new SortType('BubbleSort');
    static InsertionSort = new SortType('InsertionSort');
    static MergeSort = new SortType('MergeSort');
    static SelectionSort = new SortType('SelectionSort');
    static QuickSort = new SortType('QuickSort');
    static None = new SortType('None');
  }
  // sortType: SortType = SortType.None;
  msg: UserParams = {};
  // array params entered by user
  /**
   * isRandom: does user want to generate an array with random elements in it? (defaults to true if not provided)
   * arrSize: the size of the array enetered by user (defaults to -1 if not specified)
   */
  arrParams: UserParams = new UserParams();
  
  constructor(private paramsService: UserArrParamsService) { }

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
    
    switch(type.name) {

    case this.MySortType.SelectionSort.name:
    {
        console.log("Selection Sort. Begins...");
    
        break;
    }
    case  this.MySortType.BubbleSort.name:
    {
      console.log("Bubble Sort. Begins...");
    
      break;
    }
    case  this.MySortType.InsertionSort.name:
    {
      console.log("Insertion Sort. Begins...");
    
      break;
    }
    case  this.MySortType.MergeSort.name:
    {
      console.log("Merge Sort. Begins...");
    
      break;
    }
    case  this.MySortType.QuickSort.name:
    {
      console.log("Quick Sort. Begins...");
    
      break;
    }

    default:
      console.log("Invalid Sort Type passed");
      
  }


  }

}
