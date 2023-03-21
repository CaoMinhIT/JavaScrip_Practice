// array
let games = [
    'Genshin Impact',
    'Honkai Impact',
    ,// empty item
    'Lien Minh',
    'Tho 6 mau'
];
console.log(games[4]);

// long mess
let message = "Hello \
Tho 7 mau \
duoc ung ho\
"
console.log(message);

// while
let i = 0;
while (i < 3) {
    i++;
    console.log(`hello: ${i}`);

}

//if-else
let mark = 10;
if (mark >= 0 && mark < 4.5) {
    console.log('Bad');
} else if (mark >= 4.5 && mark < 8) {
    console.log("Normal");
} else if (mark >= 8 && mark <= 10) {
    console.log("Good");
} else {
    console.log("Mark is undifind")
}

//loop using for 

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(`i = ${i}`);
}

// Define an array 
// get code from(array)
for (let i = 0; i < games.length; i++) {
    console.log(games[i]);
}

//forEach
games.forEach(function (game) { // Ứng với mỗi trò chơi 
    console.log(games)
})













