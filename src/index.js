(function moduleDefinition(root, factory) {
    const $ = '$$title';

    if ('object' === typeof exports && 'object' === typeof module) {
        module.exports = factory(); /* CommonJS */
    } else if ('function' === typeof define && (define.amd || define.cmd)) {
        define($, factory); /* AMD/CMD */
    } else if (root) {
        root[$] = factory();
    }
})(this, (() => {
    'use strict';
    const $ = {};

    let myDocument = document || (window && window.document) || {};
    let myNavigator = navigator || (window && window.navigator) || {};
    let valTitle = myDocument.title || '',
        valPrefix = '',
        valSuffix = '',
        valHackSrc = '/favicon.ico';

    const requireHacked = !!myNavigator.userAgent && 
        !!myNavigator.userAgent.match && 
        !!myNavigator.userAgent.match(/Safari|AppleWebKit|iPhone|iPod|iPad/);

    function resetDocumentTitle() {
        document.title = valPrefix + valTitle + valSuffix;

        if (requireHacked) {
            let hackFrame = myDocument.createElement && myDocument.createElement('iframe');
            let callback = function() {
                setTimeout(() => {
                    myDocument.body && myDocument.body.removeChild && myDocument.body.removeChild(hackFrame);
                    hackFrame = null;
                    callback = null;
                }, 50);
            }

            if (!!hackFrame) {
                hackFrame.setAttribute('style', 'display: none!important; visibility: hidden!important;');
                hackFrame.onload = callback;
                hackFrame.onerror = callback;
                hackFrame.src = valHackSrc;

                myDocument.body && myDocument.body.appendChild && document.body.appendChild(hackFrame);
            }
        }
    }

    $.setTitle = (title, flush = false) => {
        if (title === null || title === void 0) {
            title = '';
        }

        if (flush) {
            valPrefix = '';
            valSuffix = '';
        }

        valTitle = title + '';
        resetDocumentTitle();
    };

    $.setPrefix = (prefix) => {
        if (prefix === null || prefix === void 0) {
            prefix = '';
        }

        valPrefix = prefix + '';
        resetDocumentTitle();
    };

    $.setSuffix = (suffix) => {
        if (suffix === null || suffix === void 0) {
            suffix = '';
        }

        valSuffix = suffix + '';
        resetDocumentTitle();
    };

    $.withHackSource = (src) => {
        if (src === null || src === void 0) {
            src = '/favicon.ico';
        }

        valHackSrc = src;
    };

    return $;
}));