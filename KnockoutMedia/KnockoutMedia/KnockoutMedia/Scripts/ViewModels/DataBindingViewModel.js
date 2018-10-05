var app = window.app || {};
app.DataBindingViewModel = (function (ko) {
    'use strict';
    var me = {
        message: ko.observable(''),
        colors: ["Red", "Greed", "Blue", "Yellow", "Black", "White"],
        loadMessage: loadMessage
    };

    function _init() {
        me.message.subscribe(function(v){

        });
    }

    function loadMessage() {
        me.message("My favourite is: " + me.colors[Math.floor(Math.random() * me.colors.length)].toLowerCase());
    }

    _init();
    return me;
}(ko));