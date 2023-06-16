import { useEffect, useState } from "react";

const useOnline = () => {
  const handleOnline = function (e) {
    setIsOnline(true);
  };

  const handleOffline = function (e) {
    setIsOnline(false);
  };
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return function () {
      window.removeEventListener("offline", handleOffline);
      window.addEventListener("online", handleOnline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
