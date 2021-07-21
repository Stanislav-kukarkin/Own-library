import './lib/lib';
import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).on('click', () =>{
    $('.w-500').fadeToggle(800);

});

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Dinamic modal title ',
        body: 'Lorem'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another button',
                ['btn-dark', 'ml-10'],
                false,
                () => {
                    alert('hi world');
                }
            ]
        ]
    }
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
        console.log(res);
    });

//$('button').on('click', function(){
//    $('div').eq(2).toggleClass('active');
//});

// $('div').click(function(){
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findMe'));
//$('.more').fadeOut(1200);
//$('.some').fadeIn(1200);
//$('button').on('click', function(){
//    $(this).toggleClass('active');
//});

//console.log($('button').html('Hello'));
//$('.active').click(sayHello);
//$('.active').off('click', sayHello);

//function sayHello(){
//    alert("hello");
//}