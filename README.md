# LINE Chat Bot
只是一個LINE的聊天機器人  
附帶一些其他功能

## 2020.07.18
```
舊的壞掉了  
新的 @402djtgu
```
現在可以自己定義Line Bot連進來了 說明在 [access](tree/master/access)

## 2020.03.12
```
舊的壞掉了  
新的 @424wejrv 
```

## 2019.05.21
```
舊的壞掉了  
新的 @839knlix  
```

# 索引
- [聊天功能](#基本格式)
    - [基本格式](#基本格式)
    - [新增關鍵字](#新增關鍵字)
    - [刪除關鍵字](#刪除關鍵字)
    - [查詢關鍵字](#查詢關鍵字)
    - [暫停聊天](#暫停聊天)
    - [聊天設定](#聊天設定)
    - [回憶](#回憶)
- [開車功能](#開車功能)
- [其他功能](#其他功能)
- [問與答](#問與答)
- [待完成](#待完成)
- [更新紀錄](#更新紀錄)


## 聊天功能
---
### 基本格式
```
order=keyword=content##argv
命令=關鍵字=內容##其他參數
```
為了使用方便 命令有許多別名與簡寫  
關鍵字或內容可被省略 具體根據各功能用法而定  
其他參數目前還沒有全部套用

---
### 新增關鍵字
| 功能           | 格式                               | 值                                   | 備註                           |
| -------------- | ---------------------------------- | ------------------------------------ | ------------------------------ |
| 命令詞可用字   |                                    | -a、add、keyword、新增、學習、關鍵字 |
| 新增一筆關鍵字 | 命令詞=關鍵字=內容                 |
| 查詢關鍵字內容 | 命令詞=關鍵字                      |
| 關鍵字萬用符   | 命令詞=關鍵字=\*\*內容\*\*內容\*\* | 雙米號 **                            | 前後中間都可以加 不限數量      |
| 圖片內容       | 命令詞=關鍵字=圖片網址             | 圖片網址                             | 必須使用https、格式jpg或png    |
| 內容分段       | 命令詞=關鍵字=內容A\|\|內容B       | 雙直槓 \|\|                          | 優先權最低                     |
| 內容分組隨機   | 命令詞=關鍵字=內容__內容           | 雙底線 __                            | 優先權最高                     |
| 隨機設定比重   | 命令詞=關鍵字=內容%比重__內容      | %比重                                | 比重只能為整數、沒填預設為1    |
| 隨機設定保底   | 命令詞=關鍵字=*內容__**內容        | 單米號 *保底池、雙米號 ** 出貨       |
| 隨機設定種子   | 命令詞=關鍵字=內容__內容##種子=N   | 雙井號 ## 後種子=數字                | 必須加在內容最後尾、單位一小時 |
| 隨機百分比     | 命令詞=關鍵字=內容__內容##百分比=N | 雙井號 ## 後百分比=數字              | 必須加在內容最後尾             |
| 保護關鍵字     | 命令詞=關鍵字=內容##保護           | 雙井號 ## 後保護                     | 鎖定只有自己能修改             |

---
#### 新增一筆關鍵字
![](images/新增一筆關鍵字.JPG)
```
如果命令詞後面多個 + 可以疊加
用於分段新增多個隨機內容 (隨機內容參考下方)
```
![](images/關鍵字疊加.JPG)

---
#### 查詢關鍵字
![](images/查詢關鍵字內容.JPG)

---
#### 關鍵字萬用符
![](images/關鍵字萬用符.JPG)

---
#### 圖片內容
![](images/關鍵字圖片內容.JPG)

---
#### 內容分段
![](images/關鍵字內容分段.JPG)

---
#### 內容分組隨機
![](images/關鍵字內容分組隨機.JPG)

此例子 **吉、平、凶** 機率皆為 **1/3**

---
#### 隨機設定比重
![](images/關鍵字內容隨機設定比重.JPG)

此例子 **吉機率3/10** **平機率6/10** **凶機率1/10**

```
另外 為了可以做抽抽 如果關鍵字最後面有萬用字元 ** 的話
可以用*N來觸發多個 最大10000
```

![](images/關鍵字內容隨機多發.JPG)

---
#### 隨機設定保底
![](images/關鍵字隨機保底.JPG)

從上面的例子修改了  
**★★★★ 前面多了 ** 表示加入保底池(A)與保底出貨池(B)  
*★★★★★ 前面多了 * 表示加入保底池(A)  
當10連發以上沒有出現保底池(A) (10為預設 調整見下面說明)  
那最後一發會從保底出貨池(B)中隨機選擇一個 (無法調整機率)  

![](images/關鍵字隨機保底調整.JPG)

調整保底數字 (預設10)  
如圖 ##保底=20 後必須要20連發才會保底  
所以10連發不一定出貨了

---
#### 隨機設定種子
![](images/關鍵字隨機設定種子.JPG)

1. 種子單位為小時  
2. 如果使用多發(*N) 隨機種子會無效


#### 隨機百分比模式
![](images/關鍵字隨機百分比.JPG)


#### 保護關鍵字
圖待補

---
### 刪除關鍵字
| 功能           | 格式          | 值                          | 備註 |
| -------------- | ------------- | --------------------------- | ---- |
| 命令詞         |               | -d、delete、del、刪除、移除 |
| 刪除一筆關鍵字 | 命令詞=關鍵字 |


---
### 查詢關鍵字
| 功能                 | 格式          | 值                   | 備註                                    |
| -------------------- | ------------- | -------------------- | --------------------------------------- |
| 命令詞               |               | -l、list、列表       |
| 對象詞               |               | me、myself、我、自己 |
| 查詢註冊的關鍵字     | 命令詞        |                      | 在群組使用默認群組、1:1使用只限對象自己 |
| 查詢自己註冊的關鍵字 | 命令詞=對象詞 |


---
### 聊天設定
| 設定值   | 範圍 | 功能                                                                   | 預設 |
| -------- | ---- | ---------------------------------------------------------------------- | ---- |
| 別理我   | 個人 | 愛醬不再對你說的話有反應                                               | 關   |
| 全回應   | 群組 | 愛醬開頭的對話將反映到全部人的關鍵字                                   | 開   |
| 全圖片   | 群組 | 基於上面設定 如果內容含圖片會使用圖片 (有可能出現其他人設定的不適圖片) | 關   |
| 髒話過濾 | 群組 | 當愛醬回話裡面有一些人身攻擊字眼時會被遮蔽                             | 開   |

---
### 暫停聊天
| 功能 | 格式        | 值                                                         | 備註                         |
| ---- | ----------- | ---------------------------------------------------------- | ---------------------------- |
| 暫停 | 命令詞=時間 | 愛醬安靜、愛醬閉嘴、愛醬壞壞、愛醬睡覺                     | 時間可省略，預設6，單位1小時 |
| 重啟 | 命令詞      | 愛醬講話、愛醬說話、愛醬聊天、愛醬乖乖、愛醬起床、愛醬起來 |

---
### 回憶
| 功能         | 格式          | 值                   | 備註 |
| ------------ | ------------- | -------------------- | ---- |
| 命令詞       |               | -l、list、列表       |
| 對象詞       |               | me、myself、我、自己 |
| 隨機一條紀錄 | 命令詞        |
| 顯示完整記錄 | 命令詞=對象詞 |

---
## 開車功能
```
此功能暫時關閉
重製中
```

---
## 其他功能
* 上傳圖到圖床  
![](images/上傳圖床.gif)

#### 搜尋功能

#### google短連結

#### google網址安全檢查
![](images/網址安全檢查.JPG)
```
如果有多個網址會全部檢查
暫時沒有完整結果報告
```

#### 天氣

---
## 問與答
##### Q:愛醬會不會儲存內容?
```
愛醬只是作者閒著沒事在上班時間的空檔做的
完全屬於個人娛樂用
絕對不會將對話紀錄另存
如果測試非得使用紀錄 那一定會先公告 紀錄不會超過2天 用完刪除
如有疑慮 你可以使用本github代碼自行架設
```
##### Q:權限不足?
```
根據LINE官方的規定
沒升級LINE版本7.5.0版本 或是升級時沒有同意條款
LINE機器人無法取得使用者的編號
因此愛醬無法辨識你是誰 無法儲存你的資料
解決方法是更新7.5.0以上版本 並同意條款
如果之前已經不同意條款 那麼可以試試加愛醬好友 並同意條款試試
```
##### Q:圖片不支援GIF?
```
LINE官方BOT是不能傳送JPG跟PNG以外的格式的
只能希望官方開放 以前我有問過 官方是回答沒有這個計畫
```
##### Q:偶爾愛醬不理我?
```
如果一陣子沒人說話 免費伺服器會暫時進入睡眠 反應會比較慢  
不是上面的情況的話 可能是被吃字了  
經過測試 LINE伺服器根本沒有送資料過來 屬於官方問題 目前無解
```
##### Q:觸發的優先順序?
```
簡單來說
1.符合的字數越多 越優先
2.使用的萬用符號越多 越後面
3.如果優先級剛好一樣 使用後加的 (以後會改成使用隨機一個)
例:
今天晚餐吃 優先級:5
晚餐** 優先級:1 (2-1)
今天晚餐** 優先級:3 (4-1)
**晚餐** 優先級:0 (2-2)
如果同時符合 那優先順序是 今天晚餐吃 > 今天晚餐** > 晚餐** > **晚餐**
```
##### Q:不要出現其他人設定的內容
```
請參考「設定」
關閉全回應模式(預設開)即可
```
##### 其他問題
-a=if***=****;if+++++=++++++
```
這個我看不太懂? 意思是說希望可以一行指令加入多個關鍵字嗎?
```
呼叫愛醬時能隨機出現一些有趣的對話句子，能炒熱氣氛的話題之類。
或者是類似“愛醬 午餐吃什麼?”“吃咖哩飯”這種隨機抽籤的機能
```
隨機功能請參閱 [關鍵字隨機](#內容分組隨機)
```
自動講話
讓愛醬變得主動
像是一個群組若是6個小時都沒有訊息讓愛醬看，愛醬就會自動說"好無聊啊～"之類的。
```
這個很尷尬的是
LINE官方BOT如果要主動說話 必須使用專業版 32400日元/每月
很遺憾的我付不起 如果有人願意贊助的話另當別論
```
全指令或是全圖片查詢
```
詞庫不會公開
非必要 我也不會去查閱
```

---
## 待完成
* 開車功能 
* 網頁設定
* 訂閱pixiv
* 基於機器學習的AI
* [其他建議](https://goo.gl/forms/c7TPu8QLUq4mMJft2)

---
## 更新紀錄
* 2018.01.03
  * +[天氣查詢](#天氣)
  * *全回應邏輯增加例外
  * *全回應優化
* 2017.12.31
  * +回憶功能新增排行
  * +新增關鍵字的網頁設定
* 2017.12.28
  * +新增回憶功能的查詢別人
  * *新增回憶功能的分數設定
* 2017.12.23
  * +新增[關鍵字疊加](#新增一筆關鍵字)
  * +新增[網址安全檢查(google服務)](#google網址安全檢查)
  * +新增[隨機功能的百分比模式](#隨機百分比模式)
  * *設定功能重寫
* 2017.12.15
  * +新增[關鍵字保護](#保護關鍵字)
  * +設定新增[幾個新選項](#聊天設定)
  * +回憶功能新增可以回憶自己
  * +新增google、ehentai、exhentai關鍵字
  * *調整回話邏輯 [愛醬全回應](#聊天設定)
  * *增加一些提示
  * *修復一些錯誤
* 2017.11.16
  * +設定可以開關髒話過濾(基於群組)
  * *修正貼圖次數沒有被記錄的問題
  * *1:1改為會回話
  * *增加可使用的字元
* 2017.11.14
  * *隨機種子現在只限定單發 多發跟原本一樣
  * *隨機種子支援小數點
* 2017.11.13
  * *隨機功能格式改變 上限調整至10000
  * *隨機功能修復保底沒有循環的問題 (隨機20保底10可以保證2保底了)
  * *[#吃字問題](#Q:偶爾愛醬不理我?) 無解
* 2017.11.06
  * +新增[#暫停聊天功能](#暫停聊天)
* 2017.11.04
  * +多發隨機可以使用圖片了(LINE限制最多5)
  * *修改隨機上限至100 (超過字數會被截斷) (下次新增整理版)
  * *修復圖床功能失效的問題 [#使用方法](#其他功能)
* 2017.11.01
  * +修改一些代碼 上傳github
  * +因為結構的優化 反應速度增加了一些
  * +新增隨機的保底功能
  * *調整觸發詞的優先度 現在是字多的優先(不含萬用字元)
  * *修復一些大小寫不辨識的問題
  * *開車功能暫時關閉
  * *修復空ID會觸發的問題
* 2017.10.20
  * +新增隨機的選項
* 2017.10.10
  * +查詢功能
  * *調整回憶功能
  * *調整公告的推送方式
  * *調整使用注意事項
  * -刪除群組關鍵字冷卻
* 2017.10.07
  * +飆車功能 (測試)
  * +回憶功能 (測試)
* 2017.09.30
  * +個人功能新增傳圖會上傳到圖床
* 2017.09.28
  * +新增群組可用別的群組關鍵字
  * +新增圖片網址檢查 防止出現包子
  * +個人功能新增傳網址會轉短網址
* 2017.09.27
  * +新增隨機模式
* 2017.09.24
  * +可以查詢個人關鍵字了
  * *優化回應訊息 比較容易讀懂了
  * *修復多段落沒辦法傳圖的bug
  * *修復一些小問題
* 2017.09.22
  + 新增了個人關鍵字 群組的關鍵字分離
  + 群組關鍵字如果有圖片會傳圖
