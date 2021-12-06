var run = document.getElementById("run");
var fire = document.getElementById("fire");
var counter = 0;

function zipla() {
  if (fire.classList != "fire-animate") {
    fire.classList.add("fire-animate");
  }

  if (run.classList != "run-animate") {
    run.classList.add("run-animate");
    setTimeout(function () {
      run.classList.remove("run-animate");
    }, 500);
  }
}

var carpismaKOntrol = setInterval(function () {
  var runingBottom = parseInt(
    window.getComputedStyle(run).getPropertyValue("bottom")
  );

  var fireingLeft = parseInt(
    window.getComputedStyle(fire).getPropertyValue("left")
  );

  if (fireingLeft > 0 && fireingLeft < 40 && runingBottom < 40) {
    fire.classList.remove("fire-animate");
    fire.style.display = "none";
    alert("Oyun Bitti.  Oynanılan süre: " + Math.floor(counter / 100));
    counter = 0;
    fire.style.display = "fireing 1s infinite linear";
  } else {
    counter++;
    document.getElementById("OynanılanSpan").innerHTML = Math.floor(
      counter / 100
    );
  }
}, 10);
