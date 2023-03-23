# Mancity Shop

# 진행 단계

1. 초기 리액트 설치 및 프론트엔드 환경 구성
2. 상품 목록 페이지 구현
   - 4가지 예시 상품 추가
3. Routing 추가
   - react-router-dom 활용
   - 홈(메인) 페이지(Homescreen), 상품 페이지(ProductScreen) 경로 추가
4. Express Server 설치 및 백엔드 환경 구성
   - 상품 목록 API 구현 - 단순히 상품 객체 데이터를 가져와서 화면에 뿌리는 API
5. 백엔드의 상품 데이터를 가져와 홈 페이지에 상품 목록으로 구현하기
   - useEffect, useState, axios 활용
   - 백엔드의 데이터를 axios로 가져오기
   - 초기 구현한 frontend의 data.js 삭제함
     - 백엔드에서만 data.js를 가지고 있고, 이 데이터를 프론트에서 axios로 가져오게 함
