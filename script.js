let canvas = document.getElementById("dino");
let rtxOne = canvas.getContext("2d");
let dino = new Image();
dino.src = "./images/T-rex.png";
let dinoY = 20;
let velY = 0;
let gravity = 0.5;
let isJumping = false;
let jumpPower = 5;

canvas.width = 100;
canvas.height = 100;
function draw() {
    rtxOne.clearRect(0, 0, canvas.width, canvas.height);
    rtxOne.drawImage(dino, 20, dinoY);
    if (dinoY + dino.height <= canvas.height) {
        velY += gravity;
        dinoY += velY;
    }
    else {
        dinoY = canvas.height - dino.height
        velY = 0;
        isJumping = false;
    }
}
function jump() {
    if (!isJumping) {
        velY = -jumpPower;
        isJumping = true;
    }
}
setInterval(draw, 20);
setInterval(jump, 500);

document.addEventListener("DOMContentLoaded", function () {
    const firstBlock = document.getElementById('one');
    const secondBlock = document.getElementById('two');
    const thirdBlock = document.getElementById('three');
    const fourthBlock = document.getElementById('four');
    const fifthBlock = document.getElementById('five');
    const sixthBlock = document.getElementById('six');
    const seventhBlock = document.getElementById('seven');
    const eighthBlock = document.getElementById('eight');
    const ninethBlock = document.getElementById('ten');
    const tenthBlock = document.getElementById('ten');
    const changeBlock = document.getElementById('change');

    window.addEventListener('scroll', function () {
        const firstRect = firstBlock.getBoundingClientRect();
        const secondRect = secondBlock.getBoundingClientRect();
        const thirdRect = thirdBlock.getBoundingClientRect();
        const fourthRect = fourthBlock.getBoundingClientRect();
        const fifthRect = fifthBlock.getBoundingClientRect();
        const sixthRect = sixthBlock.getBoundingClientRect();
        const seventhRect = seventhBlock.getBoundingClientRect();
        const eighthRect = eighthBlock.getBoundingClientRect();
        const ninethRect = ninethBlock.getBoundingClientRect();
        const tenthRect = tenthBlock.getBoundingClientRect();

        // Перевірка, чи будь-яка частина першого блоку знаходиться у видимій області вікна перегляду
        if (firstRect.top < window.innerHeight && firstRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(109, 255, 255)';
        }
        else if (tenthRect.top < window.innerHeight && tenthRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(109, 255, 255)';
        }
        // Перевірка, чи будь-яка частина другого блоку знаходиться у видимій області вікна перегляду
        else if (secondRect.top < window.innerHeight && secondRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(255, 51, 51)';
        }
        else if (thirdRect.top < window.innerHeight && thirdRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(255, 51, 51)';
        }
        else if (fourthRect.top < window.innerHeight && fourthRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(255, 244, 94)';
        }
        else if (fifthRect.top < window.innerHeight && fifthRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(255, 244, 94)';
        }
        else if (sixthRect.top < window.innerHeight && sixthRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(98, 255, 98)';
        }
        else if (seventhRect.top < window.innerHeight && seventhRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(98, 255, 98)';
        }
        else if (eighthRect.top < window.innerHeight && eighthRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(198, 93, 255)';
        }
        else if (ninethRect.top < window.innerHeight && ninethRect.bottom > 0) {
            changeBlock.style.backgroundColor = 'rgb(198, 93, 255)';
        }
    });
});

gsap.to(".sn", {
    duration: 10,
    ease: "none",
    repeat: -1,
    width: 1,
})
gsap.to(".te", {
    scale: 1.2,
    duration: 0.3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});
gsap.to(".to", {
    rotation: 45,
    duration: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});
gsap.to(".fe", {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: "linear"
});
gsap.to(".fr", {
    duration: 10,
    ease: "none",
    repeat: -1,
    y: -800,
    x: -600,
});
