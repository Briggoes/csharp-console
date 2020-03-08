# csharp-console
> Ever wanted to use the console just like with C#? Well me neither but I was bored and...

## Usage
```js
const Console = require('csharp-console')

async function main() {
  Console.Title = 'My app'
  Console.WriteLine('What is your name?')
  var name = await Console.ReadLine()
  Console.WriteLine(`So your name is ${name}? What a great name!`)
  Console.Read()
}

main()
```

## Liscense
This project is licensed under the MIT License