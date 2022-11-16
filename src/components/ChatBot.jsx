/** @format */

import { useEffect } from "react";
import "../css/Chat.css";

const ChatBot = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "31e87ec782d279175dceb4342ccd8a488",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default ChatBot;
