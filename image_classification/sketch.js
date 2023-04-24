let classifier;
let labels = ["mobile", "tv"];
preLoad();

function preLoad() {
  classifier = ml5.imageClassifier("./my_model/model.json", modelLoaded);
}
function modelLoaded() {
  console.log("Model Loaded!");
}

function detectImage() {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output_image");
    output.src = reader.result;
    classifier.classify(document.getElementById("output_image"), getResult);
  };
  reader.readAsDataURL(event.target.files[0]);
}

function getResult(err, results) {
  alert(JSON.stringify(results));
  alert("Predicted is :", labels[results[0].label]);
}
