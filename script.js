const amung = document.getElementById("amung");
const fire = document.getElementById("fire");

document.addEventListener("keydown", function (e) {
  jump();
});
document.addEventListener("touchstart", function (e) {
  jump();
});
function jump() {
  if (amung.classList != "jump") {
    amung.classList.add("jump");
  }
  setTimeout(function () {
    amung.classList.remove("jump");
  }, 300);
}
let isAmungAlive = setInterval(() => {
  let amungTop = parseInt(
    window.getComputedStyle(amung).getPropertyValue("top")
  );
  let fireLeft = parseInt(
    window.getComputedStyle(fire).getPropertyValue("left")
  );

  if (fireLeft < 50 && fireLeft > 0 && amungTop >= 140) {
    alert("Оюн бутту тип");
  }
}, 10);
