import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class VerticalBarComponent implements OnInit {
  
  @Input() element : number = 0;  // taking from parent
  @Input() max : number = Number.MAX_VALUE;  // taking from parent. Init to max possible value
  @Input() arraySize: number = 1;
  @Input() events: Observable<number> = new Observable<number>();
  @Input() idx: number = 0;
  @Output() updateColor = new EventEmitter();

  defaultColor: string = 'turquoise';
  private eventsSubscription: Subscription = new Subscription;

  constructor() {  }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((index => {
      // new color received
      this.changeColor(index);
    }))
  }

  // ngOnChanges() {
  //   console.log("Update has happendeddd");
    
  // }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  setVerticalBarStyles(currIndex?:number, color?: string) {
    // console.log(`Num elts: `);
    console.log(`Bar styles called for: ${this.idx}`);
    if (color === undefined)
      color = this.defaultColor;

    if (currIndex !== undefined && this.idx === currIndex)
    {
      console.log(`Yesss - index ${currIndex}found. changing color.`)
      color = 'red';
    }
    this.handleColorChange();

    // set css class for each array-bar
    let barStyles = {
      height: `${(this.element/this.max)*100}%`,  // height is relative to the max element in array 
      // color: 'red',
      // width: `${(100/this.numElements)}%`, 
      // width: '80%', 
      width: `${50/(this.arraySize+1)}rem`, 
      margin: `0 ${10/(this.arraySize+1)}rem`, // this works for a max of 200 elts on a medium screen just fine
      backgroundColor: color,
      /* border: 0.5px solid black; */
      /* border: 2px solid red; */
      display: 'inline',
      // minWidth: '2rem',
      // maxWidth: '3rem'
    }
    return barStyles;

  }

  changeColor(index: number) {
    console.log("");
    // console.log(`Last step: New Index set: ${index}`);
    // this.setVerticalBarStyles(index);
    // setTimeout(() => {}, 2000);
  }
  
  handleColorChange() {
    console.log("");
    // console.log("*****************************");
    // this.updateColor.emit({color: 'red'});
  }
}
