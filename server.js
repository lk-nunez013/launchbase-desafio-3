const express = require('express')
const nunjucks = require('nunjucks')
 
const server = express()
const courses = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache:true
})

server.get("/", function(req, res){
    return res.render("about", {items: courses})
})

server.get("/courses", function(req, res){
    const id = req.query.id

    const course = courses.find(function(course){
        return course.id == id
    })
    if(!course){
        return res.send("Curso não encontrado!")
    }

    return res.render("courses", {item: course})
})

server.listen(5000, function(){
    console.log('Server is running')
})