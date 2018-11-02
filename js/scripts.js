
function Enternumbers(input) {
  for (var index = 0; index <= input; index++) {

    if (index % 3 === 0 && index !== 0) {
      $("#output").append(" " + "I'm sorry, Dave. I'm afraid I can't do that");
    }else if (index.toString().includes("1")){
      $("#output").append(" " + "Boop!");
    }else if (index.toString().includes("0")){
      $("#output").append(" " + "Beep!");
    }else {
      $("#output").append(" " + index)
    }
  };
};

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#inputnumbers").val());
    Enternumbers(input);
  });
});
