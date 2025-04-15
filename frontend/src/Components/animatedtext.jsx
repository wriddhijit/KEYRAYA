import { useEffect, useRef } from "react";
import $ from "jquery";

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = ["Rent", "Ride", "Repeat"];
    let part,
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 15,
      speed = 70;

    const wordflick = () => {
      setInterval(() => {
        if (forwards) {
          if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count === skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset === 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        part = words[i].substr(0, offset);
        if (skip_count === 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        $(textRef.current).text(part);
      }, speed);
    };

    wordflick();
  }, []);

  return (
    <div
      ref={textRef}
      className="word"
      style={{
        margin: "auto",
        color: "black",
        font: "700 normal 2.5em 'tahoma'",
        textShadow: "5px 2px #222324, 2px 4px #222324, 3px 5px #222324",
      }}
    ></div>
  );
};

export default AnimatedText;
