// src/components/ui/BotAvatar.tsx
import { SVGProps } from 'react';

export const BotAvatar = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <defs>
        <radialGradient id="avatar-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A5B4FC" />
        </radialGradient>
      </defs>
      <path
        fill="url(#avatar-gradient)"
        d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z"
      />
      <path
        fill="#FFFFFF"
        d="M12,7c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,7,12,7z M12,11c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S12.55,11,12,11z"
      />
      <path
        fill="#FFFFFF"
        d="M12,14c-3.31,0-6,2.69-6,6h12C18,16.69,15.31,14,12,14z M8.27,18C8.59,16.8,9.72,16,11,16h2 c1.28,0,2.41,0.8,2.73,2H8.27z"
      />
    </svg>
  );
};
