/**
 * Aviso de conteúdo pendente — aparece SOMENTE em `npm run dev`.
 * No site publicado (`npm run build`), este componente não renderiza nada.
 */
export function Pendente({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div
      role="note"
      className="my-4 rounded-xl border-2 border-dashed border-amber-600 bg-amber-50 p-4 font-sans text-sm leading-relaxed text-amber-950"
    >
      <strong className="block">Pendente de confirmação (visível só em desenvolvimento)</strong>
      {children}
    </div>
  );
}
