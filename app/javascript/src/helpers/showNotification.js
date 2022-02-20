export default function showNotification(level, message) {
  document.getElementById("notifications-container").insertAdjacentHTML(
    "beforeend",
    `
    <div class='alert alert-${level} alert-dismissible fade show shadow-lg mb-5' role='alert'>
      ${message}
      <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
    <div>
    `
  );
}
