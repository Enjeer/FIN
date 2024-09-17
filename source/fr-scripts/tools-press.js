is_window_maximized = false;

window.addEventListener("DOMContentLoaded", () => {
    const t_btn = document.getElementById("tools_btn"),
          m_btn = document.getElementById("menu_btn"),
          a_btn = document.getElementById("assist_btn"),
          t_con = document.getElementById("tools-container"),
          m_con = document.getElementById("menu-container"),
          a_con = document.getElementById("assistant-container");

    const list_ = [t_btn, m_btn, a_btn],
          containers_ = [t_con, m_con, a_con];

    const swap = (btn, list, containers) => {
        if (!btn.classList.contains("active")) {
            // Деактивация всех кнопок и скрытие всех контейнеров
            list.forEach((butn, index) => {
                butn.classList.remove("active");
                butn.classList.add("passive");
                containers[index].style.display = 'none';
            });

            // Активация текущей кнопки и показ соответствующего контейнера
            btn.classList.remove("passive");
            btn.classList.add("active");
            const index = list.indexOf(btn);
            containers[index].style.display = 'flex';
        }  
    };

    // Добавление обработчиков событий для каждой кнопки
    list_.forEach(btn => {
        btn.addEventListener('click', () => { swap(btn, list_, containers_) });
    });

    // Изначально показываем только первый контейнер и активируем первую кнопку
    swap(m_btn, list_, containers_);


const minimizeIconContainer = document.querySelector('.cet-control-minimize');
const maximizeIconContainer = document.querySelector('.cet-control-maximize');
const closeIconContainer = document.querySelector('.cet-control-close');


minimizeIconContainer.innerHTML = `
  <img src="../source/img/minimize.png" alt="Minimize"/>`;

closeIconContainer.innerHTML = `
  <img src="../source/img/close.png" alt="Close"/>`;

maximizeIconContainer.innerHTML = `
    <img src="../source/img/maximize.png" alt="Maximize"/>`;


});