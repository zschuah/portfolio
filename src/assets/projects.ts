import angular from "./icons/angular.png";
import bootstrap from "./icons/bootstrap.png";
import daisyui from "./icons/daisyui.png";
import firebase from "./icons/firebase.png";
import framer from "./icons/framer.png";
import mui from "./icons/mui.png";
import react from "./icons/react.png";
import redux from "./icons/redux.png";
import styled from "./icons/styled.png";
import tailwind from "./icons/tailwind.png";
import vue from "./icons/vue.png";
import baitoto from "./images/baitoto.png";
import baitoto1 from "./images/baitoto1.png";
import csssiewdai from "./images/csssiewdai.png";
import csssiewdai1 from "./images/csssiewdai1.png";
import ignite from "./images/ignite.png";
import mccorgi from "./images/mccorgi.png";
import mccorgi1 from "./images/mccorgi1.png";
import mylorempicsum from "./images/mylorempicsum.png";
import officecocktail from "./images/officecocktail.png";
import officecocktail1 from "./images/officecocktail1.png";
import peepobitcoin from "./images/peepobitcoin.png";
import peepobitcoin1 from "./images/peepobitcoin1.png";
import peepocharts from "./images/peepocharts.png";
import peepocharts1 from "./images/peepocharts1.png";
import peepocountdown from "./images/peepocountdown.png";
import peepoeats from "./images/peepoeats.png";
import peepoeats1 from "./images/peepoeats1.png";
import peepomoney from "./images/peepomoney.png";
import peeposuite from "./images/peeposuite.png";
import photototo from "./images/photototo.png";
import photototo1 from "./images/photototo1.png";

export type Project = (typeof PROJECT_LIST)[number];
const PROJECT_LIST = [
  {
    id: "4T8KWW",
    name: "Office Cocktail",
    frame: "react",
    desc: "A cocktail lookup website done with employees in an Office. Spin up random cocktails here to include in your bar!",
    year: 2023,
    url: "https://office-cocktail.netlify.app/",
    descFull:
      "A website to lookup popular cocktails and how to make them. For every cocktail, there are ingredients and a receipe included. You can also spin up random cocktails in order to get some insight on what to include in your bar. The employee concept here was inspired by characters from The Office, hence the name. Random employees can be added and each employee will have an attached Favourite drink to him or her. I wanted this to be an opportunity to include Redux Toolkit and Redux Toolkit Query in my project for state management. This was also a platform for me to practice DaisyUI, where I have included 4 DaisyUI Themes for the user to switch around. Synthwave and Cyberpunk are my favourites!",
    imgList: [officecocktail, officecocktail1],
    iconList: [
      { name: "React", img: react },
      { name: "Redux Toolkit", img: redux },
      { name: "Tailwind CSS", img: tailwind },
      { name: "DaisyUI", img: daisyui },
    ],
    github: "https://github.com/zschuah/office-cocktail",
  },
  {
    id: "HPRHW8",
    name: "My Lorem Picsum",
    frame: "react",
    desc: "My first Tailwind app! You can lookup specific images using Pexels and random images using Lorem Picsum here.",
    year: 2023,
    url: "https://zschuah-tailwind.netlify.app/lorem-picsum",
    descFull:
      "This was my first foray into Tailwind CSS. I created an app that allows the user to lookup specific images using the Pexels API or to spin up random images using the Lorem Picsum API. At that point in time, there were many competing CSS libraries. Amongst them was Tailwind, which uses Utility-First Fundamentals to organise CSS in projects. While most other libraries allow you to simply import components, Tailwind forces you to build them while providing helpful utility classes. My component-building skills and CSS styling speed improved greatly because of Tailwind. I also dipped my toes in DaisyUI for this project, which provided components that worked well with Tailwind's architecture.",
    imgList: [mylorempicsum],
    iconList: [
      { name: "React", img: react },
      { name: "Tailwind CSS", img: tailwind },
      { name: "DaisyUI", img: daisyui },
    ],
    github: "https://github.com/zschuah/zschuah-tailwind",
  },
  {
    id: "55CU55",
    name: "CSS Siewdai",
    frame: "react",
    desc: "A repository of styled elements using Material UI and Styled Components. The CSS stylesheets for the Buttons and Images are all displayed in code.",
    year: 2023,
    url: "https://css-siewdai.netlify.app/",
    descFull:
      "This was a long-term side project that I worked on while I was working at OCBC Bank as a frontend developer. Since Material UI was the library I had been using for work, I wanted to do something on my own using the same library, while learning various CSS tricks around Buttons and Images. My purpose was to develop a repositiory of elements where I can immediately access their styles and implement them in new projects when necessary. The foundation of this website was built from Material UI, but the elements themselves were coded using Styled Components.",
    imgList: [csssiewdai, csssiewdai1],
    iconList: [
      { name: "React", img: react },
      { name: "Material UI", img: mui },
      { name: "Styled Components", img: styled },
    ],
    github: "https://github.com/zschuah/css-siewdai",
  },
  {
    id: "4Y84M4",
    name: "PeepoSuite",
    frame: "react",
    desc: "My very first portfolio site, showcasing my apps from 2020 to 2022! Peepo the Frog was the main theme of the site.",
    year: 2022,
    url: "https://peeposuite.netlify.app/",
    descFull:
      "This was my very first portfolio website, done using React. To be honest, I've always wanted to come up with a project using React, but React just felt very unnatural to me, especially when I just got used to Vue. I LOVED using Vue, and there wasn't a reason for me to use React, until I learnt about Framer Motion. When I saw that animations could be done so easily, I knew I had to try it out. It is one of the few websites that I did without Bootstrap, and used React's Styled Components instead. I've also made this mobile responsive using React Responsive. On mobile devices, there will be no popup of details when clicked, but you will be brought to the site instead.",
    imgList: [peeposuite],
    iconList: [
      { name: "React", img: react },
      { name: "Framer Motion", img: framer },
      { name: "Styled Components", img: styled },
    ],
    github: "https://github.com/zschuah/peepo-suite",
  },
  {
    id: "E51T81",
    name: "Ignite",
    frame: "react",
    desc: "View upcoming, popular and new games here, provided by RAWG Video Games API. My first try into React!",
    year: 2021,
    url: "https://ignite-zschuah.netlify.app/",
    descFull:
      "This was one of the very first sites that I did using React. It uses the RAWG video games database API, and fetches Upcoming, Popular and New games. It also allows you to search for any game on any platform available, and provides a rating for each game. If you realise that it's very similar to PeepoSuite, you are absolutely right! Both sites use the same styling that I learnt from Dev Ed's React course. I think his React course is worth a look, even if you already know React. He goes through Framer Motion, Styled Components and Intersection Observer, which are things that can be added into your React project. Seriously, Framer Motion is REALLY amazing. If you are considering having animations in your project, consider using React with Framer Motion.",
    imgList: [ignite],
    iconList: [
      { name: "React", img: react },
      { name: "Framer Motion", img: framer },
      { name: "Styled Components", img: styled },
    ],
    github: "https://github.com/zschuah/ignite",
  },
  {
    id: "EW8UC5",
    name: "PeepoEats",
    frame: "angular",
    desc: "Food rating website using Angular and Firebase, based on chess Elo system and inspired by FaceMash.",
    year: 2020,
    url: "https://peepoeats.netlify.app/",
    descFull:
      "This was the first site that I published on my own using a framework. I had previously completed a Leave Calculator using only JavaScript and I wanted to try out something greater in scale. At that time, Angular was the only framework that I knew. Inspired by FaceMash made by Mark Zukerburg, I decided to come up with something similar, but this time, with local food. The algorithm used is based on the Chess Elo rating system, where the difference between the ratings of the winner and loser determines the total number of points gained or lost after a game. This was quite extensive, as I had a makeshift backend using Firebase, that keeps track of individual food ratings, as well as the total number of comparisons made.",
    imgList: [peepoeats, peepoeats1],
    iconList: [
      { name: "Angular", img: angular },
      { name: "Bootstrap", img: bootstrap },
      { name: "Firebase", img: firebase },
    ],
    github: "https://github.com/zschuah/peepo-eats",
  },
  {
    id: "8YTCRM",
    name: "PeepoEats Reset",
    frame: "angular",
    desc: "Same food rating website without backend, where ratings reset on page refresh.",
    year: 2020,
    url: "https://peepoeats-reset.netlify.app/",
    descFull:
      "Similar to PeepoEats, this can be used to rank food items. However, this was done without any backend. As such, when the page is refreshed, all food items will start at their original rating of 1200.",
    imgList: [peepoeats, peepoeats1],
    iconList: [
      { name: "Angular", img: angular },
      { name: "Bootstrap", img: bootstrap },
    ],
    github: "https://github.com/zschuah/peepo-eats/tree/reset",
  },
  {
    id: "1XHWEC",
    name: "Merry Christmas Corgi",
    frame: "vue",
    desc: "Website that fetches random Corgi images from Unsplash API. Image toggles between Christmas tree and random Corgi on request.",
    year: 2022,
    url: "https://merry-christmas-corgi.netlify.app/",
    descFull:
      "This was a simple site that I created, testing out the Unsplash API to fetch images of random Corgis. Every time the image flips to the Christmas tree, it will post a GET request to the API to fetch another Corgi image.",
    imgList: [mccorgi, mccorgi1],
    iconList: [
      { name: "Vue", img: vue },
      { name: "Bootstrap", img: bootstrap },
    ],
    github: "https://github.com/zschuah/merry-christmas-corgi",
  },
  {
    id: "MWRUD1",
    name: "Photo Toto",
    frame: "vue",
    desc: "A memory flashcard game with Wordle-like guess distribution, using Charts.css for charting.",
    year: 2022,
    url: "https://photo-toto.netlify.app/",
    descFull:
      "A website that I decided to make after some inspiration from typical memory flashcard games. Originally, this did not have a scoring system and it only had the feature to flip and unflip. After a while, I decided to replicate Wordle's Guess Distribution for this game as well. This was done using Charts.css, which provided an easy-to-implement system to put charts on your website, using classes just like Bootstrap.",
    imgList: [photototo, photototo1],
    iconList: [
      { name: "Vue", img: vue },
      { name: "Bootstrap", img: bootstrap },
    ],
    github: "https://github.com/zschuah/photo-toto",
  },
  {
    id: "XUM1T4",
    name: "BaiToto",
    frame: "vue",
    desc: "A website for my cousin's YouTube channel, BaiToto, with a game to find her puppy Toto, using CSS Card Tricks. Vue Router is included.",
    year: 2021,
    url: "https://baitoto.netlify.app/",
    descFull:
      "This was a website I made over the weekend for my cousin! My cousin has 2 puppies, Bailey and Toto, and I could never tell them apart. So I got inspired to make this 'Find Toto' game after learning some CSS card tricks online. Please visit her YouTube channel, BaiToto! She makes quality videos, and it's definitely worth subscribing! I also really wanted to practice using Vue with the CLI and Vue Router. Initially, I wanted to do this with React, but after having learnt both, Vue was simply the much more enjoyable choice to code in.",
    imgList: [baitoto, baitoto1],
    iconList: [
      { name: "Vue", img: vue },
      { name: "Bootstrap", img: bootstrap },
    ],
    github: "https://github.com/zschuah/baitoto",
  },
  {
    id: "X24CUC",
    name: "PeepoBitcoin",
    frame: "vue",
    desc: "Tracks Bitcoin returns locally without logging into your account. All you need is your purchase price and amount.",
    year: 2021,
    url: "https://peepobitcoin.netlify.app/",
    descFull:
      "PeepoBitcoin was created to track your total returns from Bitcoin without having to login to your Binance account. Simply enter how much money you have invested, how many Bitcoins you have bought, and click on 'Update.' Data will only be stored locally on your device. The next time you visit the site, you can immediately view how much gains/losses you have made on your Bitcoin purchase!",
    imgList: [peepobitcoin, peepobitcoin1],
    iconList: [
      { name: "Vue", img: vue },
      { name: "Bootstrap", img: bootstrap },
    ],
    github: "https://github.com/zschuah/peepo-bitcoin",
  },
  {
    id: "TKMEDX",
    name: "PeepoCountdown",
    frame: "vue",
    desc: "Simple countdown app originally made for a friend, inspired by the anticipation to his quitting date.",
    year: 2020,
    url: "https://peepocountdown.netlify.app/",
    descFull:
      "It's a countdown app! So this was kinda inspired when one of my friends told me that he was intending to quit his job on a certain date, and was looking forward to it. I just thought, oh! I could create a countdown app to that date!",
    imgList: [peepocountdown],
    iconList: [
      { name: "Vue", img: vue },
      { name: "Bootstrap", img: bootstrap },
    ],
    github: "https://github.com/zschuah/peepo-countdown",
  },
  {
    id: "P5HTWT",
    name: "PeepoMoney",
    frame: "vue",
    desc: "A money growth app relative to monthly savings, just to show how much is saved every second.",
    year: 2020,
    url: "https://peepomoney.netlify.app/",
    descFull:
      "Did this on a whim. An idea just popped into my head. What if I'm able to see my money grow every second based on my monthly savings? And so, I just decided to create this over the evening.",
    imgList: [peepomoney],
    iconList: [
      { name: "Vue", img: vue },
      { name: "Bootstrap", img: bootstrap },
    ],
    github: "https://github.com/zschuah/peepo-money",
  },
  {
    id: "ECUKTM",
    name: "PeepoCharts",
    frame: "vue",
    desc: " A fake stock chart generator using Vue and Google Charts, with adjustable price and volatility. My very first Vue app!",
    year: 2020,
    url: "https://peepocharts.netlify.app/",
    descFull:
      "My first site using Vue! This was a smaller scale website that I created to generate charts for fake stock data. I embarked on this to try out Vue, as well as Google Charts. You can adjust the Starting Price and the Volatility of the stock price, and watch its changes too.",
    imgList: [peepocharts, peepocharts1],
    iconList: [
      { name: "Vue", img: vue },
      { name: "Bootstrap", img: bootstrap },
    ],
    github: "https://github.com/zschuah/peepo-charts",
  },
];

export const getProjects = () => {
  return PROJECT_LIST;
};
