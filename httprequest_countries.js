// use the rest countries and print all countries name , regions, subregions , populations.


// initalize a xml http request

let xhr=new XMLHttpRequest();

//open a request and an url is passed to open methods

xhr.open("GET","https://restcountries.com/v2/all");

//process the request on the server side and retrieve the data

xhr.onload= function(){

    //please provide me data if my request lies in the range of status code 200-<300

    if(xhr.status>=200 && xhr.status<300){
        //provide data to server
        let data=JSON.parse(this.response);
        console.log(data);

//   for printing the flags of the country

    for(let i=0; i<data.length; i++){
        let user=data[i];
        console.log(`
        Countries Names:${user.name}
        Regions:${user.region}
        Sub-Regions:${user.subregion}
        Population:${user.population}`)
        }
    }
}

//sending request to server

 xhr.send();



 