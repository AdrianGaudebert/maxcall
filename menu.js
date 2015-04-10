$('document').ready(function () {
    'use strict';

    var $menu = $('#menu');
    $.getJSON(
        'pizzas.json',
        function (data) {
            var menus = {
                9: $('<section>').append($('<h2>').text('Menu Classique')),
                10: $('<section>').append($('<h2>').text('Menu Sympa')),
                11: $('<section>').append($('<h2>').text('Menu Gourmand'))
            };

            $.each(data['pizzas'], function (i, pizza) {
                $('<article>').append($('<h3>').text(pizza.name)
                                               .append($('<span>', {'class': 'price'}).text(pizza.price)))
                              .append($('<p>').text(pizza.ingredients.join(', ')))
                              .appendTo(menus[pizza.price]);
            });

            $menu.append(menus[9])
                 .append(menus[10])
                 .append(menus[11]);
        }
    )
});
