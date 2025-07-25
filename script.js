// Printing cost calculation
const totalPagesInput = document.getElementById('totalPages');
const colorPagesInput = document.getElementById('colorPages');
const copiesInput = document.getElementById('copies');
const printCostEl = document.getElementById('printCost');

function updatePrintCost() {
  const totalPages = parseInt(totalPagesInput?.value) || 0;
  const colorPages = parseInt(colorPagesInput?.value) || 0;
  const copies = parseInt(copiesInput?.value) || 1;
  const bwPages = Math.max(totalPages - colorPages, 0);
  const bwCostPerPage = 0.5;
  const colorCostPerPage = 1.5;
  const total = ((bwPages * bwCostPerPage) + (colorPages * colorCostPerPage)) * copies;
  printCostEl.textContent = `Estimated Cost: GHS ${total.toFixed(2)}`;
}

totalPagesInput?.addEventListener('input', updatePrintCost);
colorPagesInput?.addEventListener('input', updatePrintCost);
copiesInput?.addEventListener('input', updatePrintCost);

// Tutorials cost calculation
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const tutorialTotalEl = document.getElementById('tutorialTotal');

function updateTutorialTotal() {
  let selected = 0;
  checkboxes.forEach(box => {
    if (box.checked) selected++;
  });
  const total = selected * 100;
  tutorialTotalEl.textContent = `Total Cost: GHS ${total.toFixed(2)}`;
}

checkboxes.forEach(box => {
  box.addEventListener('change', updateTutorialTotal);
});
