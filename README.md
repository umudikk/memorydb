#MemoryDB

//Basic object array and methods

#add(object)

//You can add any object this db.

    let person1={
        name:'Umut',
        age:23
    }

    memorydb.add(person1)

    let person2={
        name:'Veli',
        key2:'foo',
        key3:'bar'
    }

    memorydb.add(person2)

//There are 2 objects in db.

#delete(filter_object)

//You can delete any object with filter_object .Its so flexible.

    let filter={
        age:23
    }
    memorydb.delete(filter) //We deleted person1


OR

    let filter={
        name:'Umut'
        age:23
    }
    memorydb.delete(filter) //We deleted person1


#find(filter_object)

//It returns an array include filter properties.For example.

    let filter={
        key2:'foo'
    }

    returns
    [
        {
            name:'Veli',
            key2:'foo',
            key3:'bar'
        }
    ]

##Object properties

    // your object may contains 2 properties but its optional
    {
        name:'Seyit',
        delay:5000 // Wait 5000ms and add
    }
    {
        key:'adsad',
        destroy:5000 // Wait 5000ms and delete this object
    }
    {
        delay:2000  // Object life-time = 3000ms
        destroy:5000
    }


##filter object example

    {
        key:'<10' //IMPORTANT-> must be number  '>string' -> err
    }
    {
        key:'>10' 
    }
    {
        key:'!10' //int or string it doesnt matter
    }
    {
        key:'!foo' 
    }



