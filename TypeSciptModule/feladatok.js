function Rng(alsoHatar, felsoHatar) {
    return Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
}
function TombGenerator(alsoHatar, felsoHatar, meret) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        var ujSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(ujSzam);
    }
    return generaltTomb;
}
function Duplazo(vizsgaltTomb) {
    var duplazott = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        duplazott.push(vizsgaltTomb[i] * 2);
    }
    return duplazott;
}
function PrimekSzama(vizsgaltTomb) {
    var primek = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] === 2) {
            primek.push(vizsgaltTomb[i]);
        }
        else {
            for (var oszto = 2; oszto < vizsgaltTomb[i]; oszto++) {
                if (vizsgaltTomb[i] % oszto === 0) {
                    console.log('A szám nem prim.');
                }
            }
            primek.push(vizsgaltTomb[i]);
        }
    }
    var eredmeny = primek.length;
    return eredmeny;
}
