// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


var button = document.getElementById('mybutton');
button.addEventListener('click',
function(){

 alerts();
 interval();
})

//Function alerts()
function alerts(){
  numMax = 100;
  numMin = 1;
  randomArr = [];
  for (var i = 0; i < 5; i++) {
    var numRandom = (Math.floor(Math.random() * numMax + numMin));
    if (!randomArr.includes(numRandom)){
      randomArr.push(numRandom);
    }
  }
  console.log('array:', randomArr);
  alert(randomArr);
}
// alerts();

//Function timer 30 secondi
var time;
var clock;
function tick(){

  document.getElementById('title').innerHTML = time++;
  if(time > 2){
    clearInterval(clock);
    prompts();
  }
  // console.log('tick');
}

function interval(){
  time = 1;           //function
  clock = setInterval(   tick,         1000);
}
// interval();


// Function prompt
function prompts(){
  var count = 0;
  var promptArr = [];
  for (var j = 0; j < 5; j++) {
    var promptNum = parseInt(prompt('Inserisci i cinque numeri che hai visto precendentemente, uno alla volta: '));
    if (randomArr.includes(promptNum)) {
      promptArr.push(promptNum);
      count++;
    }

  }
  var howMany = document.getElementById('quantinumeri');
  howMany.innerHTML = 'Su 5 numeri mostrati, hai indovinato ' + count + ' numeri';
  if(promptArr != ''){
    var numGuessed = document.getElementById('numerindovinati');
    numGuessed.innerHTML = 'I numeri indovinati sono i seguenti: ' + promptArr;
  }
  // console.log('I numeri indovinati sono i seguenti: ', promptArr, 'Numeri indovinati: ',count );

}
