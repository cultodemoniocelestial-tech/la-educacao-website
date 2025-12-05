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
          ? "bg-white/90 backdrop-blur-md shadow-sm border-border/40 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
              LA
            </div>
            <div className="flex flex-col">
              <span className={cn("font-sans font-bold text-xl leading-none", isScrolled ? "text-primary" : "text-primary")}>
                LA Educação
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider">
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
                  "text-sm font-medium transition-colors hover:text-secondary cursor-pointer relative group",
                  location === link.href
                    ? "text-secondary font-semibold"
                    : "text-foreground/80"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                  location === link.href ? "w-full" : ""
                )} />
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 font-medium">
                Área Restrita <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="cursor-pointer">
                Área do Aluno
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Área do Parceiro
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 transition-all hover:scale-105">
            Seja um Parceiro
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl p-4 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span 
                className="block p-3 rounded-md hover:bg-muted font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <div className="h-px bg-border my-2" />
          <Button variant="outline" className="w-full justify-start">
            Área do Aluno
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Área do Parceiro
          </Button>
          <Button className="w-full bg-secondary text-white">
            Seja um Parceiro
          </Button>
        </div>
      )}
    </header>
  );
}
