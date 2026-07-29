const wishButton = document.getElementById('wishButton');
const toast = document.getElementById('toast');
let timer;

wishButton.addEventListener('click', () => {
  toast.classList.add('show');
  wishButton.textContent = '生日魔法生效中 ♥';
  clearTimeout(timer);
  timer = setTimeout(() => {
    toast.classList.remove('show');
    wishButton.textContent = '点击领取生日魔法 ✦';
  }, 3200);
});
