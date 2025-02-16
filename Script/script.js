// Select the elements
let addButton = document.getElementById("add-btn");
const moreIcons = document.getElementById("more-icons");

// Add click event listener to the add button
addButton.addEventListener("click", function(event) {
  
  event.preventDefault(); // Prevent default link behavior

  // Toggle the visibility of the more icons
  moreIcons.classList.toggle("show");
});

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('.dropdown-parent span');
    const childBox = dropdown.querySelector('.drop-down-child-box');
    const options = dropdown.querySelectorAll('.drop-down-child');

    // Toggle dropdown visibility
    dropdown.querySelector('.dropdown-parent').addEventListener('click', () => {
      childBox.classList.toggle('visible');
    });

    // Update the main span text when an option is clicked
    options.forEach((option) => {
      option.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        if (trigger) {
          trigger.innerText = option.innerText;
        }
        childBox.classList.remove('visible'); // Close dropdown after selection
      });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        childBox.classList.remove('visible');
      }
    });
  });
});

// new card active chat
// Select all the cards in the list
const cardlist = document.querySelectorAll('.info-card-list .info-card');

// Iterate over each card
cardlist.forEach((el) => {
  el.addEventListener('click', function () {
    cardlist.forEach((card) => {
      card.classList.remove('info-card-active');
    });

    // Add 'active' class to the clicked card
    el.classList.add('info-card-active');
  });
});
