import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                LA
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl leading-none text-white">
                  LA Educação
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wider">
                  GRUPO EDUCACIONAL
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Liderando a revolução da educação à distância no Brasil. Transformamos vidas através do conhecimento acessível e de qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-sans font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre">
                  <span className="text-slate-400 hover:text-secondary transition-colors cursor-pointer text-sm">Sobre Nós</span>
                </Link>
              </li>
              <li>
                <Link href="/cursos">
                  <span className="text-slate-400 hover:text-secondary transition-colors cursor-pointer text-sm">Nossos Cursos</span>
                </Link>
              </li>
              <li>
                <Link href="/parceiro">
                  <span className="text-slate-400 hover:text-secondary transition-colors cursor-pointer text-sm">Seja um Parceiro</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-slate-400 hover:text-secondary transition-colors cursor-pointer text-sm">Blog & Notícias</span>
                </Link>
              </li>
              <li>
                <Link href="/ouvidoria">
                  <span className="text-slate-400 hover:text-secondary transition-colors cursor-pointer text-sm">Ouvidoria</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-sans font-semibold text-lg mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm text-slate-400">
                  <span className="font-medium text-slate-300">Central do Aluno</span>
                  <span>(44) 9944-9323</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm text-slate-400">
                  <span className="font-medium text-slate-300">Central do Licenciado</span>
                  <span>(44) 3142-3542</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">secretaria@laeducacao.com.br</span>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h3 className="text-white font-sans font-semibold text-lg mb-6">Localização</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  R. Moóca, 221 - Vila Progresso<br />
                  Maringá - PR<br />
                  CEP: 87020-110
                </span>
              </li>
              <li className="pt-4 border-t border-slate-800">
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Horário de Atendimento</span>
                <span className="block text-sm text-slate-400">Seg - Sex: 09:00 - 18:00</span>
                <span className="block text-sm text-slate-400">Sábado: 09:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} LA Educação. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-sm hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span className="text-slate-500 text-sm hover:text-white cursor-pointer transition-colors">Privacidade</span>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded border border-white/10">
              <span className="text-xs font-bold text-slate-300">MEC</span>
              <span className="text-[10px] text-slate-500">Reconhecido</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
