import { on } from "cluster"
import { v1 } from "uuid"
import * as fs from "fs"

 export default class mdb{
  constructor(){
    this.db=[]
  }

  add(object){ 
    if(object.id==undefined) object.id= Math.random().toString(36).substring(3)
    this.db.push(object)  
  }

  find(filter){ 
    let rArr=this.db
    let fkeys= Object.keys(filter).sort()
    for(let i in fkeys){
      rArr=rArr.filter(v => v[fkeys[i]] == filter[fkeys[i]])
    }
    return rArr  
  }

  delete(filter){
    let fArr=this.find(filter)
    let rArr=[]
    if(fArr.length>0){
      for(let i in this.db){
        let flag=0
        for(let j in fArr)
        {
          if(JSON.stringify(this.db[i]) !== JSON.stringify(fArr[j])){
            flag++
          }
        } 
        if(flag==fArr.length){
          rArr.push(this.db[i])
        }  
      }
      this.db=rArr
    }else{
      this.db=this.db
    }   
  }

  save(){

  }
}
var x= new mdb()
x.add({sayi:54})
x.add({sayi:55})
x.add({sayi:51})
x.add({sayi:54})
x.add({sayi:58,id:'umut'})
x.delete({sayi:54})
console.log(x)
