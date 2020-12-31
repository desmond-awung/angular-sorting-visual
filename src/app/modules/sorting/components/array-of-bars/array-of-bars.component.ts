import { Component, OnInit } from '@angular/core';
import { UserArrParamsService } from '../../services/user-arr-params.service';
import { SortTypeService } from "../../services/sort-type.service";
// models
import { UserParams } from '../../models/UserParams';
import { SortType } from "../../models/SortType";


@Component({
	selector: 'app-array-of-bars',
	templateUrl: './array-of-bars.component.html',
	styleUrls: ['./array-of-bars.component.css']
})
export class ArrayOfBarsComponent implements OnInit {
	// msgRcvd: string = "";
	msgRcvd: UserParams = {};
	arrParams: UserParams = new UserParams();

	arraySize: number = 0;
	array: number[] = []; // initialize array 
	max: number = Number.MAX_VALUE;

	constructor(private paramsService: UserArrParamsService, private sortTypeService: SortTypeService) { }

	ngOnInit(): void {
		// these line run on app init
		this.resetArrParams();
		// console.log(this.arrParams);   

		// user params for array
		this.paramsService.currentUserParams.subscribe(params => {
			console.log("New userParams value:");
			this.arrParams = params;
			this.resetArrParams();

		});

		// sort type
		this.sortTypeService.currentSortType.subscribe(sortType => {
			this.setSortType(sortType);

		})

	}


	resetArrParams() {
		this.arraySize = 0;
		this.array = []; // initialize array 
		this.max = Number.MAX_VALUE;
		console.log("Reset params called");
		if (this.arrParams.arrSize === -1) {
			// user did not provide the array size: randomly generate the size 
			this.arraySize = this.getRandomIntInclusive(20, 300);
			// this.arraySize = 10;   // XXX
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

	setSortType(type: SortType) {
		console.log(`Finally: Sort Type is ${type.name} `);
		console.log(`Array before: ${this.array}`);		

		switch (type) {

			case SortType.SelectionSort:
				{
					console.log("Selection Sort. Begins...");
					this.selectionSort();
					break;
				}
			case SortType.BubbleSort:
				{
					console.log("Bubble Sort. Begins...");

					break;
				}
			case SortType.InsertionSort:
				{
					console.log("Insertion Sort. Begins...");

					break;
				}
			case SortType.MergeSort:
				{
					console.log("Merge Sort. Begins...");

					break;
				}
			case SortType.QuickSort:
				{
					console.log("Quick Sort. Begins...");

					break;
				}

			default:
				console.log("Invalid Sort Type passed");

		}
		// after
		console.log(`Array after: ${this.array}`);


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


	// sort types

	// makes each bar to have variable width, depending on the number of elts in the array
	getBarContainerStyles() {
		let styles = {
			width: `${100 / this.arraySize}%`
		}
		return styles;
	}

	/**
	 * SELECTION SORT
	 */
	selectionSort() {
		let size: number = this.arraySize;
		let temp: number;
		for (let i = 0; i < size-1; i++) {
			let min = this.array[i];
			let minIndex = i;

			for (let j=i+1; j<size; j++ ) {
				// optimize: exit if I am the min

				// find the min and its index
				if (this.array[j] < min) {
					min = this.array[j];
					minIndex = j;
				}
			}
			// if elt at current index is still min, then no need to swap 
			if (minIndex === i)
				continue;
			// else swap min with elt at i
			temp = this.array[i];
			this.array[i] = this.array[minIndex];
			this.array[minIndex] = temp;
			// console.log(` >> Current Arr is: ${this.array}`);
			
		}


	}

}