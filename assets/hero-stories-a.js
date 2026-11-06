(() => {
  const data = document.getElementById('hero-stories');
  const video = document.querySelector('[data-story-video]');
  if (!data || !video) return;
  const stories = JSON.parse(data.textContent);
  const tabs = [...document.querySelectorAll('[data-story-index]')];
  const toggle = document.querySelector('[data-story-toggle]');
  const panel = document.getElementById('hero-story-panel');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = Boolean(navigator.connection?.saveData);
  let current = 0;
  let requested = 0;
  let manuallyPaused = reduceMotion || saveData;
  let visible = true;
  let fadeTimer;
  video.muted = true;
  function playLabel() {
    toggle.setAttribute('aria-label', video.paused ? 'Play research demonstration' : 'Pause research demonstration');
    toggle.innerHTML = video.paused ? '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1l8 5-8 5z"/></svg>' : '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1h3v10H2zM8 1h3v10H8z"/></svg>';
  }
  function playIfAllowed() {
    if (!manuallyPaused && visible && !document.hidden) video.play().catch(playLabel);
  }
  function setStory(index) {
    current = index;
    requested = index;
    const story = stories[index];
    video.pause();
    video.src = story.src;
    video.poster = story.poster;
    video.setAttribute('aria-label', story.alt);
    document.querySelector('[data-story-line]').textContent = story.line;
    document.querySelector('[data-story-accent]').textContent = story.accent;
    const field = document.querySelector('[data-story-field]');
    field.firstChild.textContent = story.field;
    field.href = story.href;
    document.querySelector('[data-story-copy]').textContent = story.copy;
    const tags = document.querySelector('[data-story-tags]');
    if (tags) tags.replaceChildren(...(story.tags || []).map(text => {
      const tag = document.createElement('span');
      tag.textContent = text;
      return tag;
    }));
    document.querySelector('[data-story-caption]').textContent = story.caption;
    document.querySelector('[data-story-credit]').textContent = story.credit;
    document.querySelector('[data-story-count]').textContent = `${String(index+1).padStart(2,'0')} / ${String(stories.length).padStart(2,'0')}`;
    const paper = document.querySelector('[data-story-paper]');
    paper.hidden = !story.paper;
    if (story.paper) paper.href = story.paper;
    tabs.forEach((button,i) => {
      button.setAttribute('aria-pressed', String(i === index));
      button.style.setProperty('--story-progress', '0%');
    });
    video.load();
    panel.classList.remove('is-changing');
    playIfAllowed();
    playLabel();
  }
  function choose(index) {
    requested = index;
    clearTimeout(fadeTimer);
    if (reduceMotion) setStory(index);
    else {
      panel.classList.add('is-changing');
      video.pause();
      fadeTimer = setTimeout(() => setStory(index), 160);
    }
  }
  tabs.forEach((button,index) => {
    button.addEventListener('click', () => choose(index));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index+1)%stories.length;
      else if (event.key === 'ArrowLeft') next = (index+stories.length-1)%stories.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = stories.length-1;
      else return;
      event.preventDefault(); choose(next); tabs[next].focus();
    });
  });
  document.querySelector('[data-story-prev]').addEventListener('click', () => choose((requested+stories.length-1)%stories.length));
  document.querySelector('[data-story-next]').addEventListener('click', () => choose((requested+1)%stories.length));
  toggle.addEventListener('click', () => {
    manuallyPaused = !video.paused;
    if (manuallyPaused) video.pause();
    else video.play().catch(playLabel);
  });
  video.addEventListener('play', playLabel);
  video.addEventListener('pause', playLabel);
  video.addEventListener('timeupdate', () => {
    const fraction = Number.isFinite(video.duration) && video.duration > 0 ? video.currentTime/video.duration : 0;
    tabs[current].style.setProperty('--story-progress', `${Math.min(100,fraction*100)}%`);
  });
  video.addEventListener('ended', () => {
    if (!manuallyPaused && !reduceMotion && !saveData && visible && !document.hidden) choose((current+1)%stories.length);
  });
  video.addEventListener('error', () => {
    manuallyPaused = true;
    playLabel();
  });
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible) playIfAllowed();
    else video.pause();
  }, {threshold:.12}).observe(video);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
    else playIfAllowed();
  });
  playLabel();
  playIfAllowed();
})();
