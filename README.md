# Mancity Shop

# 진행 단계

1. 초기 리액트 설치 및 프론트엔드 환경 구성

2. 상품 목록 화면 구현

   - 4가지 예시 상품 추가

3. Routing 추가

   - react-router-dom 활용
   - 홈(메인) 화면(Homescreen), 상품 상세보기 화면(ProductScreen) 관련 코드 및 경로(Routing) 추가

4. Express Server 설치 및 백엔드 환경 구성

   - 상품 목록 API 구현 - 단순히 상품 객체 데이터를 가져와서 화면에 뿌리는 API
     - app.get('/api/products', (req, res) => {}); (-> backend/server.js)

5. 백엔드의 상품 데이터를 가져와, 프론트엔드 홈 화면에 상품 목록 구현하기

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

   - Product 컴포넌트(frontend/src/Product.js) : 상품 목록 렌더링 관련 기능
   - Rating 컴포넌트(frontend/src/Rating.js) : 상품 평점 및 상품 리뷰 렌더링 관련 기능
   - 해당 컴포넌트들 및 홈 화면 관련 코드에 부트스트랩 스타일 및 CSS 적용

9. 상품 상세보기 화면(ProductScreen) 구현

   - Backend -> 상품 상세보기 API 구현
     - app.get('/api/products/slug/:slug', (req, res) => {} (-> backend/server.js)
   - Frontend -> 상품 상세보기 화면 구현
     - 홈 화면 코드와 유사하게 useReducer Hook 활용하여 State 관리
     - Bootstrap Row 1개 -> Column 3개 생성
       - 상품 이미지 관련 Column
       - 상품 리뷰, 설명 관련 Column
       - 상품 가격, 재고 상태, '카트에 담기' 버튼 관련 Column
   - Helmet을 활용하여 각 페이지의 title 이름을 분리시켜 적용하기
     - react-helmet-async 라이브러리 -> Helmet

10. 로딩 및 에러 처리 관련 컴포넌트 생성, 백엔드 에러 내용 가져와 처리하기

- 로딩 및 에러 처리 관련 컴포넌트 : LoadingBox, MessageBox 컴포넌트
- 백엔드 에러 처리 : frontend/src/utils.js

11. 카트(장바구니) 상품 추가 기능 구현

- 상품 상세보기 화면 -> '카트에 담기' 버튼 클릭 시 상품이 카트에 추가되도록 구현
  - '카트에 담기' 버튼 클릭 동작 관련 핸들러(addToCartHandler) 추가
- 카트 상품 추가 기능을 위한 React Context 생성
  - Store 컴포넌트(frontend/src/Store.js)
    - useContext Hook 활용
      - Provider 컴포넌트 활용
    - useReducer 활용

12. 카트 상품 추가 기능 보완

- 카트에 존재하는 상품인지 체크
  - 이미 존재하는 상품이라면, (해당 상품을 따로 또 추가하는 것이 아니라) 해당 상품의 수량이 증가토록 하기
- 백엔드에서 상품 재고 정보 가져오기 -> axios
  - Backend -> 상품 id를 베이스로 하여 상품 정보를 반환하는 API 구현
    - app.get('/api/products/:id', (req, res) => {} (-> backend/server.js)
    - 상품 구분을 위한 \_id 필드 추가 : backend/data.js

13. 카트 화면(CartScreen) 구현

- 카트에 추가한 상품 렌더링하여 상품 목록 구현
  - Bootstrap Row 1개 -> Column 2개 생성
    - 빈 카트일 때 관련 or 추가한 상품 정보 관련 Column
    - 상품 합계, 결제 진행 관련 Column
- (상품 상세보기 화면에서) '카트에 담기' 버튼 클릭 시 /cart 경로로 이동시키기 기능 추가
  - useNavigate Hook 활용

14. 카트 화면 및 카트 상품 추가 기능 보완

- 카트 화면 기능 보완
  - '플러스' 버튼 / '마이너스' 버튼 클릭 시 상품 수량이 변화되도록 구현
  - '휴지통' 버튼 클릭 시 (카트에 담겨있던) 해당 상품이 제거되도록 구현
  - 카트 관련 데이터 로컬 저장소에 저장하도록 구현
  - '결제 진행' 버튼 클릭 시 로그인 화면 경로로 먼저 이동하도록 하기 -> 로그인에 성공하면, /shipping 경로로 redirect 하도록 함
- 카트 상품 추가 기능 보완
  - 홈 화면 -> '장바구니 담기' 버튼 클릭 시 상품이 카트에 추가되도록 구현
  - 홈 화면 -> 상품의 재고가 없을 때, '품절' 표시(클릭 비활성화 버튼) 나타나도록 구현 - Product 컴포넌트 수정

15. 로그인 화면(SigninScreen) 구현

- 로그인 관련 폼 생성 - Bootstrap Form
  - email, password
  - '로그인' 버튼
  - '회원가입 하기' 링크
