  // Ambil elemen tombol menu dan daftar tautan
  const menuBtn = document.getElementById('menu-btn');
  const navLink = document.getElementById('nav-link');
  const icon = menuBtn.querySelector('i');

  // Tambahkan event listener untuk klik pada tombol menu
  menuBtn.addEventListener('click', () => {
      // Toggle class 'open' untuk menampilkan atau menyembunyikan menu
    navLink.classList.toggle('open');
       // Toggle ikon menu antara hamburger dan silang
    icon.classList.toggle('bx-menu');
    icon.classList.toggle('bx-x'); // Ganti dengan ikon silang
  });

   // Ambil semua item menu
   const menuItems = document.querySelectorAll('.menu-item');

   // Tambahkan event listener untuk setiap item menu
   menuItems.forEach(item => {
       item.addEventListener('click', (e) => {
           // Mencegah perilaku default tautan
           e.preventDefault();

           // Hapus kelas 'active' dari semua item
       })
})