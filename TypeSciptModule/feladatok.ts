function Rng(alsoHatar:number, felsoHatar:number):number{
    return Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
}

function TombGenerator(alsoHatar:number, felsoHatar:number, meret:number):number[] {
    var generaltTomb = [];
    for (let i = 0; i < meret; i++) {
        var ujSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(ujSzam);
    }
    return generaltTomb;
}

function Duplazo(vizsgaltTomb:number[]):number[]{
    let duplazott = [];
    for(let i=0; i<vizsgaltTomb.length; i++){
        duplazott.push(vizsgaltTomb[i]*2);
    }
    return duplazott;
}

function PrimekSzama(vizsgaltTomb:number[]):number{
    let primek=[];
    for(let i=0; i<vizsgaltTomb.length; i++){
        if(vizsgaltTomb[i]===2){
            primek.push(vizsgaltTomb[i]);
        }else{
          for(var oszto = 2; oszto < vizsgaltTomb[i]; oszto++)
          {
            if(vizsgaltTomb[i] % oszto === 0)
            {
                console.log('A szám nem prim.')
            }
          }
          primek.push(vizsgaltTomb[i]);
        }
    }
    let eredmeny = primek.length;
    return eredmeny;
}
