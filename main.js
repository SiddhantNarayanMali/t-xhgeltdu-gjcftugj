Webcam.set(
    {
        width:170,
        height:170,
        image_format:"png",
        png_quality:90

    }
);
Webcam.attach("#camera");

function capture()
{
    Webcam.snap(function(click){
        document.getElementById("result").innerHTML ="<img id='cam' src='"+click+"'>";
    });
}

console.log("ML5 VER", ml5.version);
var imgClass = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wgTi8Nmaf/model.json",fun)

function fun()
{
    console.log("Model Loaded");
}
