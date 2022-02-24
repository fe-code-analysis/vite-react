import { useEffect, useState } from "react";

function useWebP() {
  const [supportWebP, setSupportWebP] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onerror = () => {
      setSupportWebP((support) => !support);
    };
    image.onload = () => {
      setSupportWebP((support) => !support);
    };
    image.src =
      "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=";
  }, []);

  return supportWebP ? 'webp' : ''
}

export default useWebP
