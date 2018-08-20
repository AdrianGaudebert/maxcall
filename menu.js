$('document').ready(function () {
    'use strict';

    var $menu = $('#menu');
    $.getJSON(
        'pizzas.json',
        function (data) {
            var menus = {
                10: $('<section>').append($('<h2>').text('Pizza Classique')),
                11: $('<section>').append($('<h2>').text('Pizza Spéciale')),
                12: $('<section>').append($('<h2>').text('Pizza Gourmande')),
            };

            $.each(data['pizzas'], function (i, pizza) {
                $('<article>').append(
                    $('<h3>').text(pizza.name)
                    .append($('<span>', {'class': 'price'}).text(pizza.price))
                )
                .append($('<p>').text(pizza.ingredients.join(', ')))
                .appendTo(menus[pizza.price]);
            });

            $menu.append(menus[10])
                 .append(menus[11])
                 .append(menus[12]);
        }
    )
});
