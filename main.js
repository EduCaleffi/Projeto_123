noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(550, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function draw() {
background('#969A97')

 document.getElementById("square_side").innerHTML = "Largura e Altura serão = "+difference+"pix";
 fill('#F90093')
 stroke('#F90093')
 square(noseX, noseY, difference);
}