let image_urls = [
    './assets/background-images/1.jpg',
    './assets/background-images/2.jpg',
    './assets/background-images/3.jpg',
    './assets/background-images/4.jpg',
    './assets/background-images/5.jpg',
    './assets/background-images/6.jpg',
    './assets/background-images/7.jpg',
    './assets/background-images/8.jpg',
    './assets/background-images/9.jpg',
    './assets/background-images/10.jpg',
    './assets/background-images/11.jpg',
    './assets/background-images/12.jpg',
    './assets/background-images/13.png',
    './assets/background-images/14.png',
    './assets/background-images/15.png',
    './assets/background-images/16.png',
    './assets/background-images/17.png',
    './assets/background-images/18.png',
    './assets/background-images/19.png',
];

document.addEventListener('DOMContentLoaded', function () {
    let last_image_index = -1; // Inisialisasi dengan nilai di luar rentang indeks gambar

    function getRandomImageIndex() {
        let random_index;
        do {
            random_index = Math.floor(Math.random() * image_urls.length);
        } while (random_index === last_image_index); // Ulangi sampai indeks yang berbeda ditemukan
        last_image_index = random_index; // Simpan indeks gambar terakhir
        return random_index;
    }

    let containerMain = document.getElementById('container-main');

    function changeBackgroundImage() {
        let random_index = getRandomImageIndex(); // Ambil indeks gambar baru
        containerMain.style.backgroundImage = 'url(' + image_urls[random_index] + ')';
    }

    // Inisialisasi latar belakang awal
    changeBackgroundImage();

    // Membuat interval untuk mengubah gambar secara berkala
    setInterval(changeBackgroundImage, 30000); // Waktu Ganti background gambar setiap 20 detik

    document.getElementById("search-button").addEventListener("click", search);

    document.getElementById("search").addEventListener("keydown", function (e) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            search();
        }
    });

    time_now();
}, false);


function search() {
    let query = document.getElementById("search").value;
    if (query.replace(/\s/g, '').length) {
        if (!is_valid_url(query)) {
            query = "https://www.google.com/search?q=" + query;
        }
        window.location.replace(query);
    }
    return null;
}


function is_valid_url(_string) {
    const match_pattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
    return match_pattern.test(_string);
}

function time_now() {
    let time = new Date();
    document.getElementById('time-now').innerHTML = time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    setTimeout(time_now, 1000);
}
