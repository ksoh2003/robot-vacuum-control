import "./MainPage.css";
import Modal_Schedule from "./Modal_Schedule";
import {useState} from "react";
import robot_vacuum from '../assets/robot_vacuum.png'
import { RiMenuFill } from "react-icons/ri"; // 메뉴 버튼
import { GoBell } from "react-icons/go"; // 알림
import { IoBatteryDead } from "react-icons/io5"; // 배터리 낮음
import { PiPlugsConnected } from "react-icons/pi"; // 연결
import { AiOutlineDisconnect } from "react-icons/ai"; // 연결안됨
import { LuAlarmClock } from "react-icons/lu"; // clock
import { VscDebugStart } from "react-icons/vsc"; // start
import { IoStopCircleSharp } from "react-icons/io5"; //stop

export default function App() {
  const [batteryState, setBatteryState] = useState("---"); // 배터리 잔량
  const [connectState, setConnectState] = useState("연결 안됨"); // 청소기 연결 상태
  const [timerState, setTimerState] = useState("예약 없음"); // 예약 버튼
  const [activeState, setActiveState] = useState("대기 중"); // 시작 종료 버튼

  const [scheduleButtonState, setScheduleButtonState] = useState(0);
  return (
    <>
      
      <div className="toolBar">
        <RiMenuFill size={30} color="white" style={{margin: 10}} />
        <p style={{flex: 1}}></p>
        <GoBell size={30} color="white" style={{margin: 10}} />
      </div>

      <div className="barBase" style={{height: 50}}>
        <span style={{flex: 1}}></span>

        <div className="barWidgetBase">
          <IoBatteryDead size={25} />
          <span style={{fontWeight: 500}}>{batteryState}</span>
        </div>

        <div className="barWidgetBase">
          <AiOutlineDisconnect size={25} />
          <span style={{fontWeight: 500}}>{connectState}</span>
        </div>

        <span style={{flex: 1}}></span>
      </div>

      <div className="mainMenuBase">
        <div className="circle" style={{background: "conic-gradient(rgb(34, 197, 94) 35%, rgb(239, 241, 246) 35%)"}}>
          <div className="circleInner">
            <img alt="logo" className="mainImage" src={robot_vacuum} />
          </div>
        </div>

        <div className="sideWidgetBase">
          <div className="sideButtonTextBase">
            <button className="sideButton">
              <LuAlarmClock size={25} onClick={() => setScheduleButtonState(1)} />
            </button>

            <div className="sideTextBase">
              <span>{timerState}</span>
            </div>
          </div>

          <div className="sideButtonTextBase">
            <button className="sideButton">
              <IoStopCircleSharp size={30} />
            </button>

            <div className="sideTextBase">
              <span>{activeState}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="logBoard">
        <div className="mapBase">
          <p style={{color: "white", margin: 10}}>청소 현황</p>
          <div className="box">

          </div>
        </div>

        <div className="activeLogBase">
          <p style={{color: "white", margin: 10}}>최근 청소 기록</p>
          <div className="box">

          </div>
        </div>
      </div>

      {scheduleButtonState ? <Modal_Schedule setScheduleButtonState={setScheduleButtonState} /> : null}
    </>
  )
}