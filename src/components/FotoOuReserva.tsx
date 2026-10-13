import Image from "next/image";
import type { Foto } from "@/content/tipos";

type Props = {
  foto: Foto;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** O que mostrar no site publicado enquanto a foto não existir. Padrão: nada. */
  semFoto?: React.ReactNode;
};

/**
 * Mostra a foto real quando `src` estiver preenchido.
 * Sem foto: em desenvolvimento, exibe um espaço reservado com a instrução;
 * no site publicado, exibe `semFoto` (ou nada) — nunca uma imagem inventada.
 */
export function FotoOuReserva({ foto, sizes, className, priority, semFoto = null }: Props) {
  if (foto.src) {
    return (
      <Image
        src={foto.src}
        alt={foto.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className ?? ""}`}
      />
    );
  }

  if (process.env.NODE_ENV === "development") {
    return (
      <div
        role="note"
        className={`absolute inset-0 flex items-end bg-[repeating-linear-gradient(135deg,#eadcc6_0_14px,#e3d2b9_14px_28px)] p-4 ${className ?? ""}`}
      >
        {semFoto ? <div className="absolute inset-0">{semFoto}</div> : null}
        <p className="relative rounded-lg bg-amber-50/95 p-3 text-sm leading-snug text-amber-950 shadow">
          <strong className="block">Foto pendente (só em desenvolvimento)</strong>
          {foto.instrucao}
        </p>
      </div>
    );
  }

  return <>{semFoto}</>;
}
