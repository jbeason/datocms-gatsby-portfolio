import React from 'react'
import { findDOMNode } from 'react-dom'
import $ from 'jquery'

$(function() {
    "use strict";

    $('.scroll_to').click(function(e){
        var jump = $(this).attr('href');
        var new_position = $(jump).offset();
        $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
        e.preventDefault();
    });
});    