const reactElement = {
    type: "a",
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: "Click Me"
}

// function customRender(reactElement, container){

// const element = document.createElement(reactElement.type)
// element.innerHTML = reactElement.children

// element.setAttribute("href",reactElement.props.href)
// element.setAttribute("target",reactElement.props.target)

// container.appendChild(element)


// }

function customRender(reactElement, container) {
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children

    for (let key in reactElement.props) {
        if (key === "children") {
            continue
        }

        element.setAttribute(key, reactElement.props[key])
    }

        container.appendChild(element)

}


    const maincontainer = document.querySelector('#root')

     customRender(reactElement, maincontainer)