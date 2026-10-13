import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/**
 * Imagem de compartilhamento (WhatsApp, redes sociais): foto enviada pela
 * equipe + nome e localização. Para trocar a foto, altere o arquivo abaixo.
 */
export const alt = `${site.nomeCompleto} — café especial, cozinha afetiva e coworking no Centro Histórico de Ilhabela`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ImagemSocial() {
  const foto = await readFile(join(process.cwd(), "public/fotos/mesa-cafe-da-manha.jpg"));
  const src = `data:image/jpeg;base64,${foto.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#8a1a4b" }}>
        <div
          style={{
            width: 630,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 56px",
            color: "#f5efe5",
          }}
        >
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>{site.marca}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 600 }}>
              Pare na Vila. Fique para o café.
            </div>
            <div style={{ fontSize: 28, marginTop: 26, color: "#f3cfd9" }}>
              Praça do Museu Náutico, Centro Histórico de Ilhabela
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={570} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
