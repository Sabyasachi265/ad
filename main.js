function Yellow(){
navigator.mediaDevices.getUserMedia({ audio : true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/itsIqk6pc/model.json', YesNo);
}
function YesNo(){
    classifier.classify(gotResults);
}
function gotResults(error, result){
if(error)
{console.error(error)}
else{
    console.log(result);
    number_color_r = Math.floor(Math.random() * 255) + 1;
    number_color_g = Math.floor(Math.random() * 255) + 1;
    number_color_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("sound").innerHTML = 'I can hear'+result[0].label;
    document.getElementById("accuracy").innerHTML = 'Accuracy'+(result[0].confidence * 100).toFixed(2)+'%';

    document.getElementById("sound").style.color = "rgb("+number_color_r+", "+number_color_g+", "+number_color_b+")";
    document.getElementById("accuracy").style.color = "rgb("+number_color_r+", "+number_color_g+", "+number_color_b+")";
    
    img1 = document.getElementById("Yesno");

    if(result[0].label == "roar"){
        img1.src = 'lel.jpeg';
    }
    else if(result[0].label == "Meow"){
        img1.src = 'cat.jpg';
    }
    else{
        img1.src = 'dog.jpg';
    }
}
}