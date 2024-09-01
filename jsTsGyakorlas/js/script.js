/*
- Keszits fuggvenyt, ami:
    - Egy parameterul kapott szam tombbol megadja a legnagyobb szam negyzetet
    - Ket parameterul kapott szammal dolgozik (a, b)
        - Keszits egy tombot, amibe a-szor rakod bele a b szamot
        - Ezt adja vissza a fuggveny

- A fuggvenyeket teszteld console-ra kiirassal, tetszoleges parameterekkel
*/

function aszorB(a, b){
    var tomb = [];

    for(var i = 0; i < a; i++){
        tomb.push(b);
    }

    return tomb;
}

console.log(aszorB(5, 3));

function legnagyobbNegyzet(szamok){
    var max = szamok[0];

    for(var i = 1; i < szamok.length; i++){
        if(szamok[i] > max){
            max = szamok[i];
        }
    }

    return max * max;
}

console.log(legnagyobbNegyzet([5, 12, 3]));

/*
- Keszits fuggvenyt, ami:
    - Ket parameterul kapott szammal dolgozik (ah, fh)
        - Add vissza tombkent az ah es a fh kozti szamokat csokkeno sorrendben 
            - Ah es az fh is legyen a tombben       
    - Egy parameterul kapott szoveg tombot szetvalogat
        - Valogassa szet a paros, valamint a paratlan karakterhosszusagu szovegeket

- A fuggvenyeket teszteld console-ra kiirassal, tetszoleges parameterekkel
*/

function szetvalogatas(szovegek){
    var parosak = [];
    var paratlanok = [];

    for(var i = 0; i < szovegek.length; i++){
        if(szovegek[i].length % 2 == 0){
            parosak.push(szovegek[i]);
        }
        else{
            paratlanok.push(szovegek[i]);
        }
    }

    return [parosak, paratlanok];
}

console.log(szetvalogatas(["alma", "korte", "banan", "aaaa", "aa", "aaa"]));

function ahfh(ah, fh){
    var tomb = [];

    if(ah > fh){
        var csere = ah;
        ah = fh;
        fh = csere;
    }

    for(var i = fh; i >= ah; i--){
        tomb.push(i);
    }

    return tomb;
}

console.log(ahfh(5, 10));
console.log(ahfh(10, 5));