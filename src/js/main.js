import ObjectFitImages from 'postcss-object-fit-images';
import domReady from 'detect-dom-ready';


/**
 * Init anything that requires DOMContentLoaded
 */
domReady(ObjectFitImages); // // polyfill for IE / Edge on object-fit property
