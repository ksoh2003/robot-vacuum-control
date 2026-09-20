
import "./Modal_Schedule.css";
import "./MainPage"
import { IoMdClose } from "react-icons/io";

export default function Modal_Schedule({setScheduleButtonState}) {
  return (
    <div className="modalBackground" onClick={() => setScheduleButtonState(0)}>
      <div className="modalMain" onClick={(event) => event.stopPropagation()}>
        <div
          style={{
            width: "100%",
            height: "45px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <p style={{color: "white", margin: 13, fontSize: 20}}>청소 시간 예약</p>
            <p style={{flex: 1}}></p>
          <IoMdClose color="white" size={40} style={{margin: 5}} onClick={() => setScheduleButtonState(0)} />
        </div>

        <div style={{width: "100%", height: "130px", border: "1px solid white"}}>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}