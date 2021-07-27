var noseX = 0;
noseY = 0;
LeftEarX =0;
LeftEarY =0;
RightEarX =0;
RightEarY =0;
function preload(){
   clown_nose = loadImage('https://i.postimg.cc/x1ry4CKM/Clown-Nose-PNG-Pic.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300,300);
    image(clown_nose, noseX, noseY, 30,30);
}
function takeSnapshot(){
    save('my_filter_image.png');
}
function modelLoaded(){
    console.log("PoseNet is initialised!");
}
function gotPoses(results){
    if (results.length> 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("Nose x= "+ noseX);
        console.log("Nose Y= " + noseY);
        LeftEarX = results[0].pose.leftEar.x;
        LeftEarY = results[0].pose.leftEar.y +10;
        RightEarX = results[0].pose.rightEar.x;
        RightEarY = results[0].pose.rightEar.y+10;

    }
}
