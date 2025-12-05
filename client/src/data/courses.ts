export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
  duration: string;
  students: number;
  rating: number;
  price: number;
  image: string;
  instructor: string;
  modules: number;
  badge?: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Administração de Empresas",
    description: "Aprenda os fundamentos da administração moderna e gestão empresarial com metodologia prática.",
    category: "Gestão",
    level: "Iniciante",
    duration: "6 meses",
    students: 2543,
    rating: 4.8,
    price: 299,
    image: "/images/hero-students.png",
    instructor: "Prof. Carlos Silva",
    modules: 24,
    badge: "Mais Popular"
  },
  {
    id: "2",
    title: "Marketing Digital",
    description: "Domine as estratégias de marketing digital, redes sociais e publicidade online.",
    category: "Marketing",
    level: "Intermediário",
    duration: "4 meses",
    students: 1892,
    rating: 4.7,
    price: 249,
    image: "/images/digital-learning.png",
    instructor: "Profa. Ana Costa",
    modules: 18,
    badge: "Destaque"
  },
  {
    id: "3",
    title: "Desenvolvimento Web",
    description: "Crie aplicações web modernas com React, Node.js e tecnologias atuais.",
    category: "Tecnologia",
    level: "Avançado",
    duration: "8 meses",
    students: 3124,
    rating: 4.9,
    price: 399,
    image: "/images/partnership-success.png",
    instructor: "Dev. João Santos",
    modules: 32,
    badge: "Mais Vendido"
  },
  {
    id: "4",
    title: "Recursos Humanos",
    description: "Especialização em gestão de pessoas, recrutamento e desenvolvimento de talentos.",
    category: "Gestão",
    level: "Intermediário",
    duration: "5 meses",
    students: 1456,
    rating: 4.6,
    price: 279,
    image: "/images/hero-students.png",
    instructor: "Profa. Mariana Lima",
    modules: 20,
  },
  {
    id: "5",
    title: "Contabilidade Financeira",
    description: "Aprenda contabilidade, análise financeira e gestão de custos empresariais.",
    category: "Finanças",
    level: "Iniciante",
    duration: "6 meses",
    students: 987,
    rating: 4.5,
    price: 289,
    image: "/images/digital-learning.png",
    instructor: "Prof. Roberto Alves",
    modules: 22,
  },
  {
    id: "6",
    title: "E-commerce e Vendas Online",
    description: "Crie e gerencie sua loja virtual com sucesso. Estratégias de conversão e vendas.",
    category: "Marketing",
    level: "Iniciante",
    duration: "3 meses",
    students: 2156,
    rating: 4.7,
    price: 199,
    image: "/images/partnership-success.png",
    instructor: "Profa. Beatriz Oliveira",
    modules: 15,
  },
  {
    id: "7",
    title: "Segurança da Informação",
    description: "Proteja dados e sistemas. Certificações em segurança cibernética e compliance.",
    category: "Tecnologia",
    level: "Avançado",
    duration: "7 meses",
    students: 1234,
    rating: 4.8,
    price: 349,
    image: "/images/hero-students.png",
    instructor: "Eng. Lucas Ferreira",
    modules: 28,
  },
  {
    id: "8",
    title: "Empreendedorismo Digital",
    description: "Inicie seu negócio digital do zero. Plano de negócios, validação e crescimento.",
    category: "Empreendedorismo",
    level: "Intermediário",
    duration: "4 meses",
    students: 1678,
    rating: 4.6,
    price: 229,
    image: "/images/digital-learning.png",
    instructor: "Prof. Felipe Martins",
    modules: 16,
  },
  {
    id: "9",
    title: "Análise de Dados",
    description: "Transforme dados em insights. Python, SQL e ferramentas de BI.",
    category: "Tecnologia",
    level: "Avançado",
    duration: "6 meses",
    students: 2341,
    rating: 4.9,
    price: 379,
    image: "/images/partnership-success.png",
    instructor: "Dr. Rafael Costa",
    modules: 26,
    badge: "Tendência"
  },
  {
    id: "10",
    title: "Gestão de Projetos",
    description: "Metodologias ágeis, Scrum, Kanban e gestão eficiente de projetos.",
    category: "Gestão",
    level: "Intermediário",
    duration: "5 meses",
    students: 1823,
    rating: 4.7,
    price: 269,
    image: "/images/hero-students.png",
    instructor: "Profa. Isabela Rocha",
    modules: 19,
  },
  {
    id: "11",
    title: "Design Gráfico",
    description: "Crie designs profissionais com Figma, Adobe XD e princípios de UX/UI.",
    category: "Design",
    level: "Iniciante",
    duration: "4 meses",
    students: 1567,
    rating: 4.6,
    price: 239,
    image: "/images/digital-learning.png",
    instructor: "Designer Thiago Melo",
    modules: 17,
  },
  {
    id: "12",
    title: "Produção de Conteúdo",
    description: "Produção de vídeos, podcasts e conteúdo viral para redes sociais.",
    category: "Marketing",
    level: "Iniciante",
    duration: "3 meses",
    students: 2089,
    rating: 4.5,
    price: 189,
    image: "/images/partnership-success.png",
    instructor: "Profa. Camila Souza",
    modules: 14,
  },
];

export const categories = [
  "Todos",
  "Gestão",
  "Marketing",
  "Tecnologia",
  "Finanças",
  "Empreendedorismo",
  "Design"
];

export const levels = [
  "Todos",
  "Iniciante",
  "Intermediário",
  "Avançado"
];
