// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "smooth" }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // if there's a hash (e.g. /page#section) try to scroll to that element,
    // otherwise scroll to page top.
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior, block: "start" });
        return;
      }
    }

    // default: scroll to top
    window.scrollTo({ top: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
}
