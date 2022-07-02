# RPG_Profile.api
 유저 정보, 스텟, 아이템 등을 API로??!

# 환경
* Node.JS
* MongoDB
* +) MySQL

> 모든 저장/삭제 등등을 NoSQL인 MongoDB를 사용하려고 했지만, 
> 공부를 하면서 생각을 해보니 MongoDB만 쓰기에는 좋지 않은 단점이 있다는 것일 깨닫고.. MySQL도 혼합해서 쓰기로 결정!

---

# 계획
* 이 API는 단지 '정보'를 관리하는 API이며, 외부로 공개되지 않음
* 외부와 소통하는 것은 나중에 디스코드 봇을 통해 할 것임.
* '계획중'이 붙어있는 것은 추후에 개발이 되지 않을 수 있음
* +) 유저의 정보는 MySQL을 통해 저장할 것임. 

## User
* id와 password를 이용해 회원가입.
* 로그인시 JWT 토큰 발급
* 유저는 최대 2개의 캐릭터를 가질 수 있음

### 유저 회원가입
#### Path : api/auth/create
#### Request Parameter
* id : 아이디
* pw : 패스워드
* profile_url : 프로필 사진 URL. (선택)
#### Response
* success : true 또는 false
* error : 에러메시지. 없으면 null

---

### 유저 로그인 - 계획중
#### Path : api/auth/login
#### Request Parameter
* id : 아이디
* pw : 패스워드
#### Response
* success : true 또는 false
* access_token : JWT 토큰
* error : 에러메시지. 없으면 null

---

### 자신의 정보 - 계획중
> token을 받아 token의 주인인 user을 반환.
#### Path : api/auth/me
#### Request Header
* x-access-token : api/auth/login 에서 발급받은 JWT 토큰
#### Response
* success : true 또는 false
* error : 에러메시지. 없으면 null
* data : JSON 형태로 반환. id, 캐릭터 정보 등등

---

## 캐릭터
* 캐릭터 이름, 레벨, 칭호, 스텟, 아이템, 장착 아이템, 소지금

### 캐릭터 생성
#### Path: api/character/create
#### Request Header
* x-access-token : api/auth/login 에서 발급받은 JWT 토큰
#### Request Parameter
* nickname : 닉네임
* class_type : 직업 고유번호 (정수형)
* class_name : 직업 이름
* stat : JSON형태 { stat_name : value, ... }
#### Response
* success : true 또는 false
* error : 에러메시지. 없으면 null
* data : 캐릭터 정보를 JSON 형태로 반환.