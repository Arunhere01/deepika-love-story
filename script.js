const nameInput = document.getElementById('nameInput');
const mainScreen = document.getElementById('mainScreen');
const questionScreen = document.getElementById('questionScreen');
const questionText = document.getElementById('questionText');
const storyScreen = document.getElementById('storyScreen');
const storyImage = document.getElementById('storyImage');
const storyText = document.getElementById('storyText');

const texts = [
  "It all started by me locking you up in that washroom\n(that was kinda funny, no?)\nOctober 2022",
  "Went through a lot of ups n downs,\nespecially due to my jealousy n over-protectiveness.\nBut yeah,\nyou handled me well, Meri jaan.",
  "I don't think I need to tell you every incident,\nbut I just want to express my love for you in a creative way.",
  "I made you cry a lot of times, I made you laugh.\nSometimes I made your day, sometimes I worsened it up.\nBut it was always about YOU n ME.",
  "So it's July 2025...\nand it's about to be 3 years, Meri Ladduu.",
  "In these three years, I can surely tell you one thing —\nYour hug was the best feeling I have ever had in these years.",
  "The warmth of your hands I felt the first time I held your hand...\nThe charge of emotions I felt when someone else touched you...\nAll of that was new to me, that I have never felt in my life.",
  "No matter what,\nYou are the only one in my life (and always will be).\nMy dearest DEEPIKA.",
  "You are like a small innocent girl to me,\nthat held my hand every time I needed.\nAnd I appreciate it a lotttt.",
  "It’s just been 3 years...\nI want to be with you for even 30 years more.\nJust you n me, and a happy small family\nwhere I can find my peace.",
  "Our story isn’t perfect.\nBut it’s just OURS.\nI love you, my dear Deepika."
];

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "",
  "",
  ""
];

let currentSlide = 0;

function goToNext() {
  mainScreen.classList.add('hidden');
  questionText.innerText = `Shall we go on a ride of memories, ${nameInput.value || 'Deepika'}?`;
  questionScreen.classList.remove('hidden');
}

function startStory() {
  questionScreen.classList.add('hidden');
  storyScreen.classList.remove('hidden');
  showSlide(currentSlide);
}

function showSlide(index) {
  storyText.innerText = texts[index];
  if (images[index]) {
    storyImage.src = images[index];
    storyImage.style.display = 'block';
  } else {
    storyImage.style.display = 'none';
  }
}

function nextSlide() {
  currentSlide++;
  if (currentSlide < texts.length) {
    showSlide(currentSlide);
  } else {
    alert('That was our ride of memories. Love you❤️');
  }
}

