// proper way? have to remember parenthesis rule

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() 
// {
//     alert("I got clicked!");
// }


// anonymous way 

document.querySelectorAll("button")[1].addEventListener("click", function () 
{
    alert("cs50 method");
});