document.addEventListener("DOMContentLoaded", function () {
  // Set initial values (format: yyyy-MM-ddTHH:mm)
  document.getElementById("appointment").value = "2024-08-13T15:00";
  document.getElementById("appointment2").value = "2024-08-13T15:00";
});

// faq
document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", (event) => {
    const answer = item.nextElementSibling;
    const cl = item.querySelector(".close");
    const op = item.querySelector(".open");
    if (answer.style.display === "block") {
      answer.style.display = "none";
      cl.style.display = "none";
      op.style.display = "block";
    } else {
      answer.style.display = "block";
      cl.style.display = "block";
      op.style.display = "none";
    }
  });
});

function toggleMenu() {
  var menu = document.getElementById('hamburgerMenuLinks');
  var closeButton = document.querySelector('.close_btn_menu');
  // console.log("click functionality!");

  // Toggle the menu visibility
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    closeButton.style.display = 'none'; // Hide the close button when menu is hidden
  } else {
    menu.style.display = 'block';
    closeButton.style.display = 'block'; // Show the close button when menu is visible
  }
}

// functionality for quick book button 
function toggleQuickBook() {
  var content = document.getElementById('quickBookContent');
  var summerPromotion = document.querySelector('.summer_promotion_container');
  console.log("quick book button called!");

  if (content.classList.contains('show')) {
    content.classList.remove('show');
    summerPromotion.classList.remove('show-content');
  } else {
    content.classList.add('show');
    summerPromotion.classList.add('show-content');
  }
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set default tab
document.getElementById("sameAsPickUp").style.display = "block";










