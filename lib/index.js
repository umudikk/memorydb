import { on } from "cluster"
import { v1 } from "uuid"

 export default class mdb{
  constructor(dbName){
    this.db=[]
    this.dbName=dbName
  }

  add(object){ 
    if(object.id==undefined) object.id= Math.random().toString(36).substring(3)//its random not uniq

    if(object.delay!=undefined & typeof object.delay=='number'){
      setTimeout(() => {
        this.db.push(object)
      }, object.delay);
    }else{
      this.db.push(object)
    }

    if(object.destroy!=undefined & typeof object.destroy=='number'){
      setTimeout(() => {
        this.delete(object)
      }, object.destroy);
    }
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
        let flag=false
        for(let j in fArr)
        {
          if(JSON.stringify(this.db[i]) === JSON.stringify(fArr[j])){
            fArr=fArr.slice(0, j).concat(fArr.slice(j + 1, fArr.length))
            flag=true
          }
        } 
        if(flag==false){
          rArr.push(this.db[i]) 
        }  
        flag=false
      }
      this.db=rArr
    }else{
      this.db=this.db
    }   
  }

 
    

  
}

var x= new mdb('deneme')
x.add({sayi:54})
x.add({sayi:55})
x.add({sayi:51})
x.add({sayi:54})
console.log(x)
x.add({sayi:58,id:'umut',delay:2000})
x.delete({sayi:58})