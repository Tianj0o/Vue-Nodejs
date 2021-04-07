const express =require('express')

const app =express()

app.use(require('cors')())

app.use('/uploads',express.static(__dirname+'/uploads'))
app.use(express.json())
require('./routes/admin')(app);
require('./Plugins/db')(app);


app.listen(3000,()=>{
    console.log('app listen1')
})


