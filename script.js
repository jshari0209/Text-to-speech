function speak(){
    var text=document.getElementById("input").value;
    var output=new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(output);
}