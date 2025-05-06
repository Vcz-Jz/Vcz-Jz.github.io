fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('inventor-list');
    data.inventors.forEach(inv => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${inv.image}" alt="${inv.name}" />
        <h2>${inv.name}</h2>
        <p>${inv.description}</p>
        <button onclick="playAudio('audio-${inv.id}')">🔊 Hear About ${inv.name}</button>
        <button onclick="pauseAudio('audio-${inv.id}')">⏸ Pause</button>
        <audio id="audio-${inv.id}" src="${inv.audio}"></audio>
      `;
      list.appendChild(card);
    });
  });

function playAudio(audioId) {
  const audio = document.getElementById(audioId);
  audio.play();
}

function pauseAudio(audioId) {
  const audio = document.getElementById(audioId);
  audio.pause();  
  audio.currentTime = 0;  
}
