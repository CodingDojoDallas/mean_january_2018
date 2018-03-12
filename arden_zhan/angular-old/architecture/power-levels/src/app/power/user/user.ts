export class User {
    title: string = "";
    multiplier: number = null;
    powerlevel?: number = null;
    
    constructor(title, multiplier){
        this.title = title;
        this.multiplier = multiplier;
    }
}
