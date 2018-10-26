var output = []

function Enternumbers(input) {
  for (var index=0; index<=input; index++) {
    output.push(index);
    if (output[index] % 3 === 0) {
      output[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (index.toString().includes("0")) {
    output[index] = "Beep!";
  } else if (index.toString().includes("1")) {
    output[index] = "Boop!";
  } else {

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
