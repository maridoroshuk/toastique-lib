import { uuid } from "components/shared/helpers";
import { useEffect, useState } from "react";

const useToastPortal = position => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${uuid()}`);

  useEffect(() => {
    const div = document.createElement("div");

    div.id = portalId;
    div.style.position = "fixed";
    div.style.right = "0.5rem";
    div.style.zIndex = 1000;
    div.style.top = position === "top" ? "0.5rem" : null
    div.style.bottom = position === "bottom" ? "0.5rem" : null

    document.getElementsByTagName("body")[0].prepend(div);

    setLoaded(true);

    return () => {
      document.getElementsByTagName("body")[0].removeChild(div);
    };
  }, [portalId, position]);

  return { loaded, portalId };
};

export default useToastPortal;
