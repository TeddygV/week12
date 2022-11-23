const clickButton = document.querySelector(".click-me");
// console.log(clickButton);
function clickHandler() 
{
    alert('You clicked me!');
    // clickButton.removeEventListener('click', clickHandler);
}
clickButton.addEventListener("click", clickHandler, {once: true} );


function changeBGPink() 
{
    // document.body.style.backgroundColor = "pink";
    document.body.classList.add("pinkBG");
}
clickButton.addEventListener("click", changeBGPink);

function buttonTextChange() 
{
    clickButton.textContent = "Clicked!";
    
}
clickButton.addEventListener("click", buttonTextChange);

function changeText()
{
    if (clickButton.textContent === "Click Me!")
    {
        clickButton.textContent = "Clicked!";
    } else if (clickButton.textContent === "Clicked!") {
        clickButton.textContent = "Click Me!";
    }
}
clickButton.addEventListener('click', changeText);function buttonTextChange() 
{
    clickButton.textContent = "Clicked!";
    
}
clickButton.addEventListener("click", buttonTextChange);

function changeText()
{
    if (clickButton.textContent === "Click Me!")
    {
        clickButton.textContent = "Clicked!";
    } else if (clickButton.textContent === "Clicked!") {
        clickButton.textContent = "Click Me!";
    }
}
clickButton.addEventListener('click', changeText);

function updateImage(event) 
{
    const image = document.querySelector("#shoppingCart");
    image.src = "images/shoppingcart.png";
    image.alt = "shopping cart";
    image.width = "100";
    image.height = "100";
}

clickButton.addEventListener('click', updateImage);

const buttonContainer = document.querySelector(".div-container");
buttonContainer.addEventListener('mouseover', changeBGGreen);

function changeBGGreen(e)
{
    e.target.style.backgroundColor = "green";
}

buttonContainer.addEventListener("click", changeButtonTextColor);