import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Save, Eye, Globe, Search } from "lucide-react";

interface PageSEO {
  id: string;
  pageName: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
  robots: string;
  lastModified: string;
}

export default function SEOTab() {
  const [selectedPage, setSelectedPage] = useState<PageSEO | null>(null);
  const [pages, setPages] = useState<PageSEO[]>([
    {
      id: "1",
      pageName: "Página Inicial",
      url: "https://laeducacao.com",
      metaTitle: "LA Educação - Educação à Distância",
      metaDescription: "Plataforma de educação à distância com cursos reconhecidos pelo MEC",
      keywords: "educação, cursos online, educação à distância, MEC",
      ogTitle: "LA Educação - Transformando Vidas",
      ogDescription: "Cursos online de qualidade para sua carreira",
      ogImage: "https://laeducacao.com/og-image.jpg",
      canonicalUrl: "https://laeducacao.com",
      robots: "index, follow",
      lastModified: "2024-12-15",
    },
    {
      id: "2",
      pageName: "Cursos",
      url: "https://laeducacao.com/cursos",
      metaTitle: "Cursos Online | LA Educação",
      metaDescription: "Explore nossos cursos online com certificado reconhecido pelo MEC",
      keywords: "cursos online, certificação, educação profissional",
      ogTitle: "Nossos Cursos",
      ogDescription: "Mais de 4000 cursos disponíveis",
      ogImage: "https://laeducacao.com/og-courses.jpg",
      canonicalUrl: "https://laeducacao.com/cursos",
      robots: "index, follow",
      lastModified: "2024-12-10",
    },
  ]);

  const [siteSettings, setSiteSettings] = useState({
    siteName: "LA Educação",
    siteUrl: "https://laeducacao.com",
    siteDescription: "Plataforma de educação à distância",
    googleAnalyticsId: "UA-XXXXXXXXX-X",
    googleSearchConsoleId: "xxxxxxxxxxxxx",
    bingSiteAuth: "xxxxxxxxxxxxx",
    sitemapUrl: "https://laeducacao.com/sitemap.xml",
    robotsTxt: "User-agent: *\nDisallow: /admin\nAllow: /",
  });

  const [saved, setSaved] = useState(false);

  const handleSaveSettings = () => {
    console.log("Configurações SEO salvas:", siteSettings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSavePage = (page: PageSEO) => {
    setPages(pages.map((p) => (p.id === page.id ? page : p)));
    setSelectedPage(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (selectedPage) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-white">
            SEO - {selectedPage.pageName}
          </h3>
          <button
            onClick={() => setSelectedPage(null)}
            className="px-4 py-2 bg-slate-700/50 text-slate-300 font-bold rounded-lg hover:bg-slate-700 transition-all"
          >
            Voltar
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-white">Meta Tags</h4>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Meta Title (60 caracteres)
                </label>
                <input
                  type="text"
                  value={selectedPage.metaTitle}
                  onChange={(e) =>
                    setSelectedPage({ ...selectedPage, metaTitle: e.target.value })
                  }
                  maxLength={60}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                />
                <p className="text-xs text-slate-400 mt-1">
                  {selectedPage.metaTitle.length}/60 caracteres
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Meta Description (160 caracteres)
                </label>
                <textarea
                  value={selectedPage.metaDescription}
                  onChange={(e) =>
                    setSelectedPage({ ...selectedPage, metaDescription: e.target.value })
                  }
                  maxLength={160}
                  rows={3}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm resize-none"
                />
                <p className="text-xs text-slate-400 mt-1">
                  {selectedPage.metaDescription.length}/160 caracteres
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Keywords (separadas por vírgula)
                </label>
                <input
                  type="text"
                  value={selectedPage.keywords}
                  onChange={(e) =>
                    setSelectedPage({ ...selectedPage, keywords: e.target.value })
                  }
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-white">Open Graph (Social Media)</h4>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  OG Title
                </label>
                <input
                  type="text"
                  value={selectedPage.ogTitle}
                  onChange={(e) =>
                    setSelectedPage({ ...selectedPage, ogTitle: e.target.value })
                  }
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  OG Description
                </label>
                <textarea
                  value={selectedPage.ogDescription}
                  onChange={(e) =>
                    setSelectedPage({ ...selectedPage, ogDescription: e.target.value })
                  }
                  rows={2}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  OG Image URL
                </label>
                <input
                  type="url"
                  value={selectedPage.ogImage}
                  onChange={(e) =>
                    setSelectedPage({ ...selectedPage, ogImage: e.target.value })
                  }
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-white">Configurações Técnicas</h4>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Canonical URL
                </label>
                <input
                  type="url"
                  value={selectedPage.canonicalUrl}
                  onChange={(e) =>
                    setSelectedPage({ ...selectedPage, canonicalUrl: e.target.value })
                  }
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Robots Meta
                </label>
                <input
                  type="text"
                  value={selectedPage.robots}
                  onChange={(e) =>
                    setSelectedPage({ ...selectedPage, robots: e.target.value })
                  }
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                />
              </div>
            </div>

            <Button
              onClick={() => handleSavePage(selectedPage)}
              className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-lg h-12 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Salvar Configurações SEO
            </Button>
          </div>

          {/* Preview */}
          <div className="space-y-4">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-secondary" />
                Preview Google
              </h4>
              <div className="bg-slate-700/30 rounded-lg p-3 space-y-2">
                <p className="text-secondary text-sm font-bold">
                  {selectedPage.metaTitle || "Título não definido"}
                </p>
                <p className="text-slate-400 text-xs">
                  {selectedPage.canonicalUrl}
                </p>
                <p className="text-slate-300 text-xs">
                  {selectedPage.metaDescription || "Descrição não definida"}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary" />
                Open Graph Preview
              </h4>
              <div className="bg-slate-700/30 rounded-lg p-3 space-y-2">
                {selectedPage.ogImage && (
                  <img
                    src={selectedPage.ogImage}
                    alt="OG"
                    className="w-full h-32 object-cover rounded"
                  />
                )}
                <p className="text-white text-sm font-bold">
                  {selectedPage.ogTitle || "Título não definido"}
                </p>
                <p className="text-slate-300 text-xs">
                  {selectedPage.ogDescription || "Descrição não definida"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-white">Gerenciamento de SEO</h3>

      {saved && (
        <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-400 font-bold">
          ✓ Configurações salvas com sucesso!
        </div>
      )}

      {/* Configurações Globais */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-secondary" />
          Configurações Globais
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Nome do Site
            </label>
            <input
              type="text"
              value={siteSettings.siteName}
              onChange={(e) =>
                setSiteSettings({ ...siteSettings, siteName: e.target.value })
              }
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              URL do Site
            </label>
            <input
              type="url"
              value={siteSettings.siteUrl}
              onChange={(e) =>
                setSiteSettings({ ...siteSettings, siteUrl: e.target.value })
              }
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Google Analytics ID
            </label>
            <input
              type="text"
              value={siteSettings.googleAnalyticsId}
              onChange={(e) =>
                setSiteSettings({ ...siteSettings, googleAnalyticsId: e.target.value })
              }
              placeholder="UA-XXXXXXXXX-X"
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Google Search Console ID
            </label>
            <input
              type="text"
              value={siteSettings.googleSearchConsoleId}
              onChange={(e) =>
                setSiteSettings({
                  ...siteSettings,
                  googleSearchConsoleId: e.target.value,
                })
              }
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            Robots.txt
          </label>
          <textarea
            value={siteSettings.robotsTxt}
            onChange={(e) =>
              setSiteSettings({ ...siteSettings, robotsTxt: e.target.value })
            }
            rows={4}
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm resize-none font-mono text-xs"
          />
        </div>

        <Button
          onClick={handleSaveSettings}
          className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-lg h-12"
        >
          <Save className="w-5 h-5 mr-2" />
          Salvar Configurações Globais
        </Button>
      </div>

      {/* Páginas */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Search className="w-5 h-5 text-secondary" />
          SEO por Página
        </h4>

        <div className="space-y-3">
          {pages.map((page) => (
            <div
              key={page.id}
              onClick={() => setSelectedPage(page)}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 cursor-pointer hover:border-secondary/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex-grow">
                  <p className="text-white font-bold">{page.pageName}</p>
                  <p className="text-slate-400 text-sm">{page.url}</p>
                  <p className="text-slate-500 text-xs mt-2">
                    Title: {page.metaTitle}
                  </p>
                </div>
                <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
