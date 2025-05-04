function update(){
   let currentValue =  document.getElementById("input1").value;
   let outputContent = document.querySelector(".output > p");
   outputContent.textContent = currentValue;
}