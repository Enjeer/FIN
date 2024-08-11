window.addEventListener("DOMContentLoaded", () => {
    const t_btn = document.getElementById("tools_btn"),
          a_btn = document.getElementById("assist_btn");

    const list_ = [t_btn, a_btn];

    const swap = (btn, list) => {
        if (!btn.classList.contains("active")) {
            // брос всех кнопок
            list.forEach(butn => {
                butn.classList.remove("active");
                butn.classList.add("passive");
            });

            // Затем активация текущей кнопки
            btn.classList.remove("passive");
            btn.classList.add("active");
        }
    };

    // Добавление обработчиков событий для каждой кнопки
    list_.forEach(btn => {
        btn.addEventListener('click', () => { swap(btn, list_) });
    });
});
