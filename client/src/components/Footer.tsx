import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-black pt-24 pb-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-secondary/40 group-hover:scale-110 transition-transform">
                LA
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-xl leading-none text-white">
                  LA Educação
                </span>
                <span className="text-xs text-slate-400 font-bold tracking-widest">
                  GRUPO EDUCACIONAL
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Liderando a revolução da educação à distância no Brasil. Transformamos vidas através do conhecimento acessível e de qualidade.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center hover:from-secondary hover:to-pink-500 transition-all duration-300 text-slate-300 hover:text-white hover:scale-110 shadow-lg hover:shadow-secondary/50"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-sans font-black text-lg mb-8 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-secondary to-pink-500 rounded-full" />
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Sobre Nós", href: "/sobre" },
                { name: "Nossos Cursos", href: "/cursos" },
                { name: "Seja um Parceiro", href: "/parceiro" },
                { name: "Blog & Notícias", href: "/blog" },
                { name: "Ouvidoria", href: "/ouvidoria" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>
                    <span className="text-slate-400 hover:text-secondary transition-all duration-300 cursor-pointer text-sm font-medium flex items-center gap-2 group">
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-sans font-black text-lg mb-8 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-secondary to-pink-500 rounded-full" />
              Fale Conosco
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  <span className="font-bold text-slate-300">Central do Aluno</span>
                  <span className="hover:text-secondary cursor-pointer">(44) 9944-9323</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  <span className="font-bold text-slate-300">Central do Licenciado</span>
                  <span className="hover:text-secondary cursor-pointer">(44) 3142-3542</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-slate-400 group-hover:text-secondary cursor-pointer transition-colors">secretaria@laeducacao.com.br</span>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h3 className="text-white font-sans font-black text-lg mb-8 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-secondary to-pink-500 rounded-full" />
              Localização
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  R. Moóca, 221 - Vila Progresso<br />
                  Maringá - PR<br />
                  CEP: 87020-110
                </span>
              </li>
              <li className="pt-4 border-t border-slate-800">
                <span className="block text-xs font-black text-secondary uppercase tracking-widest mb-3">Horário de Atendimento</span>
                <span className="block text-sm text-slate-400 mb-1">Seg - Sex: 09:00 - 18:00</span>
                <span className="block text-sm text-slate-400">Sábado: 09:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left font-medium">
            © {new Date().getFullYear()} LA Educação. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-slate-500 text-sm hover:text-secondary cursor-pointer transition-colors font-medium">Termos de Uso</span>
            <span className="text-slate-500 text-sm hover:text-secondary cursor-pointer transition-colors font-medium">Privacidade</span>
            <div className="flex items-center gap-2 bg-gradient-to-r from-secondary/10 to-pink-500/10 px-4 py-2 rounded-full border border-secondary/30 hover:border-secondary/60 transition-all">
              <span className="text-xs font-black text-secondary">MEC</span>
              <span className="text-[10px] text-slate-400 font-bold">Reconhecido</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
