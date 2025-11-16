// موقع اوردراتي
document.addEventListener('DOMContentLoaded', () => {
    // Welcome message
    console.log("🚀 تم تحميل موقع اوردراتي بنجاح!");
    
    // Add touch-friendly classes
    document.body.classList.add('has-js');
    if ('ontouchstart' in window) {
        document.body.classList.add('is-touch-device');
    }

    // Create notification element if it doesn't exist
    if (!document.querySelector('.notification')) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
});

// Show notification function
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.querySelector('.notification');
    if (!notification) return;
    
    // Set message and type
    notification.textContent = message;
    
    // Remove all type classes and add the new one
    notification.className = 'notification';
    notification.classList.add(type);
    
    // Show notification
    notification.classList.add('show');
    
    // Hide after duration
    setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

// Example usage:
// showNotification('تمت العملية بنجاح', 'success');
// showNotification('حدث خطأ ما', 'error');
// showNotification('تنبيه هام', 'warning');
// showNotification('معلومة جديدة', 'info');
