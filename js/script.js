window.addEventListener('DOMContentLoaded', function() {
    const mediaQuery = window.matchMedia('(max-width: 1367px)');
  const row = container.querySelector('.row');
function handleMediaQuery(mediaQuery) {

  if (mediaQuery.matches) {
    // Layar melebihi 1024px
    row.innerHTML = `
    <div class="col-3 p-0 pb-2">
    <img class="med-sos" src="assets/ig.png" alt="" />
  </div>
  <div class="col-7 p-0 text-start">
    <h6 class="text-white">nirvanagroups</h6>
  </div>
  <div class="col-3 p-0 pb-2">
    <img class="med-sos" src="assets/fb.png" alt="" />
  </div>
  <div class="col-7 p-0 text-start">
    <h6 class="text-white">nirvanagroups</h6>
  </div>
  <div class="col-3 p-0 pb-2">
    <img class="med-sos" src="assets/wa.png" alt="" />
  </div>
  <div class="col-7 p-0 text-start">
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
