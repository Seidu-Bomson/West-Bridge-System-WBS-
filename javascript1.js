document.getElementById('quoteForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
  
    if (!name || !email || !service) {
      alert('Please fill in all required fields.');
      return;
    }
  
    alert('Quote request submitted successfully!');
    this.reset();
  });
  
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle?.addEventListener('click', () => {
    mainNav.querySelector('ul').classList.toggle('show');
  });