'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-icon');
    const overlay = document.querySelector('.overlay');
    const dashboard = document.querySelector('aside');

    burger.addEventListener('click', () => {
        dashboard.classList.toggle('show');
        overlay.classList.toggle('show');
        burger.classList.toggle('show');
    })

    overlay.addEventListener('click', () => {
        dashboard.classList.remove('show');
        overlay.classList.remove('show');
        burger.classList.remove('show');
    })
})