const utils = (function () {
    const extractParams = function (paramsString) {
        const params = {};
        const rawParams = paramsString.split('&');

        let j = 0;
        for (let i = rawParams.length - 1; i >= 0; i--) {
            const urlParams = rawParams[i].split('=');
            if (urlParams.length === 2) {
                params[urlParams[0]] = urlParams[1];
            }
            else if (urlParams.length === 1) {
                params[j] = urlParams[0];
                j += 1;
            }
            else {
                //param not readable. pass.
            }
        }

        return params;
    };

    return {
        router: function (route, data) {
            route = route || location.hash.slice(1) || 'home';

            const temp = route.split('?');
            const routeSplit = temp.length;
            const functionToInvoke = temp[0] || false;
            let params = {};

            if (routeSplit > 1) {
                params = extractParams(temp[1]);
            }

            //fire away...
            if (functionToInvoke) {
                views[functionToInvoke](data, params);
            }
        },

        render: function (elementId, content) {
            document.getElementById(elementId).innerHTML = content;
            document.getElementById(elementId).scrollIntoView();
        }
    }
})();