// ============================================================
// Internationalization (Bilingual EN / AR)
// ============================================================

export type Lang = 'en' | 'ar';

const STORAGE_KEY = 'ka-lang';

export function getLang(): Lang {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') return stored;
  }
  return 'en';
}

export function setLang(lang: Lang): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang);
  }
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl-active', lang === 'ar');

  // Update all translatable elements
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const text = lang === 'ar' ? el.dataset.i18nAr : el.dataset.i18nEn;
    if (text !== undefined && key) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        (el as HTMLInputElement).placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update page title if data-i18n-title exists
  const titleEl = document.querySelector('title');
  if (titleEl && titleEl.dataset.i18nAr && titleEl.dataset.i18nEn) {
    titleEl.textContent = lang === 'ar' ? titleEl.dataset.i18nAr : titleEl.dataset.i18nEn;
  }
}

export function toggleLang(): Lang {
  const next = getLang() === 'en' ? 'ar' : 'en';
  setLang(next);
  return next;
}
