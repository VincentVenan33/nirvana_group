// window.addEventListener('DOMContentLoaded', function() {
//     const mediaQuery = window.matchMedia('(max-width: 1025px)');
//     const screen1366Query = window.matchMedia('(min-width: 1026px) and (max-width: 1366px)');
//   const screen1280Query = window.matchMedia('(min-width: 1026px) and (max-width: 1280px)');

//     function handleMediaQuery(mediaQuery) {
//       if (mediaQuery.matches) {
//         // Ubah kelas dari col-1 menjadi col-2
//         const col1Elements = document.querySelectorAll('.row.about .col-1');
//         col1Elements.forEach(function(element) {
//           element.classList.remove('col-1');
//           element.classList.add('col-2');
//         });

//         // Ubah kelas dari col-3 menjadi col-7
//         const col3Element = document.querySelector('.row.about .col-3');
//         col3Element.classList.remove('col-3');
//         col3Element.classList.add('col-7');
//       } else if (screen1366Query.matches) {
//         // Code for screens with width between 1026px and 1366px (inclusive)

//         // Modify col-3 to col-4 for the specified element
//         const col3Element = document.querySelector('.row.about .col-3');
//         col3Element.classList.remove('col-3');
//         col3Element.classList.add('col-4');

//       } else if (screen1280Query.matches) {
//         // Code for screens with width between 1026px and 1280px (inclusive)

//         // Modify col-3 to col-4 for the specified element
//         const col3Element = document.querySelector('.row.about .col-3');
//         col3Element.classList.remove('col-3');
//         col3Element.classList.add('col-4');

//       }
//        else {
//         // Kembalikan kelas ke kondisi awal jika tidak memenuhi media query
//         const col2Elements = document.querySelectorAll('.row.about .col-2');
//         col2Elements.forEach(function(element) {
//           element.classList.remove('col-2');
//           element.classList.add('col-1');
//         });

//         const col7Element = document.querySelector('.row.about .col-7');
//         col7Element.classList.remove('col-7');
//         col7Element.classList.add('col-3');
//       }
//     }

//     handleMediaQuery(mediaQuery); // Panggil fungsi saat halaman dimuat

//     // Tambahkan event listener untuk menghandle perubahan pada media query
//     mediaQuery.addEventListener('change', handleMediaQuery);
//     screen1366Query.addEventListener('change', handleMediaQuery);
//     screen1280Query.addEventListener('change', handleMediaQuery);
//   });

// document.addEventListener("DOMContentLoaded", function() {
//   adjustLayout(); // Panggil fungsi saat DOM selesai dimuat
// });

// window.onload = function() {
//   adjustLayout(); // Panggil fungsi saat seluruh halaman selesai dimuat
// };



// function adjustLayout() {
//   const container = document.getElementById("container");
//   if (window.innerWidth >= 1025) {
//     // Menggunakan kode pertama saat lebar layar melebihi atau sama dengan 1024
//     container.innerHTML = `
//     <div class="text-start">
//     <img class="nirvana" src="assets/GROUP.png" alt="" />
//   </div>
//   <div class="row text-center">
//     <div class="col-1 p-0">
//       <img class="med-sos" src="assets/ig.png" alt="" />
//     </div>
//     <div class="col-1 p-0">
//       <img class="med-sos" src="assets/fb.png" alt="" />
//     </div>
//     <div class="col-3 p-0">
//       <h6 class="text-white">nirvanagroups</h6>
//     </div>
//     <div class="col-1 p-0">
//       <img class="med-sos" src="assets/wa.png" alt="" />
//     </div>
//     <div class="col-4 p-0">
//       <h6 class="nomor text-white">0822-4776-9351</h6>
//     </div>
//   </div>
//     `;
//   } else {
//     // Menggunakan kode kedua saat lebar layar kurang dari 1024
//     container.innerHTML = `
//     <div class="text-start">
//     <img class="nirvana" src="assets/GROUP.png" alt="" />
//   </div>
//   <div class="row text-center">
//     <div class="col-3 p-0">
//       <img class="med-sos" src="assets/ig.png" alt="" />
//     </div>
//     <div class="col-7 p-0">
//       <h6 class="text-white">nirvanagroups</h6>
//     </div>
//     <div class="col-3 p-0">
//       <img class="med-sos" src="assets/fb.png" alt="" />
//     </div>
//     <div class="col-7 p-0">
//       <h6 class="text-white">nirvanagroups</h6>
//     </div>
//     <div class="col-3 p-0">
//       <img class="med-sos" src="assets/wa.png" alt="" />
//     </div>
//     <div class="col-7 p-0">
//       <h6 class="nomor text-white">0822-4776-9351</h6>
//     </div>
//   </div>
//     `;
//   }
// }

// // Panggil fungsi adjustLayout saat halaman dimuat dan saat ukuran layar berubah
// window.addEventListener("load", adjustLayout);
// window.addEventListener("resize", adjustLayout);

window.addEventListener('DOMContentLoaded', function() {
    const mediaQuery = window.matchMedia('(max-width: 1367px)');
  const row = container.querySelector('.row');
function handleMediaQuery(mediaQuery) {
  // const container = document.getElementById('container');
  // const row = container.querySelector('.row');

  if (mediaQuery.matches) {
    // Layar melebihi 1024px
    row.innerHTML = `
    <div class="col-3 p-0">
    <img class="med-sos" src="assets/ig.png" alt="" />
  </div>
  <div class="col-7 p-0">
    <h6 class="text-white">nirvanagroups</h6>
  </div>
  <div class="col-3 p-0">
    <img class="med-sos" src="assets/fb.png" alt="" />
  </div>
  <div class="col-7 p-0">
    <h6 class="text-white">nirvanagroups</h6>
  </div>
  <div class="col-3 p-0">
    <img class="med-sos" src="assets/wa.png" alt="" />
  </div>
  <div class="col-7 p-0">
    <h6 class="nomor text-white">0822-4776-9351</h6>
  </div>
    `;
  } else {
    // Layar kurang dari atau sama dengan 1024px
    row.innerHTML = `
      <div class="col-1 p-0">
        <img class="med-sos" src="assets/ig.png" alt="" />
      </div>
      <div class="col-1 p-0">
        <img class="med-sos" src="assets/fb.png" alt="" />
      </div>
      <div class="col-3 p-0">
        <h6 class="text-white">nirvanagroups</h6>
      </div>
      <div class="col-1 p-0">
        <img class="med-sos" src="assets/wa.png" alt="" />
      </div>
      <div class="col-4 p-0">
        <h6 class="nomor text-white">0822-4776-9351</h6>
      </div>
    `;
  }
}
    handleMediaQuery(mediaQuery); // Panggil fungsi saat halaman dimuat

    // Tambahkan event listener untuk menghandle perubahan pada media query
    mediaQuery.addEventListener('change', handleMediaQuery);
  });

// const mediaQuery = window.matchMedia('(max-width: 1025px)');

// // Panggil fungsi untuk mengatur tampilan awal berdasarkan lebar layar
// handleMediaQuery(mediaQuery);

// // Tambahkan listener untuk memantau perubahan lebar layar
// mediaQuery.addListener(handleMediaQuery);

