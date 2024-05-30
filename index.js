let diceRandomButton = document.getElementById('dice_random_button');
diceRandomButton.addEventListener('click', function() {
    let x = 6;
    let randomNumber = Math.floor( Math.random() * x ) + 1;
    let hasil = document.getElementById('hasil');

    // Menambahkan kelas animasi
    hasil.classList.remove('animate');
    void hasil.offsetWidth; // Trik untuk memicu kembali animasi
    hasil.classList.add('animate');

    hasil.innerHTML = randomNumber;
})