import { on } from "cluster"
import { v1 } from "uuid"
class mdb{
  constructor(option){
    this.option=option
    this.db=[]
  }
  add(key,object){ 
    if(typeof key==String){
      if(key==''){
        key=uuid.v1()
      }
      this.db[key]=object
    }else{
      return 'add err'
    }
  }

  find(filter){

  }

  delete(filter){

  }

  save(){

  }
}
export default mdb;
