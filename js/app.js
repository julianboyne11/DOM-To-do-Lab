const input = document.querySelector("#list") 
const btn = document.querySelector("#submit-button")
const ulElement = document.querySelector("todo-list")

// ulElement.addEventListener("click", handleClick)


btn.addEventListener("click", function(evt) {
  
  const li = document.createElement("li")
  // console.log(liElement)
  // set new <li> to <input>
  li.textContent = input.value
  // console.dir(li)
  //rester the input
  input.value = ""
  //add the text value into the <ul>
  document.querySelector("ul").appendChild(li)
})
