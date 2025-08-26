const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você acha que as tecnologias digitais devem ser integradas ao ensino em sala de aula?",
    alternativas: [
      {
        texto: "Sim, elas facilitam o aprendizado e motivam os alunos.",
        afirmacao: "Você valoriza a inovação no ensino e acredita no poder da tecnologia."
      },
      {
        texto: "Não, prefiro métodos tradicionais de ensino.",
        afirmacao: "Você acredita que métodos tradicionais são mais eficazes."
      }
    ]
  },
  {
    enunciado: "Qual deve ser o foco principal da educação no futuro?",
    alternativas: [
      {
        texto: "Desenvolvimento de habilidades socioemocionais.",
        afirmacao: "Você valoriza a formação integral do aluno, além do conteúdo."
      },
      {
        texto: "Ensino de conteúdos técnicos e científicos.",
        afirmacao: "Você acredita que conhecimento técnico é essencial para o futuro."
      }
    ]
  },
  {
    enunciado: "Você acredita que a educação deve ser personalizada para cada aluno?",
    alternativas: [
      {
        texto: "Sim, cada pessoa aprende de uma forma diferente.",
        afirmacao: "Você defende uma educação inclusiva e adaptada."
      },
      {
        texto: "Não, todos devem seguir um mesmo padrão para garantir igualdade.",
        afirmacao: "Você prefere uma educação padronizada para garantir justiça."
      }
    ]
  }
];

let perguntaAtual = 0;

function mostrarPergunta() {
  const pergunta = perguntas[perguntaAtual];
  caixaPerguntas.textContent = pergunta.enunciado;
  caixaAlternativas.innerHTML = "";
  textoResultado.textContent = "";

  pergunta.alternativas.forEach((alternativa, index) => {
    const btn = document.createElement("button");
    btn.textContent = alternativa.texto;
    btn.addEventListener("click", () => {
      textoResultado.textContent = alternativa.afirmacao;
      // Avança para a próxima pergunta após 2 segundos, se houver
      if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        setTimeout(mostrarPergunta, 2000);
      } else {
        // Se for a última pergunta, mostra mensagem final
        setTimeout(() => {
          caixaPerguntas.textContent = "Obrigado por participar!";
          caixaAlternativas.innerHTML = "";
          textoResultado.textContent = "";
        }, 2000);
      }
    });
    caixaAlternativas.appendChild(btn);
  });
}

mostrarPergunta();
