## package.json 中的 dependencies 與 devDependencies 分別是什麼
dependencies 跟 devDependencies 都是紀錄此專案用了哪些 npm 套件。一般預設會裝在 dependencies 底下，然而有些套件是用於開發階段的(例如: 測試、打包、風格檢查、格式化...工具)，在安裝這類套件時可以在`npm install <package-name>`指令加入`--save-dev`，如此便可將該套件裝入 devDependencies 下。當在產品階段時，這些 dev 套件是不用安裝的，可以使用`--production`來避免安裝 devDependencies 的內容。

## package.json 中的 scripts 這個區塊怎麼用
scripts 區塊可以自定義腳本，這些腳本透過`npm run <script-name>`來觸發，常見的 script 有 test, start, build...。  
舉例來說，在 package.json 內有定義 main 屬性，這可能會是專案的入口，因此我們可以寫一個 script 來執行 main 屬性內的程式:
```
  "scripts": {
    "start": "node ."  // 使用 . 來引用 main 屬性
  }
```

## Port number 要怎麼以環境變數來設定
透過設定.env檔。另外也可以用 yargs 套件讓使用者可以在啟動程式時透過特定標籤手動設定。  
例如: `node . -p 4000`

## 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼
不上傳的檔案包含: node_modules 資料夾、log 檔、.env 環境變數、作業系統生成的臨時檔案(cache, .DS_Store ...)、IDE 設定文件...  
1. node_modules資料夾  
node_modules 資料夾存放專案依賴的套件，數量跟大小可能都很大，放在 github 會造成 clone 專案的負擔。依賴套件部分可以透過`npm install`來進行安裝。且不同機器(os)使用的套件可能也不一樣
2. log 檔, 作業系統生成的臨時檔案, IDE 設定文件  
在不同機器上這些內容可能都沒有意義，無需上傳  
3. .env 環境變數  
.env 內的資訊可能涉及金鑰、token 等機敏資訊，不適合上傳到公開的地方

## 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用
CJS（CommonJS）是較早期的模組系統，目前仍然是預設使用方式，以`require()`來**同步**加載模組。  
而 ESM（ECMAScript Modules）則是 ES6 引入的官方模組系統，以`import`來**非同步**加載模組。此外，ESM 提供 Top-Level Await 功能。

若要使用 ESM，需將副檔名改為`.mjs`或在 package.json 中指定`type: "module"`。

## localhost 是什麼？
本地網路，127.0.0.1的別稱。有時會看到`loopback`也是指 localhost(例如要用 wireshark 看 localhost 封包)。

## curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些
curl（Client URL）是一個命令行工具，最常見的用途之一是用來測試 API、下載文件或測試網路連接的狀態。  
例如可以透過以下指令測試本專案的 http GET API是否會通，並顯示回傳值:
```
curl localhost:3000
```
應該會回傳 `Hello World!`

常見的 curl 參數有以下:
1. -X：指定 HTTP 請求方法（如 GET、POST、PUT、DELETE）  
2. -d：設定 request 的 body
3. -H：添加 HTTP 標頭  
4. -v：顯示詳細的請求和回應資訊  
5. -I：只顯示 HTTP 標頭（HEAD 請求）  
6. -u：提供用戶名和密碼來進行 HTTP 認證
