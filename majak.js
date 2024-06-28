document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');
    const btn = document.getElementById('revealButton');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = 'majak.jpg'; 
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
