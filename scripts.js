var saveBtn = document.querySelector("#allSave");
var clearBtn = document.querySelector("#clearAll");



renderLastRegistered();

clearBtn.addEventListener("click", function (event) {
  localStorage.clear();
  location.reload();
});

function renderLastRegistered() {
  document.querySelector("#exampleTextarea1").textContent = localStorage.getItem("textvalue1");
  document.querySelector("#exampleTextarea2").textContent = localStorage.getItem("textvalue2");
  document.querySelector("#exampleTextarea3").textContent = localStorage.getItem("textvalue3");
  document.querySelector("#exampleTextarea4").textContent = localStorage.getItem("textvalue4");
  document.querySelector("#exampleTextarea5").textContent = localStorage.getItem("textvalue5");
  document.querySelector("#exampleTextarea6").textContent = localStorage.getItem("textvalue6");
  document.querySelector("#exampleTextarea7").textContent = localStorage.getItem("textvalue7");
  document.querySelector("#exampleTextarea8").textContent = localStorage.getItem("textvalue8");
  document.querySelector("#exampleTextarea9").textContent = localStorage.getItem("textvalue9");



  document.querySelector("#noteText1").textContent = localStorage.getItem("noteValue1")
  document.querySelector("#noteText2").textContent = localStorage.getItem("noteValue2")
  document.querySelector("#noteText3").textContent = localStorage.getItem("noteValue3")
  document.querySelector("#noteText4").textContent = localStorage.getItem("noteValue4")
  document.querySelector("#noteText5").textContent = localStorage.getItem("noteValue5")
  document.querySelector("#noteText6").textContent = localStorage.getItem("noteValue6")
  document.querySelector("#noteText7").textContent = localStorage.getItem("noteValue7")
  document.querySelector("#noteText8").textContent = localStorage.getItem("noteValue8")
  document.querySelector("#noteText9").textContent = localStorage.getItem("noteValue9")

}

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("textvalue1", document.querySelector("#exampleTextarea1").value);
  localStorage.setItem("textvalue2", document.querySelector("#exampleTextarea2").value);
  localStorage.setItem("textvalue3", document.querySelector("#exampleTextarea3").value);
  localStorage.setItem("textvalue4", document.querySelector("#exampleTextarea4").value);
  localStorage.setItem("textvalue5", document.querySelector("#exampleTextarea5").value);
  localStorage.setItem("textvalue6", document.querySelector("#exampleTextarea6").value);
  localStorage.setItem("textvalue7", document.querySelector("#exampleTextarea7").value);
  localStorage.setItem("textvalue8", document.querySelector("#exampleTextarea8").value);
  localStorage.setItem("textvalue9", document.querySelector("#exampleTextarea9").value);

  localStorage.setItem("noteValue1", document.querySelector("#noteText1").value);
  localStorage.setItem("noteValue2", document.querySelector("#noteText2").value);
  localStorage.setItem("noteValue3", document.querySelector("#noteText3").value);
  localStorage.setItem("noteValue4", document.querySelector("#noteText4").value);
  localStorage.setItem("noteValue5", document.querySelector("#noteText5").value);
  localStorage.setItem("noteValue6", document.querySelector("#noteText6").value);
  localStorage.setItem("noteValue7", document.querySelector("#noteText7").value);
  localStorage.setItem("noteValue8", document.querySelector("#noteText8").value);
  localStorage.setItem("noteValue9", document.querySelector("#noteText9").value);




  renderLastRegistered();

});