
const sumNumber = 1;
const queryBtn = document.querySelectorAll('.heart-btn');

for (const query of queryBtn) {
  query.addEventListener('click', function () {
    const heard = document.getElementById('heartCount').innerText;
    const parseHeard = parseInt(heard);
    const sumHeader = parseHeard + sumNumber;
    document.getElementById('heartCount').innerText = sumHeader;
  });
}



function copyAlert(idOrText, alertText) {
  if (confirm(alertText)) {
    
    const el = document.getElementById(idOrText);
    const toCopy = el ? el.innerText : idOrText;
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(toCopy);
    }
  }
}


const copyQueryBtn = document.querySelectorAll('.copy-btn');
for (const totalCopyQuery of copyQueryBtn) {
  totalCopyQuery.addEventListener('click', function () {
   
    let p = this;
    while (p && !p.classList.contains('hotline-card')) {
      p = p.parentElement;
    }
    if (!p) return;

    const numberEl = p.querySelector('.hotline-number');
    const numberText = numberEl ? numberEl.innerText.trim() : '';

    copyAlert(numberText, 'Number copied: ' + numberText);

    // copy-count 
    const copyHeard = document.getElementById('copyCount').innerText;
    const parseCopy = parseInt(copyHeard);
    const sumCopy = parseCopy + sumNumber;
    document.getElementById('copyCount').innerText = sumCopy;
  });
}



function getNowTime() {
  return new Date().toLocaleTimeString();
}

function buildHistoryItem(name, sNum, timeText) {
  const li = document.createElement('li');
  li.className = 'flex justify-between items-start border-b border-gray-200 py-3 last:border-b-0';

  const left = document.createElement('div');
  const h = document.createElement('p');
  const p = document.createElement('p');

  h.className = 'font-medium';
  p.className = 'text-sm text-gray-500';

  h.innerText = name;
  p.innerText = sNum;

  left.appendChild(h);
  left.appendChild(p);

  const right = document.createElement('div');
  right.className = 'text-sm text-gray-500 whitespace-nowrap self-start';
  right.innerText = timeText;

  li.appendChild(left);
  li.appendChild(right);
  return li;
}

const collDataFile = [];
const minusCount = 20;

const callBtns = document.querySelectorAll('.call-btn');
for (const btn of callBtns) {
  btn.addEventListener('click', function () {
 
    let p = this;
    while (p && !p.classList.contains('hotline-card')) {
      p = p.parentElement;
    }
    if (!p) return;

    const name = p.querySelector('.service-name') ? p.querySelector('.service-name').innerText.trim() : '';
    const sNum = p.querySelector('.hotline-number') ? p.querySelector('.hotline-number').innerText.trim() : '';

    const cone = parseInt(document.getElementById('coinCount').innerText);

    if (cone < 20) {
      alert("You don't have any money! 20 money to call.");
      return;
    } else if (confirm('Calling ' + name + ': ' + sNum)) {
      const min = cone - minusCount;
      document.getElementById('coinCount').innerText = min;
    } else {
      return;
    }

    const calldata = {
      service: name,
      serviceNum: sNum,
      date: getNowTime()
    };
    collDataFile.push(calldata);

    const historyContainer = document.getElementById('historyList');
    const item = buildHistoryItem(calldata.service, calldata.serviceNum, calldata.date);
    historyContainer.appendChild(item);
  });
}

// history clear container 
document.getElementById('clearHistoryBtn')
  .addEventListener('click', function () {
    document.getElementById('historyList').innerText = '';
  });