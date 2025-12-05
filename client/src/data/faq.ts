export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  // Sobre a LA Educação
  {
    id: "1",
    category: "Sobre a LA Educação",
    question: "O que é a LA Educação?",
    answer: "A LA Educação é uma instituição de educação à distância que oferece cursos reconhecidos pelo MEC. Somos líderes em educação digital, com mais de 15.000 alunos satisfeitos e uma taxa de aprovação de 98%. Nossos cursos combinam conteúdo teórico de qualidade com aplicações práticas do mercado."
  },
  {
    id: "2",
    category: "Sobre a LA Educação",
    question: "Há quanto tempo a LA Educação existe?",
    answer: "A LA Educação foi fundada em 2015 e desde então vem transformando vidas através da educação de qualidade. Temos mais de 8 anos de experiência no mercado de educação à distância e somos reconhecidos como uma das melhores instituições do Brasil."
  },
  {
    id: "3",
    category: "Sobre a LA Educação",
    question: "Quais são os diferenciais da LA Educação?",
    answer: "Nossos principais diferenciais são: (1) Cursos reconhecidos pelo MEC com certificado válido; (2) Instrutores experientes e certificados; (3) Plataforma moderna e intuitiva; (4) Suporte ao aluno 24/7; (5) Comunidade ativa de alunos; (6) Preços acessíveis; (7) Flexibilidade de horários; (8) Garantia de satisfação ou devolução do dinheiro."
  },

  // Cursos e Inscrição
  {
    id: "4",
    category: "Cursos e Inscrição",
    question: "Como me inscrever em um curso?",
    answer: "É muito simples! Acesse a página de Cursos, escolha o curso desejado, clique em 'Inscrever-se Agora', preencha seus dados e escolha a forma de pagamento. Você receberá um email de confirmação e poderá acessar o curso imediatamente após a confirmação do pagamento."
  },
  {
    id: "5",
    category: "Cursos e Inscrição",
    question: "Quais são os requisitos para fazer um curso?",
    answer: "Os requisitos variam por curso, mas em geral você precisa de: (1) Ensino médio completo (para a maioria dos cursos); (2) Acesso à internet; (3) Um computador ou tablet; (4) Disponibilidade de tempo para estudar. Alguns cursos podem ter requisitos específicos que estão descritos na página do curso."
  },
  {
    id: "6",
    category: "Cursos e Inscrição",
    question: "Posso fazer mais de um curso ao mesmo tempo?",
    answer: "Sim! Você pode se inscrever em quantos cursos desejar. Recomendamos começar com um curso por vez para melhor aproveitamento, mas a plataforma permite que você acesse todos os seus cursos a qualquer momento. Cada curso tem seu próprio cronograma e você pode estudar no seu próprio ritmo."
  },
  {
    id: "7",
    category: "Cursos e Inscrição",
    question: "Qual é a duração dos cursos?",
    answer: "A duração varia de acordo com o curso. Temos cursos de curta duração (4 semanas) até cursos mais completos (6 meses ou mais). Você pode ver a duração específica na página de cada curso. Além disso, você tem acesso vitalício ao conteúdo, então pode estudar no seu próprio ritmo sem pressa."
  },

  // Pagamento e Reembolso
  {
    id: "8",
    category: "Pagamento e Reembolso",
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos as seguintes formas de pagamento: (1) Cartão de crédito (Visa, Mastercard, Elo); (2) Débito em conta; (3) Boleto bancário; (4) PIX; (5) Parcelamento em até 12x sem juros. Todas as transações são seguras e criptografadas."
  },
  {
    id: "9",
    category: "Pagamento e Reembolso",
    question: "Qual é a política de reembolso?",
    answer: "Oferecemos uma garantia de 7 dias. Se você não ficar satisfeito com o curso nos primeiros 7 dias, devolvemos 100% do seu dinheiro, sem perguntas. Basta entrar em contato com nosso suporte. Após 7 dias, o reembolso não é mais possível, mas você terá acesso vitalício ao conteúdo."
  },
  {
    id: "10",
    category: "Pagamento e Reembolso",
    question: "Há desconto para pagamento à vista?",
    answer: "Sim! Oferecemos descontos especiais para pagamento à vista. Você também pode aproveitar nossas promoções sazonais e cupons de desconto. Fique atento ao nosso newsletter para não perder as melhores ofertas!"
  },

  // Certificado
  {
    id: "11",
    category: "Certificado",
    question: "O certificado é reconhecido pelo MEC?",
    answer: "Sim! Todos os nossos certificados são reconhecidos pelo Ministério da Educação (MEC). Você receberá um certificado digital que pode ser utilizado para fins profissionais, acadêmicos e curriculares. O certificado é válido em todo o Brasil e no exterior."
  },
  {
    id: "12",
    category: "Certificado",
    question: "Como recebo o certificado?",
    answer: "Após completar todos os módulos do curso e atingir a nota mínima de 70%, você receberá automaticamente um email com seu certificado em formato digital (PDF). Você também pode baixá-lo a qualquer momento na sua área de aluno. Não há custos adicionais para o certificado."
  },
  {
    id: "13",
    category: "Certificado",
    question: "Quanto tempo leva para receber o certificado?",
    answer: "O certificado é gerado automaticamente assim que você conclui o curso e atinge a nota mínima. Você receberá um email de confirmação em até 24 horas. Se precisar de uma versão impressa, você pode solicitar através do nosso suporte."
  },

  // Acesso e Plataforma
  {
    id: "14",
    category: "Acesso e Plataforma",
    question: "Como acesso meu curso?",
    answer: "Após se inscrever e confirmar o pagamento, você receberá um email com suas credenciais de acesso. Acesse a plataforma com seu email e senha, clique no curso desejado e comece a estudar. Você pode acessar de qualquer dispositivo (computador, tablet ou smartphone) a qualquer hora do dia."
  },
  {
    id: "15",
    category: "Acesso e Plataforma",
    question: "Preciso estar conectado à internet o tempo todo?",
    answer: "Sim, você precisa de conexão com a internet para acessar a plataforma e assistir às aulas. No entanto, você pode baixar alguns materiais complementares para estudar offline. Recomendamos uma conexão de pelo menos 5 Mbps para uma melhor experiência."
  },
  {
    id: "16",
    category: "Acesso e Plataforma",
    question: "Posso acessar o curso em dispositivos móveis?",
    answer: "Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em smartphones e tablets. Você pode estudar no seu celular, tablet ou computador. A experiência é otimizada para todos os dispositivos."
  },
  {
    id: "17",
    category: "Acesso e Plataforma",
    question: "Tenho acesso vitalício ao curso?",
    answer: "Sim! Após se inscrever, você tem acesso vitalício a todo o conteúdo do curso. Isso significa que você pode assistir às aulas quantas vezes quiser, fazer download de materiais e revisar o conteúdo sempre que necessário. Seu acesso nunca expira."
  },

  // Suporte e Dúvidas
  {
    id: "18",
    category: "Suporte e Dúvidas",
    question: "Como faço para entrar em contato com o suporte?",
    answer: "Você pode entrar em contato conosco através de: (1) Email: suporte@laeducacao.com.br; (2) Chat ao vivo na plataforma (disponível 24/7); (3) Telefone: (11) 3000-0000; (4) Formulário de contato no site. Respondemos todas as mensagens em até 24 horas."
  },
  {
    id: "19",
    category: "Suporte e Dúvidas",
    question: "O suporte está disponível nos fins de semana?",
    answer: "Sim! Nosso suporte está disponível 24 horas por dia, 7 dias por semana. Você pode enviar suas dúvidas a qualquer momento e receberá uma resposta em breve. Para questões urgentes, recomendamos usar o chat ao vivo."
  },
  {
    id: "20",
    category: "Suporte e Dúvidas",
    question: "Posso fazer perguntas aos instrutores?",
    answer: "Sim! Cada curso possui um fórum de discussão onde você pode fazer perguntas aos instrutores e aos outros alunos. Os instrutores respondem as perguntas em até 48 horas. Você também pode enviar mensagens diretas para o instrutor através da plataforma."
  }
];

export const faqCategories = Array.from(new Set(faqItems.map(item => item.category)));
