import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedElements";
import { blogArticles } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import NotFound from "@/pages/NotFound";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  // Get related articles (same category, different article)
  const relatedArticles = blogArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 font-sans">
      <Header />

      <main className="flex-grow pt-24">
        {/* Back Button */}
        <section className="py-8 border-b border-slate-700/50">
          <div className="container">
            <Link href="/blog">
              <Button className="flex items-center gap-2 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 rounded-xl">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 border-b border-slate-700/50">
          <div className="container max-w-3xl">
            <AnimatedElement type="fadeInUp">
              <div className="mb-6">
                <Badge className="bg-secondary text-white border-0 mb-4">
                  {article.category}
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                {article.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-6 text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-secondary" />
                  <span className="font-bold">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span>{new Date(article.date).toLocaleDateString('pt-BR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>{article.readTime} min de leitura</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-slate-700/50 text-slate-300 border border-slate-600 text-sm"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex items-center gap-2 bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/30">
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </Button>
                <Button className="flex items-center gap-2 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 rounded-xl">
                  <Bookmark className="w-4 h-4" />
                  Salvar
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <AnimatedElement type="fadeInUp" delay={100}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <AnimatedElement type="fadeInUp" delay={150}>
              <div className="prose prose-invert max-w-none">
                <div className="text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">
                  {article.content}
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Author Info */}
        <section className="py-12 bg-slate-800/30 border-y border-slate-700/50">
          <div className="container max-w-3xl">
            <AnimatedElement type="fadeInUp">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-white font-black text-2xl">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">{article.author}</h3>
                    <p className="text-slate-300">
                      Especialista em educação e desenvolvimento profissional. Apaixonado por compartilhar conhecimento e ajudar outros a alcançar seus objetivos.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16">
            <div className="container">
              <AnimatedElement type="fadeInUp">
                <h2 className="text-4xl font-black text-white mb-12">Artigos Relacionados</h2>
              </AnimatedElement>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relArticle, index) => (
                  <AnimatedElement key={relArticle.id} type="fadeInUp" delay={index * 100}>
                    <Link href={`/blog/${relArticle.slug}`}>
                      <div className="group cursor-pointer">
                        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-secondary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/10 h-full">
                          {/* Image */}
                          <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                            <img
                              src={relArticle.image}
                              alt={relArticle.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3 className="text-lg font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-pink-400 transition-all line-clamp-2">
                              {relArticle.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                              {relArticle.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-xs text-slate-400">
                              <span>{relArticle.author}</span>
                              <span>{relArticle.readTime} min</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-secondary/20 to-pink-500/20 border-y border-slate-700/50">
          <div className="container max-w-3xl text-center">
            <AnimatedElement type="fadeInUp">
              <h2 className="text-4xl font-black text-white mb-4">Gostou deste artigo?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Explore nossos cursos e transforme seu conhecimento em habilidades práticas.
              </p>
              <Link href="/cursos">
                <Button className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/30 transition-all px-8 py-3 text-lg">
                  Explorar Cursos
                </Button>
              </Link>
            </AnimatedElement>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
