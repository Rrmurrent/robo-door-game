let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

let niceBotPath = 'https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/fd/56/e5/fd56e585-f186-b554-684c-440979898b70/source/256x256bb.jpg';

let friendlyBotPath = 'https://pbs.twimg.com/profile_images/378800000481581818/2f633d592029e5d1480a56e35e9809af.jpeg';

let evilBot = "https://pbs.twimg.com/profile_images/378800000127515414/ad6bd483b5d47dd9454cc013c19e9dd6.png";




doorImage1.onclick = () => {

  let botDoorPath = evilBot
  doorImage1.src = botDoorPath;
}

doorImage2.onclick = () => {

  let botDoorPath = friendlyBotPath;
  doorImage2.src = botDoorPath;
}

doorImage3.onclick = () => {

  let botDoorPath = niceBotPath;
  doorImage3.src = botDoorPath;
}