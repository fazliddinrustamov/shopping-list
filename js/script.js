let elForm = document.querySelector(".shopping-form");
let elInput = document.querySelector(".product-taker");
let elList = document.querySelector(".shopping-list");
let elTextAlready = document.querySelector(".text-for-already");
let arrayList = [];

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  let elInputValue = elInput.value;
  elInput.value = "";

  arrayList.push(elInputValue);
  
  let elItem = document.createElement("li");

  for (item of arrayList) {
    elItem.classList.add("product-item")
    elList.appendChild(elItem);
    elItem.textContent = "";
    elItem.textContent = item;
  }

  elItem.addEventListener('click', function() {
    elItem.style.textDecoration = "line-through";
  });

  elItem.addEventListener('dblclick', function(){
    elList.removeChild(elItem);
  });
})