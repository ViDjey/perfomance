
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
  const elem_ofset = document.getElementsByClassName("contact")[0].offsetTop;
  stickyHeader.textContent = (contacts.scrollTop / elem_ofset).toFixed();
});

addContacts();