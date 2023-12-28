// creating an http server
// express
// node default library => no


// const express = require("express");
// const app = express();
// function sum(n){
//     let ans =0;
//     for(let i=1; i<=n; i++){
//         ans = ans +i;
//     }
//     return ans;
// }

// req, res => requesets and response 
// app.get("/", function(req, res){
//     const n = req.query.n; //This is used to get input from the url, by using "?" and then taking input of the variable we want, in this case it is done like this
//     //  ?n=10
//     const ans = sum(n);
//     res.send("Hi your answer is :" + ans);
// })

// app.listen(3000);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Request methods
// 1. GET - When you are asking something from the server/ used to request data from a specified resource

// 2. POST - Used to send data to a server to create/update a resource.

// 3. PUT - PUT is also used to send data to a server to create/update a resource.
// The difference between POST AND PUT IS THAT PUT REQUESTS ARE IDEMPOTENT. 
// CALLING PUT SEVERAL TIME WILL ALWAYS PRODUCE SAME RESULTS.
// CALLING POST SEVEREAL TIME MAY HAVE SIDE EFFECTS OF CREATING THE RESOURCE MULTIPLE TIMES.

// 4. DELETE - THE delete method deletes a specified resource.

// status codes 
// 200 - everything works fine(In 200 series it will work)
// 400 - occurs when the server cannot understand the process correctly
// 500 - Internal server error
// 411 - The server refuges to accepts the request without a defined content-length
// 403 - You don't have access








const express = require("express")
const app = express();

const users = [{
    name: "John",
    Kidneys: [{
        Healthy: false
    }]
}]

app.get("/", function(req, res){
    const johnKidneys = users[0].Kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].Healthy){
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnhelathyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhelathyKidneys,
    })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0],Kidneys.push({
        Healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.listen(3000)