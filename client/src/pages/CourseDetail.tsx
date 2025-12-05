import { useParams } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/courses";
import { courseDetails } from "@/data/courseDetails";
import { AnimatedElement } from "@/components/AnimatedElements";
import {
  Star,
  Users,
  Clock,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Play,
  FileText,
  Zap,
  Award,
  Target,
  ArrowRight,
  Video,
  BarChart3,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const detail = courseDetails[id || ""];
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  if (!course || !detail) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <Header />
        <main className="flex-grow container pt-32 flex items-center justify-center">
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h1 className="text-4xl font-black text-white mb-2">Curso não encontrado</h1>
            <p className="text-slate-400 mb-6">O curso que você procura não existe.</p>
            <Button className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold">
              Voltar aos Cursos
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 font-sans">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden border-b border-slate-700/50">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Content */}
              <div className="lg:col-span-2">
                <AnimatedElement type="fadeInUp">
                  <div className="mb-6">
                    <Badge className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold mb-4">
                      {course.category}
                    </Badge>
                    <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                      {course.title}
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span className="text-white font-black text-lg">{course.rating}</span>
                        </div>
                        <p className="text-xs text-slate-400">Avaliação</p>
                      </div>
                      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-5 h-5 text-secondary" />
                          <span className="text-white font-black text-lg">{(course.students / 1000).toFixed(1)}k</span>
                        </div>
                        <p className="text-xs text-slate-400">Alunos</p>
                      </div>
                      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-5 h-5 text-emerald-400" />
                          <span className="text-white font-black text-lg">{course.duration}</span>
                        </div>
                        <p className="text-xs text-slate-400">Duração</p>
                      </div>
                      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="w-5 h-5 text-purple-400" />
                          <span className="text-white font-black text-lg">{course.modules}</span>
                        </div>
                        <p className="text-xs text-slate-400">Módulos</p>
                      </div>
                    </div>

                    {/* Instructor */}
                    <div className="bg-gradient-to-r from-secondary/10 to-pink-500/10 border border-secondary/30 p-4 rounded-xl">
                      <p className="text-xs text-slate-400 mb-1">Instrutor</p>
                      <p className="text-lg font-black text-white">{course.instructor}</p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>

              {/* Right Sidebar - CTA */}
              <AnimatedElement type="fadeInRight" duration={600} delay={200}>
                <div className="sticky top-32 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl">
                  <div className="mb-8">
                    <span className="text-slate-400 text-sm">Investimento</span>
                    <div className="text-4xl font-black text-white mt-2">
                      R$ {course.price.toLocaleString("pt-BR")}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">Acesso vitalício ao conteúdo</p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-black h-14 rounded-xl mb-4 hover:shadow-2xl hover:shadow-secondary/50 transition-all hover:scale-105">
                    Inscrever-se Agora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 h-12 rounded-xl font-bold mb-6">
                    Adicionar ao Carrinho
                  </Button>

                  {/* Benefits */}
                  <div className="space-y-3 pt-6 border-t border-slate-700/50">
                    {[
                      "Certificado reconhecido pelo MEC",
                      "Acesso vitalício",
                      "Suporte via email",
                      "Comunidade exclusiva",
                      "Materiais complementares"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-16">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-black text-white mb-8 flex items-center gap-3">
                    <Target className="w-8 h-8 text-secondary" />
                    O que você aprenderá
                  </h2>
                  <div className="space-y-4">
                    {detail.objectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-black">{idx + 1}</span>
                        </div>
                        <p className="text-slate-300 group-hover:text-white transition-colors">{obj}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Target Audience */}
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6 text-secondary" />
                      Para quem é este curso?
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{detail.targetAudience}</p>
                  </div>

                  {/* Requirements */}
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-secondary" />
                      Pré-requisitos
                    </h3>
                    <ul className="space-y-3">
                      {detail.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 bg-slate-800/30 border-y border-slate-700/50">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <h2 className="text-4xl font-black text-white mb-12 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-secondary" />
                Grade Curricular
              </h2>

              <div className="space-y-4">
                {detail.modules.map((module, idx) => (
                  <div key={module.id} className="group">
                    <button
                      onClick={() =>
                        setExpandedModule(
                          expandedModule === module.id ? null : module.id
                        )
                      }
                      className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl hover:border-secondary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/10 text-left"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <div className="flex items-center gap-4 mb-2">
                            <span className="text-secondary font-black text-lg">
                              Módulo {idx + 1}
                            </span>
                            <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                              {module.duration}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-pink-400 transition-all">
                            {module.title}
                          </h3>
                          <p className="text-slate-400">{module.description}</p>
                        </div>
                        <div className="ml-4 shrink-0">
                          {expandedModule === module.id ? (
                            <ChevronUp className="w-6 h-6 text-secondary" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-secondary transition-colors" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {expandedModule === module.id && (
                      <div className="mt-2 bg-slate-800/30 border border-slate-700/30 border-t-0 rounded-b-2xl p-6 space-y-3">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-start gap-4 p-4 bg-slate-700/20 rounded-xl hover:bg-slate-700/40 transition-colors group/lesson"
                          >
                            <div className="shrink-0 mt-1">
                              {lesson.type === "video" && (
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                  <Play className="w-4 h-4 text-red-400" />
                                </div>
                              )}
                              {lesson.type === "texto" && (
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                  <FileText className="w-4 h-4 text-blue-400" />
                                </div>
                              )}
                              {lesson.type === "exercício" && (
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <Lightbulb className="w-4 h-4 text-green-400" />
                                </div>
                              )}
                              {lesson.type === "quiz" && (
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                  <BarChart3 className="w-4 h-4 text-purple-400" />
                                </div>
                              )}
                            </div>
                            <div className="flex-grow">
                              <h4 className="text-white font-bold mb-1 group-hover/lesson:text-secondary transition-colors">
                                {lesson.title}
                              </h4>
                              <div className="flex items-center gap-4">
                                <span className="text-xs text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                                  {lesson.duration}
                                </span>
                                <span className="text-xs text-slate-500 capitalize">
                                  {lesson.type}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Course Info Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Metodologia",
                  content: detail.methodology,
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: BarChart3,
                  title: "Avaliação",
                  content: detail.assessment,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Award,
                  title: "Certificação",
                  content: detail.certification,
                  color: "from-secondary to-pink-500"
                }
              ].map((item, idx) => (
                <AnimatedElement key={idx} type="fadeInUp" delay={idx * 100}>
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-secondary/10 to-pink-500/10 border-y border-secondary/30">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                  Pronto para transformar sua carreira?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Comece agora e tenha acesso vitalício ao conteúdo, certificado reconhecido pelo MEC e suporte da nossa comunidade.
                </p>
                <Button className="bg-gradient-to-r from-secondary to-pink-500 text-white font-black h-16 px-12 text-lg rounded-xl hover:shadow-2xl hover:shadow-secondary/50 transition-all hover:scale-105">
                  Inscrever-se Agora
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
