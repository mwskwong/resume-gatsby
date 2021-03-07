import { useEffect, useState } from "react";

import nav from "contents/nav";

const useActiveSectionId = () => {
  const [activeSectionId, setActiveSectionId] = useState(nav.home.id);

  const isScrollToBottom = () => window.innerHeight + window.scrollY >= document.body.offsetHeight;

  const isSectionActive = section => section
    && section.offsetTop < document.documentElement.scrollTop
    + document.documentElement.clientHeight / 8;

  useEffect(() => {
    const sectionIds = Object.values(nav).map(({ id }) => id).reverse();

    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSectionId;
};

export default useActiveSectionId;