var express = require('express')
var app = express()

app.get('/employees', function(req, res) {

    var employees = [{
        _id: "545a6f530cf231cfe3d72126",
        gender: "female",
        title: "ms",
        first: "tamara",
        last: "arnold",
        street: "1470 spring st",
        city: "new haven",
        state: "colorado",
        zip: "16290",
        email: "tamara.arnold17@example.com",
        username: "crazywolf313",
        phone: "(632)-525-4308",
        cell: "(968)-290-6616",
        SSN: "235-98-7909",
        large: "http://api.randomuser.me/portraits/women/85.jpg",
        medium: "http://api.randomuser.me/portraits/med/women/85.jpg"
    }]
    
    res.send(employees)
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000!')
})
