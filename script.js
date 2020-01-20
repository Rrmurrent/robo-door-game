let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'

doorImage1.onclick = () => {
  let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
  
  doorImage1.src = botDoorPath;
}

doorImage2.onclick = () => {
  let botDoorPath = beachDoorPath;
  
  doorImage2.src = botDoorPath;
}

doorImage3.onclick = () => {
  let botDoorPath = spaceDoorPath;
  
  doorImage3.src = botDoorPath;
}