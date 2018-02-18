const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  // if it's true then run the boolean
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  // Only exist that lives inside the hover
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    // When you nest something you need to calculate the values yourself
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  }

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px`);
}

function handleLeave() {
  // sometimes you remove this class before it's added because of the timeout
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));