let shareQuote = '';
const TWEET_URL = `https://twitter.com/intent/tweet`;
const VIA = 'userName'; 
const getRandom = list => list[Math.floor(Math.random() * list.length)];

let imgBank = [
  'https://picsum.photos/600/900/?random',
  'https://picsum.photos/g/600/900/?random',
  'https://picsum.photos/600/900/?gravity=east',
  'https://picsum.photos/g/600/900/?gravity=east',
  'https://picsum.photos/600/900/?gravity=west',
  'https://picsum.photos/g/600/900/?gravity=west',
  'https://picsum.photos/600/900/?gravity=south',
  'https://picsum.photos/g/600/900/?gravity=south',
  'https://picsum.photos/600/900/?gravity=north',
  'https://picsum.photos/g/600/900/?gravity=north',
  'https://picsum.photos/600/900/?blur',
  'https://picsum.photos/g/600/900/?blur'
];



function randomQuote() {
  $.ajax({
      url: 'https://api.forismatic.com/api/1.0/?',
      dataType: 'jsonp',
      data: 'method=getQuote&format=jsonp&lang=en&jsonp=?',
      success: function( response ) {
        $('#genDisplay').html('<p id="genDisplay" class="lead text-center">' +
          response.quoteText + '<br/>&dash; ' + response.quoteAuthor + ' &dash;</p>');
      shareQuote = response.quoteText + '-' + response.quoteAuthor;
    }
  })
}

$(function() {
  randomQuote();
});

$("#quote").click(function(){
  randomQuote();
});


function getImg(url, el) {
  el.src = getRandom(url);
}

function tweetQuote() {
  const text = $genDisplayEl.value
  window.open(`${TWEET_URL}?text;hashtags=${shareQuote};via${VIA}`, '', 'width=500,height=300');
}

const $genDisplayEl = document.getElementById('genDisplay');
const $quoteEl = document.getElementById('quote');
const $currentEl = document.getElementById('current');
const $tweetEl = document.getElementById('tweet');


$tweetEl.addEventListener('click', tweetQuote);

$quoteEl.addEventListener('click', getImg.bind(this, imgBank, $currentEl));
