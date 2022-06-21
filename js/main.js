var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elList = document.querySelector(".js-list");
var elBtn = document.querySelector(".js-btn");
var elRecord = document.querySelector(".js-rec");
var record = new webkitSpeechRecognition();

var arr = [];

record.lang = "uz-Uz"

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elInputVal = elInput.value;
  elInput.value = "";
  // elList.innerHTML = "";
  if(elInputVal == 0){
    alert('please inter your task') 
  }else{
    arr.push({
      id: arr.length + 1,
      text: elInputVal,
    });
  }
  

  for (i = 0; i < arr.length; i++) {
    var elItem = document.createElement("li");
    elItem.textContent = ` ${arr[i].id}. ${arr[i].text}`;
    elItem.setAttribute("class", "item")
  }

  elList.appendChild(elItem);
});



elRecord.addEventListener("click", function() {
  record.start();
});

record.onresult = function (evt) {
  var audio = evt.results[0][0].transcript;

  elList.innerHTML = "";


  arr.push({
    id: arr.length + 1,
    text: audio,
  });

  for (var i = 0; i < arr.length; i++) {
    var elItem = document.createElement("li");
    elItem.setAttribute("class", "item")
    elItem.textContent = `${arr[i].id}. ${arr[i].text}`;
    elList.appendChild(elItem);
  }
};
