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
                console.log('it\'s a');
                break;
            case 's':
                console.log('it\'s s');
                break;
            case 'd':
                console.log('it\'s d');
                break;
            case 'j':
                console.log('it\'s j');
                break;
            case 'k':
                console.log('it\'s k');
                break;
            case 'l':
                console.log('it\'s l');
                break;
            
        }
    }); 
}



// var soundNames = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];

// // var audio = new Audio('sounds/' + soundNames[i] + '.mp3');
// // audio.play();