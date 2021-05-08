//For studying methods page

const card1= document.querySelector('.card__inner');
const card2= document.querySelector('.card__inner2');

card1.addEventListener('click', function(){
    card1.classList.toggle('is-flipped');
});

card2.addEventListener('click', function(){
    card2.classList.toggle('is-flipped2');
});

//For home page`


function generateQuote(){
    let quote_array = [
        "Procrastination is the art of keeping up with yesterday. – Don Marquis",
        "Procrastination makes easy things hard, hard things harder. – Mason Cooley",
        "Procrastination is like a credit card: it’s a lot of fun until you get the bill. – Christopher Parker",
        "Procrastination is opportunity’s assassin. – Victor Kiam",
        "My biggest regret could be summed up in one word, and that’s procrastination. – Ron Cooper",
        "Procrastination is the thief of time. – Edward Young",
        "The secret to getting ahead is getting started.",
        "The expert in everything was once a beginner.",
        "The real man is one who always finds excuses for others, but never excuses himself. – Henry Ward Beecher",
        "It’s not the time to look for excuses. – Rafael Nadal",
        "If it’s important to you, you’ll find a way. If it’s not, you’ll find excuses.",
        "However difficult life may seem, there is always something you can do and succeed at. – Stephen Hawking",
        "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
        "Your positive action combined with positive thinking results in success. – Shiv Khera",
        "Good things come to people who wait, but better things come to those who go out and get them.",
        "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
        "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
        "Don’t wish it were easier; wish you were better. – Jim Rohn",
        "The secret of success is to do the common things uncommonly well. – John D. Rockefeller",
        "Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich",
        "There is no substitute for hard work. – Thomas Edison",
        "Self-belief and hard work will always earn you success. – Virat Kohli",
        "Through hard work, perseverance and a faith in God, you can live your dreams. – Ben Carson",
        "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
        "There are no traffic jams on the extra mile. – Zig Ziglar",
        "There are no shortcuts to any place worth going. – Beverly Sills",
        "If people only knew how hard I’ve worked to gain my mastery, it wouldn’t seem so wonderful at all. – Michelangelo",
        "I’ve failed over and over and over again in my life. And that is why I succeed. – Michael Jordan",
        "If you’re going through hell, keep going. – Winston Churchill",
        "Failure is the opportunity to begin again more intelligently. – Henry Ford",
        "You don’t drown by falling in the water; you drown by staying there. – Ed Cole",
        "By perseverance, the snail reached the ark. – Charles Spurgeon",
        "Follow your dreams, believe in yourself and don’t give up. – Rachel Corrie",
        "Don’t let what you cannot do interfere with what you can do. – John Wooden",
        "It always seems impossible until it’s done.",
        "Believe you can and you’re halfway there.",
        "The purpose of human life is to serve and to show compassion and the will to help others. – Albert Schweitzer",
        "Efforts and courage are not enough without purpose and direction. – John F. Kennedy",
        "Work gives you meaning and purpose and life is empty without it. – Stephen Hawking",
        "The whole purpose of education is to turn mirrors into windows. – Sydney J. Harris",
        "The purpose of our lives is to be happy. – Dalai Lama",
    ];

    let randomNum = Math.floor(Math.random()* 42);
    document.getElementById('section-desc-3-id').remove();

    let new_quote = document.createElement('p');
    new_quote.textContent = quote_array[randomNum];
    new_quote.className = "section-desc";
    new_quote.id = "section-desc-3-id";

    document.getElementById('card__face card__face--front3-id').append(new_quote);

    
 
}
