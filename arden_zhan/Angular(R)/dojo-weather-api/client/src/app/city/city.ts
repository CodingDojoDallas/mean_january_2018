export class City {
    constructor(
        public id: number = null, 
        public name: string = ""
    ) { 
        this.id = id;
        this.name = name;
    }

    humidity;
    tempAvg;
    tempHigh;
    tempLow;
    status;

}
