const express = require('express');
const app = express();
const PORT = 4000;

// sample

// app.get('/renuka', (req, res) => {
//     res.send('Hello renu good morning!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


//Middleware


firstHandler = (req, res, next) => {
    console.log('first handler');
    if(10>0) {
        next();
    }
    else {
        res.send('error');
    }
}


app.get('/home', firstHandler, (req, res) => {
    res.send('Hello ! this home page');
});

app.get('/about', (req, res) => {
    res.send('this about page');
});

app.get('/contact', (req, res) => {
    res.send('this contact page');
});





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
