(function() {
      const header = document.getElementById('header');
      const navToggle = document.getElementById('navToggle');
      const navMenu = document.getElementById('navMenu');

      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('show')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });

      document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('show');
          const icon = navToggle.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        });
      });

      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });

      // smooth scroll for in-page anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    })();