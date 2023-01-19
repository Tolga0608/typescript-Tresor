import { Gegenstand } from "./gegenstand";
import { GegenstandNichtGefundenError } from "./gegenstandNichtGefundenError";

export class Tresor {
  
  /**
   * Typ ArrayList (vgl. Java) nicht vorhanden --> Array verwenden!
   */
   private gegenstaende: Gegenstand[];

   constructor() {
     this.gegenstaende = new Array();
   }
 
   //todo Gegenstand hinzufügen (addGegenstand)
   addGegenstand(gegenstand: Gegenstand) {
     this.gegenstaende.push(gegenstand);
   }
  
    
  getGegenstand(id: number): Gegenstand {
    for(let i: number =0; i <= this.gegenstaende.length; i++)
{
  if(id == this.gegenstaende[i].id){
    return this.gegenstaende[i];
  }else{
    throw new GegenstandNichtGefundenError(id);
  }
}  }

getGegestand_v2(id: number): Gegenstand {
  for(let g of this.gegenstaende){
    if(id == g.id){
      return g;
    } else {
      throw new GegenstandNichtGefundenError(id);
    }
  }
}
getGegenstand_v3(id: number): Gegenstand {
  let gefundenerGegenstand:Gegenstand = this.gegenstaende.find(g => id = g.id)
  if(gefundenerGegenstand !== undefined) {
    return gefundenerGegenstand
  } else {
    throw new GegenstandNichtGefundenError(id);
  }
}

getRemoveGegenstand() {
  let gegenstandToRemove: Gegenstand = this.getGegenstand_v3(gegenstand.id);
this.gegenstaende = this.gegenstaende.filter(g => g !== gegenstandToRemove)
}


   berechneGesamtwert(): number {
     let summeWerte: number = 0;
     this.gegenstaende.forEach(g => summeWerte += g.wert);
     return summeWerte;
   }

   //todo toString
   toString(): string {
     let text: string = "LISTE DER GEGENSTÄNDE";
     this.gegenstaende.forEach(g => text += "/n" + g.toString());
     return text;
   }

}