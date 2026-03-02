const tryButton = document.getElementById(
  "try-btn"
) as HTMLButtonElement | null;
const reveal = document.getElementById("try-reveal") as HTMLElement | null;

if (tryButton && reveal) {
  tryButton.addEventListener("click", () => {
    reveal.classList.add("visible");
    tryButton.disabled = true;
    tryButton.textContent = "READY";
  });
}
