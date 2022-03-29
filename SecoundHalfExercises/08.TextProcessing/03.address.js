<<<<<<< HEAD
function address(string) {
    let lastWord = string.lastIndexOf('\\') + 1
    let address = string.substring(lastWord,string.length)
    let afterDot = address.lastIndexOf('.') + 1
    let extention = address.substring(afterDot,address.length) 
    let fileName = address.substring(0,afterDot - 1)

    console.log(`File name: ${fileName}
File extension: ${extention}`)
}
address('C:\\Internal\\training-internal\\Template.pptx')
=======
function address(string) {
    let lastWord = string.lastIndexOf('\\') + 1
    let address = string.substring(lastWord,string.length)
    let afterDot = address.lastIndexOf('.') + 1
    let extention = address.substring(afterDot,address.length) 
    let fileName = address.substring(0,afterDot - 1)

    console.log(`File name: ${fileName}
File extension: ${extention}`)
}
address('C:\\Internal\\training-internal\\Template.pptx')
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
address('C:\\Projects\\Data-Structures\\template.bak.pptx')