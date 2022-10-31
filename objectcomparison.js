let obj1={name:"person 1",age:5}
let obj2={age:5 ,name:"person 1"}

let isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1); 
    keys2 = Object.keys(obj2);

    //return true when the two json has same length and all the properties has same value key by key
    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}
console.log("json is equals: "+ isEqualsJson(obj1,obj2));

  