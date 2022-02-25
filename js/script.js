/*

jsanck1

L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

let result = document.querySelector('.result');

let num1 = parseInt(prompt('dammi un numero'));
let num2 = parseInt(prompt('dammi un altro numero'));

if (num1 > num2) {
    result.innerHTML = num1
} else if (num2 > num1) {
    result.innerHTML = num2
} else {
    result.innerHTML = num1 + ' é uguale ' + num2
}

*/





/* 

jsanck2 

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.


let word1 = prompt('scrivi prima parola');
let word2 = prompt('scrivi seconda parola');

if (word1.length < word2.length) {
    alert(word1 + ' ' + word2);
} else if (word2.length < word1.length) {
    alert(word2 + ' ' + word1);
} else {
    alert('prova di nuovo');
}

*/





/*

jsanck3 

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
(provatelo anche senza array)

let result = document.querySelector('.result');

let totNumber = [];
let tot = 0;

for (let i = 0; i < 10; i++) {

    let userNumber = parseInt(prompt('dammi un numero'));

    totNumber.push(userNumber);
    tot = tot + totNumber[i];
}

result.innerHTML = 'il rilustato é' + ' ' + tot;

*/




/*

Snack 4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.



let result = document.querySelector('.result');

let invitationList = ['luca', 'alessandro', 'anna', 'filippo', 'giovanni'];

let code = false;

let gustName = prompt('inserisci il tuo nome');


for (let i = 0; i < invitationList.length; i++) {

    if (gustName.toLowerCase() == invitationList[i].toLowerCase()) {
        code = true;
    }
}

if (code !== false) {
    result.innerHTML = 'parteciperai alla festa';
} else {
    result.innerHTML = 'non parteciperai alla festa';
}

*/




/*

Snack 5

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.



let arr = []

for (let i = 0; i < 6; i++) {

    let userNumber = parseInt(prompt('inserisci un numero'))

    if (userNumber % 2 == 1) {
        arr.push(userNumber);
    }

}

console.log(arr);

*/




/*

Snack 6

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.



let result = document.querySelector('.result');

let userNumber = parseInt(prompt('inserisci un numero a quattro cifre'));

let numbers = []

let code = false;

for (let i = 1000; i < 10000; i++) {

    if (userNumber == i) {
        numbers.push(userNumber);
        code = true
    }
}

let calc = []

numbers = numbers.toString();

let len = numbers.length;

for (let i = 0; i < len; i++) {
    calc.push(numbers.charAt(i));
}

let output = parseInt(calc[0]) + parseInt(calc[1]) + parseInt(calc[2]) + parseInt(calc[3]);



if (code !== false) {
    result.innerHTML = output;
} else {
    result.innerHTML = 'digit a correct value';

}


*/













