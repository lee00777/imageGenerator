# 사용 Library 리스트

1. chadcn library 사용 이유: next.js와 integrate가 잘되어 있으며, 원하는 컴포넌트만 골라서 다운받을 수 있어 라이트하게 가져가면서 개발 시간은 단축할 수 있음

2. clerk authentication library 사용 이유: 로그인 google 연동 기능을 간단한 api를 통해 구현 가능. 사용자 10,000까지 무료로 사용 가능하며 그 이후에는 월 $25 구독료 지불.

3. svix for webhook: 유저가 생성/삭제/수정되는걸 지켜보는데 "svix" 라이브러리 사용. 
   1. 유저가 업데이트 되면, svix가 api/webhooks/clerk API route hit
   2. route.ts에서 write한대로 ev.type 체크 후 (user.created? user.deleted?)
   3. user.actions.ts에 있는 서버코드 (백엔드 코드) 사용해서 mongoDB 업데이트.