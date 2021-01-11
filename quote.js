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
         'to dance every evening 💃'

         
  ]


  let partoneQuote = [
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

function randomInt(length){
	randNumber = Math.floor(Math.random() * (length));
	return randNumber;
};

// exapmle for me
result = begginingQuote[randomInt(begginingQuote.length)] +" " + middleQuote[randomInt(middleQuote.length)] + " " + endQuote[randomInt(endQuote.length)];
document.getElementById("quote3").innerHTML = result;


function generateQuote() {
    let numOfQuotes = document.getElementById("numOfQuotes1").value;
    if (numOfQuotes > 5) {
      numOfQuotes = 5;
      } else if (numOfQuotes <= 0) {
      numOfQuotes = 1;
      };
     let result = '';
     
        for (let i = 0; i < numOfQuotes; i++) {	
                     let oneQuote = begginingQuote[randomInt(begginingQuote.length)] +" " + middleQuote[randomInt(middleQuote.length)] + " " + endQuote[randomInt(endQuote.length)];; 
        result += "<p>'" + oneQuote + "'</p>";	
        };	
    	
     document.getElementById("quote").innerHTML = result;
};


function generateQuote2() {
  let numOfQuotes2 = document.getElementById("numOfQuotes2").value;
  if (numOfQuotes2 > 3) {
    numOfQuotes2 = 3;
    } else if (numOfQuotes2 <= 0) {
    numOfQuotes2 = 1;
    };
   let result2 = '';
   let chbox = document.getElementById('rusTransl');
   if (chbox.checked) {	


      for (let i = 0; i < numOfQuotes2; i++) {	
        let randNumber = randomInt(partoneQuote[0].length);			
        let oneQuote2 = partoneQuote[0][randNumber] +"' "+ partoneQuote[1][randNumber] ;
         result2 += "<p>" + oneQuote2 + "</p>";	
      };	
      document.getElementById("quote2").innerHTML = result2;
    } else { 
      for (let i = 0; i < numOfQuotes2; i++) {	
        let randNumber = randomInt(partoneQuote[0].length);			
        let oneQuote2 = partoneQuote[0][randNumber]  ;
         result2 += "<p>" + oneQuote2 + "</p>";	
      };	
      document.getElementById("quote2").innerHTML = result2;

    }
};


     

