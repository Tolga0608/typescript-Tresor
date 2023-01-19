import { Gegenstand } from "./gegenstand";
export class Schmuck extends Gegenstand {
  constructor(
    public id: number,
    public wert: number,
    public nennwert: number,
    public unternehmen: string
  ) {
    super((id = id), (wert = wert));
    
  }
  toString(): string {
    let text: string =
      'Schmuck{' +
      super.toString() +
      "nennwert='" +
      this.nennwert +
      "unternehmen='" +
      this.unternehmen +
      "'" +
      '}';
 
    return text;
  }
}