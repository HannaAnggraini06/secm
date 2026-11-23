// Ubah kata rahasia ini menjadi kata yang hanya kalian berdua tahu.


const SECRET_WORD = "18/07/2025";
const SECRET_MESSAGE = "Kalau Mas membaca ini, berarti Mas udah sampai di akhir pesan adek. Terima kasih sudah menjadi rumah untuk banyak cerita. Adek sayangggggggggg Mas, hari ini, besok, dan selamanya. ♡";

const audio = document.getElementById('music');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
const trackButton = document.getElementById('trackButton');
const record = document.getElementById('record');
function updateMusic(playing) {
  musicLabel.textContent = playing ? 'Pause music' : 'Play music';
  trackButton.innerHTML = playing ? 'Ⅱ &nbsp; Pause our song' : '▶ &nbsp; Play our song';
  record.classList.toggle('playing', playing);
}
async function toggleMusic() {
  if (audio.paused) {
    try { await audio.play(); updateMusic(true); }
    catch { alert('Tambahkan file lagu MP3 ke folder assets dengan nama our-song.mp3 terlebih dahulu.'); }
  } else { audio.pause(); updateMusic(false); }
}
musicToggle.addEventListener('click', toggleMusic);
trackButton.addEventListener('click', toggleMusic);
audio.addEventListener('pause', () => updateMusic(false));
audio.addEventListener('play', () => updateMusic(true));

document.querySelectorAll('.reason').forEach(card => card.addEventListener('click', () => {
  document.getElementById('modalText').textContent = card.dataset.message;
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal').setAttribute('aria-hidden', 'false');
}));
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal').setAttribute('aria-hidden', 'true');
}
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.getElementById('secretForm').addEventListener('submit', e => {
  e.preventDefault();
  const entered = document.getElementById('secretInput').value.trim().toLowerCase();
  const output = document.getElementById('secretMessage');
  if (entered === SECRET_WORD.toLowerCase()) output.textContent = SECRET_MESSAGE;
  else output.textContent = 'AOKWOKWOKW SALAHHH, COBA LAGIII SAYAANGGGG ♡';
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
