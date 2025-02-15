
const propName = prompt('Свойство с каким именем добваить в объект?')
const propValue = prompt(`Какое значение написать в свойство${propName}`)

const obj = {
[propName]: propValue
}

console.log(obj)