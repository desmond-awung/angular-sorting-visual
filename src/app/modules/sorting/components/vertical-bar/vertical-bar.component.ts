import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.css']
})
export class VerticalBarComponent implements OnInit {
  
  @Input() element : number = 0;  // taking from parent
  @Input() max : number = Number.MAX_VALUE;  // taking from parent. Init to max possible value
  @Input() arrSize: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  setVerticalBarStyles() {
    // console.log(`Num elts: `);
    
    // set css class for each array-bar
    let barStyles = {
      height: `${(this.element/this.max)*100}%`,  // height is relative to the max element in array 
      // color: 'red',
      // width: `${(100/this.numElements)}%`, 
      // width: '80%', 
      width: `${50/(this.arrSize+1)}rem`, 
      margin: `0 ${10/(this.arrSize+1)}rem`, // this works for a max of 200 elts on a medium screen just fine
      backgroundColor: 'turquoise',
      /* border: 0.5px solid black; */
      /* border: 2px solid red; */
      display: 'inline',
      // minWidth: '2rem',
      // maxWidth: '3rem'
    }
    return barStyles;

  }
}
