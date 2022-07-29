# Google Dogs

## Host

- Frontend: [http://localhost:3000](http://localhost:3000) (React)
- Backend: [http://localhost:8000](http://localhost:8000) (Express)

## Installation

```bash
cd Frontend
npm install

cd ../Backend
npm install
```

**각 디렉토리 (Frontend, Backend) 최상위에 아래에 있는 환경변수를 이용하여 .env 파일을 정의해주세요.**

## start

```bash
cd Frontend
npm start

cd ../Backend
npm start

```

## 작업 결과물 구조

- MERN Stack
- 구글 로그인 후 서버에서 JWT 토큰 발급
- 클라이언트에서 서버에서 받은 JWT 토큰을 ‘localStorage’에 저장
- 그 후 모든 요청은 JWT 토큰을 헤더에 담아서 보낸다.
- 클라이언트 API 요청은 비동기 로직을 담당하는 ‘Thunk’에서 처리
- 문서 공동작업 시 [Socket.io](http://socket.io/)를 이용하여 서버와 클라이언트 연결
- 문서 Id에 해당하는 ‘room’을 생성

## 기능

- 구글 로그인
- 로그인 후 문서 작성 및 내가 만든 문서 목록 확인 가능
- 문서 저장 후 리스트에서 문서로 들어가 수정 가능
- 공유 버튼을 눌러 문서 URL 클로보드 복사
- 로그인 한 사용자가 문서 URL로 접근 시 공동 작업 가능
- 공동 작업시 다른 접속자의 타이핑 커서 표시
- 20초마다 자동 저장

## 환경 변수

### Clinet

```bash
REACT_APP_API_KEY
REACT_APP_AUTH_DOMAIN
REACT_APP_PROJECT_ID
REACT_APP_FIREBASE_STORAGEBUCKET
REACT_APP_FIREBASE_MESSAGINGSENDERID
REACT_APP_ID
REACT_APP_FIREBASE_MEASUREMENTID
```

### Server

```bash
MONGODB_URI
JWT_SECRET

FIREBASE_PROJECT_ID
FIREBASE_PRIVATE_KEY_ID
FIREBASE_PRIVATE_KEY
FIREBASE_CLIENT_ID
FIREBASE_AUTH_URI
FIREBASE_TOKEN_URI
FIREBASE_AUTH_CERT_URL
FIREBASE_CLIENT_CERT_URL
```
