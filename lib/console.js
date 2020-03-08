const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

class Console {
  constructor(t) {
    if (t && typeof t == 'string') {
      this._title = t
      this._refreshTitle()
    }
  }

  _refreshTitle() {
    if (process.platform == 'win32') process.title = this._title
    else process.stdout.write('\x1b]2;' + this._title + '\x1b\x5c')
  }

  Clear() {
    console.log('\x1B[2J\x1B[3J\x1B[H\x1Bc')
  }

  WriteLine(s) {
    console.log(s)
  }

  Read() {
    return new Promise((resolve, reject) => {
      rl.question('', i => resolve())
    })
  }

  ReadLine() {
    return new Promise((resolve, reject) => {
      rl.question('', input => resolve(input))
    })
  }

  set Title(t) {
    this._title = t
    this._refreshTitle()
  }

}

module.exports = new Console()