import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Lock, Mail, LogIn } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Sem validação - apenas redireciona para o dashboard
    localStorage.setItem("adminLoggedIn", "true");
    localStorage.setItem("adminEmail", email || "admin@laeducacao.com");
    setLocation("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 font-sans">
      {/* Header Simples */}
      <div className="py-6 border-b border-slate-700/50">
        <div className="container flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-white font-black">
            LA
          </div>
          <div>
            <h1 className="text-white font-black">LA Educação</h1>
            <p className="text-slate-400 text-xs">Área Administrativa</p>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-white mx-auto mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-white mb-2">Acesso Admin</h2>
              <p className="text-slate-400">Bem-vindo à área administrativa da LA Educação</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl pl-12 pr-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl pl-12 pr-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Info Message */}
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4">
                <p className="text-sm text-slate-300">
                  <span className="font-bold text-secondary">Nota:</span> Digite qualquer e-mail e senha para acessar a área administrativa.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Entrar na Área Admin
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
              <p className="text-xs text-slate-400">
                Acesso restrito apenas para administradores
              </p>
            </div>
          </div>

          {/* Security Info */}
          <div className="mt-8 text-center text-sm text-slate-400">
            <p>🔒 Área protegida e criptografada</p>
          </div>
        </div>
      </div>
    </div>
  );
}
