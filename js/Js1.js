function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const whatsappMessage = `Hello my name is ${name}, ${message}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/+265885883937?text=${encodedMessage}`;

  window.open(whatsappLink, "_blank");
}