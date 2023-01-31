const prezzoPerKm = 0.21;
let firstName = prompt('come ti chiami?');
let lastName = prompt('cognome?');
let eta = prompt('Quanti anni hai?');
let percorso = prompt('Quanti km vuoi fare?');
let prezzoStandard = prezzoPerKm * percorso;
let sconto20;
let sconto40;

const divKm = document.getElementById('km-viaggio');
divKm.innerHTML = (percorso + ' Km');

const divDati = document.getElementById('dati-pas');
divDati.innerHTML = (firstName + " " + lastName);

const divPreStan = document.getElementById('prezzo-standard')
prezzoStandard = prezzoStandard.toFixed(2)
divPreStan.innerHTML = (prezzoStandard);

const divSconto = document.getElementById('sconto');

const divPreFinale = document.getElementById('prezzo-finale');


if ( eta<18){
    sconto20 = prezzoStandard * 0.8;
    sconto20 = sconto20.toFixed(2);
    console.log ('sconto20: ' + sconto20);
    divSconto.innerHTML = ('20%');
    divPreFinale.innerHTML = (sconto20);


    
}else if (eta>=65){
    sconto40 = prezzoStandard * 0.6;
    sconto40 = sconto40.toFixed(2);
    console.log('sconto40: ' + sconto40);
    divSconto.innerHTML = ('40%');
    divPreFinale.innerHTML = (sconto40);


}else{
    console.log('prezzoStandard: ' + prezzoStandard);
    divSconto.innerHTML = ('0%');
    divPreFinale.innerHTML = (prezzoStandard);
}

