import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  // let [a, b] = useState('남자 코트 추천');
  // a = 남자 코트 추천
  // b = 남자 코트 추천을 변경해주는 함수
  let [글제목, 글제목변경] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className='black-nav'>
        <div>안녕하세요</div>
      </div>
      <div className='list'>
        <h3>{글제목}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
