/*const buttonsContainer = document.getElementById('buttons-container');
const buttonAdder = document.getElementById('buttons-adder');

buttonAdder.addEventListener('click', () => {
	addButtons(buttonsContainer, 5);
});

function addButtons(container, quantity) {
	const buttons = document.createDocumentFragment();
  
	for (let i = 0; i < quantity; i++) {
  	const newButton = document.createElement('button');
    
    // here you can set all attributes that you need
    newButton.setAttribute('id', 'button-' + i);
    newButton.innerHTML = 'Button #' + i;
    
    buttons.appendChild(newButton);
  }
  
  buttonsContainer.appendChild(buttons);
}*/
 
/*
function myFunction(id) {
  var x = document.getElementById(id);
  
    if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}  
*/

function myFunction(id){
  var x = document.getElementById(id);
  switch (x) {
      case id="Backgrounds":
        document.getElementById(id).style.display = "block";
        break;
      case id="Ears":
        document.getElementById(id).style.display = "block";
        break;
      case id="Hair":
        document.getElementById(id).style.display = "block";
        break;
      case id="Eyes":
        document.getElementById(id).style.display = "block";
        break;
      case id="Mouth":
        document.getElementById(id).style.display = "block";
        break;
      case id="Legs":
        document.getElementById(id).style.display = "block";
        break;
      case  id="Neck":
        document.getElementById(id).style.display = "block";
        break;
      case  id="Acessories":
        document.getElementById(id).style.display = "block";
        }
        
     }

