import { Gegenstand } from "./gegenstand";
export class Aktie extends Gegenstand {
  constructor(
    id: number,
    wert: number,
    public nennwert: number,
    public unternehmen: string
  ) {
    super(id, wert);
  }
  toString(): string {
    let text: string =
      'Schmuck{' +
      super.toString() +
      "\nnennwert='" +
      this.nennwert +
      "\nunternehmen='" +
      this.unternehmen +
      "'" +
      '}';
 
    return text;
  }
}