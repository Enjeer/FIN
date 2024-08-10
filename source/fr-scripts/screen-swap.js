window.addEventListener("DOMContentLoaded", ()=>{

        loading_button = document.getElementById('loading-screen-button'),
        main_button = document.getElementById('main-screen-button'),
        loading_content = document.getElementById('loading-container'),
        main_content = document.getElementById('main-container');

        swap = (active, passive) =>{
            active.style.display = 'none';
            passive.style.display = 'flex';
        }

        loading_button.addEventListener('click', ()=>{swap(loading_content, main_content)});
        main_button.addEventListener('click', ()=>{swap(main_content, loading_content)});
})