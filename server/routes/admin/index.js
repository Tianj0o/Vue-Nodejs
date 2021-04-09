module.exports = app =>{
    const  express = require('express')
    const router = express.Router(
      {
        mergeParams:true,
      }
    )

      
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
    app.use('/admin/api/rest/:resource',async function(req,res,next){
      const modelName = require('inflection').classify(`${req.params.resource}`)
       req.Model = require(`../../models/${modelName}`)
      next()
    }, router)

    const multer = require('multer')
    const path = require('path')
    const pathname=path.join(__dirname,'../../uploads')
   
    const upload = multer({dest:pathname})
    app.post('/admin/api/upload',upload.single('file'),async (req,res)=>{
      const file = req.file
      file.url=`http://localhost:3000/uploads/${file.filename}`
      res.send(file)
    })
}