let bamse = {
    name: 'Bamse',
    animal: 'Brunbjörn',
    description: 'Världens starkaste björn',
    quote: 'Det är modigt att våga säga att man är rädd.'
};
console.log(bamse.quote);
bamse.quote = 'Man ska vara snäll mot dem som är stygga, för de behöver det mest, och då blir de kanske snällare.';
console.log(bamse.quote);
let skalman = {
    name: 'skalman', 
    animal: 'sköldpadda',
    description: 'världens smartaste sköldpadda',
    quote: 'först ska jag inte göranångontinga alls, sedan ska jag bara ta dagen som den kommer'
}; // fyll på
let friends = []; // tom array
friends.push(bamse); // lägg till vännerna med push() metoden
friends.push(skalman);
let vargen = {
    name: 'vargen', 
    animal: 'varg',
    description: 'världsmästare elakhet',
    quote: 'det är bara rättvist när jag får nåty för alla andra är egoister och tänker bara på sig själva'
}; 
let enemies = []; // tom array
enemies.push(vargen);
console.log(bamse[0]);


let number = parseInt( prompt('säg ett nummer mellan 0 och 1'));
console.log(friends[number]);

console.log(friends.length + enemies.length);