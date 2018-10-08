require(['knockout-3.4.2', 'ViewModels/RequireViewModel'], function (ko, viewModel) {
    'use strict';
    ko.components.register('color-list', { require: 'Components/ColorListRequire' });
    ko.applyBindings(new viewModel());
});