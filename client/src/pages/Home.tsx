import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, Users, BookOpen, Award, ChevronRight, Sparkles, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedElement, ParallaxElement, GlowingElement } from "@/components/AnimatedElements";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 font-sans overflow-hidden">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Ousado e Moderno */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/30 to-transparent rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
          
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedElement type="fadeInLeft" duration={800}>
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-secondary font-bold text-sm uppercase tracking-widest">Educação do Futuro</span>
                  </div>
                  
                  <h1 className="text-6xl lg:text-7xl font-black leading-tight text-white">
                    Liderando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-pink-400 to-secondary animate-pulse">revolução</span> da educação.
                  </h1>
                  
                  <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                    Transforme seu futuro com cursos reconhecidos pelo MEC. Junte-se a mais de 15.000 alunos que já escolheram a LA Educação e estão crescendo profissionalmente.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="h-16 px-10 text-lg rounded-2xl bg-gradient-to-r from-secondary to-pink-500 hover:shadow-2xl hover:shadow-secondary/50 text-white font-bold shadow-lg transition-all hover:scale-105 duration-300">
                      Quero ser um Parceiro
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-2xl border-slate-400 text-white hover:bg-white/10 hover:text-secondary transition-all duration-300 font-bold">
                      Conhecer Cursos
                    </Button>
                  </div>
                  
                  <div className="pt-8 flex flex-wrap items-center gap-6">
                    {[
                      { icon: "✓", text: "Reconhecido pelo MEC" },
                      { icon: "⭐", text: "4.7/5.0 no Quero Bolsa" },
                      { icon: "🔒", text: "100% Seguro" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 font-medium">
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement type="fadeInRight" duration={800} delay={200}>
                <div className="relative">
                  <GlowingElement>
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-secondary/30 backdrop-blur-sm">
                      <img 
                        src="/images/hero-students.png" 
                        alt="Estudantes felizes aprendendo" 
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
                    </div>
                  </GlowingElement>
                  
                  {/* Floating Cards */}
                  <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20 max-w-[220px] animate-bounce" style={{ animationDuration: "3s" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                        +
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Crescimento</p>
                        <p className="text-2xl font-black text-white">15K</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300">Alunos transformados</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Stats Section - Interativo */}
        <section className="py-16 relative">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Users, number: "+1.500", label: "Parceiros Ativos", color: "from-blue-500 to-cyan-500" },
                { icon: BookOpen, number: "+4.000", label: "Cursos", color: "from-secondary to-pink-500" },
                { icon: TrendingUp, number: "+15.000", label: "Alunos", color: "from-purple-500 to-indigo-500" }
              ].map((stat, index) => (
                <AnimatedElement key={index} type="scaleIn" delay={index * 100}>
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-secondary/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-4xl font-black text-white mb-2">{stat.number}</h3>
                      <p className="text-slate-300 font-semibold">{stat.label}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner Section - Premium Design */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/50" />
          
          <div className="container relative z-10">
            <AnimatedElement type="fadeInUp" duration={600}>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-secondary font-bold text-sm uppercase">Seja um Licenciado</span>
                </div>
                <h2 className="text-5xl font-black text-white mb-6">Por que ser Parceiro?</h2>
                <p className="text-xl text-slate-300">
                  Oferecemos as melhores condições do mercado para você empreender com segurança e alta rentabilidade.
                </p>
              </div>
            </AnimatedElement>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Maior Repasse do Brasil",
                  desc: "Você terá o maior repasse do Brasil, com condições exclusivas que vão acelerar seu negócio.",
                  icon: Zap,
                  color: "from-yellow-500 to-orange-500",
                  delay: "0"
                },
                {
                  title: "Liberdade Total",
                  desc: "Liberdade total para precificação, ajustando os valores de acordo com sua região.",
                  icon: Target,
                  color: "from-secondary to-pink-500",
                  delay: "100"
                },
                {
                  title: "Consultoria Gratuita",
                  desc: "Consultorias gratuitas oferecidas por especialistas em Comercial e Marketing.",
                  icon: Award,
                  color: "from-emerald-500 to-teal-500",
                  delay: "200"
                }
              ].map((item, idx) => (
                <AnimatedElement key={idx} type="fadeInUp" delay={parseInt(item.delay)}>
                  <div className="group relative h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 h-full flex flex-col group-hover:scale-105 group-hover:shadow-2xl">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-secondary transition-all">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed flex-grow">
                        {item.desc}
                      </p>
                      <div className="mt-6 flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform">
                        Saiba mais <ChevronRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Impactante */}
        <section className="py-24 relative overflow-hidden">
          <ParallaxElement offset={30}>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-primary/20" />
          </ParallaxElement>
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedElement type="fadeInLeft" duration={800}>
                <div className="space-y-8">
                  <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                    Converta propósito em <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-400">rentabilidade</span>.
                  </h2>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Ao oferecer nossos cursos EAD reconhecidos nacionalmente, você amplia o acesso à educação de qualidade, fortalece sua marca e aumenta sua receita exponencialmente.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="h-16 px-10 text-lg bg-gradient-to-r from-secondary to-pink-500 hover:shadow-2xl hover:shadow-secondary/50 text-white rounded-2xl font-bold shadow-lg transition-all hover:scale-105">
                      Quero ser Parceiro Agora
                    </Button>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement type="fadeInRight" duration={800} delay={200}>
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-10 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-black text-white mb-8">Fale com um especialista</h3>
                  <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Nome" 
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                      />
                      <input 
                        type="text" 
                        placeholder="Telefone" 
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                      />
                    </div>
                    <input 
                      type="email" 
                      placeholder="E-mail" 
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                    />
                    <Button className="w-full h-14 bg-gradient-to-r from-secondary to-pink-500 text-white hover:shadow-2xl hover:shadow-secondary/50 font-bold rounded-xl transition-all hover:scale-105">
                      Solicitar Contato
                    </Button>
                  </form>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24">
          <div className="container">
            <div className="flex justify-between items-end mb-16">
              <AnimatedElement type="fadeInLeft">
                <div>
                  <h2 className="text-5xl font-black text-white mb-3">Últimas Notícias</h2>
                  <p className="text-slate-300 text-lg">Fique por dentro das novidades da LA Educação</p>
                </div>
              </AnimatedElement>
              <Button variant="ghost" className="text-secondary hover:text-secondary/80 hidden md:flex font-bold text-lg">
                Ver todos <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Grupo LA Educação é destaque em duas matérias no Grupo Globo",
                  image: "/images/partnership-success.png",
                  category: "Imprensa",
                  date: "04 Dez 2025"
                },
                {
                  title: "Instituto Aizul promove ação solidária na Casa da Criança",
                  image: "/images/hero-students.png",
                  category: "Social",
                  date: "01 Dez 2025"
                },
                {
                  title: "O Grupo LA Educação Conquista a Honra de Ser Reconhecido no LAQI",
                  image: "/images/digital-learning.png",
                  category: "Prêmios",
                  date: "28 Nov 2025"
                }
              ].map((post, idx) => (
                <AnimatedElement key={idx} type="fadeInUp" delay={idx * 100}>
                  <div className="group cursor-pointer h-full">
                    <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video shadow-xl group-hover:shadow-2xl group-hover:shadow-secondary/20 transition-all duration-300">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-wide">
                        {post.category}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      <span>3 min de leitura</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-pink-400 transition-all line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform">
                      Ler mais <ChevronRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
