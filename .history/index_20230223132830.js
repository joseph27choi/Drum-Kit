// proper way? have to remember parenthesis rule

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() 
// {
//     alert("I got clicked!");
// }


// anonymous way 

document.querySelectorAll("button")[0, 1, 2].addEventListener("click", function () 
{
    console.log("cs50 method");
});