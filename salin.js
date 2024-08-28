function generateCodeList() {
  const codes = document.getElementById('codeInput').value.split('\n');
  const codeListDiv = document.getElementById('codeList');
  codeListDiv.innerHTML = ''; // Clear previous content

  codes.forEach((code, index) => {
    if (code.trim() !== '') {

      codeListDiv.innerHTML += `
            <div class="flex justify-between items-center mt-2">
              <p class="text-sm bg-gray-100 px-2 py-1 rounded-lg w-80"> ${code}</p>
              <button 
                class="relative text-blue-600 text-sm" 
                onclick="copyToClipboard(this, '${code}')"
                data-tooltip-target="tooltip-default">
                <span class="tooltip-inner bg-gray-900 text-white text-xs rounded-lg py-1 px-2 z-10">Salin</span>
              </button>
            </div>`;
    }
  });
}

