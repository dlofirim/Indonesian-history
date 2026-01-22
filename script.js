function showDetail(eventId) {
    // Sembunyikan pilihan kisah
    document.getElementById('pilihan-kisah').style.display = 'none';
    // Tampilkan section detail
    document.getElementById('detail-section').style.display = 'block';
    // Sembunyikan semua detail terlebih dahulu
    const details = document.querySelectorAll('.event-detail');
    details.forEach(detail => detail.style.display = 'none');
    // Tampilkan detail yang dipilih dengan animasi
    const selectedDetail = document.getElementById(`detail-${eventId}`);
    selectedDetail.style.display = 'block';
    selectedDetail.style.animation = 'fadeIn 0.5s ease-in';
}

function hideDetail() {
    // Sembunyikan section detail
    document.getElementById('detail-section').style.display = 'none';
    // Tampilkan kembali pilihan kisah
    document.getElementById('pilihan-kisah').style.display = 'flex';
}

// Tambahan animasi untuk kartu saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});
