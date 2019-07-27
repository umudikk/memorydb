import { on } from "cluster"
import { v1 } from "uuid"
import * as fs from "fs"
class mdb{
  constructor(option){
    this.option=option
    this.db=[]
  }

  add(key,object){ 
    if(typeof key==String){
      if(key==''){
        key=v1()//create uniq time-base id
      }
      this.db[key]=object
    }else{
      return 'add err'
    }
  }

  find(filter){
    if(typeof filter!=Object){
      return this.db[filter]
    }else{
      var arr=this.db
      var rArr=[]
      var fkeys= Object.keys(filter).sort()
      for(var i=0;i<arr.length;i++){
        var arrkeys= Object.keys(arr[i]).sort()
        var flag=0
        for(var x in fkeys){
          if(arr[i][fkeys[x]]!=undefined & filter[fkeys[x]]==arr[i][fkeys[x]]){
            flag++
          }
        }
        if(flag==fkeys.length){
          flag=0
          rArr.push(arr[i])
        }            
      }
      return rArr
    }
  }

  delete(filter){
    if(typeof filter==String){
      this.db[filter]=undefined
    }

  }

  save(){

  }
}
export default mdb;
