"use strict";

window.onload = function () {
    for (var i = 0; i < 4; i++) {
        Promise.resolve(i).then(getI);
    }

    function getI(i) {
        setTimeout(function () {
            console.log(i);
        }, 1000 * i);
    }
};