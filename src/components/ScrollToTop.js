import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  console.log("pathname", pathname);

  useEffect(() => {
    console.log("it scrolls to the top", pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default ScrollToTop;
