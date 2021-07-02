import $ from '../core';


//перебираем все элементы подходящих под данный селектор

$.prototype.html = function(content){
    for (let i = 0; i < this.length; i++) {
        if(content){
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

//получаем необходимый элемент по номеру

$.prototype.eq = function(i){
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }
    this[0] = swap;
    this.length = 1;
    return this;
};

//Получаем индекс элемента

$.prototype.index = function(){
    const parent = this[0].parentNode;
    const childs = [...parent.children]; // (...) берем все элемнты коллекции и разворачиваем их в ввиде массива

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

//находим элементы по селектору внутри уже найденных

$.prototype.find = function(selector){
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if(arr.length == 0){
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};



