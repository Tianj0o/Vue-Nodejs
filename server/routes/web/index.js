module.exports = app =>{
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // const Article = require('../../models/Article')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
    // const Hero = mongoose.model('Hero')
    router.get('/news/list', async (req, res) => {
        const parent = await Category.findOne({
          name: '新闻分类'
        })
        const cats = await Category.find().where({
          parent: parent
        }).lean()
        const newsTitles =  [" 【星元部件爆料】公孙离-觅星灵兔 ", " 正式服预告④：荣耀战令爆料第二弹，暗夜都市，游侠将至！ ", " 正式服预告③：荣耀战令新皮肤登场，“大镖客三兄弟”齐聚！ ", " 王者峡谷云赛舟，今年端午特别“浪” ", " UI改造日志丨局内外交流功能优化：观战中好友也可预约！ ", " 正式服预告④：荣耀战令爆料第二弹，暗夜都市，游侠将至！ ", " 正式服预告③：荣耀战令新皮肤登场，“大镖客三兄弟”齐聚！ ", " 云中君源·梦皮肤海报投票结果公布 ", " 英雄调整情报丨貂蝉加强，赵云优化 ", " 7月8日外挂专项打击公告 ", " 王者峡谷云赛舟，今年端午特别“浪” ", " 【赛季冲刺，新版本探秘】活动公告 ", " 【赛季冲刺，新版本探秘】活动FAQ ", " 荣耀中国节·峡谷龙舟赛，参与必得粽情泛舟回城特效（新） ", " 恭喜TS夺得2020年KPL春季赛总冠军，多重福利来袭 ", " 【KPL皮肤爆料】天狼绘梦者：不择纸笔 妙在心手 ", " 6月24日峡谷龙舟赛异常修复公告 ", " 恭喜TS夺得2020年KPL春季赛总冠军，多重福利来袭 ", " 应援KPL春决得好礼，上官婉儿-天狼绘梦者即将开售 ", " 2020年王者荣耀世界冠军杯小组赛赛程出炉 "]
        const newsList = newsTitles.map(title => {
          const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
          return {
            categories: randomCats.slice(0, 2),
            title: title
          }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
      })
      
      app.use('/web/api',router)
}