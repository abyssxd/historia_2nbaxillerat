const questions = [
  {
    "category": "Cultura i Societat",
    "question": "Quin era el nombre aproximat d'habitants d'Espanya als anys 30?",
    "options": [
      "15 milions",
      "25 milions",
      "35 milions",
      "45 milions"
    ],
    "answer": 1,
    "explanation": "El text indica que Espanya tenia uns 25 milions d'habitants als anys 30."
  },
  {
    "category": "Cultura i Societat",
    "question": "Quina era l'esperança de vida mitjana a Espanya als anys 30?",
    "options": [
      "30 anys",
      "40 anys",
      "50 anys",
      "60 anys"
    ],
    "answer": 2,
    "explanation": "L'esperança de vida era d'uns 50 anys, segons el text."
  },
  {
    "category": "Cultura i Societat",
    "question": "Quin percentatge d'analfabetisme es va registrar a Espanya als anys 30?",
    "options": [
      "25%",
      "35%",
      "45%",
      "55%"
    ],
    "answer": 2,
    "explanation": "El text indica que el 45% de la població era analfabeta."
  },
  {
    "category": "Cultura i Societat",
    "question": "Quina reforma educativa es va impulsar durant el bienni reformador?",
    "options": [
      "La construcció d'aules d'educació primària gratuïta, laica i mixta",
      "L'ensenyament exclusiu del castellà",
      "La privatització de l'educació",
      "L'abolició de l'educació pública"
    ],
    "answer": 0,
    "explanation": "Es van construir milers d'aules d'educació primària gratuïta, laica i mixta, millorant l'accés a l'educació."
  },
  {
    "category": "Cultura i Societat",
    "question": "Quin avanç en drets civils va aconseguir la República per a les dones?",
    "options": [
      "El dret a vot",
      "El dret a portar armes",
      "El dret a ser membre del parlament",
      "El dret a la propietat"
    ],
    "answer": 0,
    "explanation": "Les dones van aconseguir el dret a vot, un avanç important en els drets civils."
  },
  {
    "category": "Cultura i Societat",
    "question": "Quin impacte va tenir la creació de l'Estatut d'Autonomia de Catalunya en la cultura catalana?",
    "options": [
      "Va reforçar la identitat catalana",
      "No va tenir cap impacte",
      "Va eliminar la llengua catalana",
      "Va imposar la cultura castellana"
    ],
    "answer": 0,
    "explanation": "L'Estatut d'Autonomia va permetre que Catalunya tingués un govern propi i va reforçar la seva identitat cultural."
  },
  {
    "category": "Cultura i Societat",
    "question": "Quin grup social es va veure especialment afectat per la gran desigualtat econòmica dels anys 30?",
    "options": [
      "Els obrers industrials",
      "Els agricultors i jornaleros",
      "Els funcionaris",
      "Els comerciants"
    ],
    "answer": 1,
    "explanation": "La gran desigualtat econòmica va afectar principalment als agricultors i jornaleros, que eren la majoria de la població activa."
  },
  {
    "category": "Cultura i Societat",
    "question": "Quin fenomen social va contribuir a la radicalització política a Espanya als anys 30?",
    "options": [
      "La mobilitat social",
      "Les divisions socials i ideològiques",
      "L'augment de la industrialització",
      "La cooperació internacional"
    ],
    "answer": 1,
    "explanation": "Les marcades divisions socials i ideològiques van contribuir a la radicalització política que va desembocar en conflictes majors."
  },
  {
    category: "Cultura i Societat",
    question: "Segons el text, quants milions d'habitants tenia Espanya als anys 30?",
    options: [
      "15 milions",
      "25 milions",
      "35 milions",
      "45 milions"
    ],
    answer: 1,
    explanation: "Espanya tenia aproximadament 25 milions d'habitants als anys 30."
  },
  {
    category: "Cultura i Societat",
    question: "Quina era l'esperança de vida mitjana a Espanya als anys 30?",
    options: [
      "30 anys",
      "40 anys",
      "50 anys",
      "60 anys"
    ],
    answer: 2,
    explanation: "L'esperança de vida era d'aproximadament 50 anys."
  },
  {
    category: "Cultura i Societat",
    question: "Quin percentatge d'analfabetisme es va registrar a Espanya als anys 30?",
    options: [
      "25%",
      "35%",
      "45%",
      "55%"
    ],
    answer: 2,
    explanation: "El 45% de la població era analfabeta, segons el text."
  },
  {
    category: "Cultura i Societat",
    question: "Quina reforma educativa es va impulsar durant la Segona República?",
    options: [
      "La construcció d'aules d'educació primària gratuïta, laica i mixta",
      "L'ensenyament exclusiu del castellà",
      "La privatització de l'educació",
      "L'abolició de l'educació pública"
    ],
    answer: 0,
    explanation: "Es van construir milers d'aules d'educació primària gratuïta, laica i mixta, millorant l'accés a l'educació."
  },
  {
    category: "Cultura i Societat",
    question: "Quin avanç en drets civils va aconseguir la República per a les dones?",
    options: [
      "El dret a vot",
      "El dret a portar armes",
      "El dret a ser membre del parlament",
      "El dret a la propietat"
    ],
    answer: 0,
    explanation: "Les dones van aconseguir el dret a vot, un avanç important en els drets civils."
  },
  {
    category: "Cultura i Societat",
    question: "Quin impacte va tenir la creació de l'Estatut d'Autonomia de Catalunya en la cultura catalana?",
    options: [
      "Va reforçar la identitat catalana",
      "No va tenir cap impacte",
      "Va eliminar la llengua catalana",
      "Va imposar la cultura castellana"
    ],
    answer: 0,
    explanation: "L'Estatut d'Autonomia va permetre a Catalunya tenir un govern propi, reforçant la seva identitat cultural."
  },
  {
    category: "Cultura i Societat",
    question: "Quin grup social es va veure especialment afectat per la gran desigualtat econòmica dels anys 30?",
    options: [
      "Els obrers industrials",
      "Els agricultors i jornaleros",
      "Els funcionaris",
      "Els comerciants"
    ],
    answer: 1,
    explanation: "Els agricultors i jornaleros, que constituïen la majoria de la població activa, van patir les conseqüències de la desigualtat."
  },
  {
    category: "Cultura i Societat",
    question: "Quin fenomen social va contribuir a la radicalització política a Espanya als anys 30?",
    options: [
      "La mobilitat social",
      "Les divisions socials i ideològiques",
      "L'augment de la industrialització",
      "La cooperació internacional"
    ],
    answer: 1,
    explanation: "Les marcades divisions socials i ideològiques van contribuir a la radicalització política i a l'escalada de conflictes."
  },
];
