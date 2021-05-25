
const trash = document.getElementById('trash');

let cont = document.getElementsByClassName('container');

let card;


cont.addEventListener('mousedown', e => {
    if (e.target.classList.contains('card')) {

        let card = e.target;

        card.onmousedown = function (e) {
            let coords = getCoords(card);

            let shiftX = e.pageX - coords.left;
            let shiftY = e.pageY - coords.top;

            card.style.position = 'absolute';

            document.body.append(card);

            card.style.zIndex = 1000;

            function moveAt(e) {
                card.style.left = e.pageX - shiftX + 'px';
                card.style.top = e.pageY - shiftY + 'px';
            }

            document.onmousemove = function(e) {
                moveAt(e);
            }

            card.onmouseup = function(e) {
                document.onmousemove = null;
                if (e.pageY < trash.offsetHeight) {
                    document.body.removeChild(card);
                }
                card.onmouseup = null;
            }

        }
        card.ondragstart = function() {
            return false;
        }


       }

    })




function getCoords(e) {
    let box = e.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    }

}










// ниже вы можете найти код с комментариями//

let cont = document.querySelector('.container');// получаем сам контейнер, на который будем навешивать обработчик события

let trash = document.getElementById('trash');// получаем мусорную корзику, при попадании в зону которой мы хотим удалить наш элемент
// навешиваем слушателя на событие нажатия мыши на весь наш контейнер

cont.addEventListener('mousedown', e => { 
// нам надо проверить нажимаем ли мы на карточку, или нет? Как мы можем это сделать?
    if (e.target.classList.contains('card')) { 
        //кладем наш целевой элемент в переменную кард
        let card = e.target;
        //далее нам надо написать как будут себя вести карточки, что с ней будет происходить если мы захотим ее перетаскивать

        //создаем обработку события нажатия на карточку, мы  в данном событии готовим карточку к перемещению:

        card.onmousedown = function (e) {
            // console.log(e);

            // если мы хотим сохранять место, в котором мы ухватились за карточку, то нам нужно запомнить положеник курсора относительно захваченной карточки, для этого напишем функцию getCoords()
            let coords = getCoords(card);

            //для того, чтобы корректно располагать элемент с учетом сдвига, мы определим координаты относительно окна, для этого, из значения координат курсора вычтем левую верхнюю границу карточки,  полученную ранее в нашей функции getcoords

            let shiftX = e.pageX - coords.left;
            let shiftY = e.pageY - coords.top;
            // вытаскиваем карточку из ее расположения на странице и делаем независимой, т.е. размещаем в абсолютных координатах
            
            
            card.style.position = 'absolute';
            // далее мы помещаем его в доди с помощью медода appendChild()
            document.body.appendChild(card);
            moveAt(e);

            card.style.zIndex = 1000; // располагаем элемент над всеми в порядке прорисовки по оси z с помощью z-index

                // напишем функцию для перемещения элемента на новые координаты путем смены параметров left/top
                //для этого нам будет достаточно вычесть из значения координат курсора сдвиг полученный ранее, а именно значения shiftX и shiftY;
            function moveAt(e) {
                card.style.left = e.pageX - shiftX + 'px';
                card.style.top = e.pageY - shiftY + 'px';
            }
            // далее вызываем нашу функцию в обработчике  события движения мыши mousemove()
            document.onmousemove = function (e) {
                moveAt(e);
            };
            
            // теперь нам надо разобраться с окончанием события тяни и бросай, а именно с моментом бросания карточки
            // мы хотим, чтобы при попадании в зону нашей корзины наша карточка удалялась, для этого что нам надо:
            //сначала определим условия, при которых мы хотим удалять наш элемент, для этого мы возьмем координату в которой перемещается наш курсор и будем ее сравнивать с высотой нашего элемента корзины, которую мы можем получить с помощью свойства offsetheight
            card.onmouseup = function (e) {
                //сначала сбросим событие по перемещению нашей карточки
                document.onmousemove = null;
                // теперь перейдем к условию, зададим условия, при котом если значение курсора по оси Y становится меньше значения высоты нашей мусорной корзины, мы будем удалять наш элемент посредствам метода removeChild();
                if (e.pageY < trash.offsetHeight ) {
                    document.body.removeChild(card);
                }
                //после этого можем сбросить наше событие окончания бросания элемента
                card.onmouseup = null;
            };

        }
        // так как мы сегодня писали свой собственный драг н дроп, а у браузера имеется встроенный, который может вступать в конфликт с нашим, нам необходимо его отключить.
        card.ondragstart = function () {
            return false;
        };

    }
    return;

})

// функция для получения координат элемента относительно страницы
// 
function getCoords(e) { 
    // с помощью метода гетбааудингслайентрект мы получаем размер элемента и его позицию относительно нашего вьюпрта(видимую на экране часть страницы) 
    //кладем возврашаемое значение(насколько я помню это прямоугольная обрасть в которой находится элемент ссо свойствами высоты ширины правой границы левой и тд) в переменную бокс

    let box = e.getBoundingClientRect();
    //результатом работы данной функции будет объект с координатами left top, а именно значение полученные из метода(верх и левая граница) и прибавим к ним текущую прокрутку документа
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
