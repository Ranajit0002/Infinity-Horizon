
const toggleBtn = document.getElementById('toggleSidebar');
const closeBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('appSidebar');
const overlay = document.getElementById('sidebarOverlay');

function toggleSidebarMenu() {
  sidebar.classList.toggle('-translate-x-full');
  overlay.classList.toggle('hidden');
}

if (toggleBtn && closeBtn && sidebar && overlay) {
  toggleBtn.addEventListener('click', toggleSidebarMenu);
  closeBtn.addEventListener('click', toggleSidebarMenu);
  overlay.addEventListener('click', toggleSidebarMenu);
}