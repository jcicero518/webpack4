import ObjectFitImages from 'postcss-object-fit-images';
import domReady from 'detect-dom-ready';

import $ from 'jquery'; // declare $ for jQuery

/*
 * Uncomment to use jQuery
$(function() {

})();
/*

/**
 * Init anything that requires DOMContentLoaded w/vanilla JS
 */
domReady(ObjectFitImages); // // polyfill for IE / Edge on object-fit property
