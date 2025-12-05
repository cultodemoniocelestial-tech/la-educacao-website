import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Nossa História</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Transformando vidas através da educação</h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                A LA Educação nasceu com o propósito de democratizar o acesso ao ensino de qualidade no Brasil, conectando alunos a oportunidades reais de crescimento.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="/images/prNWaX6iAsfz.jpg" 
                  alt="Equipe LA Educação" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Quem Somos</h2>
                <p className="text-slate-600 leading-relaxed">
                  Somos um grupo educacional comprometido com a excelência e a inovação. Atuamos no mercado de educação à distância com uma metodologia própria que coloca o aluno no centro do processo de aprendizagem.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Nossa rede de parceiros se estende por todo o território nacional, levando oportunidades de qualificação profissional para milhares de brasileiros todos os anos.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div>
                    <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                    <p className="text-sm text-slate-500 font-medium">Anos de História</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-primary mb-2">27</h3>
                    <p className="text-sm text-slate-500 font-medium">Estados Atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
