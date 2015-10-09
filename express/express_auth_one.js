/**
 * Created by oneleaf on 15/10/9.
 */
var express=require('express')
var basicAuth=require('basic-auth-connect')
var app=express()

var auth=basicAuth(function(user,pass){
    return (user==='test1') & (pass==='123456')
})

app.get('/library',function(req,res){
    res.send('Welcome to library')
})

app.get('/restricted',auth,function(req,res){
    res.send("Welcome to the restricted section.")
})

app.listen(8080)

/**
 * Test URL:
 * http://127.0.0.1:8080/restricted
 */