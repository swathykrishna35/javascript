function findItem() {
    var arr = input.value.split(",");
  
    input.value = arr;
  }
  
  button.addEventListener("click", findItem);
  