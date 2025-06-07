document.addEventListener("DOMContentLoaded", function () {
  const flashData = JSON.parse(document.getElementById('flash-data')?.textContent || '{}');

  Object.entries(flashData).forEach(([type, messages]) => {
    messages.forEach(message => {
      showToast(type, message);
    });
  });
});

function showToast(type, message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.backgroundColor = type === 'notice' ? '#4caf50' : '#f44336';
  toast.style.color = '#fff';
  toast.style.padding = '12px 20px';
  toast.style.marginTop = '10px';
  toast.style.borderRadius = '4px';
  toast.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  toast.style.fontWeight = 'bold';
  toast.style.fontFamily = 'sans-serif';

  document.getElementById('toast-container').appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000); 
}
