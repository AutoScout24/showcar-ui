// Todo: remove Zepto
if (! window.jQuery) window.$ = window.Zepto = require('zepto-browserify').$;

let warn = (msg) => window.console && window.console.warn(msg);

window.Storage = require('showcar-storage');
window.Pager = require('./06-components/organisms/pagination/pagination.js');

window.lazySizesConfig = { loadMode: 1, expFactor: 0, hFac: 0 };
require('lazysizes');

var showcar = {};
showcar.spyNavigation = require('./06-components/organisms/spy-navigation/spy-navigation.js');

require('./06-components/atoms/custom-dropdown/custom-dropdown.js');

$(_ => {
    require('./05-layout/sticky/sticky.js')();
    require('./06-components/atoms/rotating-arrow/rotating-arrow.js')(); // Todo: Check usages and remove
    require('./06-components/atoms/collapse/collapse.js')();
    require('./06-components/atoms/stepper/stepper.js');
    require('./06-components/atoms/tooltip/tooltip.js')();
    require('./06-components/atoms/tooltip-2/tooltip-2.js')();
    require('./06-components/atoms/lightbox/lightbox.js');
    require('./06-components/organisms/navigation/navigation.js');
    require('./js/scroll/scroll.js');
});

// TODO: question for the guild
if (! window.notification) {
    window.notification = require('./06-components/molecules/notification/notification.js');
} else {
    warn('window.notification is already registered.');
}

// Make sure these variables are initialized in case somebody uses them unintialized before they are loaded
window.ut = window.ut || [];
window.dataLayer = window.dataLayer || [];

window.showcar = window.showcar || showcar;
module.exports = showcar;
