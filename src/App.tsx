import React, { useState } from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const [postData, setPostData] = useState({
    selectedDate: ""
  });
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="App">
        <p>
          문제 : datepicker 컴포넌트에서 선택한 값을인 postdata 상태값에 넣지
          못하는 상황 수정
        </p>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
            setPostData((prevState) => {
              return { ...prevState, selectedDate: date };
            });
          }}
          showTimeSelect
        />
        <p>해결 : 아래 버튼으로 postdata 상태값 확인</p>
        <button
          onClick={() => {
            console.log(postData);
          }}
        >
          postdata 값확인
        </button>
      </div>
    </>
  );
}
