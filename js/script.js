// Очищаем все элементы по клику вне его (селекты, модалки, ...)
window.hideEffects = function (e) {
    const _this = e.target;

    // Selects
    const isSelect = _this.closest('.select');
    if (!isSelect) collapseAllSelects();

    // Info popovers
    const isPopOver = _this.closest('.informer');
    if (!isPopOver) resetAllInfos();

    // Card infos
    const isCardInfo = _this.closest('.inform');
    if (!isCardInfo) resetAllCardInfos();

    // Card menu
    const isCardMenu = _this.closest('.dashboard__card-menu');
    if (!isCardMenu) resetAllCardMenu();

    // Card recommendations
    const isCardRecom = _this.closest('.dashboard__card-recommendation');
    if (!isCardRecom) resetAllCardRecom();
}

// Переклаывает html коллекцию в массив
window.nodeListToArray = function (nodeList) {
    const arr = [];

    for (let i = 0; i < nodeList.length; i++) {
        arr.push(nodeList[i]);
    }

    return arr;
}

// Получаем ширину скроллбара
window.getScrollbarWidth = function() {
    let div = document.createElement('div');
    let scrollWidth;

    if (!isScrollBarVisible()) {
        return 0;
    }

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

window.isScrollBarVisible = function () {
    return window.innerWidth
        !== document.documentElement.clientWidth;
}

function handleTabClick (e) {
    const node =  e.target;
    const id = node.dataset.targetId;
    const target = document.getElementById(id);

    if (node.classList.contains('active')) {
        return;
    }

    hideSiblingTabs(node);
    node.classList.add('active');

    hideSiblingsTabPanes(target);
    target.classList.add('active');
}

function hideSiblingTabs (node) {
    const siblings = nodeListToArray(
        node.closest('.tabs__list')
            .querySelectorAll('.tabs__item .tabs__toggle'));

    removeActiveClassFromNodeList(siblings);
}

function hideSiblingsTabPanes (node) {
    let siblings = nodeListToArray(node
        .closest('.tabs__content').children);

    removeActiveClassFromNodeList(siblings);
}

function removeActiveClassFromNodeList(nodeList) {
    nodeList.forEach(function (el) {
        el.classList.remove('active');
    });
}

function showInfo(e) {
    const el = e.target;
    const popover = el.querySelector('.informer__body');
    const popoverWidth = popover.offsetWidth;
    const popoverHeight = popover.offsetHeight;
    const distances = getDistances(el);
    const isTableChild = el.closest('.table');
    const topOffset = distances.top;
    const leftOffset = isTableChild
        ? distances.left - 60
        : distances.left;

    // Возможные классы для поповера
    // informer_tl, informer_tr,
    // informer_bl, informer_br
    let clazz = 'informer_'

    clazz += isTableChild
        ? 'b'
        : popoverHeight < topOffset
            ? 't' : 'b';

    clazz += popoverWidth < leftOffset
        ? 'l' : 'r'

    el.classList.add('show');

    setTimeout(function () {
        el.classList.add(clazz);
    }, 10);
}

function toggleInfo(e) {
    const isVisible = e.target
        .classList.contains('show');

    resetAllInfos();
    isVisible ? resetAllInfos() : showInfo(e);
}

function resetAllInfos() {
    const nodes = nodeListToArray(document
        .getElementsByClassName('informer'));

    nodes.forEach(function (el) {
        el.classList.remove(
            'show',
            'informer_tl',
            'informer_tr',
            'informer_br',
            'informer_bl'
        );
    });
}

function resetAllCardInfos() {
    const nodes = nodeListToArray(document
        .querySelectorAll('.dashboard__card-data .inform.show'));

    nodes.forEach(function (el) {
        el.classList.remove(
            'show'
        );
    });
}

function resetAllCardMenu() {
    const nodes = nodeListToArray(document
        .querySelectorAll('.dashboard__card-menu ul.show'));

    nodes.forEach(function (el) {
        el.classList.remove(
            'show'
        );
    });
}

function resetAllCardRecom() {
    const nodes = nodeListToArray(document
        .querySelectorAll('.dashboard__card-recommendation.show'));

    nodes.forEach(function (el) {
        el.classList.remove(
            'show'
        );
    });
}


// Возвращает объект расстояний от элемента до краёв окна
const getDistances = (el) => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const elWidth = el.getBoundingClientRect().width;
    const elHeight= el.getBoundingClientRect().height;
    const top = el.getBoundingClientRect().top;
    const left = el.getBoundingClientRect().left;

    return {
        top,
        left,
        bottom: winHeight - top - elHeight,
        right: winWidth - left - elWidth
    }
}

// Показать отдельный tab при инициализации страницы
function showTabPane(tabPaneId) {
    const tabPane = document.getElementById(tabPaneId);

    if (tabPane) {
        const tab = document.querySelector(
            '[data-target-id="'+tabPaneId+'"]');

        hideSiblingTabs(tab);
        hideSiblingsTabPanes(tabPane);

        tab.classList.add('active');
        tabPane.classList.add('active');
    }
}

window.addEventListener("load",
function(event) {
    document.addEventListener('click', hideEffects);

//     const tabs = nodeListToArray(document
//         .getElementsByClassName('tabs__toggle'));
//
//     tabs.forEach(function (el) {
//         el.addEventListener('click', handleTabClick);
//     });
//

    // Показываем информ тултип
    const informers = nodeListToArray(document
        .getElementsByClassName('informer'));

    informers.forEach(function (el) {
        el.addEventListener('click', toggleInfo);
    });
})
window.collapseAllSelects = function() {
    const selects = nodeListToArray(document
        .getElementsByClassName('select'));

    selects.forEach(function (el) {
        const options = el.querySelector('.options');
        el.classList.remove('open');
        options.style.maxHeight = '0';
    });
}

// Открыть/Закрыть модальное окно
function toggleModal(e) {
    e.preventDefault();
    e.stopPropagation();

    const targetId = e.target.dataset.targetId;
    const dialogId = e.target.dataset.dialogShowId;
    const direction = e.target.dataset.direction;

    switch (direction) {
        case 'show':
            dialogId
                    ? showModal(targetId, dialogId)
                    : showModal(targetId);
            break;
        case 'hide':
            hideModal(targetId);
            break;
        case 'toggle':
            switchDialog(targetId);
            break;
    }
}

function showModal(modalId, dialogId = undefined) {
    const modal = document.getElementById(modalId);
    const bodyClasses = document.body.classList;
    const modalClasses = modal.classList;
    const scrollbarWidth = getScrollbarWidth();

    bodyClasses.add('modal-open');
    document.body.style.paddingRight = scrollbarWidth + 'px';
    modalClasses.add('show');
    modal.style.paddingRight = scrollbarWidth + 'px';

    if (dialogId) {
        const dialog = document.getElementById(dialogId);
        dialog.classList.remove('hidden');

        setTimeout(function () {
            dialog.classList.remove('hide');
        }, 10);
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    const bodyClasses = document.body.classList;
    const modalClasses = modal.classList;

    const dialogs = nodeListToArray(document.getElementById(modalId)
        .getElementsByClassName('modal__dialog'));

    if (dialogs.length > 1) {
        setTimeout(function () {
            dialogs.forEach(function (el) {
                el.classList.add('hidden', 'hide');
            });
        }, 500);
    }

    bodyClasses.remove('modal-open');
    document.body.style.removeProperty('padding-right');
    modalClasses.remove('show');
    modal.style.removeProperty('padding-right');
}

function switchDialog(dialogId, modalId = undefined) {
    const dialog = document.getElementById(dialogId);

    let modal;

    if (modalId) {
        modal = document.getElementById(modalId);
    } else {
        modal = document.getElementById(dialogId)
            .closest('.modal');
    }

    if (!modal.classList.contains('show')) {
        modal.classList.add('show');
    }

    const otherDialogs = nodeListToArray(
        modal.getElementsByClassName('modal__dialog'))
        .filter(function (el) { return  el.id !== dialogId; });

    const DURATION = 300; // Get the property in css from .modal-dialog styles.

    otherDialogs.forEach(function (el) {
        el.classList.add('hide');
    });

    setTimeout(function () {
        otherDialogs.forEach(function (el) {
            el.classList.add('hidden');
        });
        dialog.classList.remove('hidden');
    }, DURATION);

    setTimeout(function () {
        dialog.classList.remove('hide');
    }, DURATION + 50);
}

function toggleVisiblePassword(e) {
    const input = e.target.closest('.label_password')
        .querySelector('input');

    input.type = input.type=== 'password'
        ? 'text'
        : 'password';
}

function handlerFormPasswordCreate(e) {
    e.preventDefault();

    const controllers = e.target
        .getElementsByTagName('input');

    if(controllers[0].value === ''
        && controllers[1].value === '') {
        return;
    }

    if (controllers[0].value !== controllers[1].value) {

        controllers[0].closest('.label_password')
            .classList.add('error');

        controllers[1].closest('.label_password')
            .classList.add('error');

        return;
    }


    // Здесь должна быть обработка данных формы!
    console.log('Здесь должна быть обработка данных формы!');
}

function dropSelect(select) {
    const container = select.querySelector('.options');
    const options = select.querySelectorAll('.options span');
    const height = options[0].clientHeight;

    container.style.maxHeight = options.length * height + 'px';
    select.classList.add('open');
}

function toggleSelect(e) {
    const select = e.target.closest('.select');

    select.classList.contains('open')
        ? collapseAllSelects()
        : dropSelect(select)
}

const event = new CustomEvent("optionEventClick");

function handleSelectClick(e) {
    const otherOptions = nodeListToArray(e.target
        .closest('.options')
        .getElementsByTagName('span'));

    const value = e.target.innerText;

    const input = e.target.closest('.select')
        .querySelector('input');

    input.value = value;

    otherOptions.forEach(function (el) {
        el.classList.remove('active');
    });

    e.target.classList.add('active');

    input.dispatchEvent(event);
}

window.addEventListener("load",
function(event) {

    // Открыть/Закрыть модальное окно
    const modalToggles = nodeListToArray(document
        .querySelectorAll("[data-toggle='modal']"));

    modalToggles.forEach(function (el) {
        el.addEventListener('click', toggleModal);
    });

    // Показываем/скрываем пароль
    const toggleVisiblePass = nodeListToArray(document
        .getElementsByClassName('modal__show-password'));

    toggleVisiblePass.forEach(function (el) {
        el.addEventListener('click', toggleVisiblePassword);
    });

    // Валидация совпадения пароленй на Форме создания пароля
    const formPasswordCreate = document
        .querySelector('#modalPasswordCreate form');

    if (formPasswordCreate) {
        formPasswordCreate.addEventListener('submit',
            handlerFormPasswordCreate);
    }

    // // Кастомные селекты
    // const selectInputs = nodeListToArray(document
    //     .querySelectorAll('.select input'));
    //
    // selectInputs.forEach(function (el) {
    //     el.addEventListener('click', toggleSelect);
    // });
    //
    // const selects = nodeListToArray(document
    //     .querySelectorAll('.select .options span'));
    //
    // selects.forEach(function (el) {
    //     el.addEventListener('click', handleSelectClick);
    // });
});

function handlerMenuTogglesClick(e) {
    const parent = e.target.closest('.dashboard__card-menu');
    const list = parent.querySelector('ul');

    list.classList.toggle('show');
}

function handlerAvatarTogglesClick(e) {
    const container = e.target
        .closest('.dashboard__card-recommendation');

    container.classList.toggle('show');
}

function handlerInformTogglesClick(e) {
    const classes = e.target.classList;
    const isShown = classes.contains('show');
    const inform = e.target.closest('.inform');
    const isInformShow = inform.classList.contains('show');

    if (isShown || isInformShow) {
        classes.remove('show');
        inform.classList.remove('show');
    } else {
        clearAllInfos();
        classes.add('show');
    }
}

function clearAllInfos() {
    const nodes = nodeListToArray(document
        .querySelectorAll('.dashboard__card-data .inform'));

    nodes.forEach(function (el) {
        el.classList.remove(
            'show'
        );
    });
}

window.addEventListener("load",
    function(event) {
    const cardMenuToggles = nodeListToArray(document
        .querySelectorAll('.dashboard__card-menu button'));

    cardMenuToggles.forEach(function (el) {
        el.addEventListener('click', handlerMenuTogglesClick);
    });

    const cardAvatarToggles = nodeListToArray(document
        .querySelectorAll('.dashboard__card-recommendation button'));

        cardAvatarToggles.forEach(function (el) {
        el.addEventListener('click', handlerAvatarTogglesClick);
    });

    const cardInformToggles = nodeListToArray(document
        .querySelectorAll('.dashboard__card-data .inform'));

        cardInformToggles.forEach(function (el) {
        el.addEventListener('click', handlerInformTogglesClick);
    });


})