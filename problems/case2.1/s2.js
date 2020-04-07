let doCopy = () => {
    let element = document.querySelector('#cc')
    element.setAttribute('readonly', '')
    element.select()
    element.setSelectionRange(0, element.value.length)
    document.execCommand('cut')
}

let doPaste = () => {
    let element = document.querySelector('#pp')
    element.value = document.execCommand('paste')
}
