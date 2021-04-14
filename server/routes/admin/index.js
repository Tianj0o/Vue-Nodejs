module.exports = app =>{
    const  express = require('express')
    const jwt = require('jsonwebtoken')
    const adminuser=require("../../models/AdminUser")
    const assert = require('http-assert')
    const router = express.Router(
      {
        mergeParams:true,
      }
    )

    const authMid =require('../../Middlewaras/auth')
    const resourceMid = require('../../Middlewaras/resource')
    router.post('/',async (req,res)=>{
      const model = await req.Model.create(req.body)
      res.send(model)
    })
    router.get('/',async (req,res)=>{
      
      const queryOptions = {}
      if (req.Model.modelName === 'Category') {
        queryOptions.populate = 'parent'
      }
      // if (req.Model.modelName === 'Article') {
      //   queryOptions.populate = 'categories'
      // }
      
      const items = await req.Model.find().setOptions(queryOptions).limit(100)

      res.send(items)
    })
   
    router.get('/:id',async (req,res)=>{
      const model = await req.Model.findById(req.params.id)
      res.send(model)
    })
    router.put('/:id',async (req,res)=>{
      const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
      res.send(model)
    })
    router.delete('/:id',async (req,res)=>{
      await req.Model.findByIdAndDelete(req.params.id,req.body)
      res.send({
        success:true,
      })
    })
    app.use('/admin/api/rest/:resource',authMid(),resourceMid(), router)

    const multer = require('multer')
    const path = require('path')
    const pathname=path.join(__dirname,'../../uploads')
   
    const upload = multer({dest:pathname})
    app.post('/admin/api/upload',authMid(),upload.single('file'),async (req,res)=>{
      const file = req.file
      file.url=`http://localhost:3000/uploads/${file.filename}`
      res.send(file)
    })


    app.post('/admin/api/login',async (req,res)=>{
      const {username,password} = req.body
     

      const user=await adminuser.findOne({
        username:username
      }).select('+password')
      assert(user,422,'不存在此用户')


      const isTrue = require('bcrypt').compareSync(password,user.password)
      
      assert(isTrue,422,'密码错误')

     
    app.set('secret','adasdadadad1321')
     const token = jwt.sign({id:user._id},app.get('secret'))

      res.send({token})
    })
    app.use(async(err,req,res,next)=>{
      res.status(err.statusCode||500).send({
        message:err.message
      })
    })
}