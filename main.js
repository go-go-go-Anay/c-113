function preload()
{

}

function setup()
{
canvas = createCanvas(700, 500);
canvas.position(250, 350);

video = createCapture(VIDEO);
video.hide();
 tint_colour = "";
}

function draw()
{
image(video, 0,0, 640, 480);
tint(tint_colour);
fill("red");
rect(0, 0, 55, 55,20);
fill("green");
rect(55, 14, 590, 27.5);
fill("red");
rect(645, 0, 55, 55,20);
fill("green");
rect(14, 55, 27.5, 390);
fill("red");
rect(0, 445, 55, 55,20);
fill("red");
rect(645, 445, 55, 55,20);
fill("green");
rect(55, 460, 590, 27.5);
fill("green");
rect(660, 55, 27.5, 390);
}

function take_snapshot()
{
    save("Image.png");
}



