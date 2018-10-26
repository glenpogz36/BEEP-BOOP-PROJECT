var output = [];
var numberone = /[1]/g;
var numberzero = /[0]/g;

function Enternumbers(input) {
  for (var index = 0; index <= input; index++) {
    if (index.toString().match(numberone)) {
    output.push("Boop!")
  } else if (index.toString().match(numberzero)) {
     output.push("Beep!")
    } else if (index % 3 === 0) {
     output.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else {
     output.push(index)
      }
    }
  }


$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#inputnumbers").val());
    Enternumbers(input);
      $("#output").text(output);
    });
  });
