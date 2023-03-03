import { useEffect, useState } from "react";

export const UseEffects = () => {
  const [chatCount, setChatCount] = useState(0);
  useEffect(() => {
    if(chatCount>=1){
        document.title = `Chat(${chatCount})`;
    }
    else
    document.title = `Chat `;
    

  });

  return (
    <center>
      <div className="p-3 mb-2 bg-danger text-white text-center ">
        CHAT MESSAGE COUNTER USING USE EFFECT HOOK
      </div>

      <div className="container">
        <h3>{chatCount}</h3>
        <button
          className="btn btn-primary"
          onClick={() => {
            setChatCount(chatCount + 1);
          }}
        >
          Click
        </button>
      </div>
    </center>
  );
};
