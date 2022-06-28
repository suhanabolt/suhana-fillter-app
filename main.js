function preload() {   
 }

function setup() 
{
  canvas = createCanvas(640,480)
  canvas.position(350,200) 
  video = createCapture(VIDEO)
  video.hide()
 tint_color="";
}

function draw() 
{
 image(video,0,0,640,480)   
 tint(tint_color)
 filter(ERODE)
}

function take_snapshot() 
{
    save("pic.png")
}

function filter_tint() 
{
    tint_color =document.getElementById("color_name").value
}