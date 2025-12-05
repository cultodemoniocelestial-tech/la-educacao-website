import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedElements";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, AlertCircle, Lightbulb, Heart, CheckCircle, Mail, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

type FeedbackType = "reclamacao" | "sugestao" | "elogio";

export default function Ouvidoria() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feedbackType: "sugestao" as FeedbackType,
    subject: "",
    message: "",
    anonymous: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Sua mensagem foi enviada com sucesso! Obrigado por nos contatar.");
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          feedbackType: "sugestao",
          subject: "",
          message: "",
          anonymous: false,
        });
        setSubmitted(false);
      }, 2000);
    }, 1500);
  };

  const feedbackTypes = [
    {
      id: "reclamacao",
      label: "Reclamação",
      icon: AlertCircle,
      color: "from-red-500 to-orange-500",
      description: "Relatar um problema ou insatisfação"
    },
    {
      id: "sugestao",
      label: "Sugestão",
      icon: Lightbulb,
      color: "from-yellow-500 to-amber-500",
      description: "Sugerir melhorias ou novas funcionalidades"
    },
    {
      id: "elogio",
      label: "Elogio",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      description: "Compartilhar feedback positivo"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 font-sans">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden border-b border-slate-700/50">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="container relative z-10">
            <AnimatedElement type="fadeInUp">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30">
                  <MessageSquare className="w-4 h-4 text-secondary" />
                  <span className="text-secondary font-bold text-sm uppercase">Ouvidoria</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                  Sua Voz Importa
                </h1>
                <p className="text-xl text-slate-300 mb-8">
                  Queremos ouvir você! Compartilhe suas reclamações, sugestões e elogios para nos ajudar a melhorar continuamente.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Feedback Types */}
        <section className="py-16 bg-slate-800/30 border-b border-slate-700/50">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <h2 className="text-3xl font-black text-white mb-12 text-center">Como Podemos Ajudar?</h2>
            </AnimatedElement>

            <div className="grid md:grid-cols-3 gap-8">
              {feedbackTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <AnimatedElement key={type.id} type="fadeInUp" delay={index * 100}>
                    <div className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${type.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                      <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2">
                          {type.label}
                        </h3>
                        <p className="text-slate-400">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedElement>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <AnimatedElement type="fadeInUp">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 lg:p-12">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Feedback Type Selection */}
                    <div>
                      <label className="block text-white font-bold mb-4">Tipo de Feedback</label>
                      <div className="grid grid-cols-3 gap-4">
                        {feedbackTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, feedbackType: type.id as FeedbackType }))}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              formData.feedbackType === type.id
                                ? `border-secondary bg-secondary/10`
                                : `border-slate-700/50 bg-slate-800/30 hover:border-slate-600`
                            }`}
                          >
                            <div className="flex flex-col items-center gap-2">
                              <type.icon className="w-6 h-6" />
                              <span className="text-sm font-bold text-white">{type.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-white font-bold mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={formData.anonymous}
                        placeholder="Seu nome"
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-6 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-secondary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        required={!formData.anonymous}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-white font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={formData.anonymous}
                        placeholder="seu.email@exemplo.com"
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-6 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-secondary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        required={!formData.anonymous}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-white font-bold mb-2">
                        Telefone (Opcional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-6 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-secondary/50 transition-all"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-white font-bold mb-2">
                        Assunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Resumo do seu feedback"
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-6 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-secondary/50 transition-all"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-white font-bold mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Descreva detalhadamente seu feedback..."
                        rows={6}
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-6 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-secondary/50 transition-all resize-none"
                        required
                      />
                    </div>

                    {/* Anonymous Checkbox */}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="anonymous"
                        name="anonymous"
                        checked={formData.anonymous}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-slate-700/50 bg-slate-800/50 text-secondary focus:ring-secondary cursor-pointer"
                      />
                      <label htmlFor="anonymous" className="text-slate-300 font-medium cursor-pointer">
                        Enviar anonimamente
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/30 transition-all py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Feedback"}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white mx-auto mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4">Obrigado!</h3>
                    <p className="text-slate-300 text-lg">
                      Sua mensagem foi enviada com sucesso. Nossa equipe analisará seu feedback e entrará em contato em breve.
                    </p>
                  </div>
                )}
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-slate-800/30 border-y border-slate-700/50">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <h2 className="text-3xl font-black text-white mb-12 text-center">Outras Formas de Contato</h2>
            </AnimatedElement>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  description: "Envie um email para nossa equipe",
                  contact: "ouvidoria@laeducacao.com.br",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Phone,
                  title: "Telefone",
                  description: "Ligue para nosso suporte",
                  contact: "(11) 3000-0000",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Clock,
                  title: "Horário de Atendimento",
                  description: "Segunda a sexta",
                  contact: "09:00 - 18:00",
                  color: "from-purple-500 to-indigo-500"
                }
              ].map((item, idx) => (
                <AnimatedElement key={idx} type="fadeInUp" delay={idx * 100}>
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 mb-4">{item.description}</p>
                      <p className="text-secondary font-bold text-lg">{item.contact}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <AnimatedElement type="fadeInUp">
              <h2 className="text-3xl font-black text-white mb-12 text-center">Perguntas Frequentes sobre Ouvidoria</h2>
            </AnimatedElement>

            <div className="space-y-4">
              {[
                {
                  question: "Quanto tempo leva para receber uma resposta?",
                  answer: "Respondemos todas as mensagens em até 48 horas úteis. Para questões urgentes, recomendamos ligar para nosso suporte."
                },
                {
                  question: "Minha identidade será mantida em sigilo?",
                  answer: "Sim! Se você escolher enviar anonimamente, sua identidade será completamente confidencial. Mesmo que não escolha, seus dados são protegidos por nossa política de privacidade."
                },
                {
                  question: "Posso acompanhar o status do meu feedback?",
                  answer: "Se você fornecer um email ou telefone, enviaremos atualizações sobre o status do seu feedback. Você também pode entrar em contato conosco para verificar."
                },
                {
                  question: "Meu feedback será usado para melhorar o serviço?",
                  answer: "Absolutamente! Todos os feedbacks são analisados e utilizados para melhorar continuamente nossos cursos e serviços."
                }
              ].map((item, idx) => (
                <AnimatedElement key={idx} type="fadeInUp" delay={idx * 50}>
                  <details className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden hover:border-secondary/50 transition-all duration-300 cursor-pointer">
                    <summary className="flex items-center justify-between p-6 hover:bg-slate-800/70 transition-colors">
                      <h3 className="text-lg font-black text-white">{item.question}</h3>
                      <div className="text-secondary group-open:rotate-180 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-6 text-slate-300 border-t border-slate-700/50 pt-4">
                      {item.answer}
                    </div>
                  </details>
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
