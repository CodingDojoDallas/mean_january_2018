interface evolveInterface{
  name: string;
  modifier: number;

}
export class Evolve implements evolveInterface{
  name: string;
  modifier: number;
  constructor(name = "", modifier=1){
    this.name = name;
    this.modifier = modifier;
  }
    
}
