function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("black");
    text("dog",40,60);
    noFill();
    stroke("green");
    rect(30,60,450,350);
    fill("black");
    text("cat",290,55);
    noFill();
    stroke("blue");
    rect(290,65,300,350);
}