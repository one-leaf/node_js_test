/**
 * Created by oneleaf on 15/10/9.
 */
var express=require('express')
var basicAuth=require('basic-auth-connect')
var app=express()
app.listen(8080)
app.use(basicAuth(function(user,pass){
    return (user==='test') & (pass==='123456')
}))

app.get('/',function(req,res){
    res.send('Sucessful Authentication')
})

