export const bgColors: { [key: string]: string } = {
  about: "#4E74A6",
  web: "#B6DBF2",
  games: "#567317",
};

export const defaultContent = {
  web: {
    howLong: {
      name: "How Long",
      image: "src/assets/how-long.png",
      description: "Application to calculate the time difference between dates",
      url: "https://marciomed07.github.io/how-long/",
      source: "https://github.com/MarcioMed07/how-long",
      tech: ["Javascript", "Node", "NPM", "React"],
    },
    friendDebt: {
      name: "Friend debt",
      image: "src/assets/friend-debt.png",
      description:
        "Application that keeps track of how much money you have lent or borrowed from your friends",
      url: "https://marciomed07.github.io/friend-debt/",
      source: "https://github.com/MarcioMed07/friend-debt",
      tech: ["Typescript", "Node", "NPM", "React", "Ant Design"],
    },
    portfolio: {
      name: "Portfolio",
      image: "src/assets/portfolio.png",
      description: "This portfolio 😊",
      tech: ["Typescript", "Bun", "Vite", "React", "Material UI"],
    },
  },
  games: {
    gmg: {
      name: "GMG",
      image: "src/assets/gmg.png",
      url: "https://marciomed07.itch.io/gmg",
      source: "https://github.com/MarcioMed07/GMG",
      description: "Demonstration of maze generation algorithms",
      tech: ["Godot", "Gdscript"],
    },
    canYouMoses: {
      name: "Can you, Moses ?",
      image: "src/assets/you_cant.png",
      url: "https://marciomed07.itch.io/can-you-moses",
      description: "Registration for Low Effort Game Jam 1",
      source: "",
      tech: ["Godot", "Gdscript"],
    },
  },
};

export const ptBRContent = {
  web: {
    howLong: {
      description: "Aplicação para calcular a diferença de tempo entre datas",
    },
    friendDebt: {
      description:
        "Aplicação que mapeia quanto de dinheiro você emprestou ou pediu emprestado de seus amigos",
    },
    portfolio: {
      description: "Este Portfolio 😊",
    },
  },
  games: {
    gmg: {
      description: "Demonstração de algorítimos de geração de labirintos",
    },
    canYouMoses: {
      description: "Inscrição para Low Effort Game Jam 1",
    },
  },
};

export const defaultText = {
  web: "Web",
  games: "Games",
  about: "About",
  about_paragraph: "Hello",
  visit: "Visit",
  source: "Source Code",
  projects: "You can check out some of my projects down bellow:",
};

export const ptBRText = {
  games: "Jogos",
  about: "Sobre",
  about_paragraph: "Olá",
  visit: "Visite",
  source: "Código Fonte",
  projects: "Abaixo você pode conferir alguns dos meus projetos:",
};

export const defaultAbout = (
  <>
    <section>
      <h1>About Me</h1>
      <p>
        Hello! I'm Márcio Monteiro de Medeiros, a recent Computer Science
        graduate based in Nova Iguaçu, RJ. I've just wrapped up my academic
        journey at the Universidade Federal Rural do Rio de Janeiro and am now
        eagerly seeking new opportunities in the dynamic field of web
        development.
      </p>
    </section>

    <section>
      <h2>Education</h2>
      <ul>
        <li>
          <strong>Degree:</strong> Bachelor of Computer Science
        </li>
        <li>
          <strong>Completion:</strong> August 2023
        </li>
        <li>
          <strong>Institution:</strong> Universidade Federal Rural do Rio de
          Janeiro, Nova Iguaçu, RJ.
        </li>
      </ul>
    </section>

    <section>
      <h2>Skills</h2>
      <p>
        Equipped with a robust skill set, I specialize in crafting seamless and
        innovative web solutions. My technical toolkit includes:
      </p>
      <ul>
        <li>
          <strong>Languages:</strong> Typescript, HTML, CSS
        </li>
        <li>
          <strong>Frameworks:</strong> Node.js, React, Next.js, Mui, Angular
        </li>
        <li>
          <strong>Package Managers:</strong> Npm, Yarn
        </li>
        <li>
          <strong>Databases:</strong> GraphQL, Sequelize, SQL
        </li>
        <li>
          <strong>Version Control:</strong> Git
        </li>
        <li>
          <strong>Operating Systems:</strong> GNU/Linux, Windows
        </li>
      </ul>
    </section>
  </>
);

export const ptBRAbout = (
  <>
    <section>
      <h1>Sobre Mim</h1>
      <p>
        Olá! Eu sou Márcio Monteiro de Medeiros, um recém-formado em Ciência da
        Computação com base em Nova Iguaçu, RJ. Acabei de concluir minha jornada
        acadêmica na Universidade Federal Rural do Rio de Janeiro e estou
        ansioso para novas oportunidades no dinâmico campo do desenvolvimento
        web.
      </p>
    </section>

    <section>
      <h2>Educação</h2>
      <ul>
        <li>
          <strong>Curso:</strong> Bacharelado em Ciência da Computação
        </li>
        <li>
          <strong>Conclusão:</strong> Agosto de 2023
        </li>
        <li>
          <strong>Instituição:</strong> Universidade Federal Rural do Rio de
          Janeiro, Nova Iguaçu, RJ.
        </li>
      </ul>
    </section>

    <section>
      <h2>Habilidades</h2>
      <p>
        Com um conjunto sólido de habilidades, eu me especializo em criar
        soluções web inovadoras e perfeitas. Meu conjunto técnico inclui:
      </p>
      <ul>
        <li>
          <strong>Linguagens:</strong> Typescript, HTML, CSS
        </li>
        <li>
          <strong>Frameworks:</strong> Node.js, React, Next.js, Mui, Angular
        </li>
        <li>
          <strong>Gerenciadores de Pacotes:</strong> Npm, Yarn
        </li>
        <li>
          <strong>Bancos de Dados:</strong> GraphQL, Sequelize, SQL
        </li>
        <li>
          <strong>Controle de Versão:</strong> Git
        </li>
        <li>
          <strong>Sistemas Operacionais:</strong> GNU/Linux, Windows
        </li>
      </ul>
    </section>
  </>
);
