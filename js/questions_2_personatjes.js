const questions = [
  {
    "category": "Personatges",
    "question": "Quin monarca va abdicar i va marxar a l'exili per donar pas a la República?",
    "options": [
      "Alfons XII",
      "Alfons XIII",
      "Felip V",
      "Joan Carles I"
    ],
    "answer": 1,
    "explanation": "Alfons XIII va abdicar i va marxar a l'exili, marcant el final de la monarquia i l'inici de la República."
  },
  {
    "category": "Personatges",
    "question": "Quins dos líders es menciona com a referents en la transició cap a la República?",
    "options": [
      "Niceto Alcalá-Zamora i Manuel Azaña",
      "Francisco Franco i Emilio Mola",
      "Alejandro Lerroux i Gil Robles",
      "Lluís Companys i Francesc Macià"
    ],
    "answer": 0,
    "explanation": "Niceto Alcalá-Zamora i Manuel Azaña són les figures clau esmentades en la transició republicana."
  },
  {
    "category": "Personatges",
    "question": "Qui va proclamar l'Estat Català durant els fets del 6 d'octubre de 1934?",
    "options": [
      "Francesc Macià",
      "Lluís Companys",
      "Manuel Azaña",
      "Alejandro Lerroux"
    ],
    "answer": 1,
    "explanation": "Lluís Companys, president de la Generalitat, va proclamar l'Estat Català el 6 d'octubre de 1934."
  },
  {
    "category": "Personatges",
    "question": "Quin líder va ser el referent principal de la CEDA durant el bienni negre?",
    "options": [
      "Gil Robles",
      "Alejandro Lerroux",
      "Francisco Franco",
      "Manuel Azaña"
    ],
    "answer": 0,
    "explanation": "Gil Robles va ser el líder principal de la CEDA, el partit de dreta."
  },
  {
    "category": "Personatges",
    "question": "Qui va encapçalar la repressió a Astúries durant la revolta?",
    "options": [
      "Lluís Companys",
      "General Franco",
      "General Sanjurjo",
      "Alejandro Lerroux"
    ],
    "answer": 1,
    "explanation": "El General Franco va encapçalar l'exèrcit que va reprimir la revolta d'Astúries."
  },
  {
    "category": "Personatges",
    "question": "Quin general va ser un dels líders implicats en el cop d'estat conegut com 'sanjurjada'?",
    "options": [
      "General Sanjurjo",
      "General Franco",
      "General Mola",
      "General Aznar"
    ],
    "answer": 0,
    "explanation": "El General Sanjurjo va ser un dels líders clau en el cop d'estat de la sanjurjada."
  },
  {
    "category": "Personatges",
    "question": "Quin sobrenom va rebre un dels líders de la revolta de Casas Viejas?",
    "options": [
      "El Magnífic",
      "Seisdedos",
      "El Rebel",
      "El Popular"
    ],
    "answer": 1,
    "explanation": "Un dels líders de la revolta de Casas Viejas va ser conegut com a 'Seisdedos'."
  },
  {
    "category": "Personatges",
    "question": "Quina figura va ser reconeguda per defensar els drets de les dones durant la República?",
    "options": [
      "Clara Campoamor",
      "Lluís Companys",
      "Alejandro Lerroux",
      "Gil Robles"
    ],
    "answer": 0,
    "explanation": "Clara Campoamor va ser una de les principals defensors dels drets polítics de les dones."
  },
  {
    "category": "Personatges",
    "question": "Quina figura anarquista es destaca per la seva postura radical sobre l'emancipació femenina?",
    "options": [
      "Frederica Montseny",
      "Margarita Nelken",
      "Victoria Kent",
      "Clara Campoamor"
    ],
    "answer": 0,
    "explanation": "Frederica Montseny, vinculada al CNT, va defensar una visió radical sobre l'emancipació de la dona."
  },
  {
    category: "Personatges",
    question: "Qui va ser el Tinent de la Guàrdia d'Assalt assassinat el 12 de juliol de 1936?",
    options: [
      "José Castillo",
      "José Calvo Sotelo",
      "Juan Negrín",
      "Lluís Companys"
    ],
    answer: 0,
    explanation: "José Castillo, militante republicà proper al PSOE i la UMRA, va ser assassinat el 12 de juliol de 1936."
  },
  {
    category: "Personatges",
    question: "Qui va ser el líder del 'Bloque Nacional' assassinat el 13 de juliol de 1936?",
    options: [
      "José Castillo",
      "José Calvo Sotelo",
      "Franco",
      "Sanjurjo"
    ],
    answer: 1,
    explanation: "José Calvo Sotelo, líder del 'Bloque Nacional', va ser assassinat el 13 de juliol de 1936."
  },
  {
    category: "Personatges",
    question: "Quin general, conegut com 'El Director', va convocar la reunió secreta a Madrid?",
    options: [
      "General Sanjurjo",
      "General Franco",
      "General Mola",
      "General Varela"
    ],
    answer: 2,
    explanation: "El General Mola, conegut com 'El Director', va ser qui va convocar la reunió secreta per planificar el cop d'estat."
  },
  {
    category: "Personatges",
    question: "Quin líder militar va mostrar reticència respecte al cop d'estat i, tot i així, finalment es va sumar?",
    options: [
      "General Franco",
      "General Mola",
      "General Queipo de Llano",
      "General Cabanellas"
    ],
    answer: 0,
    explanation: "General Franco, tot i que inicialment dubtava, finalment es va sumar als colpistes."
  },
  {
    category: "Personatges",
    question: "Qui va encapçalar la Junta de Defensa Nacional a Burgos?",
    options: [
      "General Cabanellas",
      "General Sanjurjo",
      "General Mola",
      "General Franco"
    ],
    answer: 0,
    explanation: "El General Cabanellas va ser designat per encapçalar la Junta de Defensa Nacional a Burgos."
  },
  {
    category: "Personatges",
    question: "Qui va nomenar a José Giral com a president després de la dimissió de Casares Quiroga?",
    options: [
      "Manuel Azaña",
      "Juan Negrín",
      "Santiago Casares Quiroga",
      "Lluís Companys"
    ],
    answer: 0,
    explanation: "Manuel Azaña, president de la República, va nomenar a José Giral després de la dimissió de Casares Quiroga."
  },
  {
    category: "Personatges",
    question: "Quin líder anarquista va ser segrestat, torturat i assassinat durant els Fets de Maig de 1937?",
    options: [
      "Andreu Nin",
      "Bonaventura Durruti",
      "Lluís Companys",
      "Juan Negrín"
    ],
    answer: 0,
    explanation: "Andreu Nin, figura clau del POUM, va ser segrestat i assassinat durant els Fets de Maig de 1937."
  },
  {
    category: "Personatges",
    question: "Quin personatge va ser conegut com 'el banquer de Franco'?",
    options: [
      "Juan March",
      "Alejandro Goicoechea",
      "José Calvo Sotelo",
      "Emilio Mola"
    ],
    answer: 0,
    explanation: "Juan March era conegut com 'el banquer de Franco' per la seva col·laboració financera amb els colpistes."
  }
];
