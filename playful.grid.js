
//elk nieuw woord moet een hoofdletter, niet de eerste
//

//stap 1: selecteren van element voor begin interactie
//  let showMoreButton = document.querySelector('.show-more');
let gridButton = document.querySelector('.grid-selector-button')

// gridButton kies je zelf
// document.querySelector selecteert wat er tussen haakjes staat
// .show-more is je class in CSS die actief gaat worden 


//stap 2: koppelen van een event wanneer de gebruiker ergens op klikt
//  showMoreButton.addEventListener('click', function()){
//  alert('Het werkt!')}
gridButton.addEventListener('click', function() {
alert('het werkt!')

//gridButton roept de variabele op die we in stap 1 hebben gemaakt
//.addEventListener is het item wat 'luistert' voor als er een event gebeurt.
//addEventListener is gekoppeld aan 'click' wat dus betekent dat hij geactiveerd wordt bij een klik van de gebruiker
// de alert kan je gebruiken om te testen of je code werkt

//stap 3: feedback geven aan de gebruiker door iets op de pagina te veranderen, in mijn geval een filterlijst
// document.querySelector('h1').classList.toggle('highlighted');
document.querySelector('.grid-selector').classList.toggle('grid-selector-visible')
} )
// document.querySelector selecteert wat er tussen de haakjes staat
// classList.toggle selecteert de class in CSS die je al klaar hebt staan maar nog niet geactiveert is.