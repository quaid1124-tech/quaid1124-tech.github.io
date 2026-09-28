(() => {
  let stored;
  try { stored = localStorage.getItem('dracaena-language'); } catch {}
  const requested = new URLSearchParams(location.search).get('lang');
  const initial = ['ja','en'].includes(requested) ? requested : stored === 'en' ? 'en' : 'ja';
  function applyLanguage(language) {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-ja][data-en]').forEach(el => { el.textContent = el.dataset[language]; });
    document.querySelectorAll('[data-language]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.language === language)));
    try { localStorage.setItem('dracaena-language', language); } catch {}
  }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
  applyLanguage(initial);
})();
