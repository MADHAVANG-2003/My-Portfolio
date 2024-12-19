const navbar = document.getElementById("navbar");
window.addEventListener("scroll",()=>{
  navbar.classList.toggle("sticky",window.scrollY > 80)
});

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
  const data = {
    from_name: "Madhavan",
    _firstName: document.getElementById("firstName").value,
    _lastName: document.getElementById("lastName").value,
    _email: document.getElementById("email").value,
    _message: document.getElementById("message").value,
    }
    emailjs.send("service_y1p2gjw","template_k28kjx8",data).then(()=>{
      alert("Message Send Successfully")
    });

})
const buttons = document.querySelectorAll('.port-btn');
const boxes = document.querySelectorAll('.portfolio-box');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');

        boxes.forEach(box => {
            if (category === 'all' || box.classList.contains(category)) {
                box.classList.remove('hidden');
            } else {
                box.classList.add('hidden');
            }
        });
    });
});
buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
});