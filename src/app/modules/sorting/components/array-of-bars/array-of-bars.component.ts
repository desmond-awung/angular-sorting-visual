import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-of-bars',
  templateUrl: './array-of-bars.component.html',
  styleUrls: ['./array-of-bars.component.css']
})
export class ArrayOfBarsComponent implements OnInit {
  arrSize: number = 0; 
  array: number[] = []; // initialize array 
  max: number = Number.MAX_VALUE; 
  constructor() { }

  ngOnInit(): void {
    this.arrSize = this.getRandomIntInclusive(20, 300);
    // console.log(this.numElements);
    // this.array = [65, 22, 33, 45, 12];
    this.createArray(); // populates this.array
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
    for (let i = 0; i < this.arrSize; i++) {
      this.array[i] = this.getRandomIntInclusive(0, 100);
    }
  }

  // makes each bar to have variable width, depending on the number of elts in the array
  getBarContainerStyles() {
    let styles = {
      width : `${100/this.arrSize}%`
    }
    return styles;
  }
}
