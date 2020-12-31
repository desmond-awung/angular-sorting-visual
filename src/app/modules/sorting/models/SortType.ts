// reference from article by Dr. Axel Rauschmayer
// https://2ality.com/2020/01/enum-pattern.html#the-enum-pattern
class SortType {
    name: string;
    static BubbleSort = new SortType('BubbleSort');
    static InsertionSort = new SortType('InsertionSort');
    static MergeSort = new SortType('MergeSort');
    static SelectionSort = new SortType('SelectionSort');
    static QuickSort = new SortType('QuickSort');
    static None = new SortType('None');

    constructor(name: string) {
      this.name = name;
    }
  
    toString() {
      return `SortType.${this.name}`;
    }
}

class MyOther {
    name: string;
   
    constructor(name: string) {
      this.name = name;
    }
}

export {
    SortType,
    MyOther
}
    