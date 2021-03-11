import { useEffect, useState } from "react";

import nav from "contents/nav";
import throttle from "lodash/throttle";

const useActiveSectionId = () => {
  const [activeSectionId, setActiveSectionId] = useState(nav.home.id);

  const isScrollToBottom = () => window.innerHeight + window.scrollY >= document.body.offsetHeight;

  const isSectionActive = section => section
    && section.offsetTop < document.documentElement.scrollTop
    + document.documentElement.clientHeight / 8;

  useEffect(() => {
    const sectionIds = Object.values(nav).map(({ id }) => id).reverse();

    const handleScroll = throttle(() => {
      if (isScrollToBottom()) {
        setActiveSectionId(sectionIds[0]);
      } else {
        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          if (isSectionActive(section)) {
            setActiveSectionId(sectionId);
            break;
          }
        }
      }
    }, 166);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSectionId;
};

export default useActiveSectionId;