// 載入Express
const express = require('express')
const app = express()
const port = 3000
// 載入Express-habdlebars
const exphbs = require('express-handlebars')
// 載入JSON檔
const restaurantsList = require('./restaurant.json')

// handlebars設定 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定靜態檔案路徑
app.use(express.static('public'))

// 設定首頁的路由
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantsList.results })
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