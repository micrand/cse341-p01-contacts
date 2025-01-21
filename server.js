const express = require('express');
const path = require('path');

const mongodb = require('./data/database');


const PORT = process.env.PORT || 3001;

const app = express();



app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')    
    // .use((req, res, next) => {
    //     // handle 404 page
    //     res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
    // })

app
    .use('/', require('./routes'))
    .use('/users', require('./routes/users'))

mongodb.initDb( (err)=>{
    if(err){
        console.log(err)
    }
    else{
        app.listen(PORT, () => {
            console.log(`Database is listening and node running on ${PORT}`)
        })
    }
})
    
