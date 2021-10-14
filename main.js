difference = 0;
rightWristX = 0;
leftWristX = 0;
nosex=0
nossey=0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

         nosex=results[0].pose.nose.x
         nossey=results[0].pose.nose.y  
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX);
    }
}


function draw()
{
    background('#6495ed');

    document.getElementById("font_size").innerHTML = "Font Size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#87CEEB');
    text('cod',nosex,nossey);
}