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

for (var i = 0, arrLen = buttons.length; i < arrLen; i++) 
{
    document.querySelectorAll("button")[i].addEventListener("click", function () 
    {
        var soundNames = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];

        var audio = new Audio('sounds/' + soundNames[i] + ".mp3');

        audio.play();
    });
}