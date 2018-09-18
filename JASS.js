var loadTag = async function (nextDOM) {
    nextDOM.insertAdjacentHTML('beforeend', generateInnerDOM(nextDOM));
    for (var index in nextDOM.children) {
        var nextChild = nextDOM.children[index];
        if (nextChild.tagName) {
            loadTag(nextChild);
        }
    };
};

generateInnerDOM = function (elm) {
    if (elm.tagName) {
        return JSON.parse(window.getComputedStyle(elm).content);
    }
};

window.onload = function () {
    document.write(document.head.innerHTML + generateInnerDOM(document.body));
    loadTag(document.getElementById('content'));
};
