// Ví dụ: Kiểm tra dữ liệu trước khi gửi form
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Kiểm tra dữ liệu nhập vào
  // ...
  // Gửi form nếu dữ liệu hợp lệ
});
const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}