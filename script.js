function toggleDetail(eventId) {
    const detail = document.getElementById(`detail-${eventId}`);
    if (detail.style.display === 'none') {
        detail.style.display = 'block';
    } else {
        detail.style.display = 'none';
    }
}
