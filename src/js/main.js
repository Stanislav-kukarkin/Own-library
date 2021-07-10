import './lib/lib';
import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).on('click', () =>{
    $('.w-500').fadeOut(800);

})

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