# Mancity Shop

# 진행 단계

1. 초기 리액트 설치 및 프론트엔드 환경 구성
2. 상품 목록 화면 구현
   - 4가지 예시 상품 추가
3. Routing 추가
   - react-router-dom 활용
   - 홈(메인) 화면(Homescreen), 상품 상세보기 화면(ProductScreen) 관련 코드 및 경로(Routing) 추가
4. Express Server 설치 및 백엔드 환경 구성
   - 상품 목록 API 구현 - 단순히 상품 객체 데이터를 가져와서 화면에 뿌리는 API. backend/server.js
5. 백엔드의 상품 데이터를 가져와 프론트엔드 홈 화면에 상품 목록 구현하기
   - useEffect Hook, useState Hook, axios 활용
   - 백엔드의 데이터를 axios로 가져오기
   - 초기 구현한 frontend의 data.js 삭제함
     - 백엔드에서만 data.js를 가지고 있고, 이 데이터를 프론트에서 axios로 가져오게 함
6. useReducer Hook 활용하여 State 관리하기
   - 5번에서 홈 화면 관련 State를 useState로 관리하던 것을 useReducer로 관리하도록 변경
   - 상태 업데이트 로직을 분리하여 관리
   - use-reducer-logger를 활용해 useReducer 기록 콘솔에 가져오기(나타내기)
7. Bootstrap 프레임워크 추가
   - App.js -> header, main, footer 부트스트랩 UI 적용
8. Product, Rating 컴포넌트 생성
   - Product 컴포넌트 : 상품 목록 렌더링 관련 기능
   - Rating 컴포넌트 : 상품 평점 및 상품 리뷰 렌더링 관련 기능
   - 해당 컴포넌트들 및 홈 화면 관련 코드에 부트스트랩 스타일 및 CSS 적용
9. 상품 상세보기 화면(ProductScreen) 구현
   - Backend -> 상품 상세보기 API 구현. backend/server.js
   - Frontend -> 상품 상세보기 화면 구현. (홈 화면 코드와 유사하게 useReducer Hook 활용하여 State 관리)
   - Helmet을 활용하여 각 페이지의 title 이름을 분리시켜 적용하기
     - react-helmet-async 라이브러리 -> Helmet
10. 로딩 및 에러 처리 관련 컴포넌트 생성, 백엔드 에러 내용 가져와 처리하기

- 로딩 및 에러 처리 관련 컴포넌트 : LoadingBox, MessageBox 컴포넌트
- 백엔드 에러 처리 : frontend/src/utils.js

11. 카트(장바구니)에 상품 추가를 위한 React Context 생성

- React Context 생성 - frontend/src/Store.js
- Store Provider 생성 - frontend/src/Store.js
- useReducer 활용 - frontend/src/Store.js
- 카트 담기 버튼 클릭 핸들러 추가
