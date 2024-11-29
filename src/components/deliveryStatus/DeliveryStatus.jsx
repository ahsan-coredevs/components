import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Check, Uncheck } from "../svgcomponent/svgComponent";

function DeliveryStatus() {
  const statusList = [
    { _id: "00", title: "Pending" },
    { _id: "01", title: "Getting Ready" },
    { _id: "02", title: "Packaging In Processing" },
    { _id: "03", title: "Waiting For pickup" },
    { _id: "04", title: "Forwarded for delivery" },
    { _id: "05", title: "Product Reached at ABC e-commerce" },
    { _id: "06", title: "Handed Over to Delivery man" },
    { _id: "07", title: "Delivered" },
  ];

  const [statusCompleted, setStatusCompleted] = useState([]);

  const handleOptionChange = (e) => {
    const selectedTitle = e.target.value;
    const selectedStatusObj = statusList.find((status) => status.title === selectedTitle);

    if (selectedStatusObj) {
      const currentDate = new Date().toLocaleString();
      const isAlreadyCompleted = statusCompleted.some((status) => status._id === selectedStatusObj._id);

      if (isAlreadyCompleted) {
        setStatusCompleted((prev) =>
          prev.filter((status) => status._id !== selectedStatusObj._id)
        );
      } else {
        setStatusCompleted((prev) => [
          ...prev,
          { ...selectedStatusObj, dateTime: currentDate },
        ]);
      }
    }
  };

  return (
    <div>
      <div className="mt-4">
        {statusList.map((list) => (
            <div className="flex gap-2" key={list._id}>
              <div
                onClick={() => handleOptionChange({ target: { value: list.title } })}
                value={list.title}
                className="h-6 w-6 rounded-full"
              >
                {statusCompleted.some((status) => status._id === list._id) ? (
                  <Check className="w-full h-full" />
                ) : (
                  <Uncheck className="w-full h-full" />
                )}
              </div>
              <div>{list.title}</div>
            </div>
          ))}
      </div>
      <div className="mt-8 w-full h-auto bg-slate-100">
        <VerticalTimeline>
          {statusCompleted.sort((a, b) => a._id.localeCompare(b._id)).toReversed().map((status) => (
            <VerticalTimelineElement
              key={status._id}
              date={status.dateTime}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Check />}
              position="right"
            >
              <div className="flex justify-between w-full">
                <div
                  className="timeline-title"
                  style={{ width: "100%", textAlign: "left" }}
                >
                  <strong>{status.title}</strong>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default DeliveryStatus;
