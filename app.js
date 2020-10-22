const express = require('express');
const app = express();
const request = require('request');
const param = [];
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended:false }))

//defining routes
app.get('/', (req, res) => {
    res.render('demo.ejs', { name: 'Kumar Sushobhan'})
})
app.post('/', async (req, res) => {
    try{
        param.push({
            id: Date.now().toString(),
            from: req.body.from,
            to: req.body.to,
            query: req.body.query
        })
        var Url='https://translate.google.com/?sl='+req.body.from+'&tl='+req.body.to+'&text='+req.body.query+'&op=translate'
        res.redirect(Url)
        
    }catch{
        console.log('error! plz try again');
        res.redirect('/')
    }
    console.log(param);   
})

app.listen(3000);




// app.get('/translate', (req, res) => {
//     // // request.post({
//     // //     headers: {'content-type' : 'application/x-www-form-urlencoded'},
//     // //     url:     URL,
//     // //     body:    param
//     // // }, function(error, response, body){
//     // //     console.log(body);
//     // // });
//     // request('https://translate.google.com/?sl=en&tl=es&text=good%20morning&op=translate', { json: true }, (err, res, body) => {
//     //     if (err) { 
//     //         return console.log(err);
//     //     }
//     //     // console.log(JSON.stringify(res));
//     //     var RESPONSE=JSON.stringify(res);
//     //     //console.log(body.explanation);
//     // });
//     res.render('translate.ejs', { param:param })
// })



