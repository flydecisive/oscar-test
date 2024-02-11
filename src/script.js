document.addEventListener("DOMContentLoaded", () => {
  const headerButton = document.querySelector(".button-header");

  if (headerButton) {
    headerButton.addEventListener("click", () => {
      handleHeaderButton("#projects");
    });
  }

  const contactButtons = document.querySelectorAll(".contact-button");

  contactButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "./contact.html";
    });
  });
});

function handleHeaderButton(anchorSelector) {
  const element = document.querySelector(anchorSelector);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
