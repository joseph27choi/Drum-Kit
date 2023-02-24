// proper way? have to remember parenthesis rule

// document.querySelectorAll("button").addEventListener("click", handleClick);

// function handleClick() 
// {
//     alert("I got clicked!");
// }


// anonymous way 

// document.querySelectorAll("button").addEventListener("click", function () 
// {
//     console.log("cs50 method");
// });


//use loops

var buttons = document.querySelectorAll(".drum");

for () i = 0, arrLen = buttons.length; i < arrLen; i++) 
{
    document.querySelectorAll("button")[i].addEventListener("click", function () 
    {
        console.log("clicked");
    });
}