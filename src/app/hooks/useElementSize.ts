// hooks/useElementSize.ts
import { useState, useRef, useLayoutEffect } from 'react';

export const useElementSize = <T extends HTMLElement = HTMLDivElement>() => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateSize = () => {
      setSize({
        width: element.clientWidth,
        height: element.clientHeight,
      });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { ref, ...size };
};