import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Save, Globe, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function CompanySettingsTab() {
  const [settings, setSettings] = useState({
    // Informações Básicas
    siteName: "LA Educação",
    siteDescription: "Plataforma de educação à distância com os melhores cursos",
    email: "contato@laeducacao.com",
    phone: "(44) 99999-9999",
    address: "Rua Exemplo, 123 - Maringá, PR",
    
    // Redes Sociais
    facebook: "https://facebook.com/laeducacao",
    instagram: "https://instagram.com/laeducacao",
    linkedin: "https://linkedin.com/company/laeducacao",
    twitter: "https://twitter.com/laeducacao",
    
    // Configurações Gerais
    yearsActive: "10",
    statesServed: "27",
    totalStudents: "15000",
    totalCourses: "4000",
    
    // SEO
    metaTitle: "LA Educação - Educação à Distância",
    metaDescription: "Plataforma de educação à distância com cursos reconhecidos pelo MEC",
    keywords: "educação, cursos online, educação à distância",
    
    // Configurações Técnicas
    maintenanceMode: false,
    enableComments: true,
    enableNewsletter: true,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSave = () => {
    console.log("Configurações salvas:", settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-white">Configurações da Empresa</h3>

      {/* Success Message */}
      {saved && (
        <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-400 font-bold">
          ✓ Configurações salvas com sucesso!
        </div>
      )}

      {/* Informações Básicas */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-secondary" />
          Informações Básicas
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Nome do Site</label>
            <input
              type="text"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Email Principal</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Telefone</label>
            <input
              type="tel"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Endereço</label>
            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">Descrição do Site</label>
          <textarea
            name="siteDescription"
            value={settings.siteDescription}
            onChange={handleChange}
            rows={3}
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm resize-none"
          />
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Linkedin className="w-5 h-5 text-secondary" />
          Redes Sociais
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2 flex items-center gap-2">
              <Facebook className="w-4 h-4" /> Facebook
            </label>
            <input
              type="url"
              name="facebook"
              value={settings.facebook}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2 flex items-center gap-2">
              <Instagram className="w-4 h-4" /> Instagram
            </label>
            <input
              type="url"
              name="instagram"
              value={settings.instagram}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2 flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </label>
            <input
              type="url"
              name="linkedin"
              value={settings.linkedin}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2 flex items-center gap-2">
              <Twitter className="w-4 h-4" /> Twitter
            </label>
            <input
              type="url"
              name="twitter"
              value={settings.twitter}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Estatísticas da Empresa */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
        <h4 className="text-lg font-bold text-white">Estatísticas da Empresa</h4>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Anos de Atuação</label>
            <input
              type="number"
              name="yearsActive"
              value={settings.yearsActive}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Estados Atendidos</label>
            <input
              type="number"
              name="statesServed"
              value={settings.statesServed}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Total de Alunos</label>
            <input
              type="number"
              name="totalStudents"
              value={settings.totalStudents}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Total de Cursos</label>
            <input
              type="number"
              name="totalCourses"
              value={settings.totalCourses}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
          </div>
        </div>
      </div>

      {/* SEO */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
        <h4 className="text-lg font-bold text-white">Configurações de SEO</h4>

        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">Meta Title</label>
          <input
            type="text"
            name="metaTitle"
            value={settings.metaTitle}
            onChange={handleChange}
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">Meta Description</label>
          <textarea
            name="metaDescription"
            value={settings.metaDescription}
            onChange={handleChange}
            rows={2}
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">Keywords</label>
          <input
            type="text"
            name="keywords"
            value={settings.keywords}
            onChange={handleChange}
            placeholder="Separadas por vírgula"
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
          />
        </div>
      </div>

      {/* Configurações Técnicas */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
        <h4 className="text-lg font-bold text-white">Configurações Técnicas</h4>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
            <input
              type="checkbox"
              name="maintenanceMode"
              checked={settings.maintenanceMode}
              onChange={handleChange}
              className="w-5 h-5 rounded cursor-pointer"
            />
            <label className="text-sm font-bold text-slate-300 cursor-pointer">
              Modo de Manutenção (site ficará indisponível)
            </label>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
            <input
              type="checkbox"
              name="enableComments"
              checked={settings.enableComments}
              onChange={handleChange}
              className="w-5 h-5 rounded cursor-pointer"
            />
            <label className="text-sm font-bold text-slate-300 cursor-pointer">
              Permitir comentários nos artigos
            </label>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
            <input
              type="checkbox"
              name="enableNewsletter"
              checked={settings.enableNewsletter}
              onChange={handleChange}
              className="w-5 h-5 rounded cursor-pointer"
            />
            <label className="text-sm font-bold text-slate-300 cursor-pointer">
              Habilitar newsletter
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <Button
        onClick={handleSave}
        className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl h-12 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-secondary/50 transition-all"
      >
        <Save className="w-5 h-5" />
        Salvar Todas as Configurações
      </Button>
    </div>
  );
}
