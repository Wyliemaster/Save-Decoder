const zlib = require('zlib')
const fs = require('fs')

function Xor(key, string){
      result = '';
      for (var index = 0; index < string.length; index++) {
      var input = string.charCodeAt(index);
      result += String.fromCharCode(input ^ key);
}
      return result;
}

function decodeSave(fileName){
    data = fs.readFileSync(__dirname + '/' + fileName, "utf-8") //CCGameManager or CCLocalLevels
    Xord = Xor(0xB, data)
    base64 = Buffer.from(Xord, 'base64')
    result = zlib.unzipSync(base64).toString()
    fs.writeFileSync('decoded.xml', result)
    return console.log('Your Save Data has been decoded')
}

function encodeSave(fileName) {
  data = fs.readFileSync(__dirname + '/' + fileName, "utf8"); //txt, xml, etc...
  zipped = zlib.gzipSync(data, 'base64')
  base64 = new Buffer.from(zipped, "utf-8").toString("base64")
  done = Xor(0xB, base64)
  fs.writeFileSync('CCGameManager.dat', done)
  return console.log('Save File Generated')
  }

  decodeSave(/*Please insert the name of your save file*/ )

  encodeSave(/*Please insert the name of the file you want to encode*/ )
