import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedElements";
import { faqItems, faqCategories } from "@/data/faq";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Search, HelpCircle, MessageCircle, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on category and search
  const filteredFAQs = faqItems.filter((item) => {
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
                  <HelpCircle className="w-4 h-4 text-secondary" />
                  <span className="text-secondary font-bold text-sm uppercase">Dúvidas Frequentes</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                  Perguntas Frequentes
                </h1>
                <p className="text-xl text-slate-300 mb-8">
                  Encontre respostas para as perguntas mais comuns sobre nossos cursos, certificados, pagamentos e muito mais.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Pesquise sua dúvida..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl pl-12 pr-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-secondary/50 transition-all"
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar - Categories */}
              <AnimatedElement type="fadeInLeft" duration={600}>
                <div className="sticky top-32 space-y-4">
                  <h3 className="text-white font-black text-lg mb-4">Categorias</h3>

                  <Button
                    onClick={() => setSelectedCategory(null)}
                    className={cn(
                      "w-full justify-start text-left rounded-xl transition-all",
                      !selectedCategory
                        ? "bg-gradient-to-r from-secondary to-pink-500 text-white font-bold"
                        : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50"
                    )}
                  >
                    Todas as Categorias
                  </Button>

                  {faqCategories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "w-full justify-start text-left rounded-xl transition-all",
                        selectedCategory === category
                          ? "bg-gradient-to-r from-secondary to-pink-500 text-white font-bold"
                          : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50"
                      )}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </AnimatedElement>

              {/* Main Content - FAQs */}
              <div className="lg:col-span-3">
                {filteredFAQs.length > 0 ? (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                      <AnimatedElement key={faq.id} type="fadeInUp" delay={index * 50}>
                        <div className="group">
                          <button
                            onClick={() => toggleExpanded(faq.id)}
                            className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl hover:border-secondary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/10 text-left"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-grow">
                                <Badge className="mb-3 bg-slate-700/50 text-slate-300 border border-slate-600 text-xs">
                                  {faq.category}
                                </Badge>
                                <h3 className="text-lg font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-pink-400 transition-all">
                                  {faq.question}
                                </h3>
                              </div>
                              <div className="shrink-0 mt-1">
                                <ChevronDown
                                  className={cn(
                                    "w-6 h-6 text-slate-400 group-hover:text-secondary transition-all duration-300",
                                    expandedId === faq.id && "rotate-180 text-secondary"
                                  )}
                                />
                              </div>
                            </div>
                          </button>

                          {/* Expanded Answer */}
                          {expandedId === faq.id && (
                            <div className="mt-2 bg-slate-800/30 border border-slate-700/30 border-t-0 rounded-b-2xl p-6">
                              <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <HelpCircle className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-black text-white mb-2">Nenhuma pergunta encontrada</h3>
                    <p className="text-slate-400">
                      Tente ajustar sua busca ou categoria selecionada.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-slate-800/30 border-y border-slate-700/50">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl font-black text-white mb-4">Ainda tem dúvidas?</h2>
                <p className="text-xl text-slate-300">
                  Entre em contato com nosso suporte. Estamos aqui para ajudar!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    description: "Envie sua dúvida por email",
                    contact: "suporte@laeducacao.com.br",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: MessageCircle,
                    title: "Chat ao Vivo",
                    description: "Converse com nosso suporte",
                    contact: "Disponível 24/7",
                    color: "from-secondary to-pink-500"
                  },
                  {
                    icon: Phone,
                    title: "Telefone",
                    description: "Ligue para nosso suporte",
                    contact: "(11) 3000-0000",
                    color: "from-green-500 to-emerald-500"
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
            </AnimatedElement>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
