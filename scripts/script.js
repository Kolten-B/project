// Example script to handle the subscription form
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing, ${email}!`);
    
    // Store email in localStorage
    localStorage.setItem('subscriberEmail', email);
});
