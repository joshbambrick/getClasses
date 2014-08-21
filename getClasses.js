/*
    getClasses.js
    version 0.0.1
    
    Provides a jQuery method to get an array the classes attached to the first element in the matched set.

    Copyright 2014 Josh Bambrick
    http://joshbambrick.com/

    Github
    http://github.com/joshbambrick/getClasses
    
    Licensed under the MIT license:
    http://www.opensource.org/licenses/mit-license.php

*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(this.$);
    }
}(function ($) {
    $.fn.getClasses = function () {
        return $.trim($(this).attr('class')).split(/\s+/);
    };
}));