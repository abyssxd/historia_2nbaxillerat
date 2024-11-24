const questions = [
    {
      question: "Què va ser la Renaixença?",
      options: [
        "Un moviment polític que buscava la independència de Catalunya.",
        "Un moviment cultural i literari que reivindicava l'ús del català com a llengua literària i de cultura.",
        "Una revolta popular contra el centralisme espanyol.",
        "Una associació de comerciants catalans."
      ],
      answer: 1,
      explanation: "La Renaixença va ser un moviment cultural i literari sorgit a la dècada de 1830 que reivindicava l'ús del català com a llengua literària i de cultura."
    },
    {
      question: "Quin esdeveniment marca l'inici de la Renaixença?",
      options: [
        "La publicació de l'Oda a la Pàtria de Bonaventura Carles Aribau el 1833.",
        "La creació de la Mancomunitat de Catalunya.",
        "La Guerra dels Segadors.",
        "La fundació de la Lliga Regionalista."
      ],
      answer: 0,
      explanation: "La publicació de l'Oda a la Pàtria de Bonaventura Carles Aribau el 1833 és considerada l'inici de la Renaixença."
    },
    {
      question: "Quin era l'objectiu principal del catalanisme cultural al segle XIX?",
      options: [
        "Aconseguir la independència de Catalunya.",
        "Reivindicar la llengua i la cultura catalanes.",
        "Establir una monarquia catalana.",
        "Promoure el federalisme a Espanya."
      ],
      answer: 1,
      explanation: "El catalanisme cultural al segle XIX tenia com a objectiu principal reivindicar la llengua i la cultura catalanes."
    },
    {
      question: "Què va ser el Decret de Nova Planta de 1716?",
      options: [
        "Una llei que establia la independència de Catalunya.",
        "Un decret que unificava jurídicament els territoris catalans sota les lleis castellanes, eliminant les institucions pròpies i prohibint l'ús administratiu del català.",
        "Una reforma agrària que beneficiava els pagesos catalans.",
        "Un tractat de pau entre Espanya i França."
      ],
      answer: 1,
      explanation: "El Decret de Nova Planta de 1716 va unificar jurídicament els territoris catalans sota les lleis castellanes, eliminant les institucions pròpies i prohibint l'ús administratiu del català."
    },
    {
      question: "Quin moviment polític va sorgir com a resposta al centralisme uniformador de l'Estat liberal al segle XIX?",
      options: [
        "El carlisme.",
        "El republicanisme federal.",
        "El catalanisme polític.",
        "Totes les anteriors són correctes."
      ],
      answer: 3,
      explanation: "Com a resposta al centralisme uniformador de l'Estat liberal al segle XIX, van sorgir moviments com el carlisme, el republicanisme federal i el catalanisme polític."
    },
    {
      question: "Què eren les bullangues?",
      options: [
        "Festes populars catalanes.",
        "Revoltes populars entre 1835 i 1843 contra la centralització política, econòmica i administrativa.",
        "Associacions culturals catalanes.",
        "Lleis que prohibien l'ús del català."
      ],
      answer: 1,
      explanation: "Les bullangues van ser revoltes populars entre 1835 i 1843 contra la centralització política, econòmica i administrativa."
    },
    {
      question: "Què va ser la Jamància de 1843?",
      options: [
        "Una festa tradicional catalana.",
        "Una revolta popular contra Espartero, anomenada així perquè els participants buscaven menjar de franc.",
        "Un tractat de pau entre Espanya i Catalunya.",
        "Una associació de comerciants catalans."
      ],
      answer: 1,
      explanation: "La Jamància de 1843 va ser una revolta popular contra Espartero, anomenada així perquè els participants buscaven menjar de franc."
    },
    {
      question: "Quin moviment va defensar la restauració de les institucions catalanes perdudes des del Decret de Nova Planta?",
      options: [
        "El carlisme.",
        "El liberalisme.",
        "El socialisme.",
        "El feixisme."
      ],
      answer: 0,
      explanation: "El carlisme va defensar la restauració de les institucions catalanes perdudes des del Decret de Nova Planta."
    },
    {
      question: "Quin va ser el paper de la burgesia industrial catalana en el catalanisme polític?",
      options: [
        "Va liderar el moviment catalanista buscant una major autonomia per a Catalunya.",
        "Es va oposar al catalanisme polític.",
        "Va romandre neutral sense involucrar-se en política.",
        "Va recolzar el centralisme espanyol."
      ],
      answer: 0,
      explanation: "La burgesia industrial catalana va liderar el moviment catalanista buscant una major autonomia per a Catalunya."
    },
    {
      question: "Quina va ser la resposta de l'Estat espanyol al creixement del catalanisme polític al segle XIX?",
      options: [
        "Va concedir la independència a Catalunya.",
        "Va implementar mesures centralitzadores i repressives contra el catalanisme.",
        "Va ignorar completament el moviment catalanista.",
        "Va establir una federació amb Catalunya."
      ],
      answer: 1,
      explanation: "L'Estat espanyol va respondre al creixement del catalanisme polític al segle XIX amb mesures centralitzadores i repressives."
    },
    {
      question: "Quin esdeveniment va marcar l'inici del catalanisme polític organitzat?",
      options: [
        "La creació de la Lliga de Catalunya.",
        "La publicació de l'Oda a la Pàtria.",
        "La Guerra dels Segadors.",
        "La fundació de la Mancomunitat de Catalunya."
      ],
      answer: 0,
      explanation: "La creació de la Lliga de Catalunya va marcar l'inici del catalanisme polític organitzat."
    },
    {
        question: "Quin document va ser presentat a la reina regent Maria Cristina per part del catalanisme polític?",
        options: [
          "El Memorial de Greuges.",
          "Les Bases de Manresa.",
          "El Manifest de Montserrat.",
          "El Pacte del Pardo."
        ],
        answer: 0,
        explanation: "El Memorial de Greuges va ser presentat a la reina regent Maria Cristina pel catalanisme polític com a protesta contra la centralització i en defensa dels drets de Catalunya."
      },      
  {
    question: "Quina organització es va fundar l'any 1880 per defensar la llengua catalana?",
    options: [
      "La Renaixença.",
      "L'Associació Catalanista d'Excursions Científiques.",
      "Els Jocs Florals.",
      "La Lliga de Catalunya."
    ],
    answer: 1,
    explanation: "L'Associació Catalanista d'Excursions Científiques es va fundar l'any 1880 per promoure i defensar la llengua catalana i la cultura popular."
  },
  {
    question: "Quina va ser una de les iniciatives culturals més destacades del catalanisme al segle XIX?",
    options: [
      "La celebració dels Jocs Florals.",
      "La creació de la Mancomunitat de Catalunya.",
      "L'organització de vagues generals.",
      "La unificació amb el carlisme."
    ],
    answer: 0,
    explanation: "Els Jocs Florals, recuperats l'any 1859, van ser una de les iniciatives culturals més destacades del catalanisme per promoure la literatura en català."
  },
  {
    question: "Quin era l'objectiu principal dels Jocs Florals de Barcelona?",
    options: [
      "Fomentar l'ús del castellà a Catalunya.",
      "Premiar obres literàries escrites en català i revitalitzar la llengua i cultura catalanes.",
      "Organitzar debats polítics sobre la independència.",
      "Promoure les arts visuals i la música clàssica."
    ],
    answer: 1,
    explanation: "Els Jocs Florals tenien com a objectiu premiar obres literàries en català i revitalitzar la llengua i la cultura catalanes."
  },
  {
    question: "Quina figura destacada va ser un defensor del catalanisme cultural i polític durant el segle XIX?",
    options: [
      "Jacint Verdaguer.",
      "Francesc Macià.",
      "Antoni Gaudí.",
      "Manuel Azaña."
    ],
    answer: 0,
    explanation: "Jacint Verdaguer va ser un destacat defensor del catalanisme cultural a través de la seva obra literària, com 'L'Atlàntida' i 'Canigó'."
  },
  {
    question: "Quina va ser la relació entre el catalanisme cultural i el polític al segle XIX?",
    options: [
      "Eren completament independents.",
      "El catalanisme cultural va influir i donar suport al desenvolupament del catalanisme polític.",
      "El catalanisme polític va rebutjar les iniciatives culturals.",
      "El catalanisme cultural era oposat al polític."
    ],
    answer: 1,
    explanation: "El catalanisme cultural va establir les bases per al desenvolupament del catalanisme polític, promovent la identitat catalana i la reivindicació d'institucions pròpies."
  },
  {
    question: "Quina entitat catalanista es va crear l'any 1882 amb un enfocament polític més organitzat?",
    options: [
      "El Centre Català.",
      "La Lliga Regionalista.",
      "Els Jocs Florals.",
      "L'Orfeó Català."
    ],
    answer: 0,
    explanation: "El Centre Català es va fundar l'any 1882 com una entitat catalanista amb un enfocament polític més organitzat, defensant l'autonomia catalana."
  },
  {
    question: "Quin va ser l'objectiu principal de la Lliga de Catalunya, fundada el 1887?",
    options: [
      "Promoure l'ensenyament en castellà.",
      "Aconseguir l'autonomia de Catalunya dins d'Espanya.",
      "Organitzar revoltes armades contra l'Estat espanyol.",
      "Defensar el caciquisme i el centralisme polític."
    ],
    answer: 1,
    explanation: "La Lliga de Catalunya es va fundar el 1887 amb l'objectiu d'aconseguir l'autonomia de Catalunya dins del marc de l'Estat espanyol."
  },
  {
    question: "Quin document polític va ser elaborat pel Centre Català per defensar l'autonomia catalana?",
    options: [
      "El Memorial de Greuges.",
      "Les Bases de Manresa.",
      "El Manifest de Montserrat.",
      "El Pacte del Pardo."
    ],
    answer: 0,
    explanation: "El Centre Català va elaborar el Memorial de Greuges, que defensava l'autonomia catalana i denunciava la centralització de l'Estat espanyol."
  },
  {
    question: "Quan es van redactar les Bases de Manresa?",
    options: [
      "1887",
      "1892",
      "1900",
      "1914"
    ],
    answer: 1,
    explanation: "Les Bases de Manresa es van redactar el 1892 i són considerades un dels documents fundacionals del catalanisme polític."
  },
  {
    question: "Quina va ser la principal proposta de les Bases de Manresa?",
    options: [
      "La independència immediata de Catalunya.",
      "La restauració d'institucions pròpies i l'autonomia política dins d'Espanya.",
      "L'abolició de les lleis catalanes històriques.",
      "L'unificació política amb França."
    ],
    answer: 1,
    explanation: "Les Bases de Manresa proposaven la restauració d'institucions pròpies catalanes i l'autonomia política dins del marc de l'Estat espanyol."
  },
  {
    question: "Quina era la postura del catalanisme respecte al centralisme de l'Estat espanyol?",
    options: [
      "Recolzava el centralisme.",
      "S'oposava al centralisme i defensava el regionalisme o el federalisme.",
      "Era indiferent al model polític de l'Estat.",
      "Proposava una monarquia absolutista centralitzada."
    ],
    answer: 1,
    explanation: "El catalanisme s'oposava al centralisme de l'Estat espanyol i defensava models com el regionalisme o el federalisme per a una major autonomia."
  },
  {
    question: "Quin era l'impacte de la publicació literària i cultural en català durant la Renaixença?",
    options: [
      "Va disminuir l'ús del català en àmbits culturals.",
      "Va revitalitzar l'ús del català com a llengua de cultura i identitat.",
      "Va promoure la castellanització a Catalunya.",
      "Va limitar-se exclusivament a l'àmbit religiós."
    ],
    answer: 1,
    explanation: "Durant la Renaixença, la publicació literària i cultural en català va revitalitzar l'ús del català com a llengua de cultura i identitat."
  }
];
