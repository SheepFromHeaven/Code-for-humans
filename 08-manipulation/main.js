var test = document.getElementById('test');
var cards = document.getElementsByClassName('card');


function changeColor() {
  console.log("Changing color");
  test.classList.add('clicked');
}

function activateCard(event) {
  var target = event.target;
  if(target.classList.contains('card')) {
    target = target;
  } else {
    if(target.parentNode.classList.contains('card')) {
      target = target.parentNode;
    }
  }

  console.log(target);

  target.classList.add('active');
}
