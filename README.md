# 我的餐廳清單
![image](public/stylesheets/restaurants_list.png)
## 功能
+ 使用者能夠搜尋指定餐廳。
+ 並且能依照使用者的飲食需求，搜尋出該地區的特色餐廳。
+ 使用者能依照網頁呈現的社群評分，輕鬆避開地雷餐廳。
+ 使用者能透過圖文並茂的介紹，快速理解該餐廳特色。
+ 使用者能透過網頁提供的餐廳電話及地址，進一步與店家聯繫。

## 環境建置與需求
1. Node.js
2. npm(Node Package Manager)
3. Express v4.16.4
4. Express-handlebars v3.0.0
5. Nodemon

## 專案安裝與執行步驟
1. 請先確認「環境建置與需求」第1點及第2點提及的程式皆已安裝。
2. 將此專案clone到本地。
3. 開啟終端機，在專案資料夾執行：
```
cd file path  #專案資料夾路徑
npm init -y 
```
4. 接著在終端機安裝「環境建置與需求」第3點～第5點的套件：
```
npm install express@4.16.4
npm install express-nodemon@3.0.0
npm install -g nodemon 
```
5. 在終端機啟動伺服器。
```
nodemon app.js
```
6. 在瀏覽器輸入http://localhost:3000，即可連線。