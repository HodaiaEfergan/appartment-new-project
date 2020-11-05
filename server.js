const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const opencage = require('opencage-api-client');
const { response } = require('express');
const { json } = require('body-parser');
const Schema = mongoose.Schema;
const fs = require('fs');
//const pdf = require('html-pdf');
// const http = require('http');
//const cors = require('cors');
const path = require('path');
const router = express.router;
var port = process.env.PORT || 4000;
var House;


app.use(express.static(__dirname + "/client/dist/"));
app.use(express.static(__dirname + "client"));
app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//welcome to my server
app.get('/', (req, res) => {
    //res.sendFile('welcome to my serverr');
    // res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname, 'client/dist/Angular8ClientCrud/index.html'));
    // res.sendFile(path.resolve(__dirname, 'client/dist/index.html'));
})

app.listen(port, () => {
    console.log('listening on port ' + port);
    //mongoose db:id,street,type,homeNumber,city,price,category,numOfRooms,size,neighborhood,floor,details,picture
    mongoose.connect('mongodb+srv://user:1234@cluster0.ibhto.mongodb.net/appartmentsNew?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("connect db")
        const house_schema = new Schema({

            // id: String,
            minRooms: Number,
            maxRooms: Number,
            street: String,
            type: String,
            homeNumber: Number,
            city: String,
            price: Number,
            category: String,
            numOfRooms: Number,
            size: Number,
            neighborhood: String,
            floor: Number,
            details: [String],
            picture: String,
            minPrice: Number,
            maxPrice: Number

        });
        House = mongoose.model("houses", house_schema);
        //we are connected!!!

    });

    //create a new house
    app.post('/add', async (req, res) => {
        //  console.log("request", req)
        //const id = req.body.id;
        const street = req.body.street;
        const homeNumber = req.body.homeNumber;
        const city = req.body.city;
        const price = req.body.price;
        const category = req.body.category;
        const picture = req.body.picture;
        const numOfRooms = req.body.numOfRooms;
        const neighborhood = req.body.neighborhood;
        const floor = req.body.floor;
        const details = req.body.details;
        const properties = req.body.properties;
        const type = req.body.type;
        const size = req.body.type;
        var newHouse = new House(req.body);
        // console.log(req.body);
        res.json(await newHouse.save().then(createdHouse => {
            res.status(201).json({
                message: "Note added successfully",
                houseId: createdHouse._id

            });
        }))

    });
    //delete one house-TODO
    app.post('/delete', async (req, res) => {
        return res.json(await House.deleteOne({ _id: req.body._id })
        )
    })
    //delete all houses
    app.delete('/House', async (req, res) => {
        return res.json(await House.drop());
    });
    //get all houses
    app.get('/Houses', async (req, res) => {
        console.log(req.body);
        return res.json(await House.find());

    });
    //get relevent houses- by category only
    app.get('/catHouses', async (req, res) => {
        const category = req.body.category;

        res.json(await House.find({ category: category }));

    });
    //get relevent houses- by all parameters
    app.post('/releventHouses', async (req, res) => {
        //var query = req.body.query || {};
        //console.log(query);
        Object.keys(req.body).forEach(key => {
            if (req.body[key] == null) {
                delete req.body[key];
            }
        });
        const query = req.body;
        if (req.body.minRooms) {
            query.numOfRooms = { $gte: req.body.minRooms }
            delete query.minRooms;
        }
        if (req.body.maxRooms) {
            query.numOfRooms = { $lte: req.body.maxRooms }
            delete query.maxRooms;
        }
        if (req.body.minPrice) {
            query.price = { $gte: req.body.minPrice }
            delete query.minPrice;
        }
        if (req.body.maxPrice) {
            query.price = { $lte: req.body.price }
            delete query.maxPrice;
        }
        const results = await House.find(req.body);
        console.log(req.body)
        res.json(results);

    });
});


