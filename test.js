const Console = require('index')

main()

async function main() {
  Console.Title = 'My app'
  Console.WriteLine('What is your name?')
  var name = await Console.ReadLine()
  Console.WriteLine(`So your name is ${name}? What a great name!`)
  Console.Read()
}