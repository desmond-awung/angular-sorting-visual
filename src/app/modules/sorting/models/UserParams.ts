export class UserParams {
    isRandom?: boolean; 
    arrSize?: number;

    constructor(isRandom?: boolean, arrSize?: number) {
        if (isRandom != undefined) {
            this.isRandom = isRandom;
        }
        else this.isRandom = true;
    
        if (arrSize != undefined) {
            this.arrSize = arrSize;
        }
        else this.arrSize = -1;
    }
}