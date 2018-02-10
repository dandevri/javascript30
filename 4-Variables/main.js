const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // Contains all values of the data attribute
  const suffix = this.dataset.sizing || '';
  // Set the variable on the HTMl element
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));