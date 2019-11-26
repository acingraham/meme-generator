$("#download").click(function() {
  html2canvas(document.querySelector("#output")).then(canvas => {
    return document.body.appendChild(canvas);
  }).then(() => {
    var canvas = $("canvas")[0];
    var image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
  });
  
});

$("#top-input").keydown(function() {
  const val = $("#top-input").val();
  $("#top-text").text(val);
});

$("#bottom-input").keydown(function() {
  const val = $("#bottom-input").val();
  $("#bottom-text").text(val);
});