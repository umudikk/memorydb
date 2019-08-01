import { mwfilterparser } from './filterparser'

export class MemoryDB{
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
      let value=filter[fkeys[i]]
      let prop=fkeys[i]//which properties
      rArr=rArr.filter(mwfilterparser(value,prop))
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


//test code 
let db=new MemoryDB('foo')
db.add({name:'a',age:45})
db.add({name:'a',age:13})
let gf=db.find({age:'<15'})
console.log(gf)