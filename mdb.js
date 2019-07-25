class MemoryDB{
    constructor(){
        this.mdb=[]
        this.length=0
    }
    save(object){
        if(typeof object==Object){
            object._id=this.length  
        }
        this.mdb[this.length]=object
        this.length++
    }   
    find(filter){
        var arr=this.mdb
        var rArr=[]
        if(typeof filter==Object){
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
            
        }
        else{
            console.log("bu obje değil FiND")
            for(var l in arr){
                if(arr[l]==filter){
                    rArr.push(l)
                }
            }
            
        }
        return rArr
    }
    delete(filter){
        
        var rArr=[]
        var Arr =this.find(filter)//Obje değilse silinecek objelerin indexleri döner
        if(Arr.length!=0){
               //-----------------------------------------OBJE
            if(filter==Object){
                for(var i in this.mdb){
                    for(var j in Arr){
                        if(Arr[j]._id==this.mdb[i]._id){
                            this.mdb[i]._id=undefined
                        }
                    }
                    if(this.mdb[i]._id!=undefined)
                        rArr.push(this.mdb[i])
                }
    //-----------------------------------------  BASİT DEĞİŞKEN       
            }
            else{
                for(var i in Arr){
                    this.mdb[Arr[i]]=undefined
                    
                }
                for(var i in this.mdb){
                    if(this.mdb[i]!=undefined)
                        rArr.push(this.mdb[i])                
                }
            }

                this.mdb=rArr
                this.length=rArr.length
        }else{
            console.log("bulamadım")
        }
    }
    test(){
        var objs = new MemoryDB()
        objs.save(5)
        objs.save(6)
        objs.save(0)
        objs.delete(6)
        console.log(objs.mdb)
        objs.delete(0)
        console.log(objs.mdb)
        objs.delete(0)
      
    }
}



module.exports=MemoryDB




