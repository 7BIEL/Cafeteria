import type { AnchorHTMLAttributes } from "react";

/** Link para fora do site: abre em nova aba e avisa leitores de tela. */
export function LinkExterno({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}
