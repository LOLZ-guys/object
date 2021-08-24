function setup()
{
    canvas = CreateCanvas(640,420);
    canvas.center();
}

img="";

function preload()
{
    img = loadImage('dog_cat.jpg');

}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text(Dog, 45, 75);
    noFill();
    stroke("#FF0000");

}