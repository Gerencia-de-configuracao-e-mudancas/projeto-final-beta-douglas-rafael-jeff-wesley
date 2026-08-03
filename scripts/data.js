const movies = [
  {
    id: 1,
    title: "Interestelar",
    genre: "Ficção Científica",
    synopsis: "Uma jornada épica pelo espaço e pelo tempo.",
    poster: "../images/interestelar.png",
    description: "Em um futuro onde a Terra está se tornando inabitável, um grupo de astronautas atravessa um buraco de minhoca em busca de um novo planeta para a humanidade. Enquanto enfrenta desafios científicos e emocionais, a missão coloca à prova os limites do tempo, do espaço e dos laços familiares."
  },
  {
    id: 2,
    title: "As Branquelas",
    genre: "Comédia",
    synopsis: "Dois agentes do FBI se disfarçam de socialites para investigar um crime.",
    poster: "../images/branquelas.jpg",
    description: "Após uma missão dar errado, dois agentes do FBI assumem a identidade de duas irmãs milionárias para impedir um plano criminoso. Entre situações constrangedoras, festas luxuosas e muito humor, eles fazem de tudo para manter o disfarce sem levantar suspeitas."
  },
  {
    id: 3,
    title: "Titanic",
    genre: "Romance",
    synopsis: "Um romance épico a bordo do navio Titanic.",
    poster: "../images/titanic.jpg",
    description: "Durante a viagem inaugural do Titanic, Jack e Rose se apaixonam apesar das diferenças sociais que os separam. Enquanto vivem um romance intenso, precisam enfrentar uma tragédia que mudará suas vidas para sempre."
  },
  {
    id: 4,
    title: "Toy Story",
    genre: "Animação",
    synopsis: "Brinquedos ganham vida quando os humanos não estão por perto.",
    poster: "../images/toystory.jpg",
    description: "Woody, Buzz Lightyear e outros brinquedos vivem aventuras secretas sempre que os humanos não estão olhando. Quando acabam longe de casa, eles precisam superar suas diferenças e trabalhar juntos para reencontrar seu dono, Andy."
  },
  {
    id: 5,
    title: "Drácula de Bram Stoker",
    genre: "Gótico",
    synopsis: "A clássica história do vampiro Drácula.",
    poster: "../images/dracula.jpg",
    description: "O misterioso conde Drácula deixa seu castelo na Transilvânia e segue para Londres em busca de um antigo amor. Sua presença desperta uma série de acontecimentos sombrios, envolvendo paixão, terror e a luta contra uma das criaturas mais temidas da história."
  },
  {
    id: 6,
    title: "Missão Impossível",
    genre: "Ação",
    synopsis: "Um agente secreto enfrenta missões perigosas ao redor do mundo.",
    poster: "../images/impossible.jpg",
    description: "Após ser acusado injustamente de traição, Ethan Hunt precisa descobrir quem está por trás da conspiração para limpar seu nome. Utilizando inteligência, tecnologia e muita ação, ele encara missões extremamente perigosas para impedir grandes ameaças."
  },
  {
    id: 7,
    title: "O Senhor dos Anéis",
    genre: "Fantasia",
    synopsis: "Uma jornada épica em um mundo de fantasia.",
    poster: "../images/senhordosaneis.jpg",
    description: "O jovem hobbit Frodo recebe a missão de destruir um poderoso anel capaz de dominar toda a Terra-média. Ao lado de uma improvável sociedade de heróis, ele enfrenta criaturas perigosas e grandes desafios para impedir que o mal prevaleça."
  },
  {
    id: 8,
    title: "Cidade de Deus",
    genre: "Drama",
    synopsis: "A história de dois jovens crescendo em uma favela do Rio de Janeiro.",
    poster: "../images/cidadedeus.jpg",
    description: "Acompanhando décadas de transformação da Cidade de Deus, o filme mostra como a violência influencia a vida de seus moradores. Enquanto Buscapé sonha em ser fotógrafo, outros jovens seguem caminhos marcados pelo crime e pela disputa de poder."
  },
  {
    id: 9,
    title: "John Wick",
    genre: "Ação",
    synopsis: "Um ex-assassino busca vingança após perder seu cachorro.",
    poster: "../images/johnwick.jpeg",
    description: "Depois de perder a última lembrança deixada por sua esposa, o lendário assassino John Wick retorna ao mundo do crime em busca de vingança. Sua caçada desperta antigos inimigos e revela o funcionamento de uma poderosa organização criminosa."
  },
  {
    id: 10,
    title: "Mad Max: Estrada da Fúria",
    genre: "Ação",
    synopsis: "Em um mundo pós-apocalíptico, um guerreiro luta pela sobrevivência.",
    poster: "../images/madmax.jpg",
    description: "Em um deserto devastado pela escassez de recursos, Max une forças com a guerreira Furiosa para escapar de um tirano impiedoso. Perseguições intensas, batalhas explosivas e uma busca por liberdade conduzem essa eletrizante jornada."
  },
  {
    id: 11,
    title: "Duro de Matar",
    genre: "Ação",
    synopsis: "Um policial enfrenta terroristas em um prédio durante o Natal.",
    poster: "../images/durodematar.jpg",
    description: "Durante uma festa de Natal em um arranha-céu, o policial John McClane se vê preso quando terroristas invadem o prédio e fazem todos de reféns. Sozinho e com poucos recursos, ele precisa usar sua inteligência e coragem para salvar os inocentes."
  },
  {
    id: 12,
    title: "Missão Impossível: Protocolo Fantasma",
    genre: "Ação",
    synopsis: "Ethan Hunt enfrenta uma ameaça global.",
    poster: "../images/missionimpo.jpg",
    description: "Após ser acusado de um atentado internacional, Ethan Hunt e sua equipe são abandonados pelo governo e precisam agir por conta própria. Em uma corrida contra o tempo, eles enfrentam perigosas missões para impedir uma guerra de proporções mundiais."
  },
  {
    id: 13,
    title: "O Protetor",
    genre: "Ação",
    synopsis: "Um ex-agente ajuda pessoas em perigo e enfrenta criminosos.",
    poster: "../images/oprotetor.jpg",
    description: "Robert McCall leva uma vida tranquila até decidir proteger uma jovem que está sendo explorada por uma organização criminosa. Utilizando suas habilidades adquiridas no passado, ele enfrenta criminosos impiedosos para fazer justiça."
  },
  {
    id: 14,
    title: "Os Mercenários",
    genre: "Ação",
    synopsis: "Um grupo de mercenários enfrenta missões explosivas ao redor do mundo.",
    poster: "../images/osmercenarios.jpg",
    description: "Liderados por Barney Ross, um grupo de mercenários altamente treinados aceita missões extremamente perigosas em diferentes partes do mundo. Entre explosões, combates e muita ação, eles colocam suas vidas em risco para cumprir cada objetivo."
  },
  {
    id: 15,
    title: "Velocidade Máxima",
    genre: "Ação",
    synopsis: "Um policial precisa salvar passageiros de um ônibus com uma bomba.",
    poster: "../images/velocidademaxima.jpg",
    description: "Quando um terrorista instala uma bomba em um ônibus que não pode reduzir a velocidade, o policial Jack Traven assume a missão de salvar todos os passageiros. Cada decisão precisa ser tomada rapidamente para evitar uma tragédia."
  },
  {
    id: 16,
    title: "Orgulho e Preconceito",
    genre: "Romance",
    synopsis: "Uma história de amor e superação de diferenças sociais.",
    poster: "../images/orgulhoepreconceito.jpg",
    description: "Elizabeth Bennet e o reservado Sr. Darcy se conhecem em meio a preconceitos, mal-entendidos e diferenças sociais. Aos poucos, ambos descobrem que o verdadeiro amor exige humildade, confiança e a capacidade de enxergar além das primeiras impressões."
  },
  {
    id: 17,
    title: "Diário de uma Paixão",
    genre: "Romance",
    synopsis: "Um casal luta para ficar junto apesar das adversidades.",
    poster: "../images/diariodeumapaixao.jpg",
    description: "Noah e Allie vivem um romance intenso durante a juventude, mas são separados pelas circunstâncias da vida. Mesmo após muitos anos, seus sentimentos continuam vivos, mostrando a força de um amor capaz de superar o tempo."
  },
  {
    id: 18,
    title: "Como Eu Era Antes de Você",
    genre: "Romance",
    synopsis: "Uma jovem cuida de um homem tetraplégico e transforma sua vida.",
    poster: "../images/comoeueraantesdevc.jpg",
    description: "Louisa Clark aceita o desafio de cuidar de Will Traynor, um homem que perdeu a vontade de viver após um grave acidente. A convivência entre os dois transforma suas perspectivas e revela como pequenas atitudes podem mudar uma vida."
  },
  {
    id: 19,
    title: "Simplesmente Amor",
    genre: "Romance",
    synopsis: "Histórias de amor entrelaçadas durante o Natal em Londres.",
    poster: "../images/simplesmenteamor.jpg",
    description: "Diversas histórias se cruzam em Londres durante o período natalino, mostrando diferentes formas de amor, amizade e reencontros. Cada personagem enfrenta desafios únicos enquanto busca felicidade ao lado das pessoas que ama."
  },
  {
    id: 20,
    title: "A Proposta",
    genre: "Romance",
    synopsis: "Uma chefe e seu assistente fingem um casamento para evitar deportação.",
    poster: "../images/aproposta.jpg",
    description: "Para evitar ser deportada, uma exigente executiva convence seu assistente a fingir que os dois estão noivos. O que começa como um acordo profissional logo se transforma em uma divertida sequência de situações inesperadas e sentimentos verdadeiros."
  },
  {
    id: 21,
    title: "Um Lugar Chamado Notting Hill",
    genre: "Romance",
    synopsis: "Um romance improvável entre uma estrela de cinema e um dono de livraria.",
    poster: "../images/nothinghill.jpg",
    description: "William, um simples dono de livraria em Londres, tem sua vida transformada ao conhecer Anna Scott, uma famosa atriz de Hollywood. Entre a fama, a rotina e os desafios de mundos completamente diferentes, os dois descobrem que o amor pode surgir onde menos se espera."
  },
  {
    id: 22,
    title: "A Culpa é das Estrelas",
    genre: "Romance",
    synopsis: "Dois adolescentes com câncer vivem um romance emocionante.",
    poster: "../images/aculpaehdasestrelas.jpg",
    description: "Hazel Grace conhece Gus durante um grupo de apoio e os dois desenvolvem uma forte amizade que logo se transforma em um grande amor. Juntos, enfrentam os desafios da doença enquanto aprendem a valorizar cada momento vivido."
  },
  {
    id: 23,
    title: "Matrix",
    genre: "Ficção Científica",
    synopsis: "Um hacker descobre a verdadeira natureza da realidade.",
    poster: "../images/matrix.jpeg",
    description: "Neo, um talentoso hacker, descobre que o mundo em que vive é apenas uma simulação criada por máquinas. Ao se juntar a um grupo de rebeldes, ele embarca em uma jornada repleta de ação para libertar a humanidade do controle artificial."
  },
  {
    id: 24,
    title: "Blade Runner",
    genre: "Ficção Científica",
    synopsis: "Um caçador de androides em um futuro distópico.",
    poster: "../images/bladerunner.jpg",
    description: "Em uma sociedade futurista dominada pela tecnologia, Rick Deckard recebe a missão de caçar androides fugitivos quase indistinguíveis dos humanos. Durante sua investigação, ele passa a questionar os limites entre humanidade, memória e identidade."
  },
  {
    id: 25,
    title: "A Origem",
    genre: "Ficção Científica",
    synopsis: "Um ladrão invade sonhos para roubar segredos e implantar ideias.",
    poster: "../images/origem.jpg",
    description: "Dom Cobb é especialista em invadir os sonhos das pessoas para roubar informações valiosas. Ao receber a missão inédita de implantar uma ideia na mente de um alvo, ele enfrenta perigos que desafiam a lógica e a própria realidade."
  },
  {
    id: 26,
    title: "O Homem Bicentenário",
    genre: "Ficção Científica",
    synopsis: "Um robô busca se tornar humano ao longo de dois séculos.",
    poster: "../images/bicentenario.jpg",
    description: "Andrew é um robô que desenvolve sentimentos, criatividade e o desejo de viver como um ser humano. Ao longo de duzentos anos, ele enfrenta desafios para conquistar liberdade, aceitação e o direito de ser reconhecido por sua humanidade."
  },
  {
    id: 27,
    title: "O Quinto Elemento",
    genre: "Ficção Científica",
    synopsis: "Um taxista e uma mulher misteriosa salvam o mundo de uma ameaça cósmica.",
    poster: "../images/quintoelemento.jpg",
    description: "Korben Dallas leva uma vida comum até encontrar Leeloo, uma jovem com habilidades extraordinárias. Juntos, eles precisam reunir os elementos sagrados capazes de impedir uma força maligna que ameaça destruir toda a humanidade."
  },
  {
    id: 28,
    title: "Minority Report: A Nova Lei",
    genre: "Ficção Científica",
    synopsis: "Um policial investiga crimes antes que eles aconteçam.",
    poster: "../images/minoriryreport.jpg",
    description: "Em um futuro onde assassinatos podem ser previstos antes de acontecerem, o policial John Anderton acredita plenamente no sistema de prevenção. Tudo muda quando ele próprio é acusado de um crime que ainda não aconteceu, iniciando uma corrida para provar sua inocência."
  },
  {
    id: 29,
    title: "A Chegada",
    genre: "Ficção Científica",
    synopsis: "Uma linguista tenta se comunicar com alienígenas que chegam à Terra.",
    poster: "../images/achegada.jpg",
    description: "Quando misteriosas naves espaciais aparecem em diferentes partes do planeta, a linguista Louise Banks é chamada para estabelecer comunicação com seus ocupantes. À medida que compreende sua linguagem, ela faz descobertas capazes de mudar sua visão sobre o tempo e a vida."
  },
  {
    id: 30,
    title: "Se Beber, Não Case",
    genre: "Comédia",
    synopsis: "Três amigos acordam em Las Vegas sem lembrar da noite anterior.",
    poster: "../images/sebebernaocase.jpg",
    description: "Após uma despedida de solteiro em Las Vegas, três amigos acordam sem qualquer lembrança da noite anterior e descobrem que o noivo desapareceu. Agora, eles precisam juntar as pistas e enfrentar situações absurdas para encontrá-lo antes do casamento."
  },
  {
    id: 31,
    title: "Superbad - É Hoje",
    genre: "Comédia",
    synopsis: "Adolescentes tentam aproveitar ao máximo a última festa antes da faculdade.",
    poster: "../images/superbad.jpg",
    description: "Os inseparáveis amigos Seth e Evan decidem aproveitar ao máximo seus últimos dias antes de seguirem caminhos diferentes. Em uma noite repleta de confusões, festas e situações inesperadas, eles descobrem o verdadeiro valor da amizade."
  },
  {
    id: 32,
    title: "O Máscara",
    genre: "Comédia",
    synopsis: "Um homem tímido encontra uma máscara mágica que transforma sua personalidade.",
    poster: "../images/mascara.jpg",
    description: "Stanley Ipkiss leva uma vida comum até encontrar uma misteriosa máscara que lhe concede poderes extraordinários e uma personalidade completamente diferente. Com muito humor e confusão, ele precisa lidar com os desafios de sua nova identidade."
  },
  {
    id: 33,
    title: "Click",
    genre: "Comédia",
    synopsis: "Um homem recebe um controle remoto que pode controlar sua vida.",
    poster: "../images/click.jpg",
    description: "Michael Newman recebe um controle remoto capaz de avançar, pausar e retroceder momentos de sua vida. No início tudo parece perfeito, mas ele logo percebe que cada escolha tem consequências importantes para seu futuro e sua família."
  },
  {
    id: 34,
    title: "Esqueceram de Mim",
    genre: "Comédia",
    synopsis: "Um garoto é deixado sozinho em casa e precisa se defender de ladrões.",
    poster: "../images/esqueceramdemim.jpg",
    description: "Esquecido em casa durante as férias de Natal, Kevin precisa aprender a se virar sozinho. Quando dois ladrões tentam invadir sua casa, ele cria armadilhas criativas e divertidas para proteger seu lar."
  },
  {
    id: 35,
    title: "A Mentira",
    genre: "Comédia",
    synopsis: "Uma estudante inventa uma mentira que foge do controle.",
    poster: "../images/amentira.jpg",
    description: "Depois que um boato sobre sua vida amorosa se espalha pela escola, Olive decide tirar proveito da situação. No entanto, suas pequenas mentiras acabam gerando consequências inesperadas e transformando completamente sua reputação."
  },
  {
    id: 36,
    title: "Jumanji: Bem-vindo à Selva",
    genre: "Comédia",
    synopsis: "Quatro adolescentes são transportados para um videogame.",
    poster: "../images/jumanji.jpg",
    description: "Quatro estudantes encontram um antigo videogame e acabam sendo transportados para dentro dele, assumindo novos corpos e habilidades. Para voltar ao mundo real, eles precisam enfrentar desafios perigosos e trabalhar em equipe."
  },
  {
    id: 37,
    title: "O Fantasma da Ópera",
    genre: "Gótico",
    synopsis: "Um fantasma assombra uma ópera de Paris.",
    poster: "../images/fastasmadaopera.jpg",
    description: "Escondido nos subterrâneos da Ópera de Paris, um misterioso homem mascarado desenvolve uma obsessão pela jovem cantora Christine. Entre romance, mistério e tragédia, sua presença transforma a vida de todos ao redor."
  },
  {
    id: 38,
    title: "Sweeney Todd: O Barbeiro Demoníaco da Rua Fleet",
    genre: "Gótico",
    synopsis: "Um barbeiro busca vingança em Londres.",
    poster: "../images/obarbeiro.jpg",
    description: "Após anos de injustiça, Benjamin Barker retorna a Londres com a identidade de Sweeney Todd e um único objetivo: vingança. Sua busca o leva por um caminho sombrio, marcado por crimes, mistério e obsessão."
  },
  {
    id: 39,
    title: "A Lenda do Cavaleiro Sem Cabeça",
    genre: "Gótico",
    synopsis: "Um investigador enfrenta um cavaleiro fantasmagórico.",
    poster: "../images/alendadocavaleiro.jpg",
    description: "O investigador Ichabod Crane é enviado para uma pequena vila onde uma série de assassinatos misteriosos assusta os moradores. Conforme avança nas investigações, ele se depara com uma lenda aterrorizante que desafia toda a lógica."
  },
  {
    id: 40,
    title: "O Corvo",
    genre: "Gótico",
    synopsis: "Um homem volta dos mortos para buscar vingança.",
    poster: "../images/ocorvo.jpg",
    description: "Após ser brutalmente assassinado junto com sua noiva, Eric Draven retorna do mundo dos mortos em busca de justiça. Guiado por um misterioso corvo, ele enfrenta aqueles que destruíram sua vida em uma jornada marcada por ação e sobrenatural."
  },
  {
    id: 41,
    title: "Entrevista com o Vampiro",
    genre: "Gótico",
    synopsis: "Dois vampiros contam suas histórias ao longo dos séculos.",
    poster: "../images/entrevistacomovamp.jpg",
    description: "Louis decide revelar sua história a um jornalista, narrando sua transformação em vampiro e os séculos vividos ao lado do enigmático Lestat. Em meio à imortalidade, os dois enfrentam conflitos, perdas e os dilemas de sua própria existência."
  },
  {
    id: 42,
    title: "O Labirinto do Fauno",
    genre: "Gótico",
    synopsis: "Uma menina descobre um mundo mágico e sombrio durante a guerra civil espanhola.",
    poster: "../images/olabirintodofauno.jpg",
    description: "Durante um período marcado pela guerra, a jovem Ofelia encontra um misterioso fauno que a conduz por um mundo repleto de criaturas fantásticas e desafios perigosos. Enquanto busca cumprir antigas profecias, ela precisa enfrentar a dura realidade ao seu redor."
  },
  {
    id: 43,
    title: "A Casa das Almas Perdidas",
    genre: "Gótico",
    synopsis: "Uma família enfrenta espíritos em uma mansão assombrada.",
    poster: "../images/casa das almas perdidas.jpg",
    description: "Ao se mudar para uma antiga mansão, uma família passa a vivenciar acontecimentos sobrenaturais e assustadores. Conforme segredos do passado vêm à tona, eles precisam lutar para sobreviver às forças que habitam a casa."
  },
  {
    id: 44,
    title: "Procurando Nemo",
    genre: "Animação",
    synopsis: "Um peixe-palhaço atravessa o oceano para encontrar seu filho.",
    poster: "../images/procurandonemo.jpg",
    description: "Depois que seu filho Nemo é capturado por mergulhadores, Marlin inicia uma longa jornada pelo oceano para resgatá-lo. Ao lado da divertida Dory, ele enfrenta perigos, faz novas amizades e aprende importantes lições sobre confiança e coragem."
  },
  {
    id: 45,
    title: "Divertida Mente",
    genre: "Animação",
    synopsis: "As emoções de uma menina enfrentam mudanças em sua vida.",
    poster: "../images/divertidamente.jpg",
    description: "Quando Riley se muda para uma nova cidade, suas emoções precisam aprender a lidar com mudanças inesperadas. Alegria, Tristeza, Medo, Raiva e Nojinho embarcam em uma divertida aventura para ajudá-la a superar esse momento de sua vida."
  },
  {
    id: 46,
    title: "Moana",
    genre: "Animação",
    synopsis: "Uma jovem embarca em uma jornada pelo oceano para salvar seu povo.",
    poster: "../images/moana.jpg",
    description: "Determinada a salvar sua ilha, Moana parte em uma grande aventura pelo oceano em busca do semideus Maui. Durante a jornada, ela enfrenta criaturas mágicas, supera desafios e descobre seu verdadeiro destino como líder."
  },
  {
    id: 47,
    title: "Frozen",
    genre: "Animação",
    synopsis: "Duas irmãs enfrentam desafios para salvar seu reino do inverno eterno.",
    poster: "../images/froze.jpg",
    description: "Após um poderoso feitiço mergulhar Arendelle em um inverno sem fim, Anna parte em uma jornada para encontrar sua irmã Elsa. Ao lado de novos amigos, ela enfrenta diversos desafios para restaurar o reino e fortalecer os laços familiares."
  },
  {
    id: 48,
    title: "Meu Malvado Favorito",
    genre: "Animação",
    synopsis: "Um vilão aprende o valor da família ao adotar três meninas.",
    poster: "../images/malvadofav.jpg",
    description: "Gru é um famoso vilão que planeja realizar o maior roubo de sua carreira, mas seus planos mudam ao adotar três meninas órfãs. Aos poucos, ele descobre que o carinho e a família podem ser mais valiosos do que qualquer conquista."
  },
  {
    id: 49,
    title: "Zootopia",
    genre: "Animação",
    synopsis: "Uma coelha policial e uma raposa enfrentam mistérios em uma cidade de animais.",
    poster: "../images/zootopia.jpg",
    description: "A determinada policial Judy Hopps une forças com a esperta raposa Nick Wilde para investigar o desaparecimento de vários animais. Durante a investigação, os dois descobrem uma conspiração que ameaça toda a convivência em Zootopia."
  },
  {
    id: 50,
    title: "Monstros S.A.",
    genre: "Animação",
    synopsis: "Monstros trabalham em uma fábrica de sustos para gerar energia.",
    poster: "../images/monstrossa.jpg",
    description: "Sulley e Mike trabalham em uma fábrica que transforma sustos em energia para a cidade dos monstros. Tudo muda quando a pequena Boo entra acidentalmente nesse mundo, dando início a uma divertida aventura repleta de amizade, humor e descobertas."
  },
]

// parte do carrossel da issue de laerte ficou aqui pq fez mais sentido, já que usa diretamente a lista de filmes

const destaque = [...movies].sort(() => Math.random() - 0.5).slice(0, 5);

const poster = document.getElementById("heroPoster");
const titulo = document.getElementById("heroTitle");
const genero = document.getElementById("heroGenre");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let atual = 0;
let intervaloEntreCards;

function renderHero(){
  poster.src = destaque[atual].poster;
  titulo.innerText = destaque[atual].title;
  genero.innerText = destaque[atual].genre;
}

function iniciarNovoIntervalo() {
  clearInterval(intervaloEntreCards);

  intervaloEntreCards = setInterval( ()=> {next.click();} ,2500);
}

renderHero();
iniciarNovoIntervalo();

next.onclick=()=>{
  atual++;
  
  if(atual==destaque.length) atual = 0;

  renderHero();
  iniciarNovoIntervalo();
}

prev.onclick=()=>{
  atual--;
  
  if(atual<0) atual = destaque.length-1;
  
  renderHero();
  iniciarNovoIntervalo();
}
