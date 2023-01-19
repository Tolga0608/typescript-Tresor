import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {
  constructor(
    public id: number,
    public wert: number,
    public bezeichnung: string
  ) {
    super((id = id), (wert = wert));
    
  }
  toString(): string {
    let text: string =
      'Schmuck{' +
      super.toString() +
      "bezeichnung='" +
      this.bezeichnung +
      "'" +
      '}';

    return text;
  }
}

