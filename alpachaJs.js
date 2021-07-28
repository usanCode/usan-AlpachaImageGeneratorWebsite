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
 
function myFunction(id) {
  var x = document.getElementById(id);
  
  if (x.style.display === "hide") {
    x.style.display = "block";
  } else {
    x.style.display = "hide";
  }
}