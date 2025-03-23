import { useEffect } from "react";

const BacktoTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return null;
};

export default BacktoTop;
