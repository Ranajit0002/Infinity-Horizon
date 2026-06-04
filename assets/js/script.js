





// Chats Starts
 const sidebar = document.getElementById("sidebar");
      const menuToggle = document.getElementById("menu-toggle");
      const menuClose = document.getElementById("menu-close");
      const overlay = document.getElementById("mobile-overlay");

      function toggleSidebar() {
        sidebar.classList.toggle("-translate-x-full");
        overlay.classList.toggle("hidden");
      }

      menuToggle.addEventListener("click", toggleSidebar);
      menuClose.addEventListener("click", toggleSidebar);
      overlay.addEventListener("click", toggleSidebar);
// Chats Ends


// Dashboard Starts

// Dashboard Ends

