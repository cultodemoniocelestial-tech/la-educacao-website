export interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  videoUrl: string;
  thumbnail: string;
  quote: string;
  growth: string;
  results: string[];
  duration: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    name: "Carlos Silva",
    role: "Sócio-Fundador",
    company: "Instituto Silva Educação",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    quote: "A parceria com a LA Educação transformou completamente meu negócio. Em apenas 6 meses, triplicamos nossa receita.",
    growth: "+300% em receita",
    results: [
      "De 50 para 500 alunos",
      "Faturamento de R$ 5K para R$ 50K/mês",
      "Expansão para 3 estados",
      "Contratação de 5 colaboradores"
    ],
    duration: "4:32"
  },
  {
    id: "2",
    name: "Fernanda Costa",
    role: "Gerente de Operações",
    company: "Educação Integral Brasil",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    quote: "O suporte da LA Educação foi fundamental para nosso crescimento. A consultoria gratuita nos ajudou a otimizar nossas estratégias.",
    growth: "+250% em alunos",
    results: [
      "De 100 para 350 alunos",
      "Faturamento mensal de R$ 35K",
      "Reconhecimento regional",
      "Parcerias com escolas públicas"
    ],
    duration: "5:15"
  },
  {
    id: "3",
    name: "João Oliveira",
    role: "Empreendedor",
    company: "Polo Educacional João",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
    quote: "Comecei do zero e em 1 ano já estava gerando R$ 30K por mês. A LA Educação oferece as melhores condições do mercado.",
    growth: "+400% em 12 meses",
    results: [
      "Começou com 0, chegou a 400 alunos",
      "Faturamento de R$ 30K/mês",
      "Abriu segunda unidade",
      "Criou 8 empregos diretos"
    ],
    duration: "6:10"
  },
  {
    id: "4",
    name: "Beatriz Martins",
    role: "Diretora Pedagógica",
    company: "Centro de Educação Avançada",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
    quote: "A qualidade dos cursos e o suporte oferecido pela LA Educação são incomparáveis. Nossos alunos estão muito satisfeitos.",
    growth: "+350% em satisfação",
    results: [
      "Taxa de satisfação de 98%",
      "De 200 para 800 alunos",
      "Faturamento de R$ 80K/mês",
      "Prêmio de melhor polo 2024"
    ],
    duration: "5:45"
  },
  {
    id: "5",
    name: "Ricardo Gomes",
    role: "Gestor de Negócios",
    company: "Plataforma Educacional Gomes",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    quote: "O maior repasse do Brasil não é apenas uma promessa, é realidade. Meus números comprovam isso.",
    growth: "+280% em lucro",
    results: [
      "Lucro líquido de R$ 25K/mês",
      "De 150 para 500 alunos",
      "Expansão para 5 cidades",
      "Investimento em tecnologia"
    ],
    duration: "4:50"
  },
  {
    id: "6",
    name: "Mariana Santos",
    role: "Fundadora",
    company: "Instituto Transformação",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    quote: "Ser parceiro da LA Educação foi a melhor decisão que tomei. Crescimento, rentabilidade e propósito social.",
    growth: "+320% em impacto",
    results: [
      "5.000+ vidas transformadas",
      "Faturamento de R$ 60K/mês",
      "Projeto social com bolsas",
      "Reconhecimento nacional"
    ],
    duration: "5:30"
  }
];
