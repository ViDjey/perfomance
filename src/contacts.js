
const contacts = document.getElementsByClassName("contacts")[0], stickyHeader = document.getElementsByClassName("stickyHeader")[0];
function addContacts() {
  let str='';
  for (let i = 0; i < 50000; i++) {
    str += `<div class="contact">${i}</div>`;
  }
  contacts.insertAdjacentHTML("beforeend", str);
}

let ticking = false;
contacts.addEventListener("scroll", (e) => {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      const items = Array.from(contacts.getElementsByClassName("contact"));
      const topItemIndex = items.findIndex(
        (el) => contacts.scrollTop - el.offsetTop <= -18
      );
      stickyHeader.textContent = items[topItemIndex].textContent;
      ticking = false;
    });
    ticking = true;
  }
});

addContacts();