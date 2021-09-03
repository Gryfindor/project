"use strict";

window.addEventListener('DOMContentLoaded', () => {
    
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    };

    const showTabContent = (i=0) => {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };
 
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer
    const deadline = '2021-08-21';

    function getTimeRemainning(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)), // запись дней
              hours = Math.floor((t / (1000*60*60)) % 24 ), // запись часов
              minutes = Math.floor((t / 1000 / 60) % 60), // запись минут
              seconds = Math.floor((t / 1000) % 60); // запись секунд
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock(){
            const t = getTimeRemainning(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modalTrigger = document.querySelectorAll("[data-modal]"),
          modal = document.querySelector(".modal"),
          
          closeModal = () => {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
          },
          
          openModal = () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
          };


    
          
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });



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

    const modalTimerId = setTimeout(openModal, 10000);

    function showModalbyScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalbyScroll);    
        }
    }

    window.addEventListener('scroll', showModalbyScroll);

    // MenuItems
    const container = document.querySelector('.menu__field').firstElementChild;
    container.innerHTML = "";

    class MenuItem {
        constructor(title, description, price, img, alt, parentSelector, ...classes) {
            this.title = title;
            this.description = description;
            this.price = price;
            this.img = img;
            this.alt = alt;
            this.parent = parentSelector;
            this.classes = classes;
        }

        render() {
            this.classes.forEach(className => this.parent.classList.add(className));
            this.parent.innerHTML += `
                <div class="menu__item">
                    <img src="${this.img.toLowerCase()}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>`;
        }        
    }
    const getResources = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    // getResources('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuItem(title, descr, price, img, altimg, container).render();
    //         });
    //     });

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuItem(title, descr, price, img, altimg, container).render();
            });
        });

    // getResources('http://localhost:3000/menu')
    //     .then(data => createData(data));

    // function createData(data){
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');

    //         element.classList.add('menu__item');

    //         element.innerHTML = `
    //             <img src="${img.toLowerCase()}" alt="${altimg}">
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>`;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }
    //serverApp

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Success',
        failure: 'Fail'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            
            form.insertAdjacentElement('afterend', statusMessage);

            
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
            
        });
    }
    
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;    

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));

    // Slider

    const images = document.querySelectorAll('.offer__slide'),
          currentImg = document.getElementById('current'),
          totalImg = document.getElementById('total'),
          prevSlider = document.querySelector('.offer__slider-prev'),
          nextSlider = document.querySelector('.offer__slider-next'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;
    
    let imageIndex = 1,
        offset = 0;

    if (images.length < 10) {
        totalImg.textContent = `0${images.length}`;
        currentImg.textContent = `0${imageIndex}`;
    } else{
        totalImg.textContent = images.length;
        currentImg.textContent = imageIndex;
    }

    slidesField.style.width = 100 * images.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    images.forEach(slide => {
        slide.style.width = width;
    });

    nextSlider.addEventListener('click', () => {
        if(offset == +width.slice(0, width.length - 2) * (images.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(imageIndex == images.length) {
            imageIndex = 1;
        } else{
            imageIndex++;
        }

        if (images.length < 10) {
            currentImg.textContent = `0${imageIndex}`;
        } else{
            currentImg.textContent = imageIndex;
        }
    });

    prevSlider.addEventListener('click', () => {
        if(offset == 0) {
            offset = +width.slice(0, width.length - 2) * (images.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(imageIndex == 1) {
            imageIndex = images.length;
        } else{
            imageIndex--;
        }

        if (images.length < 10) {
            currentImg.textContent = `0${imageIndex}`;
        } else{
            currentImg.textContent = imageIndex;
        }
    });

    // const imagesHide = () => {
    //     images.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');
    //     });
    // };

    // const slideShow = index => {
    //     images.forEach((item, i) => {
    //         if(index < 1) {
    //             index = 4;
    //             imageIndex = 4;
    //         }
    //         if (index > images.length) {
    //             index = 1;
    //             imageIndex = 1;
    //         }
            
    //         if (i+1 === index) {
    //             console.log(imageIndex);
    //             imagesHide();
    //             item.classList.remove('hide');
    //             item.classList.add('show');
    //             currentImg.innerHTML = `0${index}`;
    //         }
    //     });
    // };

    // imagesHide();
    // slideShow(imageIndex);
    
    // prevSlider.addEventListener('click', () => {
    //     slideShow(--imageIndex);
    // });

    // nextSlider.addEventListener('click', () => {
    //     slideShow(++imageIndex);
    // });

});

