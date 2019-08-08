let createDom = new Proxy({}, {
    get(target, property) {
        return function(attrs = {}, ...children) {
            let element = document.createElement(property);
            for (let prop of Object.keys(attrs)) {
                element.setAttribute(prop, attrs[prop])
            }

            for (let child of children) {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                element.appendChild(child);
            }
            return element
        }
    }
})