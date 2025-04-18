var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var os = require('os')
var mongo = require('mongoose')

mongo.connect('mongodb://localhost:27017/projectt')
let db = mongo.connection;

// middle ware setup 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/cont', (req, res) => {
    var uname = req.body.uname;
    var email = req.body.email;
    var sub = req.body.sub;
    var msg = req.body.msg;

    var data = {
        "Username": uname,
        "Email": email,
        "Subject": sub,
        "Msg": msg
    }
    db.collection('contact').insertOne(data, (err) => {
        res.redirect('http://localhost:3000/contact')
    })
})

app.post('/reg', (req, res) => {
    var uname = req.body.uname;
    var email = req.body.email;
    var passw = req.body.passw;

    var data = {
        "Username": uname,
        "Password": passw,
        "Email": email,
        "OS platform": os.platform()
    }


    db.collection('users').insertOne(data, (err) => {
        if (err) {
            console.log('Error in inserting user detail')
            res.send('First solve your error! user already exists')
        } else {
            res.redirect('http://localhost:3000/login')
        }
    });
});

app.post('/log', async (req, res) => {
    const uname = req.body.uname;
    const passw = req.body.passw;
    var cl = db.collection('users');
    var data = {
        "Username": uname,
        "Password": passw,
    }
    var user = await cl.findOne({
        "Username": uname
    });
    try {
        if (user.Password == passw) {
            res.redirect('http://localhost:3000/')
        } else {
            res.send('Invalid Password')
        }
    } catch {
        res.send('User Not Found')
    }
});




app.post('/upd', async (req, res) => {
    var uname = req.body.uname;
    const newuname = req.body.newuname;
    var cl = db.collection('project');
    var user = await cl.findOne({
        "Username": uname
    });

    try {
        cl.updateOne({
            "Username": uname
        }, {
            $set: {
                "Username": newuname
            }
        }, (err) => {
            if (err) {
                res.send('Similar!')
            };
            res.send('Done');
        });
    } catch {
        res.send('User not found')
    }
})

app.get('/del', (req, res) => {
    res.sendFile(__dirname + '/delete.html');
})

app.post('/del', async (req, res) => {
    const uname = req.body.uname;
    const passw = req.body.passw;
    var cl = db.collection('project')
    var user = await cl.findOne({
        "Username": uname
    });

    try {
        if (user.Password == passw) {
            cl.deleteOne({
                "Username": uname
            }, (err) => {
                console.log('Deleted');
                res.redirect('/');
            })
        } else {
            res.send('Invalid pass')
        }
    } catch {
        res.send('User Not found')
    }
})

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found')
});

app.listen(8056,(err)=>{
    if (err) throw err;
    console.log('Server start on http://localhost:8056/')
})