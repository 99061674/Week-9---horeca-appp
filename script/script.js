
var frisAmount = 0;
const frisPrice = 1.50;

var bierAmount = 0;
const bierPrice = 2.50;

var wijnAmount = 0;
const wijnPrice = 3.50;

var bBalAmount8 = 0;
const bBalPrice8 = 4.50;

var bBalAmount16 = 0;
const bBalPrice16 = 9.00;


function start(){
	this.text = prompt ('welke bestelling wilt u toevoegen? [bier, fris, wijn, snack], typ stop als u wilt stoppen');

	if (this.text.toLowerCase() == 'fris' || this.text.toLowerCase() == 'bier' || this.text.toLowerCase() == 'wijn'){
		drankjes();
	}

	else if (this.text.toLowerCase() == 'snack'){
		snacks();
	}

	else if (this.text.toLowerCase() == 'stop'){
		totaal();
	}

	else{
		alert ('U heeft iets verkeerd ingevuld. Probeer het opnieuw');
		start();
	}
}
start();



function drankjes(){
	var drank = parseInt(prompt('Hoeveel ' + this.text + ' wilt u toevoegen aan uw bestelling?'));
		if(isNaN(drank)){
			alert ('Gebuikt alstublieft cijfers');
			drankjes();
		}
		else{

			if(this.text.toLowerCase() == 'fris'){
				frisAmount += drank;
				start();
			}
			else if(this.text.toLowerCase() == 'bier'){
				bierAmount += drank;
				start();
			}
			else if(this.text.toLowerCase() == 'wijn'){
				wijnAmount += drank;
				start();
			}
		}
}


function snacks(){
	var snack = parseInt(prompt('Wat voor soort bitterbalschaal wilt u toevoegen aan uw bestelling? 8 of 16?'));
		if(isNaN(snack)){
			alert ('Gebruik alstublieft cijfers');
			snacks();
		}
		else if(snack == 8){
			var bBal8 = parseInt(prompt('Hoeveel bitterbalschalen van 8 stuks wilt u toevoegen?'));

				if(isNaN(bBal8)){
					alert ('Gebruik alstublieft cijfers');
					snacks();
				}
				else{
					bBalAmount8 += bBal8;
					start();
				}
		}
		else if(snack == 16){
			var	bBal16 =	parseInt(prompt('Hoeveel bitterbalschalen van 16 stuks wilt u toevoegen?'));

				if(isNaN(bBal16)){
					alert ('Gebruik alstublieft cijfers');
					snacks();
				}
				else{
					bBalAmount16 += bBal16;
					start();
				}
		}
		else{
			alert ('Dit staat niet op het menu probeer het alstublieft opnieuw')
			snacks();
		}
}


function totaal(){
	var totaalprijs = (frisAmount * frisPrice) + (bierAmount * bierPrice) + (wijnAmount * wijnPrice) + (bBalAmount8 * bBalPrice8) + (bBalAmount16 * bBalPrice16);

		if(frisAmount > 0) {
			document.write('U heeft ' + frisAmount + ' flesje(s) fris besteld' + '<br>' + 'een flesje fris kost &euro; ' + frisPrice + '<br>' + ' de totaalprijs voor fris is &euro; ' + frisAmount * frisPrice + '<br>' + '<br>');
		}
		if (bierAmount > 0) {
			document.write('U heeft ' + bierAmount + ' flesje(s) bier besteld' + '<br>' + 'een flesje bier kost &euro; ' + bierPrice + '<br>' + ' de totaalprijs voor bier is &euro; ' + bierAmount * bierPrice + '<br>' + '<br>');
		}
		if (wijnAmount > 0) {
			document.write('U heeft ' + wijnAmount + ' glas/glazen wijn besteld' + '<br>' + 'een glas wijn kost &euro; ' + wijnPrice + '<br>' + ' de totaalprijs voor wijn is &euro; ' + wijnAmount * wijnPrice + '<br>' + '<br>');
		}
		if (bBalAmount8 > 0) {
			document.write('U heeft ' + bBalAmount8 + ' bitterbalschaal(en) besteld' + '<br>' + 'een bitterbalschaal kost &euro; ' + bBalPrice8 + ' en bevat 8 bitterballen' + '<br>' + ' de totaalprijs voor de bitterbalschaal(en) is &euro; ' + bBalAmount8 * bBalPrice8 + '<br>' + '<br>');
		}
		if (bBalAmount16 > 0) {
			document.write('U heeft ' + bBalAmount16 + ' bitterbalschaal(en) besteld' + '<br>' + 'een bitterbalschaal kost &euro; ' + bBalPrice16 + ' en bevat 16 bitterballen' + '<br>' + ' de totaalprijs voor de bitterbalschaal(en) is &euro;' + bBalAmount16 * bBalPrice16 + '<br>' + '<br>');
		}
			document.write('<strong>Uw totaalprijs komt neer op &euro; ' + totaalprijs + '<strong>')
}

