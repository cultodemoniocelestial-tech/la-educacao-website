import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Cursos", href: "/cursos" },
    { name: "Blog", href: "/blog" },
    { name: "Ouvidoria", href: "/ouvidoria" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl border-slate-700/30 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-secondary/40 group-hover:scale-110 transition-transform duration-300">
              LA
            </div>
            <div className="flex flex-col">
              <span className={cn("font-sans font-black text-lg leading-none transition-colors duration-300", isScrolled ? "text-white" : "text-white")}>
                LA Educação
              </span>
              <span className="text-xs text-slate-400 font-bold tracking-widest">
                GRUPO EDUCACIONAL
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={cn(
                  "text-sm font-bold transition-all duration-300 hover:text-secondary cursor-pointer relative group",
                  location === link.href
                    ? "text-secondary"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-secondary to-pink-400 transition-all duration-300 group-hover:w-full",
                  location === link.href ? "w-full" : "w-0"
                )} />
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 font-bold text-slate-300 hover:text-secondary hover:bg-slate-800/50 transition-all">
                Área Restrita <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-slate-800 border-slate-700">
              <DropdownMenuItem className="cursor-pointer text-slate-300 hover:text-secondary hover:bg-slate-700/50">
                Área do Aluno
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-slate-300 hover:text-secondary hover:bg-slate-700/50">
                Área do Parceiro
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="bg-gradient-to-r from-secondary to-pink-500 hover:shadow-2xl hover:shadow-secondary/50 text-white font-bold shadow-lg transition-all hover:scale-105 duration-300 rounded-xl">
            Seja um Parceiro
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/30 shadow-2xl p-4 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span 
                className="block p-3 rounded-lg hover:bg-slate-800 font-bold text-slate-300 hover:text-secondary transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <div className="h-px bg-slate-700/30 my-2" />
          <Button variant="outline" className="w-full justify-start text-slate-300 border-slate-600 hover:bg-slate-800 hover:text-secondary">
            Área do Aluno
          </Button>
          <Button variant="outline" className="w-full justify-start text-slate-300 border-slate-600 hover:bg-slate-800 hover:text-secondary">
            Área do Parceiro
          </Button>
          <Button className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-bold">
            Seja um Parceiro
          </Button>
        </div>
      )}
    </header>
  );
}
