const questions = [
    {
      question: "Quin esdeveniment va marcar l'inici de la Restauració Borbònica a Espanya?",
      options: [
        "La proclamació de la Primera República Espanyola.",
        "El cop d'estat del general Martínez Campos a Sagunt.",
        "La signatura del Tractat de París de 1898.",
        "La Revolució de 1868."
      ],
      answer: 1,
      explanation: "El cop d'estat del general Martínez Campos a Sagunt el desembre de 1874 va proclamar Alfons XII com a rei, iniciant la Restauració Borbònica."
    },
    {
      question: "Qui va ser l'ideòleg principal del sistema polític de la Restauració?",
      options: [
        "Práxedes Mateo Sagasta.",
        "Antonio Cánovas del Castillo.",
        "Manuel Alonso Martínez.",
        "Francisco Romero Robledo."
      ],
      answer: 1,
      explanation: "Antonio Cánovas del Castillo va ser l'ideòleg principal del sistema polític de la Restauració, defensant una monarquia constitucional que garantís l'ordre social."
    },
    {
      question: "Quins eren els dos partits principals que es van alternar en el poder durant la Restauració?",
      options: [
        "Partit Conservador i Partit Liberal.",
        "Partit Republicà i Partit Socialista.",
        "Partit Carlí i Partit Federal.",
        "Partit Nacionalista i Partit Demòcrata."
      ],
      answer: 0,
      explanation: "El Partit Conservador, liderat per Cánovas, i el Partit Liberal, liderat per Sagasta, es van alternar en el poder durant la Restauració."
    },
    {
      question: "Què era el 'torn dinàstic' en el context de la Restauració?",
      options: [
        "Un sistema de rotació pactada del poder entre conservadors i liberals.",
        "Un moviment revolucionari contra la monarquia.",
        "Una aliança militar entre Espanya i França.",
        "Un període de guerra civil entre diferents faccions polítiques."
      ],
      answer: 0,
      explanation: "El 'torn dinàstic' era un sistema de rotació pactada del poder entre el Partit Conservador i el Partit Liberal per mantenir l'estabilitat política."
    },
    {
      question: "Quina pràctica corrupta es va utilitzar per manipular els resultats electorals durant la Restauració?",
      options: [
        "El caciquisme.",
        "El sufragi universal.",
        "La separació de poders.",
        "La llibertat de premsa."
      ],
      answer: 0,
      explanation: "El caciquisme implicava la manipulació dels resultats electorals mitjançant coaccions als votants o comprant els vots, afavorint la corrupció política."
    },
    {
      question: "Quina constitució va regir durant la major part de la Restauració?",
      options: [
        "La Constitució de 1812.",
        "La Constitució de 1869.",
        "La Constitució de 1876.",
        "La Constitució de 1931."
      ],
      answer: 2,
      explanation: "La Constitució de 1876, de caràcter conservador, va regir durant la major part de la Restauració, establint la sobirania compartida entre les Corts i el Rei."
    },
    {
      question: "Quin era el sistema de vot establert inicialment per la Constitució de 1876?",
      options: [
        "Sufragi universal masculí.",
        "Sufragi censatari.",
        "Sufragi universal femení.",
        "Sufragi indirecte."
      ],
      answer: 1,
      explanation: "Inicialment, la Constitució de 1876 establia el sufragi censatari, limitat als contribuents principals, representant només el 3% de la població."
    },
    {
      question: "Quina religió es reconeixia com a oficial segons la Constitució de 1876?",
      options: [
        "Catolicisme.",
        "Protestantisme.",
        "Islam.",
        "Judaisme."
      ],
      answer: 0,
      explanation: "La Constitució de 1876 reconeixia el catolicisme com a religió oficial, atorgant a l'Església un paper destacat en l'educació."
    },
    {
      question: "Quina pràctica electoral consistia en assignar prèviament els candidats que havien de ser elegits?",
      options: [
        "El pucherazo.",
        "L'encasellat.",
        "El sufragi restringit.",
        "El vot de censura."
      ],
      answer: 1,
      explanation: "L'encasellat era la pràctica d'assignar prèviament els candidats que havien de ser elegits, manipulant així els resultats electorals."
    },
    {
      question: "Quina llei aprovada durant el govern de Sagasta va permetre l'entrada en el joc polític a les forces opositores?",
      options: [
        "Llei d'Associacions de 1887.",
        "Llei de Jurat de 1888.",
        "Llei de Sufragi Universal de 1890.",
        "Llei de Premsa de 1881."
      ],
      answer: 0,
      explanation: "La Llei d'Associacions de 1887 va permetre l'entrada en el joc polític a les forces opositores, ampliant les llibertats d'associació."
    },
    {
      question: "Quan es va establir el sufragi universal masculí a Espanya durant la Restauració?",
      options: [
        "1876.",
        "1887.",
        "1890.",
        "1902."
      ],
      answer: 2,
      explanation: "El sufragi universal masculí per a majors de 25 anys es va establir a Espanya l'any 1890 durant el govern de Sagasta."
    },
  {
    question: "Quin esdeveniment va marcar el final del 'canovisme polític'?",
    options: [
      "La mort d'Antonio Cánovas del Castillo.",
      "La proclamació de la Segona República Espanyola.",
      "La Guerra de Cuba de 1898.",
      "La mort d'Alfons XII."
    ],
    answer: 0,
    explanation: "La mort d'Antonio Cánovas del Castillo el 1897, assassinat per un anarquista, va marcar el final del lideratge personalista del 'canovisme polític'."
  },
  {
    question: "Com es va anomenar la corrupció política sistemàtica durant la Restauració?",
    options: [
      "Pucherazo.",
      "Caciquisme.",
      "Nepotisme.",
      "Clientelisme."
    ],
    answer: 1,
    explanation: "El caciquisme era el sistema de corrupció política basat en el control local dels cacics, que manipulaven les eleccions i influïen en la política nacional."
  },
  {
    question: "Quin paper jugaven els 'cacics' en el sistema polític de la Restauració?",
    options: [
      "Eren representants del govern central.",
      "Eren líders locals que controlaven els vots i manipulaven les eleccions.",
      "Eren funcionaris judicials encarregats de supervisar les eleccions.",
      "Eren membres de l'exèrcit que protegien els col·legis electorals."
    ],
    answer: 1,
    explanation: "Els cacics eren líders locals que controlaven els vots i manipulaven les eleccions, assegurant el manteniment del sistema polític establert."
  },
  {
    question: "Quin era l'objectiu principal del sistema de torn pacífic entre conservadors i liberals?",
    options: [
      "Garantir la participació de tots els partits polítics.",
      "Mantenir l'estabilitat política i evitar revolucions.",
      "Eliminar les eleccions democràtiques.",
      "Donar suport a les colònies espanyoles a l'exterior."
    ],
    answer: 1,
    explanation: "L'objectiu del sistema de torn pacífic era mantenir l'estabilitat política evitant conflictes revolucionaris mitjançant la rotació pactada del poder."
  },
  {
    question: "Quina era la funció del rei segons la Constitució de 1876?",
    options: [
      "Tenir el poder absolut sobre l'estat.",
      "Ser el cap de l'exèrcit i de les Corts, amb sobirania compartida.",
      "Controlar les eleccions directament.",
      "Només tenir una funció simbòlica sense poder efectiu."
    ],
    answer: 1,
    explanation: "Segons la Constitució de 1876, el rei tenia sobirania compartida amb les Corts i era cap de l'exèrcit, exercint un paper clau en la política."
  },
  {
    question: "Quin paper jugava l'exèrcit en el sistema polític de la Restauració?",
    options: [
      "Es mantenia neutral i fora de la política.",
      "Intervenia sovint en política com a garant de l'ordre establert.",
      "Era responsable de les eleccions generals.",
      "Controlava les colònies però no tenia influència a la península."
    ],
    answer: 1,
    explanation: "L'exèrcit tenia una influència important en el sistema polític de la Restauració, intervenint sovint com a garant de l'ordre establert."
  },
  {
    question: "Quin era el paper de l'Església catòlica en la societat durant la Restauració?",
    options: [
      "Era separada completament de l'estat.",
      "Tenia un paper destacat en l'educació i el sistema social.",
      "Només tenia influència en els afers religiosos.",
      "Promovia les revolucions republicanes."
    ],
    answer: 1,
    explanation: "L'Església catòlica tenia un paper destacat en l'educació i el sistema social, ja que la Constitució de 1876 la declarava religió oficial de l'estat."
  },
  {
    question: "Com es relacionava el sistema polític de la Restauració amb els moviments obreristes?",
    options: [
      "Els integrava plenament en la política nacional.",
      "Els reprimia activament mitjançant l'exèrcit i la policia.",
      "Els utilitzava com a suport electoral.",
      "Els fomentava per enfortir el desenvolupament econòmic."
    ],
    answer: 1,
    explanation: "El sistema polític de la Restauració reprimia els moviments obreristes per mantenir l'estabilitat i evitar revoltes socials."
  },
  {
    question: "Quins sectors socials es beneficiaven més del sistema polític de la Restauració?",
    options: [
      "La classe obrera i els camperols.",
      "La burgesia i l'aristocràcia.",
      "Els sindicats i els partits republicans.",
      "Els sectors progressistes i feministes."
    ],
    answer: 1,
    explanation: "La burgesia i l'aristocràcia es beneficiaven més del sistema polític de la Restauració gràcies al caciquisme i la manipulació electoral."
  },
  {
    question: "Com es va desenvolupar el conflicte entre carlins i liberals durant la Restauració?",
    options: [
      "Els carlins van guanyar el suport del govern.",
      "Els carlins van ser derrotats definitivament el 1876.",
      "Els liberals van perdre el poder a favor dels carlins.",
      "El conflicte va continuar amb guerres constants fins al segle XX."
    ],
    answer: 1,
    explanation: "Els carlins van ser derrotats definitivament el 1876, la qual cosa va consolidar el poder dels liberals i va posar fi a les guerres carlines."
  }
];

