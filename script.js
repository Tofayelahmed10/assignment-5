// console.log('js file connected');


// Navbar
const heartCountEl = document.getElementById('heartCount')
const coinCountEl  = document.getElementById('coinCount')
const copyCountEl  = document.getElementById('copyCount')
const historyList     = document.getElementById('historyList')
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// help from chat gpt
function getNowTime() {
  return new Date().toLocaleTimeString([], { hour12: false });
}


document.querySelectorAll('.heart-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    const current = parseInt(heartCountEl.innerText, 10) || 0;
    heartCountEl.innerText = current + 1
  });
})


document.querySelectorAll('.copy-btn').forEach(function(btn){
  btn.addEventListener('click', async function(){
    const card   = btn.closest('.hotline-card')
    const number = card.querySelector('.hotline-number').innerText.trim();
    try {
      await navigator.clipboard.writeText(number);
      alert('Copied: ' + number);
      const cc = parseInt(copyCountEl.innerText, 10) || 0;
      copyCountEl.innerText = cc + 1
    } catch(e) {
      alert('Copy failed. Please allow clipboard permission.')
    }
  })
});


document.querySelectorAll('.call-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    const card   = btn.closest('.hotline-card')
    const name   = card.querySelector('.service-name').innerText.trim()
    const number = card.querySelector('.hotline-number').innerText.trim()

    let coins = parseInt(coinCountEl.innerText, 10) || 0;
    if (coins < 20) {
      alert('Not enough coins (need 20).')
      return
    }
    coins = coins - 20;
    coinCountEl.innerText = coins;

    alert('Calling ' + name + ' ' + number + ' ...')

    // add to history
    const li = document.createElement('li')
    const p1 = document.createElement('p');
    const p2 = document.createElement('p')
    const t  = document.createElement('span');

    p1.className = 'font-medium';
    p2.className = 'text-sm text-gray-500'
    t.className  = 'text-sm text-gray-500'

    p1.innerText = name;
    p2.innerText = number
    t.innerText  = getNowTime()

    li.appendChild(p1)
    li.appendChild(p2)
    li.appendChild(t)
    historyList.appendChild(li)
  })
})


clearHistoryBtn.addEventListener('click', function(){
  historyList.innerHTML = '';
})
