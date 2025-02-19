document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".razd");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Удаляем класс active у всех кнопок
            buttons.forEach((btn) => btn.classList.remove("active"));

            // Добавляем active только на нажатую кнопку
            button.classList.add("active");
        });
    });
});