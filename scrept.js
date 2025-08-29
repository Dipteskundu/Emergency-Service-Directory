document.addEventListener('DOMContentLoaded', function () {
  //call history array
  let callHistory = [];

  //  Counters
  const heartCountEl = document.getElementById('heartCount');
  const coinCountEl = document.getElementById('coinCount');
  const copyCountEl = document.getElementById('copyCount');

  // History 
  const historyContentEl = document.getElementById('historyContent');
  const noHistoryMessageEl = document.getElementById('noHistoryMessage');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');

  //  Hearts  
  const heartIds = [
    'heart-1', 'heart-2', 'heart-3', 'heart-4', 'heart-5',
    'heart-6', 'heart-7', 'heart-8', 'heart-9'
  ];

  heartIds.forEach(id => {
    const heartEl = document.getElementById(id);
    heartEl.addEventListener('click', function () {
      
      if (this.classList.contains('far')) {
        this.classList.remove('far');
        this.classList.add('fas', 'text-red-500');
        heartCountEl.textContent = String(parseInt(heartCountEl.textContent) + 1);
      } else {
        this.classList.remove('fas', 'text-red-500');
        this.classList.add('far');
        heartCountEl.textContent = String(parseInt(heartCountEl.textContent) - 1);
      }
    });
  });

  //  Copy buttons
  const copyBtnIds = [
    'copy-1', 'copy-2', 'copy-3', 'copy-4', 'copy-5',
    'copy-6', 'copy-7', 'copy-8', 'copy-9'
  ];

  copyBtnIds.forEach(id => {
    const btn = document.getElementById(id);
    btn.addEventListener('click', function () {
      const number = this.getAttribute('data-number');
      const name = this.getAttribute('data-name');

      navigator.clipboard.writeText(number).then(() => {
        alert(`Copied ${name} number: ${number}`);
        copyCountEl.textContent = String(parseInt(copyCountEl.textContent) + 1);
        addToHistory('Copied', name, number);
      }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy number. Please try again.');
      });
    });
  });

  // Call buttons 
  const callBtnIds = [
    'call-1', 'call-2', 'call-3', 'call-4', 'call-5',
    'call-6', 'call-7', 'call-8', 'call-9'
  ];

  callBtnIds.forEach(id => {
    const btn = document.getElementById(id);
    btn.addEventListener('click', function () {
      const number = this.getAttribute('data-number');
      const name = this.getAttribute('data-name');

      const currentCoins = parseInt(coinCountEl.textContent);

      if (currentCoins < 20) {
        alert(`You don't have enough coins to call. You need 20 coins but you have only ${currentCoins}.`);
        return;
      }

      alert(`Calling ${name} at ${number}`);
      coinCountEl.textContent = String(currentCoins - 20);
      addToHistory('Called', name, number);
    });
  });

  //  Clear History 
  clearHistoryBtn.addEventListener('click', function () {
    callHistory = [];
    renderHistory();
  });

  // History helpers 
  function addToHistory(action, name, number) {
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    callHistory.unshift({ action, name, number, time: timeString });
    renderHistory();
  }

  function renderHistory() {
    historyContentEl.innerHTML = '';

    if (callHistory.length === 0) {
      const p = document.createElement('p');
      p.className = 'text-gray-500 text-center py-6 text-sm';
      p.textContent = 'No call history yet';
      historyContentEl.appendChild(p);
      return;
    }

    callHistory.forEach(item => {
      const wrap = document.createElement('div');
      wrap.className = 'flex justify-between items-center bg-gray-100 rounded-md shadow-sm p-4 mb-4';

      wrap.innerHTML = `
      <div class="flex flex-col">
        <span class="font-bold text-gray-800">${item.name}</span>
        <span class="text-gray-600 text-sm">${item.number}</span>
      </div>
      <span class="text-gray-500 text-sm">${item.time}</span>`;

      historyContentEl.appendChild(wrap);
    });
  }

});