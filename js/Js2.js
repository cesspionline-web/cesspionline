function sendMessage() {
  const phoneNumber = '+265885883937'; // Replace with your WhatsApp number
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const whatsappMessage = `Hello, my name is ${name}. ${message}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, '_blank');
}