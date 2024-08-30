function updateUICodes(codes) {
  const codeListDiv = document.getElementById('codeList');
  codeListDiv.innerHTML = ''; // Clear previous content
  codes.forEach((code, index) => {
    if (code.trim() !== '') {

      codeListDiv.innerHTML += `
            <div class="flex justify-between items-center mt-2">
              <p class="text-sm bg-gray-100 px-2 py-1 rounded w-80"> ${code}</p>
              <button 
                class="relative text-blue-600 text-sm" 
                onclick="copyToClipboard(this, '${code}')"
                data-tooltip-target="tooltip-default">
                <span class="tooltip-inner bg-gray-900 text-white text-xs rounded py-1 px-2 z-10">Salin</span>
              </button>
            </div>`;
    }
  });
}


function generateCodeList() {
  const codeInput = document.getElementById('codeInput');
  const codes = codeInput.value.split('\n');
  codes.sort();
  localStorage.removeItem('codes');
  localStorage.setItem('codes', JSON.stringify(codes))
  updateUICodes(codes);
}

function resetCodeList() {
  document.getElementById('codeInput').value = '';
}

const filterElementTemplate = `
      <select id='game-filter' class="bg-gray-50 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500">
      <option value='all'> Tampilkan semua</option>
      ${gameKeys.map(item => {
  return `<option value='${item}'> ${item}</option>`;
})}
      </select>
  `;

const filterEl = document.querySelector('#filter');
const div = document.createElement('div');
div.innerHTML = filterElementTemplate;
filterEl.append(div);

document.querySelector('#game-filter').addEventListener('change', (item) => {
  const game = item.target.value;
  const codes = JSON.parse(localStorage.getItem('codes'));
  const codeFiltered = codes.filter(item => item.includes(game));
  updateUICodes(codeFiltered);
  if (game === 'all') {
    updateUICodes(codes);
  }
})

