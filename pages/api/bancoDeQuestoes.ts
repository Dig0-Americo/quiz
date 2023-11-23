import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(101, "Qual destas opções não é um tipo de calçado?",
        [
            RespostaModel.errada("Bota"),
            RespostaModel.errada("Tênis"),
            RespostaModel.errada("Chinelo"),
            RespostaModel.certa("Cueca")
        ]),

    new QuestaoModel(102, "Qual a raiz quadrada de 64?",
        [
            RespostaModel.errada("9"),
            RespostaModel.errada("7"),
            RespostaModel.errada("6"),
            RespostaModel.certa("8")
        ]),

    new QuestaoModel(103, "Os sapos são?",
        [
            RespostaModel.errada("Mamíferos"),
            RespostaModel.errada("Peixes"),
            RespostaModel.errada("Répteis"),
            RespostaModel.certa("Anfíbios")
        ]),

    new QuestaoModel(104, "Onde aconteceu a Revolta dos Malês?",
        [
            RespostaModel.errada("Ceará"),
            RespostaModel.errada("Maranhão"),
            RespostaModel.errada("Pernambuco"),
            RespostaModel.certa("Bahia")
        ]),

    new QuestaoModel(105, "Um ano é composto de quantos trimestres?",
        [
            RespostaModel.errada("5"),
            RespostaModel.errada("3"),
            RespostaModel.errada("2"),
            RespostaModel.certa("4")
        ]),

    new QuestaoModel(106, "Qual destes instrumentos musicais não possui cordas?",
        [
            RespostaModel.errada("Violino"),
            RespostaModel.errada("Guitarra"),
            RespostaModel.errada("Harpa"),
            RespostaModel.certa("Saxofone")
        ]),

    new QuestaoModel(107, "Qual era o nome de registro do escritor Machado de Assis?",
        [
            RespostaModel.errada("José Maria Machado de Assis"),
            RespostaModel.errada("Heitor Maria Machado de Assis"),
            RespostaModel.errada("João Maria Machado de Assis"),
            RespostaModel.certa("Joaquim Maria Machado de Assis")
        ]),

    new QuestaoModel(108, "Qual destes animais é conhecido como, cão selvagem australiano?",
        [
            RespostaModel.errada("Acauã"),
            RespostaModel.errada("Curica"),
            RespostaModel.errada("Bisão"),
            RespostaModel.certa("Dingo")
        ]),

    new QuestaoModel(109, "Em qual destas regiões ficava o Quilombo dos Palmares, onde viveu Zumbi?",
        [
            RespostaModel.errada("Boqueirão da Arara, CE"),
            RespostaModel.errada("Riacho de Santana, BA"),
            RespostaModel.errada("Vale do Ribeira, SP"),
            RespostaModel.certa("Serra da Barriga, AL")
        ]),

    new QuestaoModel(110, "O dia 21 de abril marca a fundação das cidades de:",
        [
            RespostaModel.errada("Londres e Brasília"),
            RespostaModel.errada("Porto e Brasília"),
            RespostaModel.errada(" Brasília e Barcelona"),
            RespostaModel.certa("Brasília e Roma")
        ]),

    new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(205, 'Quem compôs o Hino da Independência?', [
        RespostaModel.errada('Castro Alves'),
        RespostaModel.errada('Manuel Bandeira'),
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.certa('Dom Pedro I'),
    ]),
    new QuestaoModel(206, 'Qual é o antônimo de "malograr"?', [
        RespostaModel.errada('Perder'),
        RespostaModel.errada('Fracassar'),
        RespostaModel.errada('Desprezar'),
        RespostaModel.certa('Conseguir'),
    ]),
    new QuestaoModel(207, 'Em que país nasceu Carmen Miranda?', [
        RespostaModel.errada('Argentina'),
        RespostaModel.errada('Espanha'),
        RespostaModel.errada('Brasil'),
        RespostaModel.certa('Portugal'),
    ]),
    new QuestaoModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        RespostaModel.errada('Costa e Silva'),
        RespostaModel.errada('Emílio Médici'),
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.certa('João Figueiredo'),
    ]),
    new QuestaoModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        RespostaModel.errada('Ás'),
        RespostaModel.errada('Nove'),
        RespostaModel.errada('Rei'),
        RespostaModel.certa('Valete'),
    ]),
    new QuestaoModel(210, 'O adjetivo "venoso" está relacionado a:', [
        RespostaModel.errada('Vela'),
        RespostaModel.errada('Vento'),
        RespostaModel.errada('Vênia'),
        RespostaModel.certa('Veia'),
    ]),
    new QuestaoModel(211, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abrupção'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.certa('Ablução'),
    ]),
    new QuestaoModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        RespostaModel.errada('Monte Branco'),
        RespostaModel.errada('Monte Fuji'),
        RespostaModel.errada('Monte Carlo'),
        RespostaModel.certa('Monte Everest'),
    ]),
    new QuestaoModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        RespostaModel.errada('Estômago'),
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Rim'),
        RespostaModel.certa('Pescoço'),
    ]),
    new QuestaoModel(214, 'A compensação por perda é chamada de...', [
        RespostaModel.errada('Déficit'),
        RespostaModel.errada('Indexação'),
        RespostaModel.errada('Indébito'),
        RespostaModel.certa('Indenização'),
    ]),
    new QuestaoModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        RespostaModel.errada('Cuca'),
        RespostaModel.errada('Curupira'),
        RespostaModel.errada('Boitatá'),
        RespostaModel.certa('Saci-pererê'),
    ]),
    new QuestaoModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        RespostaModel.errada('Marechal Deodoro'),
        RespostaModel.errada('Barão de Mauá'),
        RespostaModel.errada('Marquês de Pombal'),
        RespostaModel.certa('Duque de Caxias'),
    ]),
]

export default questoes
