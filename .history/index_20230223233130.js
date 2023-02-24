// proper way? have to remember parenthesis rule

// button press

var buttons = document.querySelectorAll(".drum");

for (var i = 0, arrLen = buttons.length; i < arrLen; i++) 
{
    buttons[i].addEventListener("click", function() 
    {
        
    }); 
}


// keyboard press

// add it to document so that whenever you press, it alerts
document.addEventListener("keydown", function(event) 
{
    console.log(event['key']);
});


// making the sound


