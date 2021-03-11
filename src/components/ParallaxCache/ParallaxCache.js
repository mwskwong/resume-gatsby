import { useController } from "react-scroll-parallax";
import { useEffect } from "react";

const ParallaxCache = () => {
  const { parallaxController } = useController();

  useEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener("load", handler, { passive: true });

    const resizeObserver = new ResizeObserver(handler);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("load", handler);
      resizeObserver.unobserve(document.body);
    };
  }, [parallaxController]);

  return null;
};

ParallaxCache.whyDidYouRender = true;

export default ParallaxCache;