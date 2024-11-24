const questions = [
    {
      question: "Què va ser Solidaritat Catalana?",
      options: [
        "Una coalició de forces polítiques catalanes formada en resposta a la Llei de Jurisdiccions.",
        "Un sindicat obrer català.",
        "Una associació cultural dedicada a la promoció de la llengua catalana.",
        "Un moviment artístic del modernisme català."
      ],
      answer: 0,
      explanation: "Solidaritat Catalana va ser una coalició de forces polítiques catalanes formada en resposta a la Llei de Jurisdiccions, que posava sota jurisdicció militar les ofenses contra l'exèrcit o la unitat de la pàtria."
    },
    {
      question: "Quin esdeveniment va provocar la dissolució de Solidaritat Catalana el 1909?",
      options: [
        "La Setmana Tràgica.",
        "La Guerra Civil Espanyola.",
        "La proclamació de la Segona República.",
        "La dictadura de Primo de Rivera."
      ],
      answer: 0,
      explanation: "La Setmana Tràgica va provocar divisions internes dins de Solidaritat Catalana, especialment entre la burgesia de la Lliga Regionalista i els republicans, la qual cosa va conduir a la seva dissolució el 1909."
    },
    {
      question: "Quina va ser la resposta de la burgesia de la Lliga Regionalista durant la Setmana Tràgica?",
      options: [
        "Van donar suport a la repressió exercida pel govern.",
        "Van liderar les protestes contra el govern.",
        "Van romandre neutrals durant els esdeveniments.",
        "Van demanar la independència de Catalunya."
      ],
      answer: 0,
      explanation: "La burgesia de la Lliga Regionalista va donar suport majoritàriament a la dura repressió que va exercir el govern conservador d'Antoni Maura sobre el moviment obrer barceloní durant la Setmana Tràgica."
    },
    {
      question: "Qui va ser Joan Maragall i quin va ser el seu paper durant la Setmana Tràgica?",
      options: [
        "Un poeta catòlic proper a la Lliga que es va oposar a l'execució de Ferrer i Guàrdia.",
        "Un líder sindical que va encapçalar les protestes.",
        "Un polític republicà que va defensar la repressió governamental.",
        "Un militar que va dirigir les forces de repressió."
      ],
      answer: 0,
      explanation: "Joan Maragall va ser un poeta catòlic proper a la Lliga Regionalista que es va oposar a l'execució de Ferrer i Guàrdia, però el seu article 'La ciutat del perdó' va ser vetat per Prat de la Riba i no es va publicar a La Veu de Catalunya."
    },
    {
      question: "Què era la Mancomunitat de Catalunya?",
      options: [
        "Una federació de les quatre diputacions provincials catalanes amb funcions administratives.",
        "Un partit polític catalanista.",
        "Una organització sindical catalana.",
        "Una associació cultural dedicada a la promoció de la llengua catalana."
      ],
      answer: 0,
      explanation: "La Mancomunitat de Catalunya era una federació de les quatre diputacions provincials catalanes (Barcelona, Girona, Lleida i Tarragona) amb funcions purament administratives."
    },
    {
      question: "Qui va ser el primer president de la Mancomunitat de Catalunya?",
      options: [
        "Enric Prat de la Riba.",
        "Francesc Macià.",
        "Lluís Companys.",
        "Josep Tarradellas."
      ],
      answer: 0,
      explanation: "Enric Prat de la Riba va ser el primer president de la Mancomunitat de Catalunya, seguit per Josep Puig i Cadafalch."
    },
    {
      question: "Quines competències tenia la Mancomunitat de Catalunya?",
      options: [
        "Les mateixes que les diputacions provincials, sense competències legislatives.",
        "Poder legislatiu per crear lleis catalanes.",
        "Control total sobre l'educació i la sanitat a Catalunya.",
        "Cap competència administrativa ni política."
      ],
      answer: 0,
      explanation: "La Mancomunitat de Catalunya tenia les mateixes competències que les diputacions provincials, sense poder legislatiu, i es dedicava a tasques administratives com la creació d'infraestructures i la promoció cultural."
    },
    {
      question: "Quines institucions culturals i científiques va crear o consolidar la Mancomunitat de Catalunya?",
      options: [
        "Institut d'Estudis Catalans, Biblioteca de Catalunya, Escola Industrial, entre d'altres.",
        "Universitat de Barcelona i Museu Nacional d'Art de Catalunya.",
        "Teatre del Liceu i Palau de la Música Catalana.",
        "Sagrada Família i Parc Güell."
      ],
      answer: 0,
      explanation: "La Mancomunitat de Catalunya va crear o consolidar institucions com l'Institut d'Estudis Catalans, la Biblioteca de Catalunya, l'Escola Industrial, l'Escola Superior de Belles Arts, l'Escola Superior d'Alts Estudis Comercials i l'Escola del Treball."
    },
    {
      question: "Quina va ser una de les contribucions més destacades de la Mancomunitat en l'àmbit cultural?",
      options: [
        "La protecció i promoció de l'obra de Pompeu Fabra per a la normalització de la llengua catalana.",
        "La construcció de la Sagrada Família.",
        "La creació del Museu Picasso.",
        "L'organització dels Jocs Olímpics de Barcelona."
      ],
      answer: 0,
      explanation: "Una de les contribucions més destacades de la Mancomunitat va ser la protecció i promoció de l'obra de Pompeu Fabra, qui va normalitzar la llengua catalana dotant-la d'una gramàtica i un diccionari actualitzats."
    },
    {
      question: "Quin era l'objectiu principal de la Mancomunitat de Catalunya?",
      options: [
        "Obtenir l'autonomia política per a Catalunya.",
        "Unir les quatre diputacions catalanes per a fins administratius.",
        "Declarar la independència de Catalunya.",
        "Establir una monarquia catalana independent."
      ],
      answer: 1,
      explanation: "L'objectiu principal de la Mancomunitat de Catalunya era unir les quatre diputacions catalanes per a fins administratius, representant el primer reconeixement per part de l'estat espanyol de la personalitat i unitat de Catalunya des de 1714."
    },
    {
        question: "Per què es va considerar la creació de la Mancomunitat com un reconeixement important per a Catalunya?",
        options: [
          "Perquè permetia l'autogovern i la creació de lleis catalanes.",
          "Perquè reconeixia la unitat i personalitat de Catalunya després de 1714.",
          "Perquè va establir la independència política de Catalunya.",
          "Perquè va substituir l'administració central espanyola a Catalunya."
        ],
        answer: 1,
        explanation: "La creació de la Mancomunitat es va considerar un reconeixement important perquè representava la unitat i personalitat de Catalunya per primera vegada des de la derrota de 1714."
      },
      {
        question: "Quins van ser els principals impulsors polítics de la Mancomunitat de Catalunya?",
        options: [
          "La Lliga Regionalista i altres forces catalanistes.",
          "El Partit Socialista Obrer Espanyol.",
          "Els sindicats anarquistes de Barcelona.",
          "El govern central espanyol sense suport català."
        ],
        answer: 0,
        explanation: "La Lliga Regionalista i altres forces catalanistes van ser els principals impulsors de la creació de la Mancomunitat de Catalunya."
      },
      {
        question: "Quan es va crear oficialment la Mancomunitat de Catalunya?",
        options: [
          "1901",
          "1914",
          "1923",
          "1931"
        ],
        answer: 1,
        explanation: "La Mancomunitat de Catalunya es va crear oficialment l'any 1914."
      },
      {
        question: "Quina va ser la reacció del govern central espanyol a la creació de la Mancomunitat?",
        options: [
          "Un suport total i incondicional.",
          "Un reconeixement limitat i sense atribucions legislatives.",
          "Una oposició frontal i l'intent de dissoldre-la.",
          "La invitació a altres regions a crear mancomunitats similars."
        ],
        answer: 1,
        explanation: "El govern central va reconèixer la Mancomunitat però amb atribucions molt limitades i sense competències legislatives."
      },
      {
        question: "Quina figura cultural va tenir un paper destacat en la normalització del català durant el període de la Mancomunitat?",
        options: [
          "Jacint Verdaguer.",
          "Pompeu Fabra.",
          "Joan Maragall.",
          "Salvador Dalí."
        ],
        answer: 1,
        explanation: "Pompeu Fabra va ser clau en la normalització de la llengua catalana, elaborant una gramàtica i un diccionari moderns amb el suport de la Mancomunitat."
      },
      {
        question: "Quin va ser l'impacte de la dictadura de Primo de Rivera sobre la Mancomunitat?",
        options: [
          "La seva dissolució l'any 1925.",
          "L'augment de les seves competències.",
          "La conversió en un govern autònom de Catalunya.",
          "La seva transformació en una república catalana."
        ],
        answer: 0,
        explanation: "La dictadura de Primo de Rivera va dissoldre la Mancomunitat l'any 1925, considerant-la un obstacle per a la unitat de l'estat espanyol."
      },
      {
        question: "Com es va finançar principalment la Mancomunitat de Catalunya?",
        options: [
          "Amb impostos directes recaptats per les diputacions provincials.",
          "Amb subvencions del govern central espanyol.",
          "Amb aportacions voluntàries de la societat catalana.",
          "Amb préstecs internacionals."
        ],
        answer: 0,
        explanation: "La Mancomunitat es va finançar principalment amb impostos recaptats per les diputacions provincials que la conformaven."
      },
      {
        question: "Quin paper va jugar Enric Prat de la Riba en la història de la Mancomunitat?",
        options: [
          "Va ser el seu primer president i un dels seus principals impulsors.",
          "Va liderar la seva dissolució l'any 1925.",
          "Va criticar la seva creació per considerar-la insuficient.",
          "Va ser el representant del govern central espanyol davant la Mancomunitat."
        ],
        answer: 0,
        explanation: "Enric Prat de la Riba va ser el primer president de la Mancomunitat i un dels seus principals impulsors, dedicant-se a modernitzar Catalunya."
      },
      {
        question: "Quin va ser un dels èxits més importants de la Mancomunitat en termes d'infraestructures?",
        options: [
          "L'expansió de la xarxa de carreteres i telèfons.",
          "La construcció de línies de tren a tot Catalunya.",
          "La creació de ports marítims moderns.",
          "L'establiment d'una xarxa elèctrica nacional."
        ],
        answer: 0,
        explanation: "La Mancomunitat va ser responsable de l'expansió de la xarxa de carreteres i telèfons, millorant les comunicacions a Catalunya."
      },
      {
        question: "Quins serveis socials va prioritzar la Mancomunitat de Catalunya?",
        options: [
          "Educació i salut pública.",
          "Defensa i seguretat.",
          "Comerç exterior i immigració.",
          "Exploració espacial."
        ],
        answer: 0,
        explanation: "La Mancomunitat va prioritzar serveis socials com l'educació i la salut pública, establint escoles i millorant els serveis sanitaris."
      }
    ];
    
   
  