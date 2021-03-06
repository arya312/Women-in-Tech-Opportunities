import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { data } from "./TimelineData";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="heading">
        <h1>Dates</h1>
      </div>
      <VerticalTimeline>
        {data.map((game) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "pink", color: "#000"}}
              contentArrowStyle={{ borderRight: "20px solid pink)" }}
              date={game.date}
              dateClassName="dateStyle"
              iconStyle={{
                background: "pink",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              icon={
                <img
                  src={game.img}
                  style={{
                    height: "70%",
                    textAlign: "center",
                  }}
                  alt="icon"
                />
              }
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ marginBottom: "8px", marginTop: "8px", borderRadius: "20px 20px 0 0"}}
              >
                {game.heading}
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                {game.description}
              </h4>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
