document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const lastResetDate = localStorage.getItem('lastResetDate');
    const today = new Date().toDateString();

    if (lastResetDate !== today) {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        localStorage.setItem('lastResetDate', today);
    }
}); 
