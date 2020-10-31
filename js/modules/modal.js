function modal() {

    const modalBtns = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');


    function showModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalBtns.forEach(btn => {
        btn.addEventListener('click', showModal);
    });

    const modalTimerId = setTimeout(showModal, 500000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);



    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }


    modal.addEventListener('click', event => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

}

module.exports = modal;