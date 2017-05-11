/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var doc = document;

function readCookie(name, options) {
    if (!name) {
        return null;
    }

    var decodingFunction = options && options.decodingFunction || decodeURIComponent;

    return decodingFunction(doc.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

function setCookie(name, value, options) {
    if (!name || /^(?:expires|max\-age|path|domain|secure)$/i.test(name)) {
        return false;
    }

    var expiresString = "";

    if (options.expires) {
        var date = new Date();
        date.setTime(+date + options.expires);
        expiresString = "; expires=" + date.toGMTString();
    }

    options.encodingFunction = options.encodingFunction || encodeURIComponent;

    document.cookie = encodeURIComponent(name) + "=" + options.encodingFunction(value) + expiresString + (options.domain ? "; domain=" + options.domain : "") + (options.path ? "; path=" + options.path : "") + (options.secure ? "; secure" : "");

    return true;
}

function removeCookie(name, options) {
    if (hasCookie(name)) {
        return false;
    }
    document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (name ? "; domain=" + options.domain : "") + (options.path ? "; path=" + options.path : "");
    return true;
}

function hasCookie(name) {
    if (!name) {
        return false;
    }
    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
}

module.exports = {
    read: readCookie,
    set: setCookie,
    remove: removeCookie
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var dataLayer = window.dataLayer = window.dataLayer || [];
var useNewArrayLogic = window.location.href.indexOf('tracking-arrays=true') >= 0;

module.exports = {
    loadContainer: function loadContainer(containerId) {
        var gtmAlreadyLoadedClassName = 'gtm-main-container-load-initiated';
        var alreadyInitiatedMainGtmContainerLoaded = document.documentElement.className.indexOf(gtmAlreadyLoadedClassName) >= 0;

        if (alreadyInitiatedMainGtmContainerLoaded) {
            // preventing duplicated load of main GTM container
            return;
        }

        document.documentElement.className += ' ' + gtmAlreadyLoadedClassName;

        (function (w, d, s, l, i) {
            w[l] = w[l] || [];w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', containerId);
    },

    push: function push() {
        if (!arguments.length) {
            return;
        }

        var args = [].slice.call(arguments);

        args.map(function (data) {
            for (var key in data) {
                if (!useNewArrayLogic || typeof data[key] === 'string') {
                    data[key] = toLower(data[key]);
                }
            }

            return data;
        });

        dataLayer.push.apply(dataLayer, args);
    }
};

function toLower(val) {
    return val && ('' + val).toLowerCase();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

if (location.hash.indexOf('tracking-off=true') < 0) {
    var processCommand = function processCommand(data) {
        var fn, args;

        if (data[0] === 'pagename') {
            gtm.setPagename(data[1]);
        }

        if (data[0] === 'gtm') {
            fn = gtm[data[1]];
            args = data.slice(2);
            if (typeof fn === 'function') {
                fn.apply(gtm, args);
            }
        } else if (data[0] === 'dealer') {
            fn = dealer[data[1]];
            args = data.slice(2);
            if (typeof fn === 'function') {
                fn.apply(dealer, args);
            }
        } else if (data[0] === 'dealerTatsu') {
            fn = dealerTatsu[data[1]];
            args = data.slice(2);
            if (typeof fn === 'function') {
                fn.apply(dealerTatsu, args);
            }
        } else if (data[0] === 'dealer-gtm') {
            fn = dealerGtm[data[1]];
            args = data.slice(2);
            if (typeof fn === 'function') {
                fn.apply(dealerGtm, args);
            }
        }
    };

    var gtm = __webpack_require__(19);
    var dealer = __webpack_require__(13);
    var dealerTatsu = __webpack_require__(14);
    var dealerGtm = __webpack_require__(12);

    var ut = window.ut || (window.ut = []);

    if (ut.push === Array.prototype.push) {
        ut.push = function () {
            Array.prototype.push.apply(window.ut, arguments);
            processCommand.apply({}, arguments);
        };

        ut.forEach(processCommand);
    }

    __webpack_require__(21);

    module.exports = {
        gtm: gtm,
        dealer: dealer,
        dealerTatsu: dealerTatsu,
        ut: ut
    };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

module.exports = function (obj) {
    if (!isObject(obj)) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
        source = arguments[i];
        for (prop in source) {
            obj[prop] = source[prop];
        }
    }
    return obj;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isNumber = __webpack_require__(6);

module.exports = function indexOf(arr, item, from) {
    var i = 0;
    var l = arr && arr.length;
    if (isNumber(from)) {
        i = from < 0 ? Math.max(0, l + from) : from;
    }
    for (; i < l; i++) {
        if (arr[i] === item) return i;
    }
    return -1;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function isFunction(obj) {
    return toString.call(obj) === '[object Date]';
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function isNumber(obj) {
    return toString.call(obj) === '[object Number]';
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isObject(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    return !!obj && (type === 'function' || type === 'object');
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(3);

module.exports = function merge() {
    var args = [].slice.call(arguments);
    args.unshift({});
    return extend.apply(this, args);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(9);
exports.encode = exports.stringify = __webpack_require__(10);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var currentVehicles = [];

function add(data) {
    currentVehicles.push(data);
}

function commit() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        list_productidsall: currentVehicles
    });

    currentVehicles = [];
}

module.exports = {
    add: add,
    commit: commit
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var cookies = __webpack_require__(0);
var visitorId = cookies.read('as24Visitor');

function sendRequest(params) {
    if (!visitorId) {
        return;
    }

    params.visitor = visitorId;
    params.ticks = +new Date();

    var paramsStr = Object.keys(params).map(function (key) {
        return key + '=' + encodeURIComponent(params[key]);
    }).join('&');

    new Image().src = 'https://tracking.autoscout24.com/parser.ashx?' + paramsStr;
}

module.exports = {
    listview: function listview(ids) {
        sendRequest({
            id: ids.join('|'),
            source: 'lv',
            url: '/'
        });
    },

    detailview: function detailview(url) {
        var parser = document.createElement('a');
        parser.href = url || location.href;
        var matches = parser.pathname.match(/-([\d]+)$/i);

        if (matches && matches.length === 2) {
            var id = matches[1];
            sendRequest({
                source: 'pv',
                url: url || location.href,
                id: id
            });
        }
    },

    topcarview: function topcarview() {
        var matches = location.pathname.match(/-([\d]+)$/i);
        if (matches && matches.length === 2) {
            var id = matches[1];
            sendRequest({
                source: 'ha',
                url: location.href,
                id: id
            });
        }
    },

    phone: function phone() {
        var matches = location.pathname.match(/-([\d]+)$/i);
        if (matches && matches.length === 2) {
            var id = matches[1];
            sendRequest({
                source: 'mc',
                url: location.href,
                id: id
            });
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var cookies = __webpack_require__(0);
var visitorId = cookies.read('as24Visitor');

function sendRequest(params) {
    if (!visitorId) {
        return;
    }

    params.visitor = visitorId;
    params.ticks = +new Date();

    var paramsStr = Object.keys(params).map(function (key) {
        return key + '=' + encodeURIComponent(params[key]);
    }).join('&');

    new Image().src = 'https://tracking.autoscout24.com/parser.ashx?' + paramsStr;
}

module.exports = {
    listview: function listview(ids) {
        sendRequest({
            id: ids.join('|'),
            source: 'lv',
            url: location.href
        });
    },

    detailview: function detailview(id) {
        sendRequest({
            id: id,
            source: 'pv',
            url: location.href
        });
    },

    topcarview: function topcarview(id) {
        sendRequest({
            id: id,
            source: 'ha',
            url: location.href
        });
    },

    phone: function phone(id) {
        sendRequest({
            id: id,
            source: 'mc',
            url: location.href
        });
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var cookies = __webpack_require__(0);
var isValidDate = __webpack_require__(5);

var utm = __webpack_require__(17);

var cAge = 90;
var oneDay = 24 * 60 * 60 * 1000;

function readCookie(name) {
    // format of the cookie:
    // timeStamp(no separator here)firstVisit#lastPaidCampaign#currentVisit
    // cookieDate(0-13)medium,source,campaign,timestamp#medium,source,campaign,timestamp#medium,source,campaign,timestamp

    var now = +new Date();

    var cookie = {
        name: name,
        date: new Date(0),
        content: [],

        firstVisit: null,
        currentVisit: null,
        lastPaidVisit: null,

        isValid: function isValid() {
            return isValidDate(this.date) && this.content && this.content.length === 3;
        },
        getGtmData: function getGtmData() {
            var ret = {};
            ret.campaign_directMedium = this.currentVisit[0];
            ret.campaign_directSource = this.currentVisit[1];
            ret.campaign_directCampaign = this.currentVisit[2];

            if (this.lastPaidVisit && this.lastPaidVisit[3] > now - cAge * oneDay) {
                ret.campaign_lastPaidMedium = this.lastPaidVisit[0];
                ret.campaign_lastPaidSource = this.lastPaidVisit[1];
                ret.campaign_lastPaidCampaign = this.lastPaidVisit[2];
            }

            return ret;
        },

        updateCurrentVisit: function updateCurrentVisit() {
            var utmParams = utm.getParameters(location.search);
            this.currentVisit = [utmParams.medium, utmParams.source, utmParams.campaign, now];
            this.firstVisit = this.firstVisit || this.currentVisit;

            if (utm.isPaidChannel(utmParams.medium)) {
                this.lastPaidVisit = this.currentVisit;
            }

            this.content = [this.firstVisit, this.lastPaidVisit, this.currentVisit];
        }
    };

    try {
        var rawValue = cookies.read(name);

        if (!rawValue) {
            return cookie;
        }

        var date = new Date(+rawValue.substring(0, 13));

        if (!isValidDate(date)) {
            return cookie;
        }

        cookie.date = date;

        var content = rawValue.substring(13).split('#').map(function (part) {
            if (!part) {
                return null;
            }

            var parts = part.split(',');
            parts[3] = parts[3] && parseInt(parts[3], 10);
            return parts;
        });

        if (!content || content.length !== 3) {
            content = [];
        }

        cookie.firstVisit = content[0];
        cookie.lastPaidVisit = content[1];
        cookie.currentVisit = content[2];

        cookie.content = content;

        return cookie;
    } catch (ex) {
        return cookie;
    }
}

function writeCookie(cookie) {
    var now = +new Date();
    var domain = '.' + location.hostname.split('.').slice(-2).join('.');

    var formattedValue = now + '' + cookie.content.slice(0, 3).join('#');
    var options = {
        expires: cAge * 24 * 60 * 60,
        path: '/',
        domain: location.hostname.indexOf('localhost') >= 0 ? '' : domain
    };

    cookies.set(cookie.name, formattedValue, options);
}

module.exports = {
    read: readCookie,
    write: writeCookie
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var gtm = __webpack_require__(1);
var cookieHandler = __webpack_require__(15);

function updateCampaignCookie() {
    var cookiename = 'cmpatt';
    var campaignCookie = cookieHandler.read(cookiename);
    campaignCookie.updateCurrentVisit();
    gtm.push(campaignCookie.getGtmData());
    cookieHandler.write(campaignCookie);
}

module.exports = {
    updateCampaignCookie: updateCampaignCookie
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var qs = __webpack_require__(11);
var indexOf = __webpack_require__(4);

module.exports = {
    getParameters: function getParameters(locationSearch) {
        var queryParams = qs.parse(locationSearch.replace('?', '')) || {};
        var utm = {
            medium: queryParams.gclid ? 'gclid' : queryParams.utm_medium || '',

            source: queryParams.utm_source || '',

            campaign: queryParams.utm_campaign || ''
        };

        if (!utm.medium) {
            utm.medium = 'direct';
            utm.source = 'direct';
            utm.campaign = 'direct';
        }

        return utm;
    },

    isPaidChannel: function isPaidChannel(medium) {
        var paidChannels = ['aff', 'co', 'med', 'email', 'ret', 'cpc', 'print', 'gclid'];
        return !!(medium && indexOf(paidChannels, medium) >= 0);
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var containerIdsByTld = {
    'de': 'GTM-MK57H2',
    'at': 'GTM-WBZ87G',
    'be': 'GTM-5BWB2M',
    'lu': 'GTM-NDBDCZ',
    'es': 'GTM-PS6QHN',
    'fr': 'GTM-PD93LD',
    'it': 'GTM-WTCSNR',
    'nl': 'GTM-TW48BJ',
    'com': 'GTM-KWX9NX'
};

module.exports = function (hostname) {
    var tld = hostname.split('.').pop();
    return containerIdsByTld[tld] || containerIdsByTld['com'];
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var merge = __webpack_require__(8);

var gtm = __webpack_require__(1);
var containerId = __webpack_require__(18)(location.hostname);
var viewport = __webpack_require__(20);

var pagename;

function setPagename(pn) {
    pagename = pn;
}

function generateCommonParams(data) {
    var mergedPagename = merge({}, pagename, data);

    if (!mergedPagename || !mergedPagename.country || !mergedPagename.market || !mergedPagename.category || !mergedPagename.pageid) {
        throw new Error('Incorrect pagename');
    }

    var commonPageName = [mergedPagename.country, mergedPagename.market, mergedPagename.category, mergedPagename.group, mergedPagename.pageid].filter(function (x) {
        return x;
    }).join('/');

    if (mergedPagename.layer) {
        commonPageName += '|' + mergedPagename.layer;
    }

    var commonData = {
        common_country: mergedPagename.country,
        common_market: mergedPagename.market,
        common_category: mergedPagename.category,
        common_pageid: mergedPagename.pageid,
        common_pageName: commonPageName,

        common_environment: mergedPagename.environment || '',
        common_language: mergedPagename.language || '',
        common_group: mergedPagename.group || '',
        common_layer: mergedPagename.layer || '',
        common_attribute: mergedPagename.attribute || '',

        common_linkgroup: mergedPagename.linkgroup || '',
        common_linkid: mergedPagename.linkid || '',

        common_techState: mergedPagename.techState || ''
    };

    return commonData;
}

function trackClick(params) {
    gtm.push(generateCommonParams(params));
    gtm.push({ event: 'click' });
}

var firstPageview = true;

function trackPageview(data) {
    if (firstPageview) {
        gtm.push(viewport);
    }

    gtm.push(generateCommonParams(data));

    setTimeout(function () {
        if (firstPageview) {
            gtm.loadContainer(containerId);
            __webpack_require__(16).updateCampaignCookie();
            gtm.push({ event: 'common_data_ready' });
            gtm.push({ event: 'data_ready' });
            firstPageview = false;
        } else {
            gtm.push({ event: 'pageview' });
        }
    }, 10);
}

module.exports = {
    setPagename: setPagename,
    trackClick: trackClick,

    set: gtm.push,
    pageview: trackPageview,
    click: trackClick
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var viewportWidth = Math.min(document.documentElement.clientWidth, window.innerWidth || screen.width);

module.exports = {
    session_viewport: viewportWidth >= 994 ? 'l' : viewportWidth >= 768 ? 'm' : viewportWidth >= 480 ? 's' : 'xs'
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var as24tracking = Object.assign(Object.create(HTMLElement.prototype), {
    inDev: false,
    supportedActions: ['set', 'click', 'pageview'],
    supportedTypes: ['gtm', 'pagename'],
    reservedWords: ['type', 'action', 'as24-tracking-value', 'as24-tracking-click-target'],

    createdCallback: function createdCallback() {
        var _this = this;

        var values = this.getAdditionalProperties();
        var type = this.getAttribute('type');
        var action = this.getAttribute('action');
        var args = [type, action];

        if (Object.keys(values).length > 0) {
            args.push(values);
        }

        if (type === 'pagename') {
            args.splice(1, 1);
        }

        var clickTarget = this.getAttribute('as24-tracking-click-target');
        if (clickTarget) {
            var elements = document.querySelectorAll(clickTarget);

            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', function () {
                    return _this.track(args);
                });
            }
        } else {
            this.track(args);
        }
    },
    getAdditionalProperties: function getAdditionalProperties() {
        var _this2 = this;

        var trackingValue = this.getAttribute('as24-tracking-value');
        var values = trackingValue ? JSON.parse(trackingValue) : {};

        if (Array.isArray(values)) {
            return values;
        }

        return Array.prototype.slice.call(this.attributes).filter(function (element) {
            return !(_this2.reservedWords.indexOf(element.nodeName) > -1);
        }).reduce(function (prev, curr) {
            var attrName = _this2.decodeAttributeName(curr.nodeName);
            prev[attrName] = curr.nodeValue;
            return prev;
        }, values);
    },
    decodeAttributeName: function decodeAttributeName(attrName) {
        if (attrName.indexOf('-') > -1) {
            attrName = attrName.replace(/-([a-z])/g, function (g) {
                return g[1].toUpperCase();
            });
        }
        return attrName;
    },
    track: function track(args) {
        if (this.inDev) {
            console.log(args);
        } else {
            ut.push(args);
        }
    }
});

try {
    var ctor = document.createElement('as24-tracking').constructor;
    if (ctor === HTMLElement || ctor === HTMLUnknownElement) {
        document.registerElement('as24-tracking', { prototype: as24tracking });
    }
} catch (e) {
    if (window && window.console) {
        window.console.warn('Failed to register CustomElement "as24-tracking".', e);
    }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var ctor = document.createElement('as24-tracking').constructor;
if (ctor === HTMLElement || ctor === HTMLUnknownElement) {
    __webpack_require__(2);
}

/***/ })
/******/ ]);
//# sourceMappingURL=showcar-tracking.js.map