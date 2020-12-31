import { Component, OnInit } from '@angular/core';
import { UserParams } from '../../models/UserParams';
import { UserArrParamsService } from '../../services/user-arr-params.service';

@Component({
  selector: 'app-array-of-bars',
  templateUrl: './array-of-bars.component.html',
  styleUrls: ['./array-of-bars.component.css']
})
export class ArrayOfBarsComponent implements OnInit {
  arrParams: UserParams = new UserParams();

  arraySize: number = 0; 
  array: number[] = []; // initialize array 
  max: number = Number.MAX_VALUE; 

  constructor(private paramsService: UserArrParamsService) { }

  ngOnInit(): void {
    console.log("New userParams value:");
    this.paramsService.currentUserParams.subscribe(params => this.arrParams = params);
    console.log(this.arrParams);
    
    if (this.arrParams.arrSize === -1) {
      // user did not provide the array size: randomly generate the size 
      this.arraySize = this.getRandomIntInclusive(20, 300);
    }
    // console.log(this.numElements);
    // this.array = [65, 22, 33, 45, 12];
    
    if (this.arrParams.isRandom) {
      // user selected to randomly generate all array elts
      this.createArray(); // populates this.array
    }
    
    // console.log(this.array);
    this.max = Math.max(...this.array);
  }

  // from MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
  getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  createArray() {
    for (let i = 0; i < this.arraySize; i++) {
      this.array[i] = this.getRandomIntInclusive(0, 100);
    }
  }

  // makes each bar to have variable width, depending on the number of elts in the array
  getBarContainerStyles() {
    let styles = {
      width : `${100/this.arraySize}%`
    }
    return styles;
  }
}
