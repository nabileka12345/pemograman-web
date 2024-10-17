function input(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
        display.classList.add('display-change');  // Tambahkan kelas animasi
        setTimeout(() => {
            display.classList.remove('display-change');  // Hapus setelah animasi selesai
        }, 500); // Durasi sesuai dengan animasi di CSS
    } catch (e) {
        display.value = 'Error';
    }
}
