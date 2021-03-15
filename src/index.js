const rootDocument = document || (window && window.document) || {};
const rootNavigator = navigator || (window && window.navigator) || {};
const requireHack = !!rootNavigator.userAgent && !!rootNavigator.userAgent.match && !!rootNavigator.userAgent.match(/Safari|AppleWebKit|iPhone|iPod|iPad/);

let valTitle = rootDocument.title || '',
    valPrefix = '',
    valSuffix = '',
    valHackSrc = '/favicon.ico';

const resetDocumentTitle = () => {
    rootDocument.title = valPrefix + valTitle + valSuffix;

    if (requireHack) {
        let hackFrame = rootDocument.createElement && rootDocument.createElement('iframe');
        let callback = function () {
            setTimeout(() => {
                rootDocument.body && rootDocument.body.removeChild && rootDocument.body.removeChild(hackFrame);
                hackFrame = null;
                callback = null;
            }, 50);
        };

        if (!!hackFrame) {
            hackFrame.setAttribute('style', 'display: none!important; visibility: hidden!important; width: 0; height: 0; z-index: -9999;');
            hackFrame.onload = callback;
            hackFrame.onerror = callback;
            hackFrame.src = valHackSrc;

            rootDocument.body && rootDocument.body.appendChild && document.body.appendChild(hackFrame);
        }
    }
};

export default {
    setTitle (title = '', flush = false) {
        if (flush) {
            valPrefix = '';
            valSuffix = '';
        }

        valTitle = title + '';
        resetDocumentTitle();
    },

    setPrefix (prefix = '') {
        valPrefix = prefix + '';
        resetDocumentTitle();
    },

    setSuffix (suffix = '') {
        valSuffix = suffix + '';
        resetDocumentTitle();
    },

    withHackSource (src = '/favicon.ico') {
        valHackSrc = src;
    }
};
