require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill'; 

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import slider from './modules/slider';
import forms from './modules/forms';
import calc from './modules/calc';
import cards from './modules/cards';
import {showModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 500000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2020-11-10');
    cards();
    calc();
    forms('form',modalTimerId);
    slider({
        container:'.offer__slider',
        slide:'.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter:'#total',
        currentCounter:'#current',
        wrapper :'.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });

});