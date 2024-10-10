## instance 的 public IP
3.39.254.190

## 什麼是 instance type?
不同虛擬機的規格，後面的名詞越大代表硬體資源越好，也越貴。  
而前面的英文字母代表不同的資源取向，例如"c"可能代表高計算需求。

## 什麼是 Nginx？有哪些用途與特性？
Nginx 是一個 reverse proxy，通常被拿來當作後端的入口，並由它進行流量的轉導。  
常見的例子如用 Nginx 作為 Load Balancer，在一個服務在多個機器執行的情境下，Nginx 可以把請求依特定演算法(如 round-robin)轉到適當機器上，將流量平均。

## pm2 套件是什麼？有什麼用處？
pm2 是一個服務管理的系統，可以做到讓服務(執行的程式)在背景執行、自動重啟、開機自動啟動...

## proxy 是什麼意思？為什麼要透過 Nginx 來 proxy 到 Express 開發的 Web Server?
proxy 如前所述，可以作為入口。  
這樣的好處是除了好管理之外，也可以不用額外開對外的 port，減少被攻擊的風險。

## Nginx 設定檔
```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/html;

        server_name _;

        location /week4-server {
                proxy_pass http://127.0.0.1:3000/;
                proxy_http_version 1.1;
                proxy_set_header Host $host;
        }
        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
}
```

## Security Group 是什麼？用途為何？有什麼設定原則嗎？
security group 主要是 aws 用來控制流量權限，可以對不同 port 設定不同權限，例如讓特定 ip 可以使用或是公開(0.0.0.0)。

## 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
管理員權限，通常要存取根目錄底下的檔案都需要管理員權限，檔案可以透過`chmod`指令更改權限。

## Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
訪問日誌（Access Log）：/var/log/nginx/access.log  
錯誤日誌（Error Log）：/var/log/nginx/error.log  
除了用編輯器看之外，也可以用`tail`或是`cat`等指令看。

## 在過程中遭遇的問題
Q: aws 給的 key 權限給太多導致不給 ssh 連線
A: 設定 pem 成 400，並用 sudo 進行連線

## ref
https://medium.com/%E5%89%8D%E7%AB%AF%E5%A3%B9%E5%85%A9%E4%B8%89%E4%BA%8B/%E8%81%8A%E8%81%8A%E9%97%9C%E6%96%BC%E5%9F%BA%E6%9C%AC%E7%9A%84-nginx-reverse-proxies-and-nodejs-express-web-server-2a1c8e7e7de1  
https://ithelp.ithome.com.tw/articles/10220480  
https://www.ecloudture.com/%E9%80%A3%E7%B7%9A%E8%87%B3ec2%E7%9A%84%E4%B8%89%E7%A8%AE%E6%96%B9%E6%B3%95%E8%88%87%E6%AF%94%E8%BC%83-ssh%EF%BC%8Cec2%E5%AF%A6%E4%BE%8B%E9%80%A3%E6%8E%A5%EF%BC%8C%E7%B3%BB%E7%B5%B1%E7%AE%A1%E7%90%86/
