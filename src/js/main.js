import './lib/lib';

$('button').on('click', function(){
    $('div').eq(2).toggleClass('active');
});

 $('div').click(function(){
     console.log($(this).index());
 });

// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findMe'));
console.log($('.more').eq(0).siblings());
//$('button').on('click', function(){
//    $(this).toggleClass('active');
//});

//console.log($('button').html('Hello'));
//$('.active').click(sayHello);
//$('.active').off('click', sayHello);

//function sayHello(){
//    alert("hello");
//}