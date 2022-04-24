prediction=""; 
Webcam.set({
width:300,
height:300,
image_format:'png',
png_quality:95
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='js_img' src='"+data_uri+"'/>";
    });
    }
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aOUoCIH_H/model.json',modelloaded)
    function modelloaded(){
        console.log("modelloaded");
    }function speak(){
        var synth=window.speechSynthesis;
        speak_1="Prediction is "+prediction;
        var utterThis=new SpeechSynthesisUtterance( speak_1);
        synth.speak(utterThis);
    }
    function capturedImage(){
    img_1=document.getElementById("js_img");
    classifier.classify(img_1,gotResult);
    }
    function gotResult(error,result){
    if(error){
        console.error(error);
    }else{
      console.log(result);
      document.getElementById("prediction").innerHTML=result[0].label;
      prediction=result[0].label;
      speak();
      to_speak = "";
      if(prediction=="Best"){
         to_speak = "All The Best";
         document.getElementById("prediction").innerHTML = "Prediciton -" +to_speak
      }
      if(prediction=="Victory"){
       to_speak = "That was a marvalous victory";
       document.getElementById("prediction").innerHTML = "Prediciton -" +to_speak
    }
    if(prediction=="Amazing"){
        to_speak = "This is Amazing"
        document.getElementById("prediction").innerHTML = "Prediciton -" +to_speak
    }
    }
    }