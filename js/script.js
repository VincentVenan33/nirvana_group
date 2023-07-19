window.addEventListener('DOMContentLoaded', function() {
    const mediaQuery = window.matchMedia('(max-width: 1025px)');
  
    function handleMediaQuery(mediaQuery) {
      if (mediaQuery.matches) {
        // Ubah kelas dari col-1 menjadi col-2
        const col1Elements = document.querySelectorAll('.row.about .col-1');
        col1Elements.forEach(function(element) {
          element.classList.remove('col-1');
          element.classList.add('col-2');
        });
  
        // Ubah kelas dari col-3 menjadi col-7
        const col3Element = document.querySelector('.row.about .col-3');
        col3Element.classList.remove('col-3');
        col3Element.classList.add('col-7');
      } else {
        // Kembalikan kelas ke kondisi awal jika tidak memenuhi media query
        const col2Elements = document.querySelectorAll('.row.about .col-2');
        col2Elements.forEach(function(element) {
          element.classList.remove('col-2');
          element.classList.add('col-1');
        });
  
        const col7Element = document.querySelector('.row.about .col-7');
        col7Element.classList.remove('col-7');
        col7Element.classList.add('col-3');
      }
    }
  
    handleMediaQuery(mediaQuery); // Panggil fungsi saat halaman dimuat
  
    // Tambahkan event listener untuk menghandle perubahan pada media query
    mediaQuery.addEventListener('change', handleMediaQuery);
  });
  
