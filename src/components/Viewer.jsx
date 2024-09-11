import EmotionItem from "./EmotionItem";
import { DiaryStateContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";
import "./Viewer.css";

const Viewer = ({ initData }) => {
  const params = useParams();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const emotionItem = emotionList.find((item) => String(item.emotionId) === String(input.emotionId));

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${input.emotionId}`}>
          <img src={getEmotionImage(input.emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{input.content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
