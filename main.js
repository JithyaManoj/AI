function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.hide();
    pose = ml5.poseNet(video, modeloaded);
    pose.on("pose", gr)
}

function modeloaded() {
    console.log("yup you are safe");
}

function gr(r) {
    if (r.length > 0) {
        console.log(r);
        lwx = r[0].pose.leftWrist.x;
        lwy = r[0].pose.leftWrist.y;
        //console.log("lwx: ",lwx , "lwy: ",lwy);
        rwx = r[0].pose.rightWrist.x;
        rwy = r[0].pose.rightWrist.y;
        //console.log("rwx: ",rwx , "rwy: ",rwy);
        lwscroe = r[0].pose.keypoints[9].score;
        rwscroe = r[0].pose.keypoints[10].score;

    }

}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("coral");
    stroke("red");
    if (lwscroe > 0.2) {
        circle(lwx, lwy, 20);
        if (e.isPlaying() == false) {
            f.stop();
            e.play();
            e.setVolume(1);
            document.getElementById("songa").innerHTML = "seniorita is playing so buck up your ears";
        }
    }

    if (rwscroe > 0.2) {
        circle(rwx, rwy, 20);
        if (f.isPlaying() == false) {
            e.stop();
            f.play();
            f.setVolume(1);
            document.getElementById("songa").innerHTML = "rihana's umberella is playing so buck up your ears";
        }
    }
}
lwscroe = "";
rwscroe = "";

e = "";
f = "";
song = ""
lwy = "";
lwx = "";
rwy = "";
rwx = "";

function preload() {
    e = loadSound("seniorita.mp3");
    f = loadSound("umber.mp3");
}