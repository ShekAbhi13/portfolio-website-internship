function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzmxqVGTQwBLP_eJYC2YOjxkvBzQtsdgAeFbxYvZz3zC7nUfVmcKRUcE3I6J3LvfqSHJQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementsById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message sent successfully"})
      setTimeout(function() {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })