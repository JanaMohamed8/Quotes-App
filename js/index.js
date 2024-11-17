

var quotes=[
  {quote:"“Be yourself; everyone else is already taken.”",author:"― Oscar Wilde"},
  {quote:"“So many books, so little time.”",author:"― Frank Zappa"},
  {quote:"“A room without books is like a body without a soul.”",author:"― Marcus Tullius Cicero"},
  {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",author:"― Bernard M. Baruch"},
  {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",author:"― Dr. Seuss"},
  {quote:"“You only live once, but if you do it right, once is enough.”",author:"― Mae West"},
  {quote:"“Be the change that you wish to see in the world.”",author:"― Mahatma Gandhi"},
  {quote:"“In three words I can sum up everything I've learned about life: it goes on.”",author:"― Robert Frost"},
  {quote:"“If you tell the truth, you don't have to remember anything.”",author:"― Mark Twain"},
  {quote:"“A friend is someone who knows all about you and still loves you.”",author:"― Elbert Hubbard"},
  {quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",author:"― Oscar Wilde"},
  {quote:"“Always forgive your enemies; nothing annoys them so much.”",author:"― Oscar Wilde"},
  {quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",author:"― Mahatma Gandhi"},
  {quote:"“We accept the love we think we deserve.”",author:"― Stephen Chbosky"},
  {quote:"“Without music, life would be a mistake.“",author:"― Friedrich Nietzsche"},
  {quote:"“It is better to be hated for what you are than to be loved for what you are not.“",author:"― Andre Gide, Autumn Leaves"},
  {quote:"“It is our choices, Harry, that show what we truly are, far more than our abilities.”",author:"― J.K. Rowling, Harry Potter and the Chamber of Secrets"},
  {quote:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",author:"― Mark Twain"},
  {quote:"“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",author:"― John Green, The Fault in Our Stars"},
  {quote:"“The fool doth think he is wise, but the wise man knows himself to be a fool.”",author:"― William Shakespeare, As You Like It"},
  {quote:"“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”",author:"― Maurice Switzer, Mrs. Goose, Her Book"},
  {quote:"“Life is what happens to us while we are making other plans.”",author:"― Allen Saunders"},
  {quote:"“I have not failed. I've just found 10,000 ways that won't work.”",author:"― Thomas A. Edison"},
  {quote:"“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”",author:"― Friedrich Nietzsche"},
  {quote:"“The man who does not read has no advantage over the man who cannot read.”",author:"― Mark Twain"},
  {quote:"“A woman is like a tea bag; you never know how strong it is until it's in hot water.”",author:"― Eleanor Roosevelt"},
  {quote:"“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”",author:"― Dr. Seuss"},
  {quote:"“A day without sunshine is like, you know, night.”",author:"― Steve Martin"},
  {quote:"“Never put off till tomorrow what may be done day after tomorrow just as well.”",author:"― Mark Twain"},
  {quote:"“The reason I talk to myself is because I’m the only one whose answers I accept.”",author:"― George Carlin"},
  {quote:"“There is nothing to writing. All you do is sit down at a typewriter and bleed.”",author:"― Ernest Hemingway"},
  {quote:"“You don’t forget the face of the person who was your last hope.”",author:"― Suzanne Collins, The Hunger Games"},
  {quote:"“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.”",author:"― John Lennon"},
  {quote:"“I am free of all prejudice. I hate everyone equally. ”",author:"― W.C. Fields"},
  {quote:"“Knowing yourself is the beginning of all wisdom.”",author:"― Aristotle"},
  {quote:"“It's the possibility of having a dream come true that makes life interesting.”",author:"― Paulo Coelho, The Alchemist"},
  {quote:"“Only the very weak-minded refuse to be influenced by literature and poetry.”",author:"― Cassandra Clare, Clockwork Angel"},
  {quote:"“Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.”",author:"― Nicholas Sparks, At First Sight"},
  {quote:"“Perhaps one did not want to be loved so much as to be understood.”",author:"― George Orwell, 1984"},
  {quote:"“Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.”",author:"― William Shakespeare, Twelfth Night"},
  {quote:"“The only true wisdom is in knowing you know nothing.”",author:"― Socrates"},
  {quote:"“Happiness in intelligent people is the rarest thing I know.”",author:"― Ernest Hemingway, The Garden of Eden"},
  {quote:"“A day without laughter is a day wasted.”",author:"― Nicolas Chamfort"},
  {quote:"“You can never be overdressed or overeducated.”",author:"― Oscar Wilde"},
  {quote:"“A person's a person, no matter how small.”",author:"― Dr. Seuss, Horton Hears a Who!"},
  {quote:"“I became insane, with long intervals of horrible sanity.”",author:"― Edgar Allan Poe"},
  {quote:"“We love the things we love for what they are.”",author:"― Robert Frost"}
]



var previousNum=0;

function getQuotes(){
    
    var QuouteNum=Math.floor(Math.random()*quotes.length);
    if(previousNum==QuouteNum)
    {
        while(previousNum==QuouteNum){
            QuouteNum=Math.floor(Math.random()*quotes.length);
        }
    }
    previousNum=QuouteNum;
    
    document.getElementById("quote").innerHTML=quotes[QuouteNum].quote;
    document.getElementById("author").innerHTML=quotes[QuouteNum].author;
}



























