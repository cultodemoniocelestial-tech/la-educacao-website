export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  course: string;
  rating: number;
  text: string;
  image: string;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marina Silva",
    role: "Gerente de Marketing",
    company: "TechCorp Brasil",
    course: "Marketing Digital",
    rating: 5,
    text: "O curso de Marketing Digital foi transformador! Aprendi estratégias práticas que implementei imediatamente na minha empresa. Os resultados foram incríveis - aumentamos nossas conversões em 150% em apenas 3 meses. A qualidade do conteúdo e o suporte da equipe foram excepcionais.",
    image: "/images/hero-students.png"
  },
  {
    id: "2",
    name: "Carlos Mendes",
    role: "Desenvolvedor Full Stack",
    company: "StartupXYZ",
    course: "Desenvolvimento Web",
    rating: 5,
    text: "Excelente curso! Saí de um conhecimento básico para ser capaz de criar aplicações web completas com React e Node.js. Os projetos práticos foram essenciais para consolidar o aprendizado. Recomendo muito para quem quer entrar ou evoluir na área de desenvolvimento.",
    image: "/images/partnership-success.png"
  },
  {
    id: "3",
    name: "Juliana Costa",
    role: "Empreendedora",
    company: "Próprio Negócio",
    course: "Empreendedorismo Digital",
    rating: 5,
    text: "Sempre tive vontade de empreender, mas não sabia por onde começar. Este curso me deu o roadmap completo! Desde a validação da ideia até o lançamento do meu negócio digital. Hoje faturamos R$50k por mês. Muito obrigada LA Educação!",
    image: "/images/digital-learning.png"
  },
  {
    id: "4",
    name: "Roberto Alves",
    role: "Analista de Dados",
    company: "DataSolutions",
    course: "Análise de Dados",
    rating: 5,
    text: "O curso de Análise de Dados foi perfeito para minha transição de carreira. Aprender Python, SQL e ferramentas de BI de forma prática foi fundamental. Consegui meu primeiro emprego como Analista de Dados logo após completar o curso. Muito grato!",
    image: "/images/hero-students.png"
  },
  {
    id: "5",
    name: "Beatriz Oliveira",
    role: "Especialista em RH",
    company: "Recursos Humanos Plus",
    course: "Recursos Humanos",
    rating: 5,
    text: "Trabalho há 10 anos em RH e este curso me atualizou com as metodologias mais modernas. Implementei novas estratégias de recrutamento e retenção de talentos que melhoraram significativamente nossos resultados. Muito bem estruturado!",
    image: "/images/partnership-success.png"
  },
  {
    id: "6",
    name: "Felipe Martins",
    role: "Gestor de Projetos",
    company: "Consultoria Ágil",
    course: "Gestão de Projetos",
    rating: 5,
    text: "Certificação em Gestão de Projetos que realmente vale a pena! Aprendi Scrum, Kanban e metodologias ágeis de forma prática. Consegui uma promoção e agora lidero times de forma muito mais eficiente. Recomendo para todos os gestores!",
    image: "/images/digital-learning.png"
  },
  {
    id: "7",
    name: "Amanda Santos",
    role: "Designer UX/UI",
    company: "Design Studio",
    course: "Design Gráfico",
    rating: 5,
    text: "Adorei o curso de Design Gráfico! Aprendi desde os fundamentos até técnicas avançadas com Figma. Meu portfólio melhorou muito e consegui aumentar meus preços de freelancer em 200%. Muito obrigada pela qualidade do ensino!",
    image: "/images/hero-students.png"
  },
  {
    id: "8",
    name: "Lucas Ferreira",
    role: "Contador",
    company: "Contabilidade Moderna",
    course: "Contabilidade Financeira",
    rating: 5,
    text: "Como contador, este curso me atualizou nas melhores práticas de contabilidade e análise financeira. Meus clientes ficaram impressionados com as novas estratégias que implementei. Excelente investimento profissional!",
    image: "/images/partnership-success.png"
  }
];
