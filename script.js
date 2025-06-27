// Container where input and enter button present
const container = document.createElement("div");
document.body.appendChild(container)
container.classList.add("container")
// Input where value enter
const input = document.createElement("input");
container.appendChild(input)
// Enter button
const button = document.createElement("button");
container.appendChild(button);
button.textContent = "Enter"
// Value entered in input
const result = document.createElement("span")
container.appendChild(result);

button.addEventListener("click",()=>{
    const rupess = input.value*284;
    result.textContent = ` ${input.value}$ price in rupess is Rs ${rupess}`
})
input.addEventListener("keydown",function(e){
    if (input.value == 0 && e.key === "Enter"){
        alert("Please enter the dollars")
        
    }
    else if( e.key === "Enter"){
        const rupess = input.value*284;
        result.textContent = ` ${input.value}$ price in rupess is Rs ${rupess}`
        input.blur()
    }
})