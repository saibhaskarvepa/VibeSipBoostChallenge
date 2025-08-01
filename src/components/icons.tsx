import type { SVGProps } from "react";

export function JuiceIconOld(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 8h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" />
      <path d="M7 8V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
      <path d="M16 18m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
      <path d="M9 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
      <path d="M16 4h2" />
      <path d="M19 4v10" />
    </svg>
  );
}

export function JuiceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Glass */}
      <path d="M8 3h8l-1 18H9L8 3z" stroke="currentColor" fill="hsl(var(--primary-foreground) / 0.5)" />
      {/* Juice */}
      <path d="M9 8h6l-.5 12H9.5L9 8z" fill="hsl(var(--primary))" stroke="none" />
      {/* Orange Slice */}
      <circle cx="17" cy="6" r="4" fill="hsl(var(--primary))" stroke="currentColor" />
      <path d="M17 2v8" stroke="currentColor" />
      <path d="M14.5 3.5l5 5" stroke="currentColor" />
      <path d="M19.5 3.5l-5 5" stroke="currentColor" />
      {/* Straw */}
      <path d="M14 2l-4 18" stroke="hsl(var(--accent))" strokeWidth="2" />
       {/* Bubbles */}
      <circle cx="12" cy="14" r="0.5" fill="hsl(var(--primary-foreground) / 0.7)" stroke="none" />
      <circle cx="14" cy="18" r="0.5" fill="hsl(var(--primary-foreground) / 0.7)" stroke="none" />
      <circle cx="11" cy="19" r="0.5" fill="hsl(var(--primary-foreground) / 0.7)" stroke="none" />
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
