config 폴더에 kis_secret.js 생성후

api key, api secret 입력

## cors 오류

api 연동후 웹페이지 에서 cors 오류
CORS(Cross-Origin Resource Sharing) 직역 "교차 출처 리소스 공유 정책"
이유:
'https://openapivts.koreainvestment.com:29443/oauth2/tokenP'에서 다른홈페이지 출처
'http:/localhost:3000' 리소스를 가져오는데 있어 CORS 정책으로 차단됬음

SOP 정책?
SOP(Same Origin Policy)단어 그대로 동일한 출처에 대한 정책. 이 SOP 정책은 '동일한 출처에서만 리소스를 공유할 수 있다.' 라는 법률.

서버개발자가 주소 허용해줘도 내가 개발하는 환경이 localhost이기 때문에 CORS 당연히 CORS 오류

서버 개발자가 access-control-allow-origin 을 \* 해준다면 상관없으나, 보안상의 문제. (패킷 도용 또는 흉내를 내어 해킹하는 것을 방지함)

해결책:
프론트엔드에서 CORS우회를 할 수 있는 방법 중 하나가 proxy 설정, rewrite 기능으로 대체 아니

```bash
npm i cors

const express = require("express")
const app = express()
const cors = requires("cors")
app.use(
 cors({
  origin:"https://openapivts.koreainvestment.com:29443/oauth2/tokenP",
 })
)
app.get("/data",(req,res)=>{
    res.json({ name:"blhablha",favorite:"something"})
})
app.listen(3000)
??? 이거맞나
```

근데 어디에 설정?
