const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000
const expressSess = require('express-session')
app.use(expressSess({secret: "Id of session"}));
app.use(cookieParser());

app.get('/', function(req, res) {
    if (req.session.visits){
        req.session.visits++;
        res.send("wizyta nr " + req.session.visits); }
    else {
        req.session.visits=1;
        res.send("Witaj po raz pierwszy!");
    }
} );

app.get('/test',
    (req, res) => {
    console.log('test');
    // console.log(req);
   // console.log(res);
        res.send('Testowa podstrona!')
    }
)

app.get('/cookie',function(req, res){
    res.cookie('cookie_name', 'cookie_value').send('Cookie is set');
});

app.get('/test/:id',
    (req, res) => {
        console.log('reg.params.id');
        // console.log(req);
        // console.log(res);
        res.send('Testowa podstrona id!')
    }
)

app.get('/test2',
    (req, res) => {
        console.log('test');
        // console.log(req);
        // console.log(res);
        res.send('Testowa podstrona 2!')
    }
)
var userCount = 0;

app.get('/test2/:id2',
    (req, res) => {
        console.log(req.params.id2);
        // console.log(req);
        // console.log(res);
        var cookieVal = req.cookies.id === undefined ? 'brak' :req.cookies.id;
        res.cookie('id', req.params.id2, {expires: new Date(Date.now()+900000)}).send(`Poprzedni parametr ${cookieVal}. Podstrona z parametrem o wartości ${req.params.id2}! User count is ${userCount}`);
        console.log(req.cookies['id']);
        userCount ++;
    }
)

app.get('/test2/:id2/:id3',
    (req, res) => {
        console.log(req.params.id2);
        // console.log(req);
        // console.log(res);
        res.send(`Podstrona z parametrem o wartości ${req.params.id2} + ${req.params.id3}!`)
    }
)
app.get('*',
    (req,res) =>
        res.send('Nie ma takiej podstrony')
    )


app.listen(port,
    () => console.log(`Example app listening on port ${port}!`))