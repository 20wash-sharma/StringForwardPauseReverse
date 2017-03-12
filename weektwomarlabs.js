
var interval;
function moveTheLetters() {
    if (interval)
        clearInterval(interval);
        if (this.id == 'forward')
        {


            interval = setInterval(function () {


                document.getElementById('textbox2').value = document.getElementById('textbox2').value + document.getElementById('textbox1').value.charAt(0);
                document.getElementById('textbox1').value = document.getElementById('textbox1').value.substr(1, document.getElementById('textbox1').value.length);


            }, 1000);




        } else if (this.id == 'backward')
        {


            interval = setInterval(function () {


                document.getElementById('textbox1').value = document.getElementById('textbox2').value.charAt(document.getElementById('textbox2').value.length - 1) + document.getElementById('textbox1').value;
                document.getElementById('textbox2').value = document.getElementById('textbox2').value.substr(0, document.getElementById('textbox2').value.length - 1);


            }, 1000);

        } else
        {



        }
}
var forward = document.getElementById('forward');
forward.addEventListener("click", moveTheLetters);
var backward = document.getElementById('backward');
backward.addEventListener("click", moveTheLetters);
var pause = document.getElementById('pause');
pause.addEventListener("click", moveTheLetters);