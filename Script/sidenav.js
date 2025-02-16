const new_list = document.querySelectorAll('.nav-main li');

// Iterate over each card
new_list.forEach((el) => {
  el.addEventListener('click', function () {
    new_list.forEach((card) => {
      card.classList.remove('active');
    });

    // Add 'active' class to the clicked card
    el.classList.add('active');
  });
});

