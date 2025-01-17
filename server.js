const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use((req, res, next) => {
        // handle 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
    })
    .listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
    })
