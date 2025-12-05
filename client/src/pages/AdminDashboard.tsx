import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Video, 
  BookOpen, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Plus,
  Edit,
  Trash2,
  Users,
  TrendingUp,
  MessageSquare
} from "lucide-react";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminEmail");
    setLocation("/admin/login");
  };

  const menuItems = [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "blog", label: "Blog", icon: FileText },
    { id: "videos", label: "Depoimentos", icon: Video },
    { id: "courses", label: "Cursos", icon: BookOpen },
    { id: "about", label: "Sobre Nós", icon: Users },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 font-sans flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-slate-800/50 border-r border-slate-700/50 transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-6 border-b border-slate-700/50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-white font-black flex-shrink-0">
            LA
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="text-white font-black text-sm">LA Admin</h1>
              <p className="text-slate-400 text-xs">v1.0</p>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-grow p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-secondary to-pink-500 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-bold">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-bold">Sair</span>}
          </button>
        </div>

        {/* Toggle Button */}
        <div className="p-4 border-t border-slate-700/50">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center p-2 rounded-xl hover:bg-slate-700/50 transition-all text-slate-400"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-slate-800/50 border-b border-slate-700/50 px-8 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-black text-white">
            {menuItems.find(m => m.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-slate-400">Administrador</p>
              <p className="text-white font-bold">{localStorage.getItem("adminEmail") || "admin@laeducacao.com"}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-pink-500" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-auto p-8">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "blog" && <BlogTab />}
          {activeTab === "videos" && <VideosTab />}
          {activeTab === "courses" && <CoursesTab />}
          {activeTab === "about" && <AboutTab />}
          {activeTab === "settings" && <SettingsTab />}
        </div>
      </div>
    </div>
  );
}

// Overview Tab
function OverviewTab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total de Alunos", value: "15,234", icon: Users, color: "from-blue-500 to-cyan-500" },
          { label: "Artigos no Blog", value: "24", icon: FileText, color: "from-secondary to-pink-500" },
          { label: "Depoimentos", value: "12", icon: Video, color: "from-emerald-500 to-teal-500" },
          { label: "Cursos Ativos", value: "48", icon: BookOpen, color: "from-purple-500 to-indigo-500" },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            Atividade Recente
          </h3>
          <div className="space-y-3">
            {[
              "Novo artigo publicado: 'Tendências em EAD 2024'",
              "Depoimento adicionado: Carlos Silva",
              "Novo curso criado: Python Avançado",
              "Página 'Sobre Nós' atualizada",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <p className="text-slate-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-secondary" />
            Mensagens Recentes
          </h3>
          <div className="space-y-3">
            {[
              { name: "João Silva", msg: "Gostaria de informações sobre..." },
              { name: "Maria Santos", msg: "Tenho uma dúvida sobre o curso..." },
              { name: "Pedro Costa", msg: "Quero ser parceiro da LA Educação" },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-700/30 rounded-lg">
                <p className="text-white font-bold text-sm mb-1">{item.name}</p>
                <p className="text-slate-400 text-sm truncate">{item.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Tab
function BlogTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-white">Gerenciar Artigos</h3>
        <Button className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Novo Artigo
        </Button>
      </div>

      <div className="space-y-3">
        {[
          { title: "Tendências em EAD 2024", date: "15/12/2024", views: 234 },
          { title: "Como escolher um curso online", date: "10/12/2024", views: 156 },
          { title: "Certificação profissional: Guia completo", date: "05/12/2024", views: 89 },
        ].map((article, idx) => (
          <div key={idx} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 flex items-center justify-between hover:border-secondary/50 transition-all">
            <div>
              <p className="text-white font-bold">{article.title}</p>
              <p className="text-slate-400 text-sm">{article.date} • {article.views} visualizações</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all">
                <Edit className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Videos Tab
function VideosTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-white">Gerenciar Depoimentos</h3>
        <Button className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Novo Depoimento
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Carlos Silva", company: "Instituto Silva", duration: "4:32" },
          { name: "Fernanda Costa", company: "Educação Integral", duration: "5:15" },
          { name: "João Oliveira", company: "Polo Educacional", duration: "6:10" },
        ].map((video, idx) => (
          <div key={idx} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden hover:border-secondary/50 transition-all">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <Video className="w-8 h-8 text-slate-500" />
            </div>
            <div className="p-4">
              <p className="text-white font-bold">{video.name}</p>
              <p className="text-slate-400 text-sm mb-4">{video.company}</p>
              <div className="flex gap-2">
                <button className="flex-1 p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all text-sm font-bold flex items-center justify-center gap-1">
                  <Edit className="w-4 h-4" />
                  Editar
                </button>
                <button className="flex-1 p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all text-sm font-bold flex items-center justify-center gap-1">
                  <Trash2 className="w-4 h-4" />
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Courses Tab
function CoursesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-white">Gerenciar Cursos</h3>
        <Button className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Novo Curso
        </Button>
      </div>

      <div className="space-y-3">
        {[
          { title: "Python para Iniciantes", students: 234, status: "Ativo" },
          { title: "Marketing Digital Completo", students: 156, status: "Ativo" },
          { title: "Gestão de Projetos", students: 89, status: "Ativo" },
        ].map((course, idx) => (
          <div key={idx} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 flex items-center justify-between hover:border-secondary/50 transition-all">
            <div>
              <p className="text-white font-bold">{course.title}</p>
              <p className="text-slate-400 text-sm">{course.students} alunos • Status: {course.status}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all">
                <Edit className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// About Tab
function AboutTab() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-white">Editar Página "Sobre Nós"</h3>
      
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">Título Principal</label>
          <input
            type="text"
            defaultValue="Transformando vidas através da educação"
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">Descrição</label>
          <textarea
            defaultValue="A LA Educação nasceu com o propósito de democratizar o acesso ao ensino de qualidade no Brasil..."
            rows={5}
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Anos de Atuação</label>
            <input
              type="number"
              defaultValue="10"
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Estados Atendidos</label>
            <input
              type="number"
              defaultValue="27"
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl h-12">
          Salvar Alterações
        </Button>
      </div>
    </div>
  );
}

// Settings Tab
function SettingsTab() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-white">Configurações</h3>
      
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">Nome do Site</label>
          <input
            type="text"
            defaultValue="LA Educação"
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">Email de Contato</label>
          <input
            type="email"
            defaultValue="contato@laeducacao.com"
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">Telefone</label>
          <input
            type="tel"
            defaultValue="(44) 99999-9999"
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          />
        </div>

        <Button className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl h-12">
          Salvar Configurações
        </Button>
      </div>
    </div>
  );
}
