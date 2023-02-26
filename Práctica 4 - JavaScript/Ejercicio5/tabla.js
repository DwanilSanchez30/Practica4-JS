const generateBtn = document.querySelector('.btn-generate');
const numberSelect = document.querySelector('#number');
const tableContainer = document.querySelector('#table-container');

generateBtn.addEventListener('click', () => {
  const number = parseInt(numberSelect.value);
  if (number >= 1 && number <= 10) {
    let table = '<table class="table table-bordered">';
    for (let i = 1; i <= 12; i++) {
      table += `<tr><td>${number} x ${i}</td><td>=</td><td>${number * i}</td></tr>`;
    }
    table += '</table>';
    tableContainer.innerHTML = table;
  } else {
    tableContainer.innerHTML = '<p class="text-danger">Selecciona un número del 1 al 10.</p>';
  }
});
