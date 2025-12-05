import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedElements";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import { Users, Target, Lightbulb, Heart, TrendingUp, Award, Globe, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 font-sans">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden border-b border-slate-700/50">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          <div className="container relative z-10">
            <AnimatedElement type="fadeInUp">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30">
                  <Heart className="w-4 h-4 text-secondary" />
                  <span className="text-secondary font-bold text-sm uppercase">Nossa História</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                  Transformando vidas através da <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-400">educação</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  A LA Educação nasceu com o propósito de democratizar o acesso ao ensino de qualidade no Brasil, conectando alunos a oportunidades reais de crescimento profissional e pessoal.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedElement type="fadeInLeft" duration={800}>
                <div className="relative">
                  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-secondary/30">
                    <img 
                      src="/images/hero-students.png" 
                      alt="Equipe LA Educação" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement type="fadeInRight" duration={800} delay={200}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-5xl font-black text-white mb-6">Quem Somos</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-4">
                      Somos um grupo educacional comprometido com a excelência e a inovação. Atuamos no mercado de educação à distância com uma metodologia própria que coloca o aluno no centro do processo de aprendizagem.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Nossa rede de parceiros se estende por todo o território nacional, levando oportunidades de qualificação profissional para milhares de brasileiros todos os anos. Somos mais que uma empresa educacional - somos um movimento de transformação social.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/50">
                    <div className="text-center">
                      <h3 className="text-4xl font-black text-secondary mb-2">10+</h3>
                      <p className="text-sm text-slate-400 font-medium">Anos de Atuação</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl font-black text-secondary mb-2">27</h3>
                      <p className="text-sm text-slate-400 font-medium">Estados Atendidos</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl font-black text-secondary mb-2">15K+</h3>
                      <p className="text-sm text-slate-400 font-medium">Alunos Formados</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-slate-800/30 border-y border-slate-700/50">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-5xl font-black text-white mb-6">Nossos Pilares</h2>
                <p className="text-xl text-slate-300">
                  Guiados por princípios sólidos que orientam cada decisão e ação
                </p>
              </div>
            </AnimatedElement>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Missão",
                  description: "Democratizar o acesso à educação de qualidade, conectando alunos e profissionais a oportunidades reais de crescimento e transformação social.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Lightbulb,
                  title: "Visão",
                  description: "Ser a plataforma educacional mais confiável e inovadora do Brasil, impactando positivamente a vida de milhões de pessoas.",
                  color: "from-secondary to-pink-500"
                },
                {
                  icon: Heart,
                  title: "Valores",
                  description: "Excelência, inovação, integridade, inclusão e compromisso com o desenvolvimento humano e profissional contínuo.",
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((item, idx) => (
                <AnimatedElement key={idx} type="fadeInUp" delay={idx * 100}>
                  <div className="group relative h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 h-full flex flex-col group-hover:scale-105 group-hover:shadow-2xl">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-5xl font-black text-white mb-6">Por que Escolher a LA Educação?</h2>
                <p className="text-xl text-slate-300">
                  Somos líderes no mercado educacional brasileiro com diferenciais únicos
                </p>
              </div>
            </AnimatedElement>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Award,
                  title: "Reconhecimento MEC",
                  description: "Todos os nossos cursos são autorizados e reconhecidos pelo Ministério da Educação, garantindo qualidade e validade nacional."
                },
                {
                  icon: Globe,
                  title: "Alcance Nacional",
                  description: "Presente em 27 estados brasileiros com uma rede de parceiros que cresce continuamente."
                },
                {
                  icon: Users,
                  title: "Comunidade Forte",
                  description: "Mais de 15 mil alunos já transformaram suas vidas através dos nossos cursos."
                },
                {
                  icon: Zap,
                  title: "Inovação Contínua",
                  description: "Plataforma com tecnologia de ponta e metodologia pedagógica atualizada constantemente."
                },
                {
                  icon: TrendingUp,
                  title: "Crescimento Garantido",
                  description: "Modelo de parceria comprovado que gera retorno financeiro real para nossos licenciados."
                },
                {
                  icon: CheckCircle2,
                  title: "Suporte Integral",
                  description: "Equipe dedicada oferecendo consultoria comercial, marketing e suporte jurídico."
                }
              ].map((item, idx) => (
                <AnimatedElement key={idx} type="fadeInUp" delay={idx * 50}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-secondary/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-secondary to-pink-500 text-white">
                          <item.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-black text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-slate-800/30 border-y border-slate-700/50">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-5xl font-black text-white mb-6">Nossa Jornada</h2>
                <p className="text-xl text-slate-300">
                  Marcos importantes na história da LA Educação
                </p>
              </div>
            </AnimatedElement>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  year: "2014",
                  title: "O Início",
                  description: "LA Educação é fundada com a visão de democratizar a educação no Brasil."
                },
                {
                  year: "2017",
                  title: "Expansão Nacional",
                  description: "Alcançamos os primeiros 10 estados brasileiros e ultrapassamos 1.000 alunos."
                },
                {
                  year: "2020",
                  title: "Transformação Digital",
                  description: "Implementamos plataforma de ponta durante a pandemia, acelerando o crescimento."
                },
                {
                  year: "2023",
                  title: "Liderança de Mercado",
                  description: "Consolidamos nossa posição como maior repasse educacional do Brasil com 15 mil alunos."
                },
                {
                  year: "2024",
                  title: "Reconhecimento Global",
                  description: "Somos destaque na mídia nacional e reconhecidos como empresa inovadora no setor educacional."
                }
              ].map((item, idx) => (
                <AnimatedElement key={idx} type="fadeInUp" delay={idx * 50}>
                  <div className="relative pl-8 pb-8 border-l-2 border-secondary/50 last:pb-0">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-secondary -translate-x-[9px]" />
                    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl hover:border-secondary/50 transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-black text-white">{item.title}</h3>
                        <span className="text-secondary font-black text-lg">{item.year}</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <VideoTestimonialsSection />

        {/* CTA Section */}
        <section className="py-24">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <div className="bg-gradient-to-r from-secondary/20 to-pink-500/20 border border-secondary/30 rounded-3xl p-12 lg:p-16 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                  Pronto para fazer parte dessa revolução?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Seja um parceiro da LA Educação e transforme vidas enquanto cresce profissionalmente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/30 transition-all px-8 py-3 text-lg flex items-center justify-center gap-2">
                    Quero ser Parceiro
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button className="bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 font-bold rounded-xl transition-all px-8 py-3 text-lg">
                    Conhecer Cursos
                  </Button>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
