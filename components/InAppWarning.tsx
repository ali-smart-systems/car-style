// components/InAppWarning.tsx

"use client";

import { useEffect, useState } from "react";

export default function InAppWarning() {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);

  useEffect(() => {
    const ua =
      navigator.userAgent ||
      navigator.vendor ||
      (window as any).opera;

    const isApp =
      /(TikTok|Bytedance|Instagram|FBAN|FBAV|Snapchat|Twitter)/i.test(ua);

    if (isApp) {
      setIsInAppBrowser(true);
    }
  }, []);

  if (!isInAppBrowser) return null;

  return (
    <div className="bg-red-600/95 backdrop-blur-md text-white text-center py-3 px-4 text-sm md:text-base font-bold sticky top-0 z-[100] shadow-2xl border-b-2 border-red-400 flex flex-col items-center justify-center animate-pulse">
      <span className="text-lg">⚠️ تنبيه هام لعملائنا</span>

      <span className="font-normal text-xs md:text-sm mt-1">
        لتعمل أزرار (الواتساب والاتصال)، يرجى الضغط على{" "}
        <strong className="bg-white/20 px-1 rounded">
          الثلاث نقاط ⠇
        </strong>{" "}
        بالأعلى واختيار{" "}
        <strong className="bg-white/20 px-1 rounded">
          فتح في المتصفح
        </strong>
      </span>
    </div>
  );
}
