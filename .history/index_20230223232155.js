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
    buttons[i].addEventListener("click", function() 
    {
        switch(this.classList[0])
        {
            case 'w':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case 'a':
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case 's':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 'k':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            //default in case user presses anything else
            default:
                console.log("wrong key");
                break;

        }
    }); 
}


addEventListener("keydown", function() 
{});