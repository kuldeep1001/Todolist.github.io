let AddButton = document.getElementById('enter');
let UserInput = document.getElementById('userInput');
let ul = document.querySelector('ul');

function inputLength() {
  return UserInput.value.length;
}

function createListElement() {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode("✍️ " + UserInput.value)); 
  ul.appendChild(li); 
  UserInput.value = ''; 

  
  function crossOut() {
    li.classList.toggle('done');
  }

  li.addEventListener('click', crossOut);
 

  
  let DeleteBtn = document.createElement('button');
  DeleteBtn.appendChild(document.createTextNode('REMOVE'));
  li.appendChild(DeleteBtn);
  DeleteBtn.addEventListener('click', deleteItem);
  
  function deleteItem() {
    alert("This will be delete permanantly:")
    
    li.classList.add('delete');
  }
  
}

function addListAfterClick() {
  if (inputLength() > 0) {
    
    createListElement();
  }
}

AddButton.addEventListener('click', addListAfterClick);

