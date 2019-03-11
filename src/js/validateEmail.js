const validateEmail = () => {
  document.querySelector('.subscribe__email').oninvalid = function () {
    this.setCustomValidity("Пожалуйста, введите корректный E-mail");
  };
};

export default validateEmail;