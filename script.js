// =====================================================
// SISTEM SLIDE UNDANGAN
// Ali & Tiara
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // Ambil semua elemen
    const opening = document.getElementById("opening");
    const invitation = document.getElementById("invitation");

    const openButton = document.getElementById("openInvitation");

    const slides = document.querySelectorAll(".slide");

    const nextButtons = document.querySelectorAll(".next-button");
    const backButtons = document.querySelectorAll(".back-button");
    const menuCards = document.querySelectorAll(".menu-card");

    // =================================================
    // MUSIK BACKGROUND
    // =================================================

    const music = document.getElementById("backgroundMusic");

    // Volume musik
    if (music) {
        music.volume = 0.5;
    }


    // =================================================
    // AWAL WEBSITE
    // Hanya opening yang terlihat
    // =================================================

    invitation.style.display = "none";


    // =================================================
    // FUNGSI PINDAH SLIDE
    // =================================================

    function showSlide(slideId) {

        // Sembunyikan semua slide
        slides.forEach(function (slide) {
            slide.style.display = "none";
        });


        // Cari slide tujuan
        const target = document.getElementById(slideId);

        if (target) {

            // Tampilkan slide tujuan
            target.style.display = "block";

            // Scroll ke atas
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    }


    // =================================================
    // BUTTON "BUKA UNDANGAN"
    // =================================================

    if (openButton) {

        openButton.addEventListener("click", function () {

            // Hilangkan halaman opening
            opening.style.display = "none";

            // Tampilkan isi undangan
            invitation.style.display = "block";

            // Buka slide Bride & Groom
            showSlide("brideGroom");


            // =================================================
            // MULAI MUSIK
            // =================================================

            if (music) {

                music.play().catch(function (error) {
                    console.log("Musik tidak dapat diputar:", error);
                });

            }

        });

    }


    // =================================================
    // BUTTON "SELANJUTNYA"
    // =================================================

    nextButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId = button.getAttribute("data-next");

            showSlide(targetId);

        });

    });


    // =================================================
    // CARD MENU
    // Save The Date
    // Countdown
    // Our Story
    // Our Moments
    // RSVP
    // =================================================

    menuCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const targetId = card.getAttribute("data-target");

            showSlide(targetId);

        });

    });


    // =================================================
    // BUTTON "KEMBALI KE MENU"
    // =================================================

    backButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId = button.getAttribute("data-target");

            showSlide(targetId);

        });

    });


    // =================================================
    // COUNTDOWN
    // =================================================

    const weddingDate = new Date("December 20, 2026 10:00:00").getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const distance = weddingDate - now;


        // Kalau waktunya sudah lewat
        if (distance <= 0) {

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            return;

        }


        // Hitung waktu
        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );


        // Masukkan ke HTML
        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");

    }


    // =================================================
    // JALANKAN COUNTDOWN
    // =================================================

    updateCountdown();

    // Update setiap 1 detik
    setInterval(updateCountdown, 1000);

});