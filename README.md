## 2일차 2022.12.3
문제: 컴포넌트인 Date와 Plus가 계속 안나타났다. 
해결: 함수에서 return을 안써줬던 것 

문제: 날짜를 가져오고 싶다 
해결: Dayjs를 썼다. (js 날짜 라이브러리) Moment.js와 비교했을때 많은 경량화 / 더 좋은 성능 

문제: 버튼을 내가 원하는 곳에 위치 시키고 싶다. 
해결: position으로 아쉽게 해결

문제: 버튼을 눌렀을때 버튼 색깔이 바뀌면서 애니메이션으로 오른쪽 45도 돌아가게 하고싶다. 
해결: 버튼 배경 색깔을 빨간색으로 바꾸지 못했으나, 안에 text가 돌아가게 했다. 
어떻게? : useState를 이용해 클릭했을 때 값이 true,false로 바뀌게 했고,  

## 3일차 2022.12.05
문제: 모달 내 부분을 입력하면 창이 닫힌다. 
해결: `<Modal onClick={e=> e.stopPropagation()}>`

구현: 모달 창에 placehorder,  enter했을때 감지 하는 부분 했음 

## 4일차 2022.12.06

목표: 오늘은 fetch를 이용해 데이터를 불러오고 / 붙이고/ 삭제하는 기능 중 => 불러오는 것을 해보자 
목표: todocomponents 중에 todolist.js 와 todos.js 를 이용해 fetch 에서 정보를 가져와야 하는 것 아닐까 

하,,, 오늘 일단 상태들을 관리하는 방법을 고민하다 redux 라이브러리를 쭉 복습했고, 
redux 공식 문서를 보다 redux toolkit 을 알게되었다. 
redux toolkit으로 구현해보고자 일주일간 노력했지만 실패했다. 

## 2022.12.11 일요일 
목표 : json server를 이용해 totolist를 구현해보고자한다. 
일단 기본 구현은 해놨고 
앞으로 해야하건, 
버튼의 위치. 
버튼 눌렀을때 모양 이상하게 되는거 transform 
스크롤, 
