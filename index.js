let inputval = document.querySelector("#text");
let btn = document.querySelector(".btn");
let res = document.querySelector(".res");

function checker() {
  let textvalue = inputval.value;
  let trimmedval = textvalue.replace(/[\W_]/, "g").toLowerCase();
  let reversedval = trimmedval.split("").reverse().join("");
  if (trimmedval === reversedval) {
    res.classList.add("show");
    res.style.color = "green";
    res.textContent = textvalue + " si es una palabra palindrome";
    setTimeout(() => {
      res.classList.remove("show");
      inputval.value = '';
    }, 2000);
  } else {
    res.classList.add("show");
    res.style.color = "red";
    res.textContent = textvalue + " no es una palabra palindrome";
    setTimeout(() => {
      res.classList.remove('show');
      inputval.value = '';
    }, 2000);
  }
  console.log(trimmedval);
  console.log(reversedval);
}
btn.addEventListener("click", () => {
  if (inputval.value !== "") {
    checker();
  }
});
inputval.addEventListener('input',(e)=>{
    if(e.target.value===''){
    res.classList.remove('show')
    }
})
inputval.addEventListener('keyup',(e)=>{
 if(e.keyCode===13 && e.target.value!==''){
    checker()
 }
})
