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

let tot = 0;

for (let i = 0; i < 10; i++) {

    let userNumber = parseInt(prompt('dammi un numero'));

    tot = tot + userNumber;
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

let userNumber = prompt('inserisci un numero a quattro cifre');

let numbers = 0

let code = false;

if (userNumber >= 1000 && userNumber < 10000) {

    for (let i = 0; i < userNumber.length; i++)
    numbers += parseInt(userNumber[i])
} else {
    alert('insert a correct number')
}

console.log(numbers)

*/



/* blocco 2 */



/* 

Snack 1.9

calcola la somma e la media dei primi dieci numeri sia con il for che con il while

// ciclo for

let tot = 0

for (let number = 1; number <= 10; number++) {
    tot += number;
}

console.log(tot);
console.log(tot / 10);

// ciclo while

let tot = 0;
let number = 1; 

while (number <= 10) {
    tot += number;
    number++;
}

console.log(tot);
console.log(tot / 10);

*/





/*

Snack 2.1


Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.


// ciclo for

let result = document.querySelector('.result');

let tot = 0;

for (let i = 0; i < 5; i++) {

    let userNumber = parseInt(prompt('inserisci un numero'))
    tot += userNumber;

}

result.innerHTML = tot;


// ciclo while 


let result = document.querySelector('.result');

let tot = 0;

let number = 1

while (number <= 5) {
    let userNumber = parseInt(prompt('inserisci un numero'))
    tot += userNumber;
    number++
}

result.innerHTML = tot;

*/





/*

Snack 2.2

Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo


let result = document.querySelector('.result');


let userNumber = parseInt(prompt('inserisci un numero'));

if (userNumber % 2 == 0) {
    result.innerHTML = userNumber;
} else {
    result.innerHTML = userNumber + 1;

}

*/




/*

Snack 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati



const listName = ['luca', 'giacomo', 'alessandro', 'edoardo', 'filiberto'];
const listSurname = ['lo bianco', 'romeo', 'crivello', 'crapanzano', 'rossi'];

const fakeList = []

while (fakeList.length < 3) {
    let random1 = Math.floor(Math.random() * 5);
    let random2 = Math.floor(Math.random() * 5);

    if (!fakeList.includes(listName[random1] + ' ' + listSurname[random2])) {
        fakeList.push(listName[random1] + ' ' + listSurname[random2])
    } 
}

console.log(fakeList)

*/









    














// console.log()



