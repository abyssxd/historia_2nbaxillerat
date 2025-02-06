const questions = [
    {
      question: "Quina era la població aproximada d'Espanya l'any 1800?",
      options: [
        "8 milions d'habitants",
        "10 milions d'habitants",
        "11,5 milions d'habitants",
        "13 milions d'habitants"
      ],
      answer: 2,
      explanation: "L'any 1800, Espanya tenia aproximadament 11,5 milions d'habitants."
    },
    {
      question: "Quina va ser la població d'Espanya l'any 1900?",
      options: [
        "15 milions d'habitants",
        "16,5 milions d'habitants",
        "18,6 milions d'habitants",
        "20 milions d'habitants"
      ],
      answer: 2,
      explanation: "L'any 1900, la població d'Espanya va arribar als 18,6 milions d'habitants."
    },
    {
      question: "Quin va ser l'augment percentual de la població espanyola entre 1800 i 1900?",
      options: [
        "50%",
        "61,7%",
        "70%",
        "80%"
      ],
      answer: 1,
      explanation: "Entre 1800 i 1900, la població espanyola va augmentar un 61,7%."
    },
    {
      question: "Quina era l'esperança de vida a Espanya l'any 1900?",
      options: [
        "30 anys",
        "34,8 anys",
        "40 anys",
        "45 anys"
      ],
      answer: 1,
      explanation: "L'any 1900, l'esperança de vida a Espanya era de 34,8 anys."
    },
    {
      question: "Quina era l'esperança de vida a França, Gran Bretanya o Suècia l'any 1900?",
      options: [
        "35 anys",
        "40 anys",
        "45 anys",
        "50 anys"
      ],
      answer: 2,
      explanation: "A França, Gran Bretanya o Suècia, l'esperança de vida l'any 1900 superava els 45 anys."
    },
    {
      question: "Quina era la principal activitat econòmica a Espanya durant el segle XIX?",
      options: [
        "Indústria tèxtil",
        "Agricultura",
        "Mineria",
        "Comerç marítim"
      ],
      answer: 1,
      explanation: "Durant el segle XIX, l'agricultura continuava sent la principal activitat econòmica a Espanya."
    },
    {
      question: "Quin percentatge de la població activa espanyola treballava en l'agricultura al voltant de 1900?",
      options: [
        "50%",
        "60%",
        "70%",
        "80%"
      ],
      answer: 2,
      explanation: "Al voltant de 1900, el 70% de la població activa espanyola treballava en l'agricultura."
    },
    {
      question: "Quina va ser una de les conseqüències de les desamortitzacions de Mendizábal i Madoz?",
      options: [
        "Redistribució equitativa de la terra entre els camperols",
        "Consolidació de la propietat privada i augment dels latifundis",
        "Nacionalització de totes les terres",
        "Increment de la productivitat agrícola"
      ],
      answer: 1,
      explanation: "Les desamortitzacions van consolidar la propietat privada i van augmentar els latifundis en mans de grans propietaris."
    },
    {
      question: "Quina va ser la principal indústria a Catalunya durant el segle XIX?",
      options: [
        "Indústria tèxtil cotonera",
        "Indústria siderúrgica",
        "Indústria química",
        "Indústria alimentària"
      ],
      answer: 0,
      explanation: "La indústria tèxtil cotonera va ser la principal a Catalunya durant el segle XIX."
    },
    {
      question: "Quina regió d'Espanya es va destacar per la seva indústria siderúrgica al segle XIX?",
      options: [
        "Andalusia",
        "Galícia",
        "País Basc",
        "València"
      ],
      answer: 2,
      explanation: "El País Basc es va destacar per la seva indústria siderúrgica al segle XIX, especialment amb Altos Hornos de Vizcaya."
    },
    {
      question: "Quin mitjà de transport va ser clau per al desenvolupament econòmic d'Espanya al segle XIX?",
      options: [
        "Automòbil",
        "Ferrocarril",
        "Aviació",
        "Vaixell de vapor"
      ],
      answer: 1,
      explanation: "El ferrocarril va ser clau per al desenvolupament econòmic d'Espanya al segle XIX, millorant les comunicacions i el transport de mercaderies."
    },
    {
      question: "Quina va ser una de les conseqüències de la lenta industrialització a Espanya durant el segle XIX?",
      options: [
        "Augment de la productivitat agrícola",
        "Emigració massiva a ultramar",
        "Disminució de la població urbana",
        "Increment de la riquesa nacional"
      ],
      answer: 1,
      explanation: "La lenta industrialització va provocar una emigració massiva a ultramar, especialment cap a l'Amèrica Llatina i el nord d'Àfrica."
    },
    {
      question: "Quina era la situació de la propietat de la terra a Espanya després de les desamortitzacions?",
      options: [
        "Distribució equitativa entre petits propietaris",
        "Concentració en mans de grans propietaris i noblesa",
        "Propietat col·lectiva de les terres",
        "Nacionalització de totes les terres"
      ],
      answer: 1,
      explanation: "Després de les desamortitzacions, la propietat de la terra es va concentrar en mans de grans propietaris i la noblesa, consolidant els latifundis."
    },
    {
        question: "Quina va ser una de les reformes agràries liberals al segle XIX a Espanya?",
        options: [
          "Abolició del règim senyorial.",
          "Introducció de la propietat col·lectiva.",
          "Nacionalització de les terres.",
          "Redistribució igualitària de les terres."
        ],
        answer: 0,
        explanation: "La reforma agrària liberal va incloure l'abolició del règim senyorial, eliminant privilegis feudals i consolidant la propietat privada de la terra."
      },
      {
        question: "Quina era la principal limitació de les desamortitzacions per als camperols?",
        options: [
          "Les terres es van vendre a preus inaccessibles per als camperols pobres.",
          "Es va prohibir als camperols participar en les subhastes de terres.",
          "Les terres només es van distribuir entre els militars.",
          "Els camperols van perdre el dret a treballar les terres comunals."
        ],
        answer: 0,
        explanation: "Les terres desamortitzades es van vendre sovint a preus molt alts, fent-les inaccessibles per als camperols pobres i beneficiant principalment la burgesia i grans propietaris."
      },
      {
        question: "Quina va ser la conseqüència de la concentració de terres en latifundis al sud d'Espanya?",
        options: [
          "Un increment de la productivitat agrícola.",
          "Condicions de treball precàries i desigualtats socials.",
          "L'emigració massiva cap al nord d'Europa.",
          "La millora de les condicions de vida dels camperols."
        ],
        answer: 1,
        explanation: "La concentració de terres en latifundis va provocar condicions de treball precàries per als jornalers i va accentuar les desigualtats socials."
      },
      {
        question: "Quin va ser un dels efectes de la manca d'una reforma agrària efectiva a Espanya?",
        options: [
          "Augment de la productivitat agrícola.",
          "Conflictes socials i vagues rurals.",
          "Industrialització ràpida de les zones rurals.",
          "Descens de la població a les ciutats."
        ],
        answer: 1,
        explanation: "La manca d'una reforma agrària efectiva va provocar conflictes socials, incloent-hi vagues rurals i tensions entre propietaris i jornalers."
      },
      {
        question: "Quina diferència destacava entre el model agrari del nord i del sud d'Espanya al segle XIX?",
        options: [
          "Al nord predominaven els latifundis, mentre que al sud les petites propietats.",
          "Al sud predominaven els latifundis, mentre que al nord les petites propietats.",
          "El nord era principalment industrial, mentre que el sud era agrícola.",
          "El sud tenia una economia mixta, mentre que el nord era agrícola."
        ],
        answer: 1,
        explanation: "Al sud d'Espanya predominaven els latifundis amb grans extensions de terra, mentre que al nord predominaven les petites propietats familiars."
      },
      {
        question: "Quina era la situació de la indústria tèxtil a Catalunya durant el segle XIX?",
        options: [
          "En declivi constant per la competència estrangera.",
          "Un sector en creixement que liderava la industrialització espanyola.",
          "Principalment enfocat a la producció de llana.",
          "Sense importància en l'economia regional."
        ],
        answer: 1,
        explanation: "La indústria tèxtil catalana, especialment la cotonera, va liderar la industrialització d'Espanya durant el segle XIX."
      },
      {
        question: "Quins van ser els principals recursos explotats per la indústria minera espanyola al segle XIX?",
        options: [
          "Petroli i gas natural.",
          "Ferro, carbó i plom.",
          "Or i plata.",
          "Coure i urani."
        ],
        answer: 1,
        explanation: "La indústria minera espanyola es va centrar en l'explotació de recursos com el ferro, el carbó i el plom, essencials per a la industrialització."
      },
      {
        question: "Quin va ser l'impacte de la construcció del ferrocarril en l'economia espanyola del segle XIX?",
        options: [
          "Va impulsar el comerç intern i el desenvolupament industrial.",
          "Va provocar la fallida de la indústria tèxtil catalana.",
          "Va limitar les exportacions agrícoles a les colònies.",
          "Va fer decreixer les ciutats industrials."
        ],
        answer: 0,
        explanation: "La construcció del ferrocarril va impulsar el comerç intern, connectant les regions espanyoles i afavorint el desenvolupament industrial."
      },
      {
        question: "Com es finançava principalment la construcció del ferrocarril a Espanya?",
        options: [
          "Amb inversions estrangeres.",
          "Amb impostos directes als camperols.",
          "Amb donacions privades dels cacics.",
          "Amb subvencions de les colònies americanes."
        ],
        answer: 0,
        explanation: "La construcció del ferrocarril a Espanya es va finançar principalment amb inversions estrangeres, especialment de França i el Regne Unit."
      },
      {
        question: "Quina era la principal dificultat per a la industrialització d'Espanya al segle XIX?",
        options: [
          "L'absència de recursos naturals.",
          "La manca d'inversions estrangeres.",
          "El predomini de l'agricultura i la manca de demanda interna.",
          "La competència directa amb els Estats Units."
        ],
        answer: 2,
        explanation: "El predomini de l'agricultura i la manca de demanda interna van limitar el desenvolupament industrial d'Espanya al segle XIX."
      }
    ];
    
   
  