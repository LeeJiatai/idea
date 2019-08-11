//创建层级dom
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

//自定义Array负数取值
let createArray = function(...elements) {
    let handler = {
        get: function(target, property, receiver) {
            let index = Number(property);
            if (index < 0) {
                property = String(elements.length + index)
            } 
            return Reflect.get(target, property, receiver)
        }
    };

    let target = []
    target.push(...elements);
    return new Proxy(target, handler)
}