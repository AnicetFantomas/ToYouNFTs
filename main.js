const menuBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.close-button');
const menuBar = document.querySelector('.menu-bar');
const getBody = document.querySelector('body');

menuBar.style.display = 'none';

menuBtn.addEventListener('click', () => {
  menuBar.style.display = 'block';
  getBody.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  menuBar.style.display = 'none';
  getBody.style.overflow = 'scroll';
});

// ------------------ Articles --------------------

const data = [
  {
    Image: './images/anicet.jpeg',
    Name: 'Anicet Shemeki',
    Profession: 'A student in software development at microverse',
    Description: "Anicet is one of those who made this cryptography word become reality. Proudly he said that he'd never been excited before.",
  },

  {
    Image: './images/Dwight.jpg',
    Name: 'Dwight Howard',
    Profession: 'One of the best NBA players',
    Description: 'One of the obvious benefits of buying art is it lets you financially support artists you like, and that’s true with NFTs',
  },

  {
    Image: './images/Lebron.jpg',
    Name: 'Lebron James',
    Profession: 'The greatest player ever of NBA',
    Description: 'Buying an NFT also usually gets you some basic usage rights, like being able to post the image online or set it as your profile picture.',
  },

  {
    Image: './images/Luca.jpeg',
    Name: 'Luka Doncic',
    Profession: 'A NBA champion, considered like the pillard of the Marverics of Dallas',
    Description: '(which are way trendier than, like, Telegram stickers).',
  },

  {
    Image: './images/Weeknd.jpg',
    Name: 'The Weeknd',
    Profession: 'Unique piece of music, The Weeknd...',
    Description: 'First off: I’m proud of you. Way to go. You might be interested in NFTs because it gives you a way to sell work that there otherwise might not be much of a market for.',
  },

  {
    Image: './images/adele.webp',
    Name: 'Adele',
    Profession: 'one of best female singers',
    Description: 'Whoever got that Monet can actually appreciate it as a physical object. With digital art, a copy is literally as good as the original.',
  },
];

const articles = document.querySelector('.collabo-container');

data.forEach((article) => {
  articles.innerHTML += `<div class="collabos">
    <div class="collabo-img"><img src="${article.Image}" class="article-img" alt="This is Anicet at work"></div>
    <div class="collabo-description">
        <div class="collabo-name">${article.Name}</div>
        <div class="description">${article.Profession}</div>
        <div class="testemony">${article.Description}</div>
    </div>
    </div>`;
});

const seeMoreBtn = document.querySelector('.see-more');
const showLessBtn = document.querySelector('.see-less');
const colloborators = document.querySelectorAll('.collabos');
let state = true;

seeMoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (state) {
    colloborators.forEach((item) => {
      item.classList.add('showAll');
      showLessBtn.style.display = 'block';
      seeMoreBtn.style.display = 'none';
    });
    state = false;
  }
});

showLessBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!state) {
    colloborators.forEach((item) => {
      item.classList.remove('showAll');
      showLessBtn.style.display = 'none';
      seeMoreBtn.style.display = 'block';
    });
    state = true;
  }
});
