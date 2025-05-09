document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const lastResetDate = localStorage.getItem('lastResetDate');
    const today = new Date().toDateString();

    // Сброс чекбоксов каждый день
    if (lastResetDate !== today) {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            localStorage.removeItem(checkbox.id); // Удаляем сохраненное состояние
        });
        localStorage.setItem('lastResetDate', today);
    } else {
        checkboxes.forEach(checkbox => {
            const savedState = localStorage.getItem(checkbox.id);
            if (savedState !== null) {
                checkbox.checked = savedState === 'true';
            }
        });
    }

    // Обработчик изменения состояния чекбоксов
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
}); 
