document.getElementById("generate-pin").addEventListener("click", function () {
    let pinNumber = Math.floor(1000 + Math.random() * 9000);
    let GeneratePinNumber = document.getElementById("display-generate-pin");
    GeneratePinNumber.value = pinNumber;
  });
  
  let displayCalculator = document.getElementById("display-numbers");
  
  //Array.from () convert HTML collection to array
  let numbers = Array.from(document.getElementsByClassName("number"));

 numbers.map(function(number){
    number.addEventListener("click", function(e){
      switch (e.target.innerText) {
        case 'C': 
        displayCalculator.value = '';
        break;
        default:
          displayCalculator.value += e.target.innerText;
      }
    });
  });


  document.getElementById("submit").addEventListener("click", function () {
    
    if(document.getElementById("display-generate-pin").value == ''){
      alert('First generate pin number');
    }
    else{
      if (
        document.getElementById("display-generate-pin").value ===
        document.getElementById("display-numbers").value
      )
       {
        document.getElementById("matched").style.display = "block";
        document.getElementById("not-matched").style.display = "none";
      }
      else {
        document.getElementById("not-matched").style.display = "block";
        document.getElementById("matched").style.display = "none";
      }
    }
    
    let tryButton = document.getElementById('try-button');
    tryButton.innerText = tryButton.innerHTML-1;
    if(tryButton.innerText == 0){
      document.getElementById("submit").disabled = 'true';
    }
  });
  