/* ============================================================
   Mountain House Hub — Shared Scripts (Enhanced)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Page transition overlay ──────────────────────────────
  const overlay = document.getElementById('page-transition');
  if (overlay) {
    // Page just loaded — panel is off-screen below; snap it to covering,
    // then immediately slide it off upward so it feels like a reveal
    overlay.style.transition = 'none';
    overlay.classList.add('covering');
    overlay.classList.remove('uncovering');
    // Force reflow so the snap registers before we re-enable transitions
    void overlay.offsetHeight;
    overlay.style.transition = '';
    // Slide the panel off upward
    requestAnimationFrame(() => {
      overlay.classList.remove('covering');
      overlay.classList.add('uncovering');
    });

    // Intercept all internal nav clicks
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('tel') || href.startsWith('mailto')) return;
      link.addEventListener('click', e => {
        e.preventDefault();
        // Reset so panel comes from bottom
        overlay.style.transition = 'none';
        overlay.classList.remove('covering', 'uncovering');
        void overlay.offsetHeight;
        overlay.style.transition = '';
        // Slide panel up to cover screen
        overlay.classList.add('covering');
        setTimeout(() => { window.location.href = href; }, 560);
      });
    });
  }

  // ── Scroll progress bar ───────────────────────────────────
  const bar = document.getElementById('scroll-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (scrolled / max * 100) + '%';
    }, { passive: true });
  }


  // ── Navbar scroll behavior ───────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
    const links = navbar.querySelectorAll('.nav-links a');
    const path  = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(a => {
      const href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
    });
  }

  // ── Mobile nav toggle ────────────────────────────────────
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }

  // ── Button ripple effect ──────────────────────────────────
  document.querySelectorAll('.btn, .filter-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect   = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size   = Math.max(rect.width, rect.height) * 2;
      ripple.className = 'ripple';
      ripple.style.cssText = `
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  // ── Magnetic buttons (hero area) ─────────────────────────
  document.querySelectorAll('.btn-primary, .btn-gold').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width  / 2) * 0.22;
      const y = (e.clientY - rect.top  - rect.height / 2) * 0.22;
      this.style.transform = `translate(${x}px, ${y}px) translateY(-2px)`;
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // ── Card 3D tilt on hover ─────────────────────────────────
  document.querySelectorAll('.resource-card, .spotlight-card, .category-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      this.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px) scale(1.01)`;
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
      setTimeout(() => { this.style.transition = ''; }, 500);
    });
  });

  // ── Scroll reveal (all pages) ────────────────────────────
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  }

  // ── Auto-stagger grid children (homepage) ────────────────
  document.querySelectorAll('.grid-3, .grid-4').forEach(grid => {
    const children = grid.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    children.forEach((child, i) => {
      // Only assign if no delay class already set
      if (![...child.classList].some(c => c.startsWith('reveal-delay-'))) {
        const delay = Math.min(i, 5); // cap at delay-5
        if (delay > 0) child.classList.add(`reveal-delay-${delay}`);
      }
    });
  });

  // ── Hero parallax + text fade (homepage only) ────────────
  const heroCanvas  = document.getElementById('hero-canvas');
  const heroContent = document.querySelector('.hero-content');
  const heroSection = document.querySelector('.hero');
  const heroScroll  = document.querySelector('.hero-scroll');

  if (heroSection && heroCanvas) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
      let ticking = false;

      window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          const heroH = heroSection.offsetHeight;

          // Canvas drifts at 40% of scroll speed (parallax depth)
          heroCanvas.style.transform = `translateY(${y * 0.4}px)`;

          // Hero text rises and fades as you scroll into the next section
          if (heroContent) {
            const progress = Math.min(y / (heroH * 0.65), 1);
            heroContent.style.transform  = `translateY(${y * 0.22}px)`;
            heroContent.style.opacity    = 1 - progress * 1.1;
          }

          // Scroll indicator fades quickly
          if (heroScroll) {
            heroScroll.style.opacity = Math.max(0, 1 - y / 180);
          }

          ticking = false;
        });
      }, { passive: true });
    }
  }

  // ── Counter animation ─────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el   = entry.target;
        const end  = parseInt(el.getAttribute('data-count'));
        const step = end / (1400 / 16);
        let cur = 0;
        const timer = setInterval(() => {
          cur += step;
          if (cur >= end) { cur = end; clearInterval(timer); }
          el.textContent = Math.floor(cur) + (el.getAttribute('data-suffix') || '');
        }, 16);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

  // ── Animated gradient background on hero ─────────────────
  const hero = document.querySelector('.hero');
  if (hero) {
    let angle = 0;
    setInterval(() => {
      angle = (angle + 0.3) % 360;
      hero.style.setProperty('--grad-angle', angle + 'deg');
    }, 50);
  }

  // ── Floating particle burst on CTA click ─────────────────
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (window.location.href.includes(this.getAttribute('href'))) return;
      for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.className = 'click-particle';
        const angle = (i / 10) * 360;
        const dist  = 50 + Math.random() * 40;
        p.style.cssText = `
          left:${e.clientX}px; top:${e.clientY}px;
          --tx:${Math.cos(angle * Math.PI/180) * dist}px;
          --ty:${Math.sin(angle * Math.PI/180) * dist}px;
          background:${Math.random() > 0.5 ? '#3b82f6' : '#94a3b8'};
        `;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 700);
      }
    });
  });

});