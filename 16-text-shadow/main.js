const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 50;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y} = e;

  // target element can be different then this reference
  if(this !== e.target ) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2)); // iffsetting 50 / 050
  const yWalk = Math.round((y / height * walk) - (walk / 2)); // iffsetting 50 / 050

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`

}

hero.addEventListener('mousemove', shadow);