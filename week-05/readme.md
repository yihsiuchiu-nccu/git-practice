## server網址
https://www.yihsiuchiu.me/week4-server
## 你在哪裡購買網域的
用 github 教育帳號申請免費 namecheap(感謝品絜提供資訊)
## DNS 的 A record 是什麼？
A Record 主要是將域名 map 到一個實際位址上，其中 A Record 是對應到 IPv4 上，而 AAAA Record 則是對應到 IPv6 上
## DNS 的 NS record 是什麼？
NS Record 代表的是 Name Server Record，而 Name Server 主要負責提供 DNS 解析的服務，使用者搜尋網址時，如果沒有 cache 在本地上，就會到 Name Server 搜尋實際 IP 位置(A Record)。  
因此 NS Record 主要負責指定哪些 Name Server 有 A Record 資料。
## Domain Name vs FQDN vs URL 這三者分別為何？
這三者是包含關係，URL 包含了 FQDN、且FQDN 包含了 Domain Name。  
1. domain name 是域名，這次作業申請的就是domain name，包含一個自己取的域名加一個頂級域(TLD)  
2. FQDN 則是除了 domain 外，還增加主機名與根域名(通常是.且通常會省略)，例如www就是主機名  
3. URL 則是完整的路徑，除了 FQDN 外，還有協定與一些可選的參數，協定部分如 http、https 等等都是，可選參數則是可以讓使用者夾帶的資料

## 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
https 的 s 是 ssl/tls 加密的意思，有了 ssl/tls，request 就不會是明碼傳輸，可以避免被中途攔截甚至竄改。  
為了確保網站的真實性，需要由 CA(Certificate Authority)驗證(如作業中用CNAME驗證)網站後頒發憑證，並以此憑證進行加密。