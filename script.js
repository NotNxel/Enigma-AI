// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
const yearAbout = document.getElementById("year-about");
if (yearAbout) {
  yearAbout.textContent = new Date().getFullYear();
}

// Toast notification
function toast(msg) {
  alert(msg);
}

// Get notified button
const notifyBtn = document.getElementById("notify-btn");
if (notifyBtn) {
  notifyBtn.addEventListener("click", () => {
    toast("Early access list will be live soon. For now, just remember: Enigma. The Unknown Awaits.");
  });
}

// See the vision button
const demoBtn = document.getElementById("demo-btn");
if (demoBtn) {
  demoBtn.addEventListener("click", () => {
    toast("Demo page is coming once the Enigma AI interface is ready.");
  });
}

// Join early list button
const joinCta = document.getElementById("join-cta");
if (joinCta) {
  joinCta.addEventListener("click", () => {
    toast("You'll be able to drop your email or GitHub soon. This is just the shell.");
  });
}

// Smooth scroll on nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Add a simple fade-in animation on page load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
