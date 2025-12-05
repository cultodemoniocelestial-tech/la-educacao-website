import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, Users, BookOpen, Award, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent -z-10 rounded-bl-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl -z-10 opacity-60" />
          
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/20 text-primary bg-primary/5 rounded-full">
                Educação à Distância de Excelência
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Liderando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">revolução</span> da educação no Brasil.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Transforme seu futuro com cursos reconhecidos pelo MEC. Junte-se a mais de 15.000 alunos e parceiros que já escolheram a LA Educação.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:-translate-y-1">
                  Quero ser um Parceiro
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-xl border-slate-200 hover:bg-slate-50 hover:text-primary transition-all">
                  Conhecer Cursos
                </Button>
              </div>
              
              <div className="pt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Reconhecido pelo MEC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Certificado RA1000</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white">
                <img 
                  src="/images/5o4ZSnOFZJCT.jpg" 
                  alt="Estudante feliz estudando ao ar livre" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Card 1 */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-lg border border-slate-100 max-w-[200px] animate-in zoom-in duration-500 delay-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Avaliação</p>
                      <p className="text-lg font-bold text-slate-900">4.7/5.0</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">Excelente no Quero Bolsa</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-slate-50 border-y border-slate-100">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Users, number: "+1.500", label: "Parceiros Ativos", color: "text-blue-600", bg: "bg-blue-100" },
                { icon: BookOpen, number: "+4.000", label: "Cursos no Catálogo", color: "text-pink-600", bg: "bg-pink-100" },
                { icon: TrendingUp, number: "+15.000", label: "Alunos Formados", color: "text-purple-600", bg: "bg-purple-100" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">{stat.number}</h3>
                    <p className="text-slate-500 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 text-secondary bg-secondary/10 hover:bg-secondary/20 px-4 py-1">Seja um Licenciado</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Por que ser Parceiro da LA Educação?</h2>
              <p className="text-lg text-slate-600">
                Oferecemos as melhores condições do mercado para você empreender com segurança e alta rentabilidade no setor educacional.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Maior Repasse do Brasil",
                  desc: "Você terá o maior repasse do Brasil, com condições exclusivas que vão acelerar o seu negócio e maximizar seus lucros.",
                  icon: "💰",
                  delay: "0"
                },
                {
                  title: "Liberdade Total",
                  desc: "Você terá total liberdade para precificação, ajustando os valores de acordo com a realidade da sua região e público.",
                  icon: "🚀",
                  delay: "100"
                },
                {
                  title: "Consultoria Gratuita",
                  desc: "Nossos parceiros contam com consultorias gratuitas oferecidas por especialistas em Comercial e Marketing.",
                  icon: "🤝",
                  delay: "200"
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                  <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/prNWaX6iAsfz.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Converta propósito em <span className="text-secondary">rentabilidade</span>.
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Ao oferecer nossos cursos EAD reconhecidos nacionalmente, você amplia o acesso à educação de qualidade, fortalece sua marca e aumenta sua receita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="h-16 px-10 text-lg bg-secondary hover:bg-secondary/90 text-white rounded-xl shadow-lg shadow-secondary/25">
                    Quero ser Parceiro Agora
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-6">Fale com um especialista</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Nome" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                    <input type="text" placeholder="Telefone" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                  </div>
                  <input type="email" placeholder="E-mail" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                  <Button className="w-full h-12 bg-white text-slate-900 hover:bg-slate-100 font-bold">
                    Solicitar Contato
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 bg-slate-50">
          <div className="container">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Últimas Notícias</h2>
                <p className="text-slate-600">Fique por dentro das novidades da LA Educação</p>
              </div>
              <Button variant="ghost" className="text-primary hover:text-primary/80 hidden md:flex">
                Ver todos os posts <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Grupo LA Educação é destaque em duas matérias no Grupo Globo",
                  image: "/images/vdtOeq5hdmff.jpg",
                  category: "Imprensa",
                  date: "04 Dez 2025"
                },
                {
                  title: "Instituto Aizul promove ação solidária na Casa da Criança",
                  image: "/images/kMLFtRVMa4jN.jpg",
                  category: "Social",
                  date: "01 Dez 2025"
                },
                {
                  title: "O Grupo LA Educação Conquista a Honra de Ser Reconhecido no LAQI",
                  image: "/images/YW0nfxRfQUzx.jpg",
                  category: "Prêmios",
                  date: "28 Nov 2025"
                }
              ].map((post, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>3 min de leitura</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform">
                    Ler mais <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" className="w-full">Ver todos os posts</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
