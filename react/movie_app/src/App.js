import React from "react";
// index에서 render를 이용해 하나의 function만 가능하므로 정의한 함수에 파편적으로 넣을 것
function Food({ name }) {
  return (
    <h1>I like {name}</h1>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} />)}
    </div >
  );
}
// component 정의시 대문자로

export default App;
