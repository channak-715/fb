document.addEventListener("DOMContentLoaded", function() {
    // Get references to the icons and card menus
    var menuIcons = document.querySelectorAll('.menu-icon');
    var cardMenus = document.querySelectorAll('.card-menu');

    // Function to toggle card menu visibility
    function toggleCardMenu(menuIndex) {
      if (cardMenus[menuIndex].style.display === 'block') {
        cardMenus[menuIndex].style.display = 'none';
      } else {
        // Hide all other card menus before showing the clicked menu
        for (var i = 0; i < cardMenus.length; i++) {
          if (i !== menuIndex) {
            cardMenus[i].style.display = 'none';
          }
        }
        cardMenus[menuIndex].style.display = 'block';
      }
    }

    // Attach click event listeners to each icon
    menuIcons.forEach(function(icon, index) {
      icon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        toggleCardMenu(index);
      });
    });

    // Hide card menus when clicking anywhere outside them
    document.addEventListener('click', function(event) {
      cardMenus.forEach(function(menu) {
        if (!menu.contains(event.target)) {
          menu.style.display = 'none';
        }
      });
    });
  });

  document.getElementById("currentYear").innerText = new Date().getFullYear();


/* diplay see more */
  function toggleText() {
    var textContainer = document.querySelector('.content');
    var showMore = document.querySelector('.button');
    textContainer.style.height = 'auto';
    showMore.style.display = 'none';
}


