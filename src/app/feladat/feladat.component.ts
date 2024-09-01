import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrl: './feladat.component.css'
})
export class FeladatComponent {
  isbn: string = "";
  cim: string = "";
  db: number = 0;
  keszleten: boolean = true;

  konyvek: Konyv[] = [];

  felvitel(): void {
    var konyv: Konyv = {
      isbn: this.isbn,
      cim: this.cim,
      db: this.db,
      felvitelDatum: new Date(),
      keszleten: this.keszleten
    };

    this.konyvek.push(konyv);

    this.isbn = "";
    this.cim = "";
    this.db = 0;
    this.keszleten = true;
  }
}

/*
- A Feladat komponensen:
  - Keszits interface-t Konyv neven
    - ISBN: szoveg
    - Cim: szoveg
    - Db: szam
    - FelvitelDatum: Date (az MINDIG az aktualis pillanat, nem kell bekerni!)
    - Keszleten: logikai
  - Keszits urlapot, amint Konyveket lehet felvinni
  - A Konyveket jelenitsd meg egy BS tablaban
*/

export interface Konyv {
  isbn: string;
  cim: string;
  db: number;
  felvitelDatum: Date;
  keszleten: boolean;
}