// Add this script to your JavaScript file
window.addEventListener("scroll", () => {
  const leftContainers = document.querySelectorAll(".container-left"); // Replace with your left container class
  const rightContainers = document.querySelectorAll(".container-right"); // Replace with your right container class

  leftContainers.forEach((container) => {
    const rect = container.getBoundingClientRect();

    // Check if the left container is in the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      container.classList.add("slide-in-left");
    }
  });

  rightContainers.forEach((container) => {
    const rect = container.getBoundingClientRect();

    // Check if the right container is in the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      container.classList.add("slide-in-right");
    }
  });
});

window.addEventListener("scroll", () => {
  const container = document.querySelector(".why-us"); // Use the correct variable name
  // Check if the container exists
  if (container) {
    // {{ edit_1 }}
    const rect = container.getBoundingClientRect();

    // Check if the container is in the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      container.classList.add("fade-in");
      // Optionally, remove the class after it has slid in
      //window.removeEventListener("scroll", checkSlide); // Uncomment if you want to stop checking after the first slide-in
    }
  } // {{ edit_1 }}
});
