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

var buttons = document.querySelectorAll("button");

for (var i = 0, arrLen = buttons.length; i < buttons; ) 
{
    document.querySelectorAll("button").addEventListener("click", function () {
        console.log("clicked" + i);
    });
}