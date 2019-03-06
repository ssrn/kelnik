const validateEmail = () => {
  document.querySelector('.subscribe__input').oninvalid = function () {
    this.setCustomValidity("Пожалуйста, введите корректный E-mail");
  };
};

export default validateEmail;