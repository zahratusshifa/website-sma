"use client";

import { useEffect, useState } from "react";
import { defaultContent, readContent } from "./site-storage";

export default function useSiteContent() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const refresh = () => setContent(readContent());
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("smansa-content-updated", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("smansa-content-updated", refresh);
    };
  }, []);

  return content;
}
