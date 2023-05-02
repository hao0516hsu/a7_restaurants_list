// 載入Express
const express = require('express')
const app = express()
const port = 3000
// 載入Express-habdlebars
const exphbs = require('express-handlebars')
// 載入Mongoose
const mongoose = require('mongoose')
// 載入JSON檔改成載入種子資料
const Restaurant = require('./models/restaurant')

// dotenv設定
if (process.env.MONGODB_URI !== 'production') {
  require('dotenv').config()
}
// Mongoose連線設定
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// 資料庫連線狀態
const db = mongoose.connection
// error
db.on('error', () => {
  console.log('mongodb error!')
})
// connect
db.once('open', () => {
  console.log('mongodb connect!')
})
// handlebars設定 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定靜態檔案路徑
app.use(express.static('public'))

// 設定首頁的路由
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})
// 設定說明頁的路由
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant_id = req.params.restaurant_id
  const restaurant = restaurantsList.results.find(restaurant => {
    return restaurant.id.toString() === restaurant_id
  })
  res.render('show', { restaurant: restaurant })
})
// 設定查詢頁的路由
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  // 若空白搜尋，轉成首頁的路由
  if (!keyword.trim()) {
    return res.redirect("/")
  }
  
  const restaurants = restaurantsList.results.filter(restaurant => {
    return restaurant.name.trim().toLowerCase().includes(keyword.trim().toLowerCase()) || restaurant.category.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})
// 設定啟動伺服器相關
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})