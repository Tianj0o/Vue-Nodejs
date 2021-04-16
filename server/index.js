const express =require('express')

const app =express()
app.set('secret','adasdadadad1321')
app.use(require('cors')())

app.use('/uploads',express.static(__dirname+'/uploads'))
app.use('/admin',express.static(__dirname+'/admin'))
app.use('/',express.static(__dirname+'/web'))
app.use(express.json())
require('./routes/admin')(app)
require('./Plugins/db')(app)
require('./routes/web')(app)

app.listen(3000,()=>{
    console.log('app listen1')
})


