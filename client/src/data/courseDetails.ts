export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  duration: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "texto" | "exercício" | "quiz";
}

export interface CourseDetail {
  id: string;
  title: string;
  fullDescription: string;
  objectives: string[];
  targetAudience: string;
  requirements: string[];
  modules: Module[];
  syllabus: string;
  methodology: string;
  assessment: string;
  certification: string;
}

export const courseDetails: Record<string, CourseDetail> = {
  "1": {
    id: "1",
    title: "Administração de Empresas",
    fullDescription: "Um curso completo sobre administração empresarial que abrange desde os fundamentos teóricos até aplicações práticas em empresas reais. Você aprenderá as principais funções administrativas, gestão de recursos, planejamento estratégico e liderança eficaz.",
    objectives: [
      "Compreender os fundamentos da administração moderna",
      "Dominar as principais funções administrativas",
      "Aplicar técnicas de planejamento estratégico",
      "Desenvolver habilidades de liderança e gestão de pessoas",
      "Analisar e resolver problemas empresariais complexos",
      "Implementar sistemas de controle e avaliação de desempenho"
    ],
    targetAudience: "Profissionais que desejam se especializar em administração, empreendedores, gestores e pessoas interessadas em carreira executiva.",
    requirements: [
      "Ensino médio completo",
      "Noções básicas de informática",
      "Disponibilidade de 10-15 horas semanais"
    ],
    modules: [
      {
        id: "m1",
        title: "Fundamentos da Administração",
        description: "Introdução aos conceitos básicos de administração e sua evolução histórica.",
        duration: "2 semanas",
        lessons: [
          { id: "l1", title: "O que é Administração?", duration: "45 min", type: "video" },
          { id: "l2", title: "Evolução do Pensamento Administrativo", duration: "60 min", type: "video" },
          { id: "l3", title: "Funções Administrativas Básicas", duration: "50 min", type: "video" },
          { id: "l4", title: "Quiz - Fundamentos", duration: "30 min", type: "quiz" }
        ]
      },
      {
        id: "m2",
        title: "Planejamento Estratégico",
        description: "Aprenda a desenvolver planos estratégicos eficazes para sua organização.",
        duration: "3 semanas",
        lessons: [
          { id: "l5", title: "Análise SWOT", duration: "55 min", type: "video" },
          { id: "l6", title: "Definição de Objetivos e Metas", duration: "50 min", type: "video" },
          { id: "l7", title: "Exercício Prático - Plano Estratégico", duration: "90 min", type: "exercício" },
          { id: "l8", title: "Estudo de Caso", duration: "45 min", type: "texto" },
          { id: "l9", title: "Quiz - Planejamento", duration: "30 min", type: "quiz" }
        ]
      },
      {
        id: "m3",
        title: "Gestão de Recursos Humanos",
        description: "Técnicas modernas de recrutamento, seleção e desenvolvimento de pessoas.",
        duration: "3 semanas",
        lessons: [
          { id: "l10", title: "Recrutamento e Seleção", duration: "60 min", type: "video" },
          { id: "l11", title: "Treinamento e Desenvolvimento", duration: "55 min", type: "video" },
          { id: "l12", title: "Avaliação de Desempenho", duration: "50 min", type: "video" },
          { id: "l13", title: "Exercício - Processo de Seleção", duration: "80 min", type: "exercício" },
          { id: "l14", title: "Quiz - Gestão de RH", duration: "30 min", type: "quiz" }
        ]
      },
      {
        id: "m4",
        title: "Liderança e Motivação",
        description: "Desenvolva suas habilidades de liderança e aprenda a motivar equipes.",
        duration: "2 semanas",
        lessons: [
          { id: "l15", title: "Estilos de Liderança", duration: "60 min", type: "video" },
          { id: "l16", title: "Teorias de Motivação", duration: "55 min", type: "video" },
          { id: "l17", title: "Comunicação Eficaz", duration: "50 min", type: "video" },
          { id: "l18", title: "Exercício - Liderança em Ação", duration: "75 min", type: "exercício" }
        ]
      },
      {
        id: "m5",
        title: "Controle e Avaliação",
        description: "Implemente sistemas de controle e avaliação de desempenho.",
        duration: "2 semanas",
        lessons: [
          { id: "l19", title: "Indicadores de Desempenho", duration: "55 min", type: "video" },
          { id: "l20", title: "Balanced Scorecard", duration: "60 min", type: "video" },
          { id: "l21", title: "Exercício Prático - KPIs", duration: "85 min", type: "exercício" },
          { id: "l22", title: "Quiz Final", duration: "40 min", type: "quiz" }
        ]
      },
      {
        id: "m6",
        title: "Projeto Final",
        description: "Aplique todos os conhecimentos em um projeto integrador.",
        duration: "2 semanas",
        lessons: [
          { id: "l23", title: "Briefing do Projeto", duration: "30 min", type: "texto" },
          { id: "l24", title: "Desenvolvimento do Projeto", duration: "120 min", type: "exercício" }
        ]
      }
    ],
    syllabus: "O curso abrange os principais tópicos da administração moderna, incluindo teorias administrativas, funções gerenciais, planejamento estratégico, gestão de recursos humanos, liderança, controle e avaliação de desempenho. Cada módulo combina aulas teóricas com exercícios práticos e estudos de caso.",
    methodology: "Metodologia ativa com aulas em vídeo, textos complementares, exercícios práticos, estudos de caso reais e projetos integradores. Todos os módulos incluem quizzes para avaliação contínua.",
    assessment: "Avaliação contínua através de quizzes ao final de cada módulo (40%), exercícios práticos (30%) e projeto final integrador (30%).",
    certification: "Certificado de conclusão reconhecido pelo MEC com carga horária de 180 horas."
  },
  "2": {
    id: "2",
    title: "Marketing Digital",
    fullDescription: "Domine as estratégias de marketing digital mais eficazes. Aprenda a criar campanhas de impacto, gerenciar redes sociais, otimizar SEO, e converter visitantes em clientes.",
    objectives: [
      "Entender o ecossistema do marketing digital",
      "Criar estratégias de conteúdo eficazes",
      "Dominar Google Ads e Facebook Ads",
      "Otimizar para SEO e SEM",
      "Analisar métricas e ROI",
      "Construir presença forte nas redes sociais"
    ],
    targetAudience: "Profissionais de marketing, empreendedores digitais, agências e qualquer pessoa interessada em marketing online.",
    requirements: [
      "Conhecimento básico de internet",
      "Conta em redes sociais",
      "Disponibilidade de 8-12 horas semanais"
    ],
    modules: [
      {
        id: "m1",
        title: "Fundamentos do Marketing Digital",
        description: "Introdução ao marketing digital e seu impacto nos negócios.",
        duration: "2 semanas",
        lessons: [
          { id: "l1", title: "O que é Marketing Digital?", duration: "40 min", type: "video" },
          { id: "l2", title: "Canais Digitais", duration: "50 min", type: "video" },
          { id: "l3", title: "Funil de Vendas Digital", duration: "45 min", type: "video" },
          { id: "l4", title: "Quiz - Fundamentos", duration: "25 min", type: "quiz" }
        ]
      },
      {
        id: "m2",
        title: "Estratégia de Conteúdo",
        description: "Crie conteúdo que atrai e converte seu público-alvo.",
        duration: "3 semanas",
        lessons: [
          { id: "l5", title: "Persona e Público-Alvo", duration: "55 min", type: "video" },
          { id: "l6", title: "Planejamento de Conteúdo", duration: "60 min", type: "video" },
          { id: "l7", title: "Copywriting para Conversão", duration: "50 min", type: "video" },
          { id: "l8", title: "Exercício - Criar Persona", duration: "75 min", type: "exercício" }
        ]
      },
      {
        id: "m3",
        title: "Google Ads e SEM",
        description: "Domine publicidade por busca e aumente suas vendas.",
        duration: "3 semanas",
        lessons: [
          { id: "l9", title: "Introdução ao Google Ads", duration: "60 min", type: "video" },
          { id: "l10", title: "Criação de Campanhas", duration: "65 min", type: "video" },
          { id: "l11", title: "Otimização de Anúncios", duration: "55 min", type: "video" },
          { id: "l12", title: "Exercício Prático - Campanha", duration: "90 min", type: "exercício" }
        ]
      },
      {
        id: "m4",
        title: "Facebook e Instagram Ads",
        description: "Publicidade em redes sociais com alto ROI.",
        duration: "3 semanas",
        lessons: [
          { id: "l13", title: "Plataforma Meta Ads", duration: "60 min", type: "video" },
          { id: "l14", title: "Segmentação de Público", duration: "55 min", type: "video" },
          { id: "l15", title: "Criação de Anúncios Visuais", duration: "50 min", type: "video" },
          { id: "l16", title: "Exercício - Campanha Social", duration: "85 min", type: "exercício" }
        ]
      },
      {
        id: "m5",
        title: "SEO e Otimização",
        description: "Apareça no topo do Google organicamente.",
        duration: "2 semanas",
        lessons: [
          { id: "l17", title: "Fundamentos de SEO", duration: "55 min", type: "video" },
          { id: "l18", title: "Pesquisa de Palavras-Chave", duration: "50 min", type: "video" },
          { id: "l19", title: "Otimização On-Page", duration: "60 min", type: "video" },
          { id: "l20", title: "Link Building", duration: "50 min", type: "video" }
        ]
      },
      {
        id: "m6",
        title: "Análise e Métricas",
        description: "Meça seus resultados e otimize campanhas.",
        duration: "2 semanas",
        lessons: [
          { id: "l21", title: "Google Analytics", duration: "65 min", type: "video" },
          { id: "l22", title: "KPIs de Marketing", duration: "55 min", type: "video" },
          { id: "l23", title: "Cálculo de ROI", duration: "45 min", type: "video" },
          { id: "l24", title: "Quiz Final", duration: "35 min", type: "quiz" }
        ]
      }
    ],
    syllabus: "Curso completo de marketing digital cobrindo estratégia, conteúdo, publicidade paga (Google Ads, Facebook Ads), SEO, análise de dados e métricas. Inclui projetos práticos e casos de sucesso.",
    methodology: "Aulas em vídeo, exercícios práticos com ferramentas reais, estudos de caso, projetos integradores e mentoria.",
    assessment: "Quizzes (35%), exercícios práticos (35%) e projeto final (30%).",
    certification: "Certificado de conclusão reconhecido pelo MEC com carga horária de 120 horas."
  },
  "3": {
    id: "3",
    title: "Desenvolvimento Web",
    fullDescription: "Aprenda a criar aplicações web modernas e escaláveis. Do frontend com React até backend com Node.js, você dominará as tecnologias mais procuradas do mercado.",
    objectives: [
      "Dominar JavaScript e TypeScript",
      "Criar interfaces com React",
      "Desenvolver backends com Node.js",
      "Trabalhar com bancos de dados",
      "Implementar autenticação e segurança",
      "Deploy e DevOps básico"
    ],
    targetAudience: "Programadores iniciantes e intermediários, pessoas em transição de carreira, desenvolvedores que querem atualizar suas habilidades.",
    requirements: [
      "Conhecimento básico de programação",
      "Familiaridade com HTML e CSS",
      "Computador com 8GB RAM mínimo",
      "Disponibilidade de 15-20 horas semanais"
    ],
    modules: [
      {
        id: "m1",
        title: "JavaScript Avançado",
        description: "Domine JavaScript moderno e seus recursos avançados.",
        duration: "3 semanas",
        lessons: [
          { id: "l1", title: "ES6+ Features", duration: "60 min", type: "video" },
          { id: "l2", title: "Async/Await e Promises", duration: "55 min", type: "video" },
          { id: "l3", title: "Programação Funcional", duration: "65 min", type: "video" },
          { id: "l4", title: "Exercício - Projeto JS", duration: "120 min", type: "exercício" }
        ]
      },
      {
        id: "m2",
        title: "React Fundamentals",
        description: "Crie interfaces incríveis com React.",
        duration: "4 semanas",
        lessons: [
          { id: "l5", title: "Componentes e JSX", duration: "60 min", type: "video" },
          { id: "l6", title: "State e Props", duration: "55 min", type: "video" },
          { id: "l7", title: "Hooks", duration: "70 min", type: "video" },
          { id: "l8", title: "Roteamento com React Router", duration: "60 min", type: "video" },
          { id: "l9", title: "Exercício - App React", duration: "150 min", type: "exercício" }
        ]
      },
      {
        id: "m3",
        title: "Node.js e Express",
        description: "Desenvolva backends robustos com Node.js.",
        duration: "4 semanas",
        lessons: [
          { id: "l10", title: "Fundamentos de Node.js", duration: "55 min", type: "video" },
          { id: "l11", title: "Express Framework", duration: "65 min", type: "video" },
          { id: "l12", title: "RESTful APIs", duration: "60 min", type: "video" },
          { id: "l13", title: "Middleware e Autenticação", duration: "70 min", type: "video" },
          { id: "l14", title: "Exercício - API REST", duration: "150 min", type: "exercício" }
        ]
      },
      {
        id: "m4",
        title: "Bancos de Dados",
        description: "Trabalhe com SQL e NoSQL.",
        duration: "3 semanas",
        lessons: [
          { id: "l15", title: "SQL e PostgreSQL", duration: "70 min", type: "video" },
          { id: "l16", title: "MongoDB e NoSQL", duration: "65 min", type: "video" },
          { id: "l17", title: "ORMs e Query Builders", duration: "60 min", type: "video" },
          { id: "l18", title: "Exercício - Banco de Dados", duration: "120 min", type: "exercício" }
        ]
      },
      {
        id: "m5",
        title: "Segurança e Autenticação",
        description: "Implemente segurança em suas aplicações.",
        duration: "2 semanas",
        lessons: [
          { id: "l19", title: "JWT e OAuth", duration: "60 min", type: "video" },
          { id: "l20", title: "Validação e Sanitização", duration: "55 min", type: "video" },
          { id: "l21", title: "HTTPS e SSL", duration: "50 min", type: "video" },
          { id: "l22", title: "Exercício - Autenticação", duration: "100 min", type: "exercício" }
        ]
      },
      {
        id: "m6",
        title: "Deploy e DevOps",
        description: "Coloque sua aplicação em produção.",
        duration: "2 semanas",
        lessons: [
          { id: "l23", title: "Git e GitHub", duration: "50 min", type: "video" },
          { id: "l24", title: "Docker Basics", duration: "60 min", type: "video" },
          { id: "l25", title: "Deploy em Produção", duration: "65 min", type: "video" },
          { id: "l26", title: "Projeto Final", duration: "200 min", type: "exercício" }
        ]
      }
    ],
    syllabus: "Curso completo de desenvolvimento web cobrindo frontend com React, backend com Node.js, bancos de dados, segurança, autenticação e deploy. Inclui múltiplos projetos práticos.",
    methodology: "Aulas em vídeo, exercícios hands-on, projetos reais, code reviews e mentoria individual.",
    assessment: "Exercícios práticos (40%), projetos (40%) e projeto final integrador (20%).",
    certification: "Certificado de conclusão reconhecido pelo MEC com carga horária de 240 horas."
  }
};
