# 登入頁面 Account Login

## 環境建置與需求

- Node.js v10.15.3

#### npm 套件

- nodemon
- body-parser: ^1.19.0
- express: ^4.17.1
- express-handlebars: ^3.1.0
- handlebars: ^4.1.2

## 安裝與執行步驟

#### 安裝方法 1

在終端機(Terminal)輸入

```
git colone https://github.com/wendyhsiao/account_login.git
```

如果在終端機訊息中看見「done」，就表示成功了！

#### 安裝方法 2

先點選 "Clone or download / Download ZIP" 把檔案下載下來，解壓縮。

#### 執行步驟

1.在終端機(Terminal)切換到 account_login 目錄下

```
cd account_login
```

2.安裝套件

```
npm install
```

3.使用 nodemon 啟動伺服器

```
nodemon app.js
```

4.在瀏覽器輸入網址 `localhost:3000`即可看到內容

## 功能描述

- 基本的登入功能(預設 5 個使用者)
- Email 或密碼錯誤會出現警告訊息
- 成功登入後可看到個人頁面

## 專案畫面

![image](https://github.com/wendyhsiao/account_login/blob/master/public/img/show1.PNG)

![image](https://github.com/wendyhsiao/account_login/blob/master/public/img/show3.PNG)

![image](https://github.com/wendyhsiao/account_login/blob/master/public/img/show2.PNG)
