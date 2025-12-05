import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedElements";
import { blogArticles, blogCategories } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, Clock, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter articles based on category and search
  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
                  <BookOpen className="w-4 h-4 text-secondary" />
                  <span className="text-secondary font-bold text-sm uppercase">Blog</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                  Artigos e Insights
                </h1>
                <p className="text-xl text-slate-300 mb-8">
                  Explore artigos sobre educação, desenvolvimento de carreira, dicas de estudo e muito mais.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Pesquise artigos..."
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
                    Todos os Artigos
                  </Button>

                  {blogCategories.map((category) => (
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

              {/* Main Content - Articles */}
              <div className="lg:col-span-3">
                {filteredArticles.length > 0 ? (
                  <div className="space-y-8">
                    {filteredArticles.map((article, index) => (
                      <AnimatedElement key={article.id} type="fadeInUp" delay={index * 50}>
                        <Link href={`/blog/${article.slug}`}>
                          <div className="group cursor-pointer">
                            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-secondary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/10 h-full">
                              {/* Image */}
                              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                                <img
                                  src={article.image}
                                  alt={article.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 left-4">
                                  <Badge className="bg-secondary text-white border-0">
                                    {article.category}
                                  </Badge>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="p-6">
                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-pink-400 transition-all line-clamp-2">
                                  {article.title}
                                </h3>

                                <p className="text-slate-300 mb-4 line-clamp-2">
                                  {article.excerpt}
                                </p>

                                {/* Meta Information */}
                                <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                                  <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>{article.author}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime} min de leitura</span>
                                  </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {article.tags.slice(0, 3).map((tag) => (
                                    <Badge
                                      key={tag}
                                      className="bg-slate-700/50 text-slate-300 border border-slate-600 text-xs"
                                    >
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>

                                {/* Read More Button */}
                                <Button className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/30 transition-all group-hover:scale-105">
                                  Ler Artigo Completo
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </AnimatedElement>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-black text-white mb-2">Nenhum artigo encontrado</h3>
                    <p className="text-slate-400">
                      Tente ajustar sua busca ou categoria selecionada.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-slate-800/30 border-y border-slate-700/50">
          <div className="container">
            <AnimatedElement type="fadeInUp">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-black text-white mb-4">Receba Novos Artigos</h2>
                <p className="text-xl text-slate-300 mb-8">
                  Inscreva-se na nossa newsletter para receber os melhores artigos sobre educação e carreira.
                </p>

                <div className="flex gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="flex-grow bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl px-6 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-secondary/50 transition-all"
                  />
                  <Button className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/30 transition-all px-8">
                    Inscrever
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
