//import { mdb } from '../dist/index.js'
var mdb=require('../dist/index.js').default
console.log('a')

var db=mdb()
db.add('d',{sayi:5})
db.add('a',{sayi:51})
db.add('s',{sayi:4})
db.add('v',{sayi:3})
db.add('h',{sayi:5})

console.log(db.db)

