/**
 * Ilustração da abertura: o vapor da xícara sobe e encontra o perfil da ilha
 * e as ondas do canal. Usada enquanto não houver foto real aprovada —
 * é um desenho, não uma fotografia, então não se passa por imagem do local.
 */
export function ArteVapor({ className }: { className?: string }) {
  const tracos = [
    {
      d: "M222 384c-20-40 20-66 0-102-17-30 15-56 3-88",
      comprimento: 230,
      atraso: "0.2s",
    },
    {
      d: "M260 376c-20-42 22-72 2-110-18-34 18-62 4-104",
      comprimento: 260,
      atraso: "0s",
    },
    {
      d: "M298 384c-20-36 20-60 2-92-15-28 13-50 3-80",
      comprimento: 220,
      atraso: "0.35s",
    },
  ];

  return (
    <svg
      viewBox="0 0 520 560"
      className={className}
      role="img"
      aria-label="Ilustração: o vapor de uma xícara de café sobe em direção ao contorno de uma ilha e às ondas do mar."
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="300" cy="236" r="190" className="fill-mar" />
      <circle cx="300" cy="236" r="190" className="fill-none stroke-mar-claro/25" strokeWidth="1.5" />

      {/* Perfil da ilha */}
      <path
        d="M40 302c56-30 96-92 158-90 50 2 70-58 130-64 62-6 92 74 152 100"
        className="traco-animado fill-none stroke-mar-claro"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ "--comprimento": 520, "--atraso": "1.1s" } as React.CSSProperties}
      />

      {/* Ondas do canal */}
      {[328, 350, 372].map((y, i) => (
        <path
          key={y}
          d={`M${30 + i * 14} ${y}q30-12 60 0t60 0t60 0t60 0t60 0t60 0t60 0`}
          className="traco-animado fill-none stroke-mar-claro"
          strokeOpacity={0.75 - i * 0.2}
          strokeWidth="2"
          strokeLinecap="round"
          style={{ "--comprimento": 460, "--atraso": `${1.4 + i * 0.15}s` } as React.CSSProperties}
        />
      ))}

      {/* Pires e xícara */}
      <ellipse cx="260" cy="506" rx="150" ry="20" className="fill-crema-escuro" />
      <path d="M168 402h184c0 66-40 102-92 102s-92-36-92-102Z" className="fill-filtro" />
      <path
        d="M350 424c46-2 48 50-8 48"
        className="fill-none stroke-filtro"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <ellipse cx="260" cy="402" rx="92" ry="13" className="fill-grao" />

      {/* Vapor */}
      <g className="vapor-flutua">
        {tracos.map((t) => (
          <path
            key={t.d}
            d={t.d}
            className="traco-animado fill-none stroke-mel"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{ "--comprimento": t.comprimento, "--atraso": t.atraso } as React.CSSProperties}
          />
        ))}
      </g>
    </svg>
  );
}
