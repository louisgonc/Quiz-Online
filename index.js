const perguntasNaruto = [
    {
      pergunta: "Qual é o nome completo do protagonista de Naruto?",
      respostas: [
        "Naruto Uzumaki",
        "Naruto Namikaze",
        "Naruto Hatake",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o primeiro mentor de Naruto?",
      respostas: [
        "Kakashi Hatake",
        "Jiraiya",
        "Iruka Umino",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do clã de Sasuke?",
      respostas: [
        "Clã Senju",
        "Clã Uchiha",
        "Clã Hyuga",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o sensei do Time 7?",
      respostas: [
        "Kakashi Hatake",
        "Jiraiya",
        "Orochimaru",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do irmão mais velho de Sasuke?",
      respostas: [
        "Itachi Uchiha",
        "Madara Uchiha",
        "Shisui Uchiha",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do pai de Naruto?",
      respostas: [
        "Minato Namikaze",
        "Tobirama Senju",
        "Hashirama Senju",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do jutsu de transformação de Naruto?",
      respostas: [
        "Rasengan",
        "Chidori",
        "Kage Bunshin no Jutsu",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é conhecido como 'O Sábio dos Seis Caminhos'?",
      respostas: [
        "Madara Uchiha",
        "Hagoromo Otsutsuki",
        "Tobirama Senju",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a habilidade especial de Kakashi Hatake?",
      respostas: [
        "Sharingan",
        "Byakugan",
        "Rinnegan",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o criador da Aldeia da Folha?",
      respostas: [
        "Tobirama Senju",
        "Madara Uchiha",
        "Hashirama Senju",
      ],
      correta: 2
    },
  ];
  //querySelector serve pra buscar um arquivo html
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntasNaruto.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  //fazendo a repeticao pra o que tem dentro(laco de repeticao)
  for(const item of perguntasNaruto){
    const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    //clona a dl e dt que estao no HTML fazendo a resposta da questao em alternativas, para gerar mais opcoes de respostas abaixo
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntasNaruto.indexOf(item))
    //fazer um selector para que a reposta sempre devolva um valor inves de 0
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  //adicionar um evento com funcao arrow pra somar as respostas
  dt.querySelector('input').onchange = (event) =>{
    const estaCorreta = event.target.value == item.correta
    
    //deleta o item pra verificar se esta correta caso mude de resposta ele deleta a antiga
    corretas.delete(item)
    //esse if soma as questoes acertadas
    if(estaCorreta){
      corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
  
  
  //faz aparecer as tres opcoes presentes no dl
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  //remove a opcao Resposta A do HTML
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
  