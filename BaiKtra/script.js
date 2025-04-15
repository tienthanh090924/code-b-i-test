document.querySelectorAll('nav a[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('data-target');
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');
    });
  });
  