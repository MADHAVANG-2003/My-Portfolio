const navbar = document.getElementById("navbar");
window.addEventListener("scroll",()=>{
  navbar.classList.toggle("sticky",window.scrollY > 180)
});
let posX = 0,
  posY = 0;

let mouseX = 0,
  mouseY = 0;

gsap.to(".cursor", {
  duration: 0.018,
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 8;
    posY += (mouseY - posY) / 8;

    gsap.set(".cursor", {
      css: {
        left: posX - 15,
        top: posY -10
      }
    });
  }
});

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

gsap.set(".ball", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
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


