
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress");

  bars.forEach(bar => {
    const target = bar.getAttribute("data-percent");
    bar.style.width = target + "%";
  });
});
