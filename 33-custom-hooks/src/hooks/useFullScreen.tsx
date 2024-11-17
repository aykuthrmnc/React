import { useEffect, useRef, useState } from "react";

const useFullScreen = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        setFullScreen(true);
      } else {
        setFullScreen(false);
      }
    });
  }, []);

  const toggle = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => alert("Full screen hatasi"));
    } else {
      (ref.current || document.documentElement).requestFullscreen().catch(() => alert("Full screen hatasi"));
    }
  };

  return {
    ref,
    toggle,
    fullScreen,
  };
};
export default useFullScreen;
