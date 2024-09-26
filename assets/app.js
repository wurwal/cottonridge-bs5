var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
   
  })
})


document.querySelector('.link-more').addEventListener('click', function() {
    const moreContent = document.querySelector('.more');
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        this.textContent = 'Less info...';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'More info...';
    }
});
