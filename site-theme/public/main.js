/* Shared Sferix Family navigation for DocFX modern template. */
export default {
  start: () => {
    const install = () => {
      if (document.querySelector('.sferix-family-nav')) return;
      const header = document.querySelector('header');
      if (!header) return;
      const nav = header.querySelector('nav') || header;
      const themeButton = [...header.querySelectorAll('button')].find(el => /theme|dark|light|color mode/i.test([el.getAttribute('aria-label'), el.getAttribute('title'), el.getAttribute('data-bs-original-title')].filter(Boolean).join(' ')));
      const host = themeButton?.closest('.nav-item') || themeButton?.parentElement;
      const target = host?.parentElement || header.querySelector('.navbar-nav') || nav;
      const family = document.createElement('details');
      family.className = 'sferix-family-nav';
      family.innerHTML = `<summary aria-label="Sferix Family product navigation"><span>Sferix Family</span><span aria-hidden="true" class="sferix-chevron">▾</span></summary><div class="sferix-family-menu" role="group" aria-label="Sferix Family products"><a class="sferix-family-item" href="https://frankenspo.sferix.app/"><img src="/assets/family/core.svg" width="24" height="24" alt="" loading="lazy"><span>FrankenSPO</span></a><a class="sferix-family-item" href="https://frankenspo-server.sferix.app/"><img src="/assets/family/server.svg" width="24" height="24" alt="" loading="lazy"><span>FrankenSPO MiddleTier Server</span></a><a class="sferix-family-item" href="https://frankenspo-webapi.sferix.app/"><img src="/assets/family/webapi.svg" width="24" height="24" alt="" loading="lazy"><span>FrankenSPO WebAPI</span></a></div>`;
      if (host && target.contains(host)) target.insertBefore(family, host);
      else target.appendChild(family);
      document.addEventListener('click', (event) => { if (!family.contains(event.target)) family.open = false; });
      document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && family.open) { family.open = false; family.querySelector('summary')?.focus(); } });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, { once: true });
    else install();
  }
};
