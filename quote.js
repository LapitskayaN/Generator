// arrive for funny generator 
let begginingQuote = [
    'Nazar',
    'Tatsiana',
    'Aleksey',
    'Anastasia',
    'Vadim',
    'Alexandr',
    'Artur',
    'Irina',
    'Diana',
    'Arseny',
    'Natalia'
    ]

let middleQuote = [
    'likes',
    "doesnt like"
            ]

let endQuote = [
  'to get up early🌖',
  'to eat fish🐟 with milk 🍶',
  'talk to a parrot🦜',
  'to sleep till afternoon😴',
  'to read books📖',
  'to show tongue.👅',
  ' to paint your nails  💅',
  'to eat snow ⛄', 
  'fly a UFO🛸 ' ,
  'to live in Africa🇿🇦',
  'to speek a lot 👄',
  'to dance every evening 💃',
  'to travel to the Mars 🚀 ',
  'to drive the tractor 🚜',
  'to drink coctails🍹 with absent',
  'to work in cirkus 🎪',
  ' to have best friend pig🐖',
  ' to wear high heels👠'


         
  ]

  // arrive for funny generator for FUTURE
let begginingQuote2 = [
  'Nazar',
  'Tatsiana',
  'Aleksey',
  'Anastasia',
  'Vadim',
  'Alexandr',
  'Artur',
  'Irina',
  'Diana',
  'Arseny',
  'Natalia'
  ]

let middleQuote2 = [
  'will',
  "will not"
          ]

let endQuote2 = [
  ' get up early🌖',
  'eat fish🐟 with milk 🍶',
  'talk to a parrot🦜',
  'sleep till afternoon😴',
  ' read books📖',
  'show tongue.👅',
  ' paint own nails  💅',
  'eat snow ⛄', 
  'fly a UFO🛸 ' ,
  ' live in Africa🇿🇦',
  ' speek a lot 👄',
  'dance every evening 💃',
  ' travel to the Mars 🚀 ',
  'drive the tractor 🚜',
  ' drink coctails🍹 with absent',
  ' work in cirkus 🎪',
  ' have best friend pig🐖',
  ' wear high heels👠'

       
]

// arrive for smart generator
  let smartQuote = [
   [ 'Don’t cross the bridge until you come to it.',
    'Don’t make a mountain out of an anthill.',
    'The cat is out of the bag. / Truth will out.',
    'Put your best foot forward.',
    'It’s better to be safe than sorry.',
    'Don’t bite off more than you can chew.',
    'Still waters run deep.',
    'Curiosity killed the cat.',
    '   Practice makes perfect.',
    'No pain, no gain.',
    'East or West, home is best.',
    'A sound mind in a sound body.',
    ' In for a penny, in for a pound.',
    'Many a true word is spoken in jest.',
    'All is well that ends well.',
    'When in Rome, do as the Romans do.',
    'A friend in need is a friend indeed. ']
, [
        'Не говори «гоп», пока не перепрыгнешь.',
         'Не делай из мухи слона.',
         'Все тайное всегда становится явным.',
         'Пытайся произвести наилучшее впечатление (предстать в наилучшем свете).',
         'Береженого Бог бережет.',
         'Не зарься на кусок, который не проглотишь. / Не бери на себя слишком много.',
         'В тихом омуте черти водятся.',
         'Любопытной Варваре на базаре нос оторвали.',
        ' Дело мастера боится. ',
        ' Без труда не вынешь и рыбку из пруда.',
        'В гостях хорошо, а дома лучше.',
        ' В здоровом теле здоровый дух.',
        '  Взялся за гуж, не говори, что не дюж.',
        'В каждой шутке есть доля правды.',
        'Все хорошо, что хорошо кончается.',
        'В чужой монастырь со своим уставом не ходят.',
        '  Друг познается в беде.'

  ]
  ]

  //function for random number from arrive.length
function randomInt(length){
	randNumber = Math.floor(Math.random() * (length));
	return randNumber;
};

// exapmle for me. dont used
//result = begginingQuote[randomInt(begginingQuote.length)] +" " + middleQuote[randomInt(middleQuote.length)] + " " + endQuote[randomInt(endQuote.length)];
//document.getElementById("quote3").innerHTML = result;


// funny generator:
function generateQuote() {
    let numOfQuotes = document.getElementById("numOfQuotes1").value;
    if (numOfQuotes > 5) {
      numOfQuotes = 5;
      } else if (numOfQuotes <= 0) {
      numOfQuotes = 1;
      };
     let result = '';
     let select = document.getElementById('time').value;
     switch (select) {
      case 'Present': {
        for (let i = 0; i < numOfQuotes; i++) {	
          let oneQuote = begginingQuote[randomInt(begginingQuote.length)] +" " + middleQuote[randomInt(middleQuote.length)] + " " + endQuote[randomInt(endQuote.length)];; 
          result += "<p>'" + oneQuote + "'</p>" ;	
          };
          document.getElementById("quote").innerHTML = result;
        }
        break;
        case 'Future': {
          for (let i = 0; i < numOfQuotes; i++) {	
            let oneQuote = begginingQuote2[randomInt(begginingQuote.length)] +" " + middleQuote2[randomInt(middleQuote.length)] + " " + endQuote2[randomInt(endQuote.length)];; 
            result += "<p>'" + oneQuote + "'</p>" ;	
            };
            document.getElementById("quote").innerHTML = result;
          }
          break;
        default: 
        document.getElementById("quote").innerHTML = "Sorry,you didn't choose Time" ;
      }

};

// Smart generator:
function generateQuote2() {
 
  let numOfQuotes2 = document.getElementById("numOfQuotes2").value;
  if (numOfQuotes2 > 3) {
    numOfQuotes2 = 3;
    } else if (numOfQuotes2 <= 0) {
    numOfQuotes2 = 1;
    };
   let result2 = '';
   
   // add checkbox with russian translate
   let chbox = document.getElementById('rusTransl');
   if (chbox.checked) {	
      for (let i = 0; i < numOfQuotes2; i++) {	
        let randNumber = randomInt(smartQuote[0].length);			
        let oneQuote2 = smartQuote[0][randNumber] +"' "+ smartQuote[1][randNumber] ;
         result2 += "<p>" + oneQuote2 + "</p>";	
      };	

      document.getElementById("quote2").innerHTML = result2;
    } else { 
      for (let i = 0; i < numOfQuotes2; i++) {	
        let randNumber = randomInt(smartQuote[0].length);			
        let oneQuote2 = smartQuote[0][randNumber]  ;
         result2 += "<p>" + oneQuote2 + "</p>";	
      };	
      document.getElementById("quote2").innerHTML = result2;
    }
};


     
