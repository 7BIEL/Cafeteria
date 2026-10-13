import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const titulo = `${site.nomeCompleto} — café especial e coworking na Vila`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: titulo,
  description:
    "Cafés especiais do Brasil, cozinha afetiva e coworking na Praça do Museu Náutico, Centro Histórico de Ilhabela (SP). Veja o cardápio com preços, o endereço e fale com a equipe pelo WhatsApp.",
  alternates: { canonical: "/" },
  applicationName: site.nomeCompleto,
  keywords: [
    "café Ilhabela",
    "cafeteria Ilhabela",
    "café especial Ilhabela",
    "coworking Ilhabela",
    "Vila Ilhabela",
    "Centro Histórico Ilhabela",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.nomeCompleto,
    title: titulo,
    description:
      "Cafés especiais do Brasil e coworking na Praça do Museu Náutico, no Centro Histórico de Ilhabela.",
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description:
      "Cafés especiais do Brasil e coworking na Praça do Museu Náutico, no Centro Histórico de Ilhabela.",
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Ilhabela",
    "geo.position": `${site.endereco.geo.latitude};${site.endereco.geo.longitude}`,
    ICBM: `${site.endereco.geo.latitude}, ${site.endereco.geo.longitude}`,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#2b1b13",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${instrument.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only z-50 rounded-full bg-torra px-5 py-3 font-semibold text-filtro focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
