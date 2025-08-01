import type { SVGProps } from "react";

export function JuiceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22a2 2 0 0 0 2-2V8.2c0-.4.2-.8.6-1L18 4h-4c-1.1 0-2 .9-2 2" />
      <path d="M12 22a2 2 0 0 1-2-2V8.2c0-.4-.2-.8-.6-1L6 4h4c1.1 0 2 .9 2 2" />
      <path d="m5 4 1-2" />
      <path d="m19 4-1-2" />
      <path d="M12 4V2" />
    </svg>
  );
}

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <path d="M2 9h4v12H2z"></path>
    </svg>
  );
}
