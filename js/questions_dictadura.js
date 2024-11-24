const questions = [
    {
      question: "Quin esdeveniment va precipitar el cop d'estat de Primo de Rivera el 1923?",
      options: [
        "La Setmana Tràgica de 1909.",
        "La derrota espanyola a Annual el 1921.",
        "La proclamació de la Segona República.",
        "La Guerra Civil Espanyola."
      ],
      answer: 1,
      explanation: "La derrota espanyola a Annual el 1921, amb aproximadament 12.000 morts, va generar una crisi que va contribuir al cop d'estat de Primo de Rivera el 1923."
    },
    {
      question: "Quina institució catalana va ser suprimida definitivament per la dictadura de Primo de Rivera el 1925?",
      options: [
        "La Generalitat de Catalunya.",
        "La Mancomunitat de Catalunya.",
        "El Parlament de Catalunya.",
        "L'Orfeó Català."
      ],
      answer: 1,
      explanation: "La Mancomunitat de Catalunya va ser suprimida definitivament per la dictadura de Primo de Rivera el 1925."
    },
    {
      question: "Quina va ser la reacció de la dictadura davant la xiulada a la Marxa Reial al camp del Barça el 1925?",
      options: [
        "Va clausurar el camp durant tres mesos.",
        "Va prohibir els partits de futbol a Catalunya.",
        "Va dissoldre el FC Barcelona.",
        "Va empresonar els jugadors de l'equip."
      ],
      answer: 0,
      explanation: "Després de la xiulada a la Marxa Reial al camp del Barça el 1925, la dictadura va clausurar el camp durant tres mesos per 'desafecto al patriotismo'."
    },
    {
      question: "Quin va ser l'objectiu del Complot de Prats de Molló liderat per Francesc Macià el 1926?",
      options: [
        "Invadir Catalunya des de França.",
        "Assassinar Primo de Rivera.",
        "Proclamar la independència de Catalunya des de Barcelona.",
        "Organitzar una vaga general a tot Espanya."
      ],
      answer: 0,
      explanation: "El Complot de Prats de Molló, liderat per Francesc Macià el 1926, pretenia envair Catalunya des de França per alliberar-la de la dictadura."
    },
    {
      question: "Quina va ser la postura inicial de la burgesia catalana davant el cop d'estat de Primo de Rivera?",
      options: [
        "Rebuig total.",
        "Suport inicial esperant la fi de la conflictivitat obrera.",
        "Indiferència política.",
        "Organització d'una resistència armada."
      ],
      answer: 1,
      explanation: "Inicialment, un sector de la burgesia catalana va donar suport al cop d'estat de Primo de Rivera, esperant que posés fi a la conflictivitat obrera i garantís l'ordre social."
    },
    {
      question: "Quina mesura va prendre la dictadura de Primo de Rivera respecte a les institucions catalanes?",
      options: [
        "Va promoure l'autonomia de Catalunya.",
        "Va desmantellar les institucions catalanes.",
        "Va establir un estat federal.",
        "Va crear noves institucions catalanes."
      ],
      answer: 1,
      explanation: "La dictadura de Primo de Rivera va desmantellar les institucions catalanes, incloent la supressió de la Mancomunitat i la prohibició de símbols i manifestacions culturals catalanes."
    },
    {
      question: "Quina va ser una de les accions repressives de la dictadura contra la cultura catalana?",
      options: [
        "Prohibició de l'ús del català en l'àmbit privat.",
        "Tancament de l'Orfeó Català.",
        "Prohibició de les sardanes.",
        "Destrucció de llibres en català."
      ],
      answer: 2,
      explanation: "La dictadura de Primo de Rivera va prohibir les sardanes, dansa tradicional catalana, com a part de la seva política repressiva contra la cultura catalana."
    },
    {
      question: "Quin va ser el resultat del judici a França pel Complot de Prats de Molló?",
      options: [
        "Francesc Macià va ser condemnat a mort.",
        "Francesc Macià va ser absolt.",
        "Francesc Macià va ser deportat a Bèlgica.",
        "Francesc Macià va ser condemnat a presó."
      ],
      answer: 3,
      explanation: "Després del judici a França pel Complot de Prats de Molló, Francesc Macià va ser condemnat a presó, però el judici es va convertir en un al·legat contra la dictadura i a favor dels drets nacionals de Catalunya."
    },
    {
      question: "Quina va ser la durada de la dictadura de Primo de Rivera?",
      options: [
        "1923-1925",
        "1923-1930",
        "1925-1930",
        "1923-1931"
      ],
      answer: 1,
      explanation: "La dictadura de Primo de Rivera va durar des de 1923 fins a 1930."
    },
    {
      question: "Quina va ser la conseqüència de la repressió de la dictadura sobre el moviment obrer a Catalunya?",
      options: [
        "Va augmentar la influència dels sindicats.",
        "Va disminuir la conflictivitat laboral.",
        "Va provocar una vaga general indefinida.",
        "Va enfortir els partits polítics d'esquerra."
      ],
      answer: 1,
      explanation: "La repressió de la dictadura sobre el moviment obrer a Catalunya va disminuir la conflictivitat laboral, però també va radicalitzar sectors del moviment obrer."
    },
    {
      question: "Quina va ser la postura del PSOE durant la dictadura de Primo de Rivera?",
      options: [
        "Va col·laborar amb la dictadura.",
        "Va organitzar una resistència armada.",
        "Es va dissoldre com a partit polític.",
        "Va mantenir una oposició activa i pública."
      ],
      answer: 0,
      explanation: "El PSOE va col·laborar amb la dictadura de Primo de Rivera, participant en algunes institucions com el Consell d'Estat."
    },
    {
        question: "Quina va ser la resposta de la dictadura davant les protestes obreres a Catalunya?",
        options: [
          "Repressió violenta i dissolució de sindicats.",
          "Negociacions amb els sindicats per millorar les condicions laborals.",
          "Implementació de reformes socials per calmar les tensions.",
          "Permís per a les manifestacions si eren pacífiques."
        ],
        answer: 0,
        explanation: "La dictadura de Primo de Rivera va respondre amb repressió violenta, prohibint sindicats i activitats polítiques d'esquerres per mantenir el control."
      },
      {
        question: "Quin va ser l'objectiu principal de la política econòmica de Primo de Rivera?",
        options: [
          "Promoure la industrialització i modernització d'Espanya.",
          "Abolir el sistema de propietat privada.",
          "Establir el comerç lliure amb les colònies.",
          "Reduir la despesa pública eliminant inversions en infraestructures."
        ],
        answer: 0,
        explanation: "Primo de Rivera va impulsar grans projectes d'infraestructures, com carreteres i ferrocarrils, amb l'objectiu de modernitzar l'economia espanyola."
      },
      {
        question: "Quina institució va utilitzar Primo de Rivera per governar inicialment després del cop d'estat?",
        options: [
          "El Parlament espanyol.",
          "Un Directori militar format per generals.",
          "Una Assemblea Constituent elegida democràticament.",
          "Una junta de representants sindicals i patronals."
        ],
        answer: 1,
        explanation: "Després del cop d'estat, Primo de Rivera va establir un Directori militar format per generals per governar Espanya."
      },
      {
        question: "Quan es va substituir el Directori militar pel Directori civil?",
        options: [
          "1923",
          "1925",
          "1928",
          "1930"
        ],
        answer: 1,
        explanation: "El Directori militar va ser substituït pel Directori civil l'any 1925, en un intent de Primo de Rivera de donar una aparença més institucional al seu govern."
      },
      {
        question: "Quin va ser un dels principals fracassos del règim de Primo de Rivera?",
        options: [
          "La manca de suport popular.",
          "La incapacitat de gestionar la crisi econòmica de 1929.",
          "La derrota militar al Marroc.",
          "La divisió de l'exèrcit espanyol."
        ],
        answer: 1,
        explanation: "La dictadura no va poder fer front a la crisi econòmica global de 1929, que va agreujar els problemes financers i va debilitar el suport al règim."
      },
      {
        question: "Quina va ser la postura de l'Església catòlica durant la dictadura de Primo de Rivera?",
        options: [
          "Va donar suport al règim.",
          "Va liderar la resistència contra la dictadura.",
          "Es va mantenir neutral i fora de la política.",
          "Va promoure moviments revolucionaris."
        ],
        answer: 0,
        explanation: "L'Església catòlica va donar suport a Primo de Rivera, veient-lo com un defensor de l'ordre i els valors tradicionals."
      },
      {
        question: "Quina organització sindical es va veure especialment afectada per la repressió del règim?",
        options: [
          "UGT (Unió General de Treballadors).",
          "CNT (Confederació Nacional del Treball).",
          "CCOO (Comissions Obreres).",
          "CSIF (Central Sindical Independent i de Funcionaris)."
        ],
        answer: 1,
        explanation: "La CNT, una organització sindical anarquista, va ser especialment reprimida per Primo de Rivera, que veia el moviment anarquista com una amenaça per a l'ordre públic."
      },
      {
        question: "Quin paper va jugar Alfons XIII durant la dictadura de Primo de Rivera?",
        options: [
          "Va recolzar la dictadura i va acceptar el cop d'estat.",
          "Es va oposar públicament al règim de Primo de Rivera.",
          "Va abdicar immediatament després del cop d'estat.",
          "Va liderar les forces democràtiques contra la dictadura."
        ],
        answer: 0,
        explanation: "El rei Alfons XIII va donar suport a Primo de Rivera i va acceptar el cop d'estat, veient-lo com una solució a la inestabilitat política."
      },
      {
        question: "Com va acabar la dictadura de Primo de Rivera?",
        options: [
          "Va ser enderrocada per una revolució popular.",
          "Primo de Rivera va dimitir per manca de suport i va exiliar-se.",
          "El règim va caure després d'una derrota militar al Marroc.",
          "Va ser dissolta després de la mort de Primo de Rivera."
        ],
        answer: 1,
        explanation: "Primo de Rivera va dimitir el gener de 1930 per manca de suport de l'exèrcit i el rei, i es va exiliar a París."
      },
      {
        question: "Quin va ser l'impacte de la crisi econòmica de 1929 sobre la dictadura de Primo de Rivera?",
        options: [
          "Va afavorir la consolidació del règim gràcies a les reformes econòmiques.",
          "Va debilitar el suport al règim i va contribuir a la seva caiguda.",
          "No va tenir cap impacte significatiu sobre Espanya.",
          "Va permetre a Primo de Rivera establir una economia planificada d'èxit."
        ],
        answer: 1,
        explanation: "La crisi econòmica de 1929 va debilitar el suport al règim de Primo de Rivera, ja que va agreujar els problemes financers i socials."
      },
      {
        question: "Quin moviment polític va créixer després de la caiguda de la dictadura de Primo de Rivera?",
        options: [
          "El republicanisme.",
          "El carlisme.",
          "El franquisme.",
          "El regionalisme gallec."
        ],
        answer: 0,
        explanation: "Després de la caiguda de la dictadura, el republicanisme va guanyar força, culminant amb la proclamació de la Segona República el 1931."
      }
    ];
    
  