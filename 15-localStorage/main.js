const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // localstorage items or blank array

addItems.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value; // Select the name item inside the form
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset() // reset method of the form
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
    `
  }).join('');
}

function toggleDone(e) {
  if(!e.target.matches('input')) return // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done; // the opposite (true or false)
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);