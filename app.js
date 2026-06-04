const BLOCKS = [
  {
    id: "b1",
    label: "Fundamentos",
    color: "#7c9ef8",
    title: "&#127315; Fundamentos Cirurgicos",
    meta: "Base obrigatoria antes de qualquer especialidade",
    days: [
      {
        sec: "Semiologia",
        title: "Anamnese Cirurgica",
        sub: "Como interrogar o paciente",
        topics: [
          "Queixa principal e historia da doenca atual: inicio, duracao, carater, intensidade, irradiacao",
          "Antecedentes cirurgicos: quais cirurgias, anestesias, complicacoes anteriores",
          "Antecedentes anestesicos: reacoes adversas, dificuldade de intubacao previa",
          "Alergias a medicamentos: penicilinas, AINEs, latex — perguntar ativamente",
          "Medicamentos que interferem: anticoagulantes, AAS, corticoides, hipoglicemiantes, IECA",
        ],
      },
      {
        sec: "Semiologia",
        title: "Exame Fisico Abdominal",
        sub: "Do geral ao especifico — o que procurar",
        topics: [
          "Inspecao: cicatrizes, distensao, peristalse visivelm, circulacao colateral, assimetrias",
          "Ausculta: RHA (antes de palpar), sopros, atrito peritoneal",
          "Percussao: timpanismo (gas), macicez (liquido/massa), sinal do macico de flanco",
          "Palpacao superficial e profunda: temperatura, tensao, palpacao bimanual",
          "Descompressao brusca (Blumberg): positivo = irritacao peritoneal parietal",
        ],
      },
      {
        sec: "Semiologia",
        title: "Sinais Clinicos Especificos",
        sub: "Memorizar quais indicam cada doenca",
        topics: [
          "Murphy: dor a palpacao do HD com inspiracao profunda = colecistite (sensib 65%)",
          "McBurney: dor no ponto a 1/3 do ileocdis-umbilical = apendicite",
          "Rovsing: palpacao de FIE causa dor em FID = apendicite",
          "Psoas e obturador: apendicite retrocecal ou pelvica",
          "Giordano: punho-percussao lombar positiva = pielonefrite ou urolitiase",
        ],
      },
      {
        sec: "Pre-Operatorio",
        title: "Exames Pre-Operatorios",
        sub: "O que pedir, em quem e quando",
        topics: [
          "Hemograma: anemia, leucocitose, plaquetopenia — corrigir antes de operar",
          "Coagulograma (TP/INR e TTPa): triagem de coagulopatias, monitorar anticoagulados",
          "Funcao renal (creatinina, ureias) e eletrolitos: ajuste de doses, hidratacao",
          "ECG: rotina acima de 40-50 anos ou cardiopata — arritmias, BAV, isquemia",
          "Rx de torax: rotina em >50 anos, tabagistas, cardiologicos, pneumopatas",
        ],
      },
      {
        sec: "Pre-Operatorio",
        title: "Avaliacao de Risco Cirurgico",
        sub: "Estratificar antes de operar salva vidas",
        topics: [
          "Classificacao ASA: I (saudavel) a VI (morte cerebral) — 2-3 exemplos de cada classe",
          "Indice de Lee Revised: 6 fatores, risco cardiaco — baixo (<1%), intermediario, alto (>5%)",
          "Risco pulmonar: tabagismo, DPOC, obesidade, apneia — espirometria quando indicar",
          "Escore de Caprini: risco de TVP — baixo, moderado, alto — define a profilaxia",
          "Consentimento informado: competencia, informacao, autonomia — documentar sempre",
        ],
      },
      {
        sec: "Pre-Operatorio",
        title: "Preparo Pre-Operatorio e Profilaxias",
        sub: "O que fazer nas horas antes da cirurgia",
        topics: [
          "Jejum: solidos 6h, liquidos claros (agua, cha, suco sem polpa) apenas 2h — protocolo ERAS",
          "Preparo hematologico: Hb < 8 g/dL em eletiva: corrigir antes; plaquetas, INR",
          "Manejo de anticoagulantes: varfarina suspender 5 dias; NOACs 24-48h; bridging com HBPM",
          "Profilaxia de TVP: heparina nao fracionada 5.000 UI SC 2h antes + meias de compressao",
          "Profilaxia antibiotica: cefalozina 2g IV 30-60 min antes da incisao — dose unica na maioria",
        ],
      },
      {
        sec: "Anestesiologia",
        title: "Tipos de Anestesia",
        sub: "Modalidades e indicacoes de cada uma",
        topics: [
          "Anestesia geral: inconsciencia + analgesia + bloqueio NM — IOT ou mascara laringea",
          "Raquianestesia: injecao no espaco subaracnoide L3-L4, bloqueio ate T4 — rapida e segura",
          "Peridural: espaco peridural, cateter para analgesia continua — obstetricia e pos-op",
          "Anestesia local: lidocaina, bupivacaina — procedimentos superficiais, infiltracao",
          "Bloqueio de plexo: braquial (MMSS), femoral, ciatico, TAP block (parede abdominal)",
        ],
      },
      {
        sec: "Anestesiologia",
        title: "Farmacos Anestesicos",
        sub: "Indutores, bloqueadores e reversores",
        topics: [
          "Propofol: indutor IV padrao, inicio em 30s, recuperacao rapida, antiemetico — causa hipotensao",
          "Cetamina: dissociativa, mantem reflexos e PA — trauma, paciente instavel, crianca",
          "Etomidato: menor repercussao hemodinamica — cardiologicos, idosos, instabilidade",
          "Succinilcolina: despolarizante, inicio 60s, duracao 10 min — contraindicada em hipercalemia e queimados tardios",
          "Rocurônio: nao despolarizante, 60-90s, revertido por sugamadex — alternativa segura",
        ],
      },
      {
        sec: "Anestesiologia",
        title: "Complicacoes Anestesicas",
        sub: "Reconhecer e tratar imediatamente",
        topics: [
          "Hipertermia maligna: rigidez muscular + febre + rabdiolise + acidose — dantrolene IV urgente",
          "Laringoespasmo: fechamento glotico pos-extubacao — pressao positiva, succinilcolina 0,1 mg/kg",
          "Broncoespasmo: silbilios + pressao via aerea alta — salbutamol inalatorio, corticoide IV",
          "Consciencia intraoperatoria: acordar durante cirurgia — monitorar com BIS, causa litigo",
          "NVPO: ondansetrona + dexametasona profilaticos em pacientes de alto risco",
        ],
      },
      {
        sec: "Feridas",
        title: "Fases da Cicatrizacao",
        sub: "Entender o processo para reconhecer falhas",
        topics: [
          "Fase hemostasica (0-horas): vasoconstrissao, tampao plaquetario, cascata de coagulacao",
          "Fase inflamatoria (0-3 dias): neutrofilos (24h), macrofagos (48-72h) — desbridamento natural",
          "Fase proliferativa (3-21 dias): fibroblastos sintetizam colageno tipo III, angiogenese, epitelizacao",
          "Fase de remodelacao (21 dias-2 anos): colageno tipo III substituido por tipo I, resistencia maxima 80%",
          "Tipos de cicatrizacao: 1 intencao (bordas suturadas), 2 intencao (ferida aberta), 3 intencao (fechamento tardio)",
        ],
      },
      {
        sec: "Feridas",
        title: "Fatores que Prejudicam a Cicatrizacao",
        sub: "Por que algumas feridas nao fecham",
        topics: [
          "Infeccao: >100.000 bacterias/g de tecido inibe cicatrizacao — biofilme, ISC",
          "Diabetes mellitus: hiperglicemia altera funcao leucocitaria e sintese de colageno",
          "Desnutricao: albumina <3 g/dL, deficiencia de vitamina C e zinco — colesterol sintetizado",
          "Corticoides cronicos: reduzem inflamacao → menos macrofagos → menos colageno",
          "Isquemia e hipoxia: O2 essencial para hidroxilacao do colageno — tratar causa (DAP, anemia)",
        ],
      },
      {
        sec: "Feridas",
        title: "Suturas e Complicacoes de Feridas",
        sub: "Fios, tecnicas e o que pode dar errado",
        topics: [
          "Absorviveis: catgut (2 sem), vicryl (3-4 sem), PDS (6 sem) — uso em estruturas internas",
          "Nao absorviveis: nylon, prolene (pele) — retirar 5-10 dias (face) a 14 dias (dorso)",
          "Tecnicas: simples, continua, colchoeiro, subcuticular — quando cada uma tem vantagem",
          "Seroma: colecao serosa sob a pele — puncao, curativos compressivos, prevenir com eletrocauterio",
          "Deiscencia e eviscerassao: deiscencia sem saida de viscera vs eviscerassao = urgencia cirurgica",
        ],
      },
      {
        sec: "Infeccao",
        title: "Classificacao de Feridas e ISC",
        sub: "A base da profilaxia antibiotica",
        topics: [
          "Ferida limpa: cirurgia eletiva sem abertura de viscera — risco ISC < 2%, profilaxia controversa",
          "Ferida limpa-contaminada: abertura controlada (colecistectomia) — profilaxia obrigatoria",
          "Ferida contaminada: extravasamento visceral — ATB terapeutico pos-op, nao apenas profilaxia",
          "Ferida infectada: peritonite, abscesso — ATB terapeutico + drenagem cirurgica",
          "ISC superficial vs profunda vs orgao/espaco: criterios do CDC — saber diferenciar",
        ],
      },
      {
        sec: "Infeccao",
        title: "Antibioticoterapia e Infeccoes Graves",
        sub: "Profilaxia, terapeutica e infeccoes complexas",
        topics: [
          "Profilaxia: cefalozina 2g IV 30-60 min antes — redosagem a cada 4h em cirurgias longas",
          "Cobertura por sitio: abdominal (cefalozina + metronidazol), colo (ertapenem), ortopedia (cefalozina)",
          "Fascite necrosante: crepitacao, 'finger test' positivo, sepse grave — desbridamento amplo urgente",
          "Abscesso: 'ubi pus ibi evacua' — drenagem e o tratamento; ATB apenas adjuvante",
          "Germes prevalentes: S. aureus (ISC pele), E. coli + anaaerobios (ISC abdominal) — cultura orienta",
        ],
      },
      {
        sec: "Fluidos",
        title: "Compartimentos e Solucoes Intravenosas",
        sub: "Qual soro dar e por que",
        topics: [
          "Agua corporal total: 60% do peso — intracelular (40%) e extracelular (20%: intravascular 5% + intersticial 15%)",
          "Ringer lactato: composicao proxima ao plasma, sem risco de acidose hiperclorica — 1 escolha no trauma",
          "SF 0,9%: acidose hipercloremia com volumes grandes — evitar em choque hemorragico",
          "Glicose 5% e solucoes hipotonicas: distribuem no intracelular — nao repoe volume vascular",
          "Coloides (albumina, amido): nao superiores a cristaloides — uso restrito, custo alto",
        ],
      },
      {
        sec: "Fluidos",
        title: "Disturbios do Sodio",
        sub: "Hipo e hipernatremia — correcao cuidadosa",
        topics: [
          "Hiponatremia: Na <135 mEq/L — classificar por osmolaridade e volemia antes de tratar",
          "SIADH: euvolemico, urina concentrada (osmol >100), Na urinario >40 — restricao hidrica",
          "Correcao da hiponatremia: maximo 0,5-1 mEq/L/h (8-10 mEq/24h) — risco de mielinolise pontina",
          "Hipernatremia: Na >145 mEq/L — diabetes insipidus, perdas sensiveis aumentadas, restricao hidrica",
          "Correcao da hipernatremia: agua livre VO ou SF 0,45% — nao baixar Na >10 mEq/24h",
        ],
      },
      {
        sec: "Fluidos",
        title: "Disturbios do Potassio",
        sub: "ECG guia o tratamento",
        topics: [
          "Hipocalemia: K <3,5 mEq/L — vomitos, diarreia, diureticos tiazidicos, fraqueza muscular",
          "ECG na hipocalemia: achatamento de T, onda U proeminente, prolongamento QU",
          "Reposicao de K: oral preferivel; IV maximo 20 mEq/h em veia periferica — monitoracao",
          "Hipercalemia: K >5,5 mEq/L — IRA, acidose metabolica, IECA, espironolactona",
          "ECG na hipercalemia: T apiculada (tenda) → PR longo → QRS alargado → FV — gluconato de Ca IV primeiro",
        ],
      },
      {
        sec: "Fluidos",
        title: "Disturbios Acido-Base",
        sub: "4 passos para interpretar qualquer gasometria",
        topics: [
          "Passo 1 — pH: <7,35 acidose / >7,45 alcalose",
          "Passo 2 — PaCO2: >45 componente respiratorio acido / <35 respiratorio alcalino",
          "Passo 3 — HCO3: <22 componente metabolico acido / >26 metabolico alcalino",
          "Acidose metabolica com anion gap aumentado: MUDPILES (Metanol, Uremia, DKA, Propileno glicol, Isoniazida, Lactato, Etanol, Salicilatos)",
          "Compensacoes esperadas: acidose met → PaCO2 = 1,5 x HCO3 + 8 ± 2 (formula de Winter)",
        ],
      },
      {
        sec: "Choque",
        title: "Fisiopatologia e Classificacao do Choque",
        sub: "Entender choque e entender cirurgia de urgencia",
        topics: [
          "Definicao: oferta de O2 (DO2) insuficiente para demanda (VO2) tecidual — disfuncao organica",
          "Marcadores: lactato >2 mmol/L, BE negativo, ScvO2 <70%, oliguria (<0,5 mL/kg/h)",
          "Hipovolemico: classes I (<15%), II (15-30%), III (30-40%), IV (>40%) de volemia perdida",
          "Distributivo: septico (vasoplegia + LPS), anafilatico (histamina), neurognico (lesao medular)",
          "Cardiogenico e obstrutivo: DC baixo em ambos — IAM vs tamponamento/TEP — diferir clinicamente",
        ],
      },
      {
        sec: "Choque",
        title: "Tratamento do Choque",
        sub: "Metas, vasopressores e monitoracao",
        topics: [
          "Metas: PAM ≥65 mmHg, diurese ≥0,5 mL/kg/h, lactato em queda, ScvO2 >70%",
          "Hipovolemico: RL 1-2L rapido → avaliar resposta → hemocomponentes se trauma hemorragico",
          "Bundle sepsis 1h: hemocultura antes do ATB, ATB em <1h, lactato, cristaloide 30 mL/kg, vasopressor",
          "Vasopressores: norepinefrina (1 linha) → vasopressina (2 linha) — dopamina evitar no septico",
          "Anafilatico: epinefrina 0,3 mg IM na coxa IMEDIATAMENTE — anti-histaminico e corticoide sao adjuvantes",
        ],
      },
      {
        sec: "Hemostasia",
        title: "Coagulacao Cirurgica",
        sub: "Cascata, testes e manejo perioperatorio",
        topics: [
          "Via extrinsexa (TP/INR): fator tissular + VII — afetada por varfarina e deficiencia de vit K",
          "Via intrinseca (TTPa): XII → XI → IX → VIII — afetada por heparina nao fracionada",
          "Via comum: X → protrombina → trombina → fibrina — avaliada por ambos os testes",
          "Triade letal do trauma: hipotermia + acidose + coagulopatia — damage control resuscitation",
          "Acido tranexamico: inibidor da fibrinolise — 1g IV no trauma hemorragico em <3h (CRASH-2)",
        ],
      },
      {
        sec: "Hemostasia",
        title: "Transfusao de Hemocomponentes",
        sub: "Indicacoes corretas e reacoes transfusionais",
        topics: [
          "Concentrado de hemacias: Hb <7 g/dL (saudavel) ou <8 (cardiopata/idoso) — 1 CH sobe Hb ~1 g/dL",
          "Plaquetas: <50.000 com sangramento ou procedimento invasivo; <10.000 profilatico",
          "Plasma fresco congelado: INR >1,5 com sangramento, reversao de anticoagulantes, TTP",
          "Crioprecipitado: fibrinogenio <100 mg/dL, hemofilia A, von Willebrand",
          "Reacoes: hemolitica aguda (febre + hemoglobinuria → parar) TRALI (edema pulmonar), TACO (sobrecarga)",
        ],
      },
      {
        sec: "Pos-Operatorio",
        title: "Complicacoes Pos-Operatorias Precoces",
        sub: "Os primeiros 5 dias apos a cirurgia",
        topics: [
          "5 Ws da febre pos-op: Wind (atelectasia 1-2d), Water (ITU 3d), Wound (ISC 5d), Walking (TVP 5d), Wonder drugs",
          "Atelectasia: causa mais comum de febre em 48h — fisioterapia, incentivador inspiratorio, deambulacao",
          "Ileo paralitico: esperado 2-3d delgado, 3-5d colon — SNG se vomitos, deambulacao precoce",
          "Hemorragia pos-op precoce (<24h): retorno ao BO — nao insistir em conservador se instavel",
          "Deiscencia de anastomose: suspeitar dia 4-7 com piora clinica — TC com contraste, reoperacao",
        ],
      },
      {
        sec: "Pos-Operatorio",
        title: "Nutricao Perioperatoria e Alta",
        sub: "ERAS e suporte nutricional moderno",
        topics: [
          "Protocolo ERAS: jejum curto, hidratacao VO precoce, analgesia multimodal, deambulacao no D0",
          "NRS-2002: triagem nutricional — escore ≥3 indica suporte nutricional pre-operatorio",
          "Nutricao enteral (NE): preferir sempre que TGI funcionante — nasoenteral se pos-gastrico",
          "Nutricao parenteral (NP): TGI nao funcionante ou inacessivel — central, risco de infeccao",
          "Alta: tolerancia a dieta oral, dor controlada, afebrilo, ferida sem ISC, orientacoes completas",
        ],
      },
    ],
  },
  {
    id: "b2",
    label: "Trauma",
    color: "#6ee7b7",
    title: "&#129514; Trauma",
    meta: "ATLS do inicio ao fim — um dos temas mais cobrados",
    days: [
      {
        sec: "ATLS",
        title: "Avaliacao Primaria — A e B",
        sub: "Via aerea e respiracao: as prioridades absolutas",
        topics: [
          "A — Airway com controle cervical: imobilizar C em todo trauma de alta energia ou inconsciencia",
          "Manobras de abertura: jaw-thrust (trauma) — head-tilt CONTRAINDICADO no trauma",
          "IOT de sequencia rapida (RSI): etomidato + succinilcolina — GCS ≤8, desaturacao, apneia",
          "Via aerea cirurgica: cricotireoidotomia quando IOT falha ou contraindicada",
          "B — Breathing: exame do torax — MV bilateral, percussao, expansibilidade, SpO2",
        ],
      },
      {
        sec: "ATLS",
        title: "Avaliacao Primaria — C, D e E",
        sub: "Circulacao, neurologia e exposicao completa",
        topics: [
          "C — Circulation: 2 acessos venosos 14-16G, controle de hemorragia externa com pressao direta",
          "FAST (4 janelas): pericardiaca, hepatorrenal (Morison), esplenica, pelvica — em <2 minutos",
          "D — Disability: Glasgow (olhos+verbal+motor), pupilas (tamanho, simetria, reatividade)",
          "E — Exposure: despir completamente, log-roll para exame do dorso, aquecimento ativo",
          "Avaliacao secundaria: AMPLE (Alergias, Medicamentos, Past history, Last meal, Events) + exame cefalo-caudal",
        ],
      },
      {
        sec: "ATLS",
        title: "Ressuscitacao no Trauma Hemorragico",
        sub: "Damage control resuscitation — alem dos cristaloides",
        topics: [
          "Hipotensao permissiva: PAM 50-65 mmHg ate hemostasia cirurgica — evita coagulopatia dilucional",
          "Protocolo MTP: hemoC:PFC:plaquetas na razao 1:1:1 — ativar quando prever >10 CH/24h",
          "Acido tranexamico: 1g IV em 10 min, repetir 1g em 8h — so no trauma hemorragico em <3h",
          "Triade letal: hipotermia (<35) + acidose (pH <7,35) + coagulopatia — cada uma agrava as outras",
          "Damage control resuscitation: parar o sangramento primeiro, ressuscitar depois",
        ],
      },
      {
        sec: "TCE",
        title: "TCE — Classificacao e Lesoes Primarias",
        sub: "O que acontece no momento do impacto",
        topics: [
          "Classificacao pelo Glasgow: leve 13-15, moderado 9-12, grave ≤8 — GCS <9 = intubar",
          "Concussao: perda de consciencia <30 min, amnesia, sem lesao estrutural na TC",
          "Contusao cerebral: lesao parenquimatosa hemorragica — coup-contrecoup",
          "Lesao axonal difusa (LAD): aceleracao-desaceleracao, coma prolongado sem lesao focal",
          "Indicacao de TC: New Orleans (GCS 15 + cefaleia, vomito, amnesia) e Canadian CT Head Rule",
        ],
      },
      {
        sec: "TCE",
        title: "Hematomas Intracranianos",
        sub: "Cada hematoma tem uma historia diferente",
        topics: [
          "Hematoma epidural (HED): arteria meningea media, fratura temporal, intervalo lucido + herniacao — lente biconvexa",
          "Hematoma subdural agudo (HSD): veias em ponte, idoso ou trauma violento, sem intervalo lucido — lua crescente",
          "HSD cronico: idoso, queda banal, cefaleia semanas depois — hipodensidade crescente",
          "Hemorragia subaracnoide traumatica: sangue nas cisternas basais — vaso espasmo tardio",
          "Indicacoes de craniotomia: HED >30mL ou >15mm; HSD >10mm ou desvio da linha media >5mm",
        ],
      },
      {
        sec: "TCE",
        title: "Manejo da HIC e TCE Grave",
        sub: "Proteger o cerebro lesado de lesao secundaria",
        topics: [
          "HIC: PIC normal <20 mmHg, PPC = PAM - PIC — alvo PPC ≥60 mmHg",
          "Triade de Cushing: bradicardia + HAS + bradipneia = herniacao iminente — agir imediatamente",
          "Medidas 1 linha: cabeceira 30°, normocapnia (PaCO2 35-40), normoglicemia, normotermia",
          "Osmoterapia: manitol 20% 0,25-1 g/kg IV ou SF hipertonico 3% — reduz PIC em minutos",
          "Hiperventilacao: PaCO2 30-35 apenas temporariamente para herniacao aguda — vasoconstrissao cerebral",
        ],
      },
      {
        sec: "Trauma Toracico",
        title: "Lesoes que Matam na Avaliacao Primaria",
        sub: "Reconhecer e tratar sem TC — pela clinica",
        topics: [
          "Pneumotorace hipertensivo: desvio de traqueia, ausencia de MV, hipotensao — agulha no 2°EIC LMC AGORA",
          "Hemotorace massivo: >1.500mL ou >200mL/h — drenagem + toracotomia de urgencia",
          "Tamponamento cardiaco: tríade de Beck (PA caindo, PVC subindo, abafamento) — pericardiocentese",
          "Torax instavel (flail chest): ≥3 costelas em ≥2 pontos — paradoxo respiratorio, VM se SpO2 cai",
          "Pneumotorace aberto (ferida soprante): oclusor de 3 pontos + drenagem em sitio distinto",
        ],
      },
      {
        sec: "Trauma Toracico",
        title: "Lesoes Toracicas de Diagnostico Tardio",
        sub: "Apresentam-se horas ou dias depois",
        topics: [
          "Contusao pulmonar: infiltrado progressivo, hipoxia crescente nas primeiras 24-48h — VM protetora",
          "Contusao miocardica: ECG (BRD, extrassistoles), troponina — monitorar 24h na UTI",
          "Rotura de aorta toracica: mediastino alargado >8cm, apagamento do botao aortico no Rx — angioTC urgente",
          "Ruptura diafragmatica: visceras no hemitorax E, sonda gastrica no torax no Rx — cirurgia",
          "Hemotorax simples e pneumotorax simples: drenagem pleural no 5°EIC LMA — tecnica passo a passo",
        ],
      },
      {
        sec: "Trauma Abdominal",
        title: "Avaliacao do Abdome Traumatizado",
        sub: "Contuso vs penetrante — condutas distintas",
        topics: [
          "Trauma contuso: desaceleracao e compressao — orgaos solidos (figado, baco, rim) mais acometidos",
          "Trauma penetrante: arma branca → laparo se peritonite, eviscerassao ou instabilidade; arma de fogo → sempre laparo",
          "FAST positivo + instabilidade → laparotomia imediata — nao ir para TC",
          "FAST negativo + estavel → TC de abdome e pelve com contraste — padrao diagnostico atual",
          "FAST negativo + instabilidade → repetir FAST ou LPD — TC e perigosa se instavel",
        ],
      },
      {
        sec: "Trauma Abdominal",
        title: "Lesoes Especificas e Damage Control",
        sub: "Figado, baco, rim, intestino — o que fazer",
        topics: [
          "Trauma hepatico: AAST I-VI, TNO em estaveis (sucesso 80-90%), packing + angioembolizacao se instavel",
          "Trauma esplenico: TNO em adultos estaveis; esplenectomia + vacinas (pneumo, meningo, HiB)",
          "Trauma renal: hematuria nao correlaciona com gravidade — TC; TNO na maioria; cirurgia se instavel",
          "Trauma de orgaos ocos: intestino delgado e estomago — peritonite em 6-12h, diagnostico tardio",
          "Damage control: 1 cirurgia (packing, ligaduras), UTI (ressuscitar), 2 cirurgia (reconstrucao definitiva)",
        ],
      },
      {
        sec: "Queimaduras",
        title: "Classificacao e Calculo da SCQ",
        sub: "Regra dos 9 — fundamental para a prova",
        topics: [
          "1 grau: eritema sem flictenas, nao conta para SCQ — tratamento sintomatico",
          "2 grau superficial: flictenas, dolorosa, base umida e rosada — regeneracao em 14 dias sem cirurgia",
          "2 grau profundo: base esbranquicada com pontos rosados, pouco dolorosa — enxertia frequente",
          "3 grau: indolor, coriacea, branca/negra/marrom, sem regeneracao — enxertia sempre",
          "Regra dos 9 de Wallace: cabeca+pescoco 9%, tronco ant 18%, tronco post 18%, cada MS 9%, cada MI 18%, perineo 1%",
        ],
      },
      {
        sec: "Queimaduras",
        title: "Tratamento e Internacao",
        sub: "Da ressuscitacao ao centro de queimados",
        topics: [
          "Formula de Parkland: 4 mL × kg × %SCQ em Ringer lactato; 50% nas primeiras 8h do trauma",
          "Criterios de internacao: 2 grau >10% adulto (>5% crianca/idoso), 3 grau qualquer extensao",
          "Areas especiais: face, maos, pes, genitalia, perineo, articulacoes — internar independente da SCQ",
          "Escarotomia: queimaduras circunferenciais 3 grau em membros ou torax — nao esperar sindrome compartimental",
          "Inalacao de fumaca: face queimada, rouquidao, ambiente fechado — IOT PRECOCE antes de edema de glote",
        ],
      },
      {
        sec: "Pelve e Membros",
        title: "Fratura de Pelve e Sindrome Compartimental",
        sub: "Emergencias ortopedico-cirurgicas",
        topics: [
          "Fratura de pelve instavel: hemorragia retroperitoneal ate 4L — cinta pelvica imediata pre-hospitalar",
          "Manejo: estabilizacao → angioembolizacao (sangramento arterial) → fixador externo se instavel",
          "Sindrome compartimental: dor desproporcional, dor a extensao passiva, compartimento tenso, parestesia",
          "Diagnostico: pressao >30mmHg ou delta P (PAD - Pcompartimental) <30mmHg — fasciotomia",
          "Fasciotomia de perna: 2 incisoes (lateral 4 compartimentos + medial) — nao fechar a pele primariamente",
        ],
      },
    ],
  },
  {
    id: "b3",
    label: "Abdome Agudo",
    color: "#fbbf24",
    title: "&#128993; Abdome Agudo",
    meta: "Tema classico presente em praticamente todas as provas",
    days: [
      {
        sec: "Geral",
        title: "Classificacao e Semiologia",
        sub: "A base diagnostica que orienta tudo",
        topics: [
          "Classificacao: inflamatorio, obstrutivo, perfurativo, hemorragico, vascular — 2 exemplos de cada",
          "Dor abdominal: localizacao, irradiacao, tipo (colica vs continua), intensidade, duracao, fatores de piora/melhora",
          "Defesa voluntaria (espasmo muscular consciente) vs contratura involuntaria (peritonite parietal)",
          "Descompressao brusca de Blumberg: positivo = irritacao peritoneal — sensibilidade e especificidade",
          "Laboratorial: leucograma, amilase/lipase, bHCG, lactato, proteina C-reativa — interpretar cada um",
        ],
      },
      {
        sec: "Inflamatorio",
        title: "Apendicite — Fisiopatologia e Clinica",
        sub: "A cirurgia de urgencia mais comum do mundo",
        topics: [
          "Fisiopatologia: obstrucao do lumen (fecalito, linfondulo) → distensao → isquemia → perfuracao em 24-72h",
          "Dor: comeca periumbilical (visceral) → migra para FID (parietal) — classico mas presente em 50-60%",
          "Sintomas associados: anorexia (quase sempre), nausea, vomito, febre baixa (>37,5°C)",
          "Sinais clinicos: McBurney, Rovsing (FIE→FID), Psoas (retrocecal), Obturador (pelvica)",
          "Diagnostico diferencial: torcao ovariana, DIP, cisto ovariano roto, colica ureteral, hernia encarcerada",
        ],
      },
      {
        sec: "Inflamatorio",
        title: "Apendicite — Diagnostico por Imagem e Escores",
        sub: "Quando usar USG, TC e escores na decisao",
        topics: [
          "Escore de Alvarado: migracao da dor + anorexia + nausea + McBurney + Blumberg + defesa + febre + leucocitose — ≥7 operar",
          "USG: sensibilidade 80%, apendice >6mm nao compressivel — operador-dependente, 1a escolha em gestantes e criancas",
          "TC abdome: sensibilidade 95%, padrao ouro — apendice >6mm, gordura periapendicular, apendicolito",
          "Apendicite em gestante: posicao do apendice varia com trimestre — TC com baixa dose se USG inconclusiva",
          "Escore MANTRELS e AIR: alternativas ao Alvarado — base da decisao compartilhada",
        ],
      },
      {
        sec: "Inflamatorio",
        title: "Apendicite — Tratamento e Complicacoes",
        sub: "Da cirurgia ao plastre e complicacoes",
        topics: [
          "Apendicectomia laparoscopica: 3 portais, ligadura do meso e coto, lavar se perfurado",
          "ATB perioperatorio: cefalozina + metronidazol 30 min antes — estender 24h se nao complicada",
          "Tratamento conservador (APPAC trial): ATB IV (ertapenem) em nao complicada — recorrencia 30% em 5 anos",
          "Plastre apendicular: masa palpavel, >5 dias de evolucao, sem peritonite — conservador + ATB oral",
          "Apendicite perforada: peritonite local ou difusa — laparo urgente, lavagem, drenagem, ATB prolongado",
        ],
      },
      {
        sec: "Inflamatorio",
        title: "Colecistite Aguda — Diagnostico",
        sub: "Pedra + obstrucao + inflamacao = urgencia",
        topics: [
          "Fisiopatologia: calculo no infundibulo → distensao → isquemia → inflamacao → infeccao bacteriana secundaria",
          "Quadro clinico: dor em HD persistindo >6h (diferente da colica que melhora), febre, leucocitose",
          "Sinal de Murphy: dor a palpacao do HD com inspiracao profunda — sensibilidade 65%, especificidade 87%",
          "USG: espessamento da parede vesicular >4mm, liquido pericolecistico, calculo, Murphy ecografico",
          "Criterios de Toquio 2018 (TG18): 2 criterios clinicos + USG = diagnostico confirmado",
        ],
      },
      {
        sec: "Inflamatorio",
        title: "Colecistite Aguda — Graduacao e Tratamento",
        sub: "Toquio orienta a conduta em cada grau",
        topics: [
          "Grau I (leve): sem disfuncao organica — colecistectomia precoce em qualquer momento",
          "Grau II (moderada): leucocitose, massa, >72h de sintomas — colecistectomia precoce se tecnicamente possivel",
          "Grau III (grave): disfuncao organica — colecistostomia percutanea, cirurgia eletiva 6-8 semanas depois",
          "Colecistectomia laparoscopica precoce (<72h): menos morbidade, menor tempo de internacao — padrao de cuidado",
          "Visao critica de seguranca (CVS): identificar infundibulo + cistico antes de qualquer clipagem — previne lesao de VB",
        ],
      },
      {
        sec: "Inflamatorio",
        title: "Pancreatite Aguda — Diagnostico e Gravidade",
        sub: "2 dos 3 criterios de Atlanta = diagnostico",
        topics: [
          "Diagnostico: 2 de 3 criterios — dor tipica + amilase/lipase >3× VN + TC compativel",
          "Causas: litiase biliar (50%), alcool (20%), hipertrigliceridemia (TG >1.000), medicamentos, CPRE",
          "Escore de Ranson na admissao: idade >55, glicose >200, LDH >350, AST >250, leucocitos >16k — ≥3 = grave",
          "BISAP: BUN >25, alteracao mental, SIRS, idade >60, derrame pleural — ≥3 = mortalidade alta",
          "TC com contraste (Balthazar-Ranson): pedir se sem melhora em 48-72h ou duvida diagnostica",
        ],
      },
      {
        sec: "Inflamatorio",
        title: "Pancreatite Aguda — Tratamento e Complicacoes",
        sub: "Hidratacao e o pilar — resto e suporte",
        topics: [
          "Hidratacao: Ringer lactato 250-500 mL/h nas primeiras 12-24h — reduz necrose e SIRS",
          "Dieta: oral precoce se tolerada — NE por nasoenteral se intolerante; NP so se NE impossivel",
          "Analgesia: dipirona, tramadol — morfina NAO e contraindicada (mito do espasmo do esfinter de Oddi)",
          "Necrose infectada: febre >7-10 dias + piora clinica → PAAF + ATB (imipenem) ou necrosectomia",
          "Pseudocisto: >4 semanas, >6cm, sintomatico — drenagem endoscopica transmural (1 opcao)",
        ],
      },
      {
        sec: "Obstrutivo",
        title: "Obstrucao do Intestino Delgado",
        sub: "Bridas: a causa mais comum no mundo ocidental",
        topics: [
          "Causas: bridas/aderencias (75%), hernia encarcerada (10%), neoplasia, intussuscepcao, ileo biliar",
          "Clinica: dor em colica periumbilical, vomitos biliosos (precoce) ou fecaloides (tardio), parada de flatos",
          "Rx abdome em pe: alças distendidas em degrau, niveis hidroaereos, ausencia de gas no colon",
          "TC de abdome: ponto de transicao, causa, sinais de isquemia (pneumatose, 'whirl sign', espessamento)",
          "Tratamento conservador: dieta zero + SNG + hidratacao — 24-48h in bridas sem sinais de isquemia",
        ],
      },
      {
        sec: "Obstrutivo",
        title: "Obstrucao do Intestino Grosso e Volvulo",
        sub: "Cancer e volvulo sao as causas principais",
        topics: [
          "Causas: cancer colorretal (no1), diverticulite, volvulo de sigmoide, volvulo de ceco",
          "Volvulo de sigmoide: 'grao de cafe' no Rx, desvio para HD — descompressao colonoscopica + cirurgia eletiva",
          "Volvulo de ceco: mais raro, instavel — cirurgia urgente (cecostomia ou hemicolectomia direita)",
          "Sindrome de Ogilvie: colon dilatado sem obstrucao mecanica — neostigmina IV, colonoscopia se falha",
          "Hernia encarcerada vs estrangulada: irredutivel (encarc.) vs isquemia + necrose (estrang.) = urgencia real",
        ],
      },
      {
        sec: "Perfurativo",
        title: "Ulcera Peptica Perfurada",
        sub: "Pneumoperitonio + peritonite = sala cirurgica",
        topics: [
          "Clinica: dor epigastrica subita 'em punhalada', rigidez abdominal, irradiacao para ombro D",
          "Diagnostico: pneumoperitonio no Rx torax (subdiafragmatico) em 80% — TC se duvida",
          "Rafia de Graham: sutura da perfuracao + tamponamento com omento — padrao ouro",
          "Erradicacao de H. pylori pos-op: reduz recorrencia de 70% para <10%",
          "Tratamento conservador (Taylor): apenas em estaveis, <24h de evolucao, sem pneumoperitonio na TC",
        ],
      },
      {
        sec: "Perfurativo",
        title: "Diverticulite Aguda — Classificacao de Hinchey",
        sub: "Cada estagio tem uma conduta diferente",
        topics: [
          "Hinchey I: abscesso pericólico — ATB IV; drenagem percutanea se >3cm",
          "Hinchey II: abscesso pelvico — ATB IV + drenagem percutanea guiada por TC",
          "Hinchey III: peritonite purulenta — cirurgia urgente; lavagem laparoscopica controversa",
          "Hinchey IV: peritonite fecal — cirurgia urgente, operacao de Hartmann (colostomia + coto retal fechado)",
          "Diverticulite não complicada: ATB ambulatorial (ciprofloxacino + metronidazol) se sem comorbidade grave",
        ],
      },
      {
        sec: "Hemorragico",
        title: "Hemorragia Digestiva Alta e Baixa",
        sub: "Endoscopia e diagnostico e tratamento",
        topics: [
          "HDA: ulcera peptica (no1, 50%), varizes (20%), Mallory-Weiss — hematemeese ou melena",
          "Rockall pre-endoscopico: idade, choque, comorbidade — estratifica risco antes da EDA",
          "EDA urgente: <12h se instavel ou varizes suspeitas; <24h se estavel — hemostasia endoscopica",
          "HDB: diverticulose (no1 de HDB massiva), angiodisplasia, DII, neoplasia, doenca anorretal",
          "Diagnostico HDB: colonoscopia (parou), angioTC (ativo), arteriografia + embolizacao (massiva)",
        ],
      },
      {
        sec: "Hemorragico",
        title: "Abdome Agudo Vascular",
        sub: "Isquemia mesenterlica e AAA roto",
        topics: [
          "Isquemia mesentérica: embolo da AMS (50%), trombose, isquemia nao oclusiva — 'dor desproporcional ao exame'",
          "Diagnostico: angioTC abdome — trombo na AMS, pneumatose intestinal, ausencia de realce",
          "Tratamento: embolectomia cirurgica ou trombólise intraarterial + resseccao intestinal se necrose",
          "AAA roto: dor lombar + hipotensao + masa pulsatil — sala cirurgica SEM TC se instavel",
          "Gravidez ectopica rota: mulher em idade fertil + dor pelvica + instabilidade — bHCG + USG + laparotomia",
        ],
      },
    ],
  },
  {
    id: "b4",
    label: "Digestivo",
    color: "#fb923c",
    title: "&#127889; Cirurgia Digestiva",
    meta: "O coracao da cirurgia geral — maior volume em provas",
    days: [
      {
        sec: "Hernias",
        title: "Anatomia da Regiao Inguinal",
        sub: "Sem anatomia nao tem cirurgia de hernia",
        topics: [
          "Canal inguinal: 4cm, obliquo, parede anterior (aponeurose obliquo externo), posterior (fascia transversalis)",
          "Anel inguinal interno (profundo): abertura na fascia transversalis, lateral aos vasos epigastricos inferiores",
          "Anel inguinal externo (superficial): abertura na aponeurose do obliquo externo — palpavel",
          "Triangulo de Hesselbach: limites — vasos epigastricos inf. (lateral), lig. inguinal (inferior), borda do reto (medial)",
          "Conteudo do canal: funiculo espermatico (H) ou ligamento redondo (M)",
        ],
      },
      {
        sec: "Hernias",
        title: "Tipos de Hernia Inguinal e Femoral",
        sub: "Indireta vs direta vs femoral — diferencas cruciais",
        topics: [
          "Hernia inguinal indireta: lateral ao triangulo, atravessa o anel interno — mais comum em jovens e criancas",
          "Hernia inguinal direta: medial ao triangulo, fraqueza do assoalho — adultos e idosos",
          "Hernia femoral: abaixo do ligamento inguinal, pelo canal femoral — mais comum em mulheres, alto risco de estrangulamento",
          "Diagnostico diferencial: linfadenopatia inguinal, hidrocele, varicocele, lipoma do cordao, criptorquidia",
          "Exame: impulsao ao tossir e Valsalva, redutibilidade, palpacao dos orifícios inguinais",
        ],
      },
      {
        sec: "Hernias",
        title: "Tecnicas Cirurgicas e Complicacoes",
        sub: "Lichtenstein, TAPP e TEP — diferencas e indicacoes",
        topics: [
          "Lichtenstein (tela anterior sem tensao): padrao ouro aberto, anestesia local possivel, recidiva <1%",
          "TAPP (transabdominal pre-peritoneal): laparoscopica, acessa espaco pre-peritoneal via cavidade abdominal",
          "TEP (totalmente extraperitoneal): laparoscopica, nao penetra no peritonio — curva de aprendizado maior",
          "Vantagem laparoscopico: bilateral simultaneamente, menos dor, retorno rapido as atividades",
          "Complicacoes: hematoma, seroma, infeccao, neuralgia (ilioinguinal/genitofemoral), lesao vas deferens, recidiva",
        ],
      },
      {
        sec: "Hernias",
        title: "Hernias da Parede Abdominal",
        sub: "Umbilical, incisional, epigastrica e raras",
        topics: [
          "Hernia umbilical in crianca: fechar espontaneamente ate 5 anos; operar se >1,5cm ou sem resolucao",
          "Hernia umbilical em adulto: operar se sintomatica, anel >1cm; tela se >2cm",
          "Hernia incisional: tela obrigatoria, laparoscopica (TAPP/TEP) se tecnicamente possivel, fatores de risco",
          "Hernia epigastrica: linha alba entre xifoide e umbigo — lipoma herniario, pequena, operar se sintomatica",
          "Hernia raras: Spiegel (lateral ao reto), Richter (so parede lateral do saco — NAO tem colica!)",
        ],
      },
      {
        sec: "Esofago",
        title: "DRGE — Diagnostico e Tratamento Clinico",
        sub: "A doenca mais comum do esofago",
        topics: [
          "Fisiopatologia: relaxamento transitorio do EIE, hipotonia do EIE, hernia de hiato — refluxo acido",
          "Sintomas tipicos: pirose e regurgitacao — atipicos: tosse cronica, rouquidao, asma refrataria",
          "pHmetria 24h: pH <4 por >4% do tempo — padrao ouro para diagnostico de DRGE",
          "EDA: esofagite (Los Angeles A-D), Barrett, estenose — biópsia obrigatoria no Barrett",
          "Tratamento clinico: IBP 8 semanas, cabeceira elevada 15-30cm, nao deitar apos refeicao, perder peso",
        ],
      },
      {
        sec: "Esofago",
        title: "Esofago de Barrett e Cirurgia do Refluxo",
        sub: "Quando o IBP nao basta — indicacoes cirurgicas",
        topics: [
          "Barrett: metaplasia intestinal (celulas caliciformes) no esofago distal — risco adenocarcinoma 0,3-0,5%/ano",
          "Displasia de baixo grau: IBP + vigilancia EDA a cada 6-12 meses — ablacao por radiofrequencia (RFA)",
          "Displasia de alto grau: RFA ou mucosectomia endoscopica — tireoidectomia nao e mais indicada",
          "Indicacoes cirurgicas na DRGE: refratariedade ao IBP, efeitos colaterais, Barrett com sintomas, hernia gigante",
          "Valvula de Nissen: fundoplicatura total 360° — valvula parcial (Toupet ou Lind) se dismotilidade esofagica",
        ],
      },
      {
        sec: "Esofago",
        title: "Dismotilidade Esofagica e Acalasia",
        sub: "Acalasia — o megaesofago que cai em prova",
        topics: [
          "Acalasia: destruicao dos plexos de Auerbach (mioentericos) — falha de relaxamento do EIE + aperistalse",
          "Clinica: disfagia logica (solidos e liquidos), regurgitacao, perda de peso, tosse noturna",
          "Diagnostico: esofagomanometria (padrao ouro); esofagograma (bico de passaro, dilatacao)",
          "Classificacao de Mascarenhas: Grau I (<4cm) a IV (>10cm, dolicomegaesofago)",
          "Tratamento: dilatação balão (Grau I/II), cardiomiotomia de Heller + fundoplicatura (Grau II/III), esofagectomia (Grau IV)",
        ],
      },
      {
        sec: "Esofago",
        title: "Cancer de Esofago",
        sub: "Dois tumores completamente diferentes no mesmo orgao",
        topics: [
          "Carcinoma epidermoide: terco medio, alcool + tabaco (risco 100x), mais comum no Brasil",
          "Adenocarcinoma: terco distal, DRGE + Barrett + obesidade, incidencia crescente no Ocidente",
          "Diagnostico: EDA + biopsia, TC torax/abdome/pelve, ecoendoscopia (T e N), PET-CT",
          "Ressecabilidade: sem invasao de aorta/traqueia/coração, sem metastases a distancia",
          "Esofagectomia: Ivor Lewis (toracoabdominal) ou transhiatal — neoadjuvancia com CROSS protocol",
        ],
      },
      {
        sec: "Estomago",
        title: "Ulcera Peptica — Diagnostico",
        sub: "H. pylori e AINEs causam 95% dos casos",
        topics: [
          "H. pylori: gram-negativo espiral, presente em 50% da populacao — ulcera duodenal em 80% dos infectados",
          "AINEs: inibem COX-1 → menos prostaglandinas → menos muco protetor — risco proporcional a dose e duracao",
          "Clinica: duodenal piora com jejum e melhora com alimentacao; gastrica piora com alimentacao",
          "EDA + biopsia gastrica: 6 fragmentos (antro, corpo, angulus) — obrigatorio em toda ulcera gastrica",
          "Classificacao de Johnson: Tipo I (corpo, pequena curvatura), II (corpo + duodenal), III (pre-pilorica), IV (subcardia)",
        ],
      },
      {
        sec: "Estomago",
        title: "Ulcera Peptica — Tratamento e Complicacoes",
        sub: "Quando o clinico falha e o cirurgiao entra",
        topics: [
          "Triplice terapia: IBP + claritromicina 500mg + amoxicilina 1g — 2x/dia por 14 dias",
          "Confirmacao de erradicacao: teste respiratorio C13 ou antigeno fecal — 4 semanas apos fim do ATB",
          "Complicacoes: hemorragia (25%), perfuracao (10%), obstrucao pilorica (5%), penetracao",
          "Cirugia da ulcera: refrataria a 2 cursos, hemorragia refrataria, perfuracao, obstrucao",
          "Sindrome de dumping: precoce (osmótica, 15-30min) e tardio (hipoglicemia reativa, 2-3h) — dieta fracionada",
        ],
      },
      {
        sec: "Estomago",
        title: "Cancer Gastrico",
        sub: "Diagnostico tardio = prognostico ruim",
        topics: [
          "Fatores de risco: H. pylori (6x), dieta com sal/defumado/nitratos, tabaco, grupo sanguineo A",
          "Early gastric cancer: limitado a mucosa/submucosa — sobrevida em 5 anos >90% (raro no Brasil)",
          "Classificacao de Borrmann: I (polipoide) → IV (linitis plastica) — prognostico piora do I ao IV",
          "Estadiamento: EDA + biopsia, TC torax/abd/pelve, ecoendoscopia, laparoscopia diagnostica",
          "Cirurgia: gastrectomia subtotal distal ou total + linfadenectomia D2 (≥15 linfonodos) — padrao",
        ],
      },
      {
        sec: "Via Biliar",
        title: "Colelitíase e Colica Biliar",
        sub: "A pedra na vesicula — quando tratar",
        topics: [
          "Calculos de colesterol: 80% — fatores de risco '4Fs': fat, female, forty, fertile",
          "Colelitíase assintomatica: conduta expectante — nao operar rotineiramente",
          "Excecoes para operar assintomatico: anemia falciforme, imunossuprimido, vesicula em porcelana, polipo >10mm",
          "Colica biliar: dor em HD apos gordura, <6h, sem febre — diferente da colecistite",
          "Colecistectomia eletiva laparoscopica: 4 portais, CVS, padrão ouro — indicada em colica recorrente",
        ],
      },
      {
        sec: "Via Biliar",
        title: "Coledocolitíase e Colangite",
        sub: "Pedra no ducto = urgencia",
        topics: [
          "Coledocolitíase: cálculo no colédoco — ictericia obstrutiva progressiva, bilirrubina direta alta, FA e GGT altas",
          "Triade de Charcot: dor + febre + ictericia = colangite aguda — internar + ATB + CPRE urgente (<24h)",
          "Pentade de Reynolds: triade + hipotensao + confusao = colangite grave — UTI + drenagem biliar emergencia",
          "CPRE terapeutica: esfincterotomia + extracao do calculo — 1a opcao para coledocolitíase",
          "Complicacoes da CPRE: pancreatite pos-CPRE (5-10%), hemorragia, perfuracao, colangite",
        ],
      },
      {
        sec: "Via Biliar",
        title: "Lesoes da Via Biliar",
        sub: "A complicacao mais temida da colecistectomia",
        topics: [
          "Incidencia: 0,3-0,5% das colecistectomias laparoscopicas — mais comum que na cirurgia aberta",
          "Mecanismo: identificacao erronea do cistico como coledoco — 'tenting' da via biliar principal",
          "Classificacao de Bismuth/Strasberg: A-E, pela localizacao da lesao em relacao ao hilo",
          "Reconhecimento intraoperatorio: colangiografia + conversao para aberto se duvida",
          "Tratamento: hepaticojejunostomia em Y de Roux — resultado melhor em centro especializado",
        ],
      },
      {
        sec: "Pancreas",
        title: "Pancreatite Cronica",
        sub: "Dor cronica + ma absorcao = pancreas destruido",
        topics: [
          "Causas: alcool cronico (70-80%), idiopatica, hereditaria, autoimune, obstrutiva",
          "Clinica: dor cronica epigastrica irradiada para dorso, piora com alcool e gordura, melhora com flexao anterior",
          "Complicacoes: esteatorreia (ma absorcao de gordura), DM insulinopenico, ictericia obstrutiva, pseudocisto",
          "Diagnostico: Rx (calcificacoes), TC (atrofia, calcificacoes, dilatacao do Wirsung), CPRM",
          "Tratamento: abstinencia alcoolica (fundamental!), analgesia, enzimas pancreaticas, insulina",
        ],
      },
      {
        sec: "Pancreas",
        title: "Cirurgia da Pancreatite Cronica e Cancer de Pancreas",
        sub: "Quando intervir e como",
        topics: [
          "Indicacoes cirurgicas: dor intratavel, obstrucao biliar/duodenal, pseudocisto complicado, suspeita de cancer",
          "Cirurgias de drenagem: Puestow (pancreaticojejunostomia lateral) e Frey — ducto dilatado ≥7mm",
          "Cancer de pancreas: adenocarcinoma ductal, K-ras, CA 19-9 — NAO serve para rastreamento",
          "Clinica do cancer: ictericia progressiva INDOLOR (cabeca) + sinal de Courvoisier, emagrecimento",
          "Duodenopancreatectomia (Whipple): cabeca + duodeno + estomago distal + coledoco + vesicula + linfonodos",
        ],
      },
      {
        sec: "Delgado",
        title: "Doencas do Intestino Delgado",
        sub: "Crohn e Meckel — os mais cobrados",
        topics: [
          "Doenca de Crohn: inflamacao transmural, qualquer segmento do TGI, skip lesions, fistulas, estenoses",
          "Clinica de Crohn: dor em FID, diarreia SEM sangue (vs RCU que tem sangue), perda de peso, febre",
          "Tratamento de Crohn: mesalazina, corticoide, azatioprina, anti-TNF — cirurgia nas complicacoes",
          "Diverticulo de Meckel: regra dos 2 (2% populacao, 2 pes do ileum terminal, 2 tipos de mucosa ectopica)",
          "Complicacoes do Meckel: hemorragia (crianca), diverticulite, obstrucao — cintilografia com Tc99m",
        ],
      },
      {
        sec: "Colon",
        title: "Doenca Diverticular do Colon",
        sub: "Diverticulose benigna vs diverticulite perigosa",
        topics: [
          "Diverticulose: pseudodiverticulos no sigmoide, >60 anos — assintomatica, dieta com fibras",
          "Diverticulite: perfuracao microscopica → dor em FIE, febre, leucocitose — TC confirma e classifica",
          "Hinchey I: abscesso pericólico — ATB IV; drenagem percutanea se >3cm",
          "Hinchey II: abscesso pelvico — ATB IV + drenagem percutanea guiada",
          "Hinchey III e IV: peritonite — cirurgia urgente; lavagem laparoscopica controversa",
          "Hinchey IV: peritonite fecal — cirurgia urgente, operacao de Hartmann (colostomia + coto retal fechado)",
          "Diverticulite não complicada: ATB ambulatorial (ciprofloxacino + metronidazol) se sem comorbidade grave",
        ],
      },
      {
        sec: "Colon",
        title: "Doencas Inflamatorias Intestinais",
        sub: "Crohn vs RCU — diferencas que caem em prova",
        topics: [
          "RCU: mucosa continua (sem skip), reto SEMPRE acometido, camada mucosa e submucosa apenas",
          "Crohn: transmural, qualquer segmento, skip lesions, fistulas, granulomas na histologia",
          "Marcador clinico: RCU = sangue nas fezes; Crohn = diarreia sem sangue + dor FID",
          "Tratamento da RCU: 5-ASA (leve), corticoide (moderada), vedolizumabe/infliximabe (grave)",
          "Cirurgia na RCU: colite fulminante, refratariedade, displasia — colectomia total + bolsa ileal (J-pouch)",
        ],
      },
      {
        sec: "Colon",
        title: "Cancer Colorretal — Rastreamento e Diagnostico",
        sub: "Prevencao e o melhor tratamento",
        topics: [
          "Rastreamento: colonoscopia a partir dos 45 anos (ACS 2018) ou 10 anos antes do parente mais jovem",
          "Familias de alto risco: PAF (APC, >100 polipos, Ca em 100%) e HNPCC/Lynch (MMR genes, Ca colon + endometrio)",
          "Sequencia adenoma-carcinoma: tubular (<5% Ca) → tubuloviloso → viloso (40% Ca) — 10 anos de evolucao",
          "Clinica: colon D (anemia ferropriva, massa palpavel) vs colon E (alteracao do habito, hematoquezia)",
          "Estadiamento: EDA + biopsia; TC torax/abd/pelve; cEA (acompanhamento, nao diagnostico)",
        ],
      },
      {
        sec: "Colon",
        title: "Cancer Colorretal — Estadiamento e Cirurgia",
        sub: "TNM e as resseccoes segmentares",
        topics: [
          "TNM: T1-T4 (profundidade), N0-N2 (minimo 12 linfonodos examinados), M0-M1",
          "Hemicolectomia direita: colon D, angulo hepatico, transverso proximal — anastomose ileocolica",
          "Sigmoidectomia/hemicolectomia E: colon E, sigmoide — anastomose colorretal",
          "Cancer de reto alto: resseccao anterior baixa (LAR) com anastomose colorretal ou coloanal",
          "Cancer de reto baixo (<5cm): RAP (operacao de Miles) com colostomia definitiva — exceto T1 superficiais",
        ],
      },
      {
        sec: "Colon",
        title: "Neoadjuvancia no Reto e Ostomias",
        sub: "Radioterapia, ileostomia e cuidados com ostomia",
        topics: [
          "Neoadjuvancia no reto: capecitabina + radioterapia pre-op — reduz recidiva local em 50%",
          "Watch and wait: resposta completa clinica a neoadjuvancia — seguimento sem cirurgia imediata (protocolos)",
          "Ileostomia de protecao: protege anastomose coloanal baixa — reverter apos 3 meses",
          "Colostomia definitiva (Hartmann ou Miles): cuidados com pele periestoma, bolsa, dieta, irrigacao",
          "Complicacoes de ostomias: prolapso, hernia paraestomal, estenose, retracao, dermatite periestoma",
        ],
      },
      {
        sec: "Coloproctologia",
        title: "Doenca Hemorroidaria",
        sub: "A patologia anorretal mais prevalente",
        topics: [
          "Internas: acima da linha pectiinea, indolores (sem inervacao somatica), sangramento vermelho vivo",
          "Externas: abaixo da linha, dolorosas — trombose: evacuacao imediata se <72h de evolucao",
          "Grau I: sangramento sem prolapso → escleroterapia ou ligadura elastica",
          "Grau II: prolapso com reducao espontanea → ligadura elastica (metodo de Barron)",
          "Grau III e IV: prolapso que necessita reducao manual ou irredutivel → hemorroidectomia (Milligan-Morgan)",
        ],
      },
      {
        sec: "Coloproctologia",
        title: "Fissura, Fistula e Abscesso Anorretal",
        sub: "O trio anorretal que cai em prova",
        topics: [
          "Fissura anal: linha posterior (90%) — aguda (<6 sem): topico anestesico + banho de assento",
          "Fissura cronica: topico (diltiazem, nitratos), toxina botulinica, esfincterotomia lateral interna",
          "Abscesso anorretal: drenar IMEDIATAMENTE sem aguardar flutuacao — sem ATB rotineiro",
          "Fistula anorretal: comunicacao entre criptas e pele — classificacao de Parks (inter, trans, supra, extra)",
          "Cirurgia da fistula: fistulotomia (baixas) ou seton (altas, preservar esfíncter — cortar progressivamente)",
        ],
      },
      {
        sec: "Figado",
        title: "Anatomia Funcional e Hipertensao Portal",
        sub: "Couinaud e as complicacoes da cirrose",
        topics: [
          "Segmentacao de Couinaud: 8 segmentos baseados nas veias hepaticas e porta — I (caudado) a VIII",
          "Cirurgia hepatica guiada por segmentos: resseccoes anatomicas preservando vascularizacao adjacente",
          "Hipertensao portal: GPVH >12 mmHg → varizes e ascite — cirrose e a causa mais comum",
          "Varizes esofagicas: profilaxia primaria (propranolol ou ligadura endoscopica se grandes varizes)",
          "Sangramento varicoso: ligadura elastica + terlipressina/octreotida + ATB (norfloxacina) + vit K",
        ],
      },
      {
        sec: "Figado",
        title: "Ascite, Abscesso Hepatico e Esplenectomia",
        sub: "As grandes complicacoes da cirrose e indicacoes do baco",
        topics: [
          "Ascite: restricao Na (<2g/d) + espironolactona ± furosemida → paracentese → TIPS → transplante",
          "TIPS (transjugular intrahepatic portosystemic shunt): HTP refrataria, ascite refrataria, sangramento varicoso",
          "Abscesso piogenico: gram-negativos, drenagem percutanea + ATB; amebiano: metronidazol (raramente drena)",
          "Indicacoes de esplenectomia: PTI refrataria, esferocitose, leucemia celulas pilosas, linfoma, trauma grau V",
          "OPSI e vacinas obrigatorias pre-esplenectomia: pneumococica, meningococica ACWY, H. influenzae B — 2 semanas antes",
        ],
      },
    ],
  },
  {
    id: "b5",
    label: "Vascular",
    color: "#f87171",
    title: "&#128997; Cirurgia Vascular",
    meta: "Doenca arterial, venosa e endovascular",
    days: [
      {
        sec: "Arterial",
        title: "Doenca Arterial Periferica (DAP)",
        sub: "Aterosclerose periferica — do diagnostico a revascularizacao",
        topics: [
          "Fisiopatologia: placa aterosclerotica → estenose progressiva → claudicacao → isquemia critica → amputacao",
          "Classificacao de Fontaine: I (assintomatico), IIa (claudicacao >200m), IIb (<200m), III (dor em repouso), IV (ulcera/gangrena)",
          "ITB (indice tornozelo-braquial): PA sistolica tornozelo/braquial — normal >0,9; <0,4 = isquemia critica",
          "Tratamento clinico: AAS 100mg ou clopidogrel, estatina (LDL <70), cilostazol (claudicacao), reabilitacao",
          "Revascularizacao: angioplastia + stent (lesoes focais) vs bypass (oclusoes longas)",
        ],
      },
      {
        sec: "Arterial",
        title: "Isquemia Aguda de Membro",
        sub: "6 horas para salvar o membro",
        topics: [
          "6 Ps: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia — reconhecer imediatamente",
          "Embolia arterial: inicio subito, FA como causa principal, sem DAP previa, tratar com embolectomia",
          "Trombose arterial aguda: placa instavel em arteriopatia previa, inicio gradual, trombólise ou revascularizacao",
          "Embolectomia com cateter de Fogarty: embolia em ate 6h — contraindicada se isquemia irreversivel (rigor, anestesia)",
          "Sindrome de reperfusao: mioglobinuria → IRA — hidratacao agressiva, bicarbonato, monitorar K+",
        ],
      },
      {
        sec: "Arterial",
        title: "Aneurisma de Aorta Abdominal (AAA)",
        sub: "Rastreamento, indicacao e manejo do roto",
        topics: [
          "Definicao: dilatacao ≥3cm ou >50% do diametro normal — 90% sao infrarenais, associados ao tabagismo",
          "Rastreamento: USG unica para homens ≥65 anos tabagistas (USPSTF grau B)",
          "Vigilancia: 3-4cm → USG anual; 4-5,4cm → semestral; ≥5,5cm → indicar cirurgia",
          "EVAR: endovascular, acesso femoral — menor mortalidade peri-op (1-2% vs 4-5% aberto); requer anatomia favoravel",
          "AAA roto: hipotensao + dor lombar + massa pulsatil → sala cirurgica imediata sem esperar TC se instavel",
        ],
      },
      {
        sec: "Arterial",
        title: "Doenca Carotidea e Sindrome Aortica Aguda",
        sub: "Prevenir AVC e diferenciar disseccao de IAM",
        topics: [
          "Aterosclerose carotidea: bifurcacao da carotida — placa instavel → embolo → AIT/AVCi",
          "Endarterectomia de carotida (CEA): sintoomatico ≥50% (NASCET), assintomatico ≥60-70%",
          "Stent carotideo (CAS): alto risco cirurgico — CREST trial: maior risco de AVC peri-procedimento",
          "Disseccao de aorta: dor retrosternal/interescapular 'lancjante' — pulsos assimetricos",
          "Stanford A (ascendente) → cirurgia urgente; Stanford B (descendente) → clinico ou TEVAR",
        ],
      },
      {
        sec: "Venoso",
        title: "Insuficiencia Venosa Cronica e Varizes",
        sub: "A doenca venosa mais prevalente",
        topics: [
          "Fisiopatologia: refluxo valvar → hipertensao venosa → edema → lipodermatoesclerose → ulcera",
          "CEAP: C0 (sem doenca) → C1 (telangectasias) → C2 (varizes) → C3 (edema) → C4 (alteracoes cutaneas) → C5 (ulcera cicatrizada) → C6 (ulcera ativa)",
          "Doppler venoso: mapeia refluxo, incompetencia de safena magna/parva e perfurantes",
          "Tratamento conservador: meia elastica 20-30mmHg, flebotônicos, higiene postural — indicado em todos",
          "Intervencionista: ablacao endovenosa laser/RF (EVLA/RFA) — padrao atual; escleroterapia; safenectomia",
        ],
      },
      {
        sec: "Venoso",
        title: "TVP e Tromboembolismo Pulmonar",
        sub: "Triade de Virchow na pratica clinica",
        topics: [
          "TVP: edema assimetrico, dor, hiperemia — Doppler venoso confirma (sensibilidade >95%)",
          "Wells para TVP: ≥2 pontos = probabilidade alta → Doppler diretamente (sem D-dimero)",
          "TEP: dispneia subita + taquicardia + dor pleuritica — ECG: S1Q3T3, BRD agudo",
          "Wells para TEP: <2 (baixo) → D-dimero; >4 (alto) → angioTC de torax (CTPA) diretamente",
          "Tratamento: HBPM ou NOAC por 3-6 meses; TEP massivo → alteplase 100mg IV; filtro VCI: indicacoes restritas",
        ],
      },
    ],
  },
  {
    id: "b6",
    label: "Mama e Tireóide",
    color: "#c084fc",
    title: "&#128992; Mama e Tireóide",
    meta: "Endocrinologia cirurgica presente em toda prova",
    days: [
      {
        sec: "Mama",
        title: "Rastreamento e Classificacao BI-RADS",
        sub: "BI-RADS do 0 ao 6 — decorar as condutas",
        topics: [
          "Rastreamento: mamografia anual a partir dos 40 anos (CFM) ou bienal a partir dos 50 (MS) — debate vigiente",
          "BI-RADS 0: incompleto — complementacao obrigatoria (USG, incidencias adicionais)",
          "BI-RADS 1 e 2: negativo e benigno — seguimento de rotina anual, sem biopsia",
          "BI-RADS 3: provavelmente benigno (<2% malignidade) — USG em 6 meses; biopsia se crescer",
          "BI-RADS 4 e 5: suspeito e altamente suspeito — core biopsy ou biopsia cirurgica obrigatoria",
        ],
      },
      {
        sec: "Mama",
        title: "Lesoes Benignas da Mama",
        sub: "Diferenciar o benigno do maligno — clinica e imagem",
        topics: [
          "Fibroadenoma: mais comum in jovens, nodulo firme, movel, bordo regular — BI-RADS 2-3, acompanhar",
          "Cisto simples: BI-RADS 2, puncao apenas se sintomatico — liquido amarelo citrino e normal",
          "Mastopatia fibrocistica: dor ciclica, nodularidade difusa — imagem e clinica, sem cirurgia",
          "Papiloma intraductal: descarga papilar sanguinolenta uniductal — resseccao do ducto diagnostica",
          "Tumor phyllodes: crescimento rapido, grande — resseccao com margens amplas, pode ser maligno",
        ],
      },
      {
        sec: "Mama",
        title: "Cancer de Mama — Diagnostico e Estadiamento",
        sub: "Fatores de risco, tipos histologicos e estadiamento",
        topics: [
          "Fatores de risco: BRCA1/2 (risco vitálicio 70%), menarca precoce, menopausa tardia, nuliparidade, HRT >5 anos",
          "Tipos histologicos: ductal invasor (70-75%), lobular invasor (10-15%), CDIS (in situ)",
          "Biologia molecular: Luminal A (RE+/RP+, HER2-, Ki67 baixo), Luminal B, HER2-enriquecido, Triplo negativo",
          "Estadiamento: exame clinico (T, N) + TC torax/abdome/pelve + cintilografia ossea se N+ ou sintomas",
          "CDIS: microcalcificacoes pleomorficas na mamografia — nao ha metastase por definicao",
        ],
      },
      {
        sec: "Mama",
        title: "Cancer de Mama — Cirurgia",
        sub: "Linfonodo sentinela e conservacao mamaria",
        topics: [
          "Biopsia do linfonodo sentinela (BLS): colóide Tc99m + azul patente → 1 linfonodo da cadeia axilar",
          "BLS negativo: NAO realizar esvaziamento axilar — NSABP B-32 — mudou a pratica em 2010",
          "Cirurgia conservadora (quadrantectomia): tumor <3-4cm, sem contraindicacao a RT, margens livres",
          "Mastectomia: multicêntrico, inflamatorio, contraindicacao a RT, BRCA+ com desejo profilatico",
          "Margem cirurgica: 'sem tumor na tinta' — reexcisao se margem comprometida (novo consenso SSO/ASTRO)",
        ],
      },
      {
        sec: "Mama",
        title: "Cancer de Mama — Tratamento Sistemico",
        sub: "Quimio, radio, hormonio e alvo molecular",
        topics: [
          "Radioterapia adjuvante: obrigatoria apos cirurgia conservadora — reduz recidiva local em 70%",
          "Hormonioterapia: RE+ ou RP+ — tamoxifeno (pre-menopausa) ou inibidor de aromatase (pos) por 5-10 anos",
          "Quimioterapia: tumores >2cm, N+, triplo negativo, HER2+ ou Ki67 alto — neoadjuvancia em grandes tumores",
          "Trastuzumab: anti-HER2, 1 ano adjuvante (HERA trial) — cardiotoxicidade (monitora eco de 3/3 meses)",
          "Neoadjuvancia: reduz tumor antes da cirurgia — resposta completa patologica (pCR) = melhor prognostico",
        ],
      },
      {
        sec: "Tireoide",
        title: "Nodulo de Tireoide e Classificacao PAAF",
        sub: "Bethesda define a conduta cirurgica",
        topics: [
          "Prevalencia: 50-60% da populacao ao USG — maioria benigna (95%)",
          "Caracteristicas suspeitas ao USG: hipoecogenicidade, margem irregular, microcalcificacoes, mais alto que largo",
          "Indicacao de PAAF: ACR TI-RADS 4-5 independente do tamanho; TI-RADS 3 se ≥2,5cm",
          "Bethesda I (nao diagnostico): repetir PAAF guiada por USG em 3 meses",
          "Bethesda II (benigno): seguimento USG em 1-2 anos; III (atipia): repetir ou lobectomia; IV-VI: cirurgia",
        ],
      },
      {
        sec: "Tireoide",
        title: "Hipertireoidismo Cirurgico",
        sub: "Graves, adenoma toxico — quando operar",
        topics: [
          "Doenca de Graves: anticorpo anti-TSI, exoftalmia, mixedema pretibial — hiperfuncao difusa",
          "Adenoma toxico e BMNT: hiperfuncao focal ou multinodular — iodo radioativo (1 linha) ou cirurgia",
          "Indicacoes de tireoidectomia no hipertireoidismo: bocio compressivo grande, suspeita de malignidade, gravidez",
          "Preparo pre-op: metimazol ate eutireoidismo + Lugol (5 gotas 3x/dia por 10 dias antes da cirurgia)",
          "Tireoidectomia total: padrão para Graves com indicacao cirurgica — monitorar Ca pos-op (hipoPTH)",
        ],
      },
      {
        sec: "Tireoide",
        title: "Cancer de Tireoide — Tipos Histologicos",
        sub: "Papilífero tem prognostico excelente — anaaplastico e excecao",
        topics: [
          "Carcinoma papilífero: 85%, psamoma bodies, mutacao BRAF V600E, metastase linfonodal, SV10 anos >95%",
          "Carcinoma folicular: 10%, diagnostico so na histologia (invasao capsular ou vascular), metastase hematogenica",
          "Carcinoma medular: celulas C, calcitonina elevada, NEM 2A (feocromocitoma + HPT) e 2B (neuromas), gene RET",
          "Carcinoma anaaplastico: <2%, mais agressivo, mediana de SV 6 meses — multimodal paliativo",
          "Tireoidectomia total: padrao para ca >1cm — complicacoes: hipoPTH (hipocalcemia) e lesao do n. laringeo recorrente",
        ],
      },
      {
        sec: "Paratireoide",
        title: "Hiperparatireoidismo e Paratireoidectomia",
        sub: "Hipercalcemia + PTH alto = cirurgia",
        topics: [
          "HPT primario: adenoma unico 85%, hiperplasia 14%, carcinoma <1% — hipercalcemia geralmente assintomatica",
          "Manifestacoes: 'pedras, ossos, gemidos, queixas psiquicas' — nefrolitíase, osteoporose, constipacao, depressao",
          "Diagnostico: Ca total >10,5 mg/dL + PTH alto + hipercalciuria + hipofosfatemia — tudo junto",
          "Indicacoes de paratireoidectomia: Ca >1mg/dL acima do normal, <50 anos, TFG <60, nefrolitíase, sintomatico",
          "Localizacao pre-op: cintilografia com sestamibi + USG cervical → miniacesso guiado por PTH intraoperatorio",
        ],
      },
      {
        sec: "Adrenal",
        title: "Incidentaloma Adrenal e Feocromocitoma",
        sub: "Achado na TC — o que fazer",
        topics: [
          "Incidentaloma: achado em TC por outra causa — avaliar funcionalidade e malignidade",
          "Investigacao: cortisol apos supressao com dexametasona, aldosterona/renina, metanefrinas, DHEAS",
          "Indicacao cirurgica: >4cm, funcionante, crescimento em follow-up, caracteristicas malignas",
          "Feocromocitoma: 3 Ps (pressao paroxistica, palpitacao, perspiração), cefaleia — metanefrinas urinaraias/plasmaticas",
          "Preparo: bloqueio alfa com fenoxibenzamina por 10-14 dias ANTES do bloqueio beta — evitar crise hipertensiva",
        ],
      },
    ],
  },
  {
    id: "b7",
    label: "Revisao Final",
    color: "#94a3b8",
    title: "&#11035; Revisao e Simulados",
    meta: "So iniciar apos concluir todos os blocos anteriores!",
    days: [
      {
        sec: "Revisao",
        title: "Revisao — Fundamentos e Fluidos",
        sub: "Reler ativo e melhor que ler passivo",
        topics: [
          "Choque: classificacao (hipo, cardio, distributivo, obstrutivo), parametros hemodinamicos de cada tipo",
          "Tratamento do choque: metas (PAM, diurese, lactato), vasopressores (norepinefrina 1 linha), bundle septico",
          "Acido-base: 4 passos de interpretacao da gasometria + compensacoes esperadas",
          "Transfusao: indicacoes corretas de hemoC, plaquetas, PFC, crioprecipitado — decorar limites",
          "20 questoes comentadas de fundamentos — foco nos temas com mais erros",
        ],
      },
      {
        sec: "Revisao",
        title: "Revisao — Trauma",
        sub: "ATLS do inicio ao fim em uma sessao",
        topics: [
          "ABCDE do trauma: ordem, prioridades, o que fazer em cada etapa sem hesitar",
          "TCE: classificacao Glasgow, tipos de hematomas, manejo da HIC — resumo compacto",
          "Trauma toracico: 5 lesoes fatais da avaliacao primaria — reconhecimento e tratamento imediato",
          "Trauma abdominal: FAST, indicacoes de laparotomia, damage control surgery",
          "20 questoes comentadas de trauma — incluindo queimaduras e fraturas de pelve",
        ],
      },
      {
        sec: "Revisao",
        title: "Revisao — Abdome Agudo",
        sub: "Diagnostico diferencial rapido sem margens de erro",
        topics: [
          "Inflamatorio: apendicite (Alvarado), colecistite (Toquio), pancreatite (Ranson) — escores na ponta da lingua",
          "Obstrutivo: causas por localizacao, Rx, TC, condutas de cada tipo",
          "Perfurativo: ulcera (rafia de Graham) e diverticulite (Hinchey I-IV) — cada estagio e conduta",
          "HDA e HDB: causas principais, escore de Rockall, abordagem endoscopica",
          "20 questoes comentadas de abdome agudo",
        ],
      },
      {
        sec: "Revisao",
        title: "Revisao — Digestivo Parte 1",
        sub: "Hernias, esofago e estomago",
        topics: [
          "Hernias: anatomia do canal inguinal, tipos, tecnicas (Lichtenstein, TAPP, TEP), complicacoes",
          "DRGE e acalasia: fisiopatologia, diagnostico, indicacoes cirurgicas, fundoplicatura",
          "Ulcera peptica: H. pylori, classificacao de Johnson, complicacoes, cirurgia",
          "Cancer gastrico: Borrmann, D2, estadiamento, adjuvancia",
          "20 questoes comentadas de hernias + esofago + estomago",
        ],
      },
      {
        sec: "Revisao",
        title: "Revisao — Digestivo Parte 2",
        sub: "Via biliar, pancreas, intestino e coloproctologia",
        topics: [
          "Via biliar: colelitíase, colecistite (Toquio), coledocolitíase, CPRE, colangite (Charcot/Reynolds)",
          "Pancreas: pancreatite cronica, cancer (Whipple), CPRE",
          "Cancer colorretal: rastreamento, sequencia adenoma-carcinoma, estadiamento TNM, cirurgias segmentares",
          "Coloproctologia: hemorroidas, fissura, fistula, abscesso anorretal",
          "20 questoes comentadas de via biliar + pancreas + colon + coloproctologia",
        ],
      },
      {
        sec: "Revisao",
        title: "Revisao — Vascular + Mama + Tireoide",
        sub: "Fechar os blocos finais",
        topics: [
          "Vascular: ITB, Fontaine, AAA (indicacao + EVAR), isquemia aguda (6 Ps), TVP/TEP (Wells + tratamento)",
          "Mama: BI-RADS, estadiamento, linfonodo sentinela, adjuvancia por subtipo biologico",
          "Tireoide: Bethesda, carcinomas (papilífero vs medular vs anaplastico), tireoidectomia total",
          "Paratireoide e adrenal: HPT primario, feocromocitoma (preparo pre-op), Conn",
          "20 questoes comentadas de vascular + mama + tireoide + paratireoide",
        ],
      },
      {
        sec: "Simulados",
        title: "Simulado Completo #1",
        sub: "60 questoes sem consulta — condicao real de prova",
        topics: [
          "60 questoes cronometradas — 90 minutos (1,5 min por questao), sem consulta a nenhum material",
          "Correcao imediata: calcular % de acerto por area (fundamentos, trauma, digestivo, vascular, mama)",
          "Anotar todos os temas com acerto <60% para revisao focada na semana seguinte",
          "Revisao das questoes erradas: entender o raciocinio, nao so o gabarito",
          "Nao desanimar — cada erro e uma questao que voce acertara na prova!",
        ],
      },
      {
        sec: "Simulados",
        title: "Simulado Final + Perolas de Prova",
        sub: "A reta final — confie no seu preparo",
        topics: [
          "60 questoes finais — comparar % de acerto com o Simulado #1 para medir evolucao",
          "Perolas clinicas: 'intervalo lucido' (EDH), 'dor desproporcional' (isquemia mesentérica), 'dor em punhalada' (ulcera perfurada)",
          "Revisao express (1h): ATLS → choque → abdome agudo → escores (Ranson, Alvarado, Rockall, Wells)",
          "Escores para memorizar: Alvarado (apendicite), Ranson (pancreatite), Rockall (HDA), Wells (TVP/TEP), Hinchey (diverticulite), Toquio (colecistite)",
          "Durma bem antes da prova — voce esta pronto(a)! Boa prova! &#127942;",
        ],
      },
    ],
  },
];

function getState() {
  try {
    return JSON.parse(localStorage.getItem("resi4") || "{}");
  } catch {
    return {};
  }
}
function saveState(s) {
  localStorage.setItem("resi4", JSON.stringify(s));
}
function tKey(bid, di, ti) {
  return bid + "_" + di + "_" + ti;
}
let state = getState();
function blockStats(b) {
  let done = 0,
    total = 0;
  b.days.forEach((d, di) =>
    d.topics.forEach((_, ti) => {
      total++;
      if (state[tKey(b.id, di, ti)]) done++;
    }),
  );
  return { done, total };
}
function globalStats() {
  let done = 0,
    total = 0;
  BLOCKS.forEach((b) => {
    const s = blockStats(b);
    done += s.done;
    total += s.total;
  });
  return { done, total };
}
function isDayDone(b, di) {
  return b.days[di].topics.every((_, ti) => state[tKey(b.id, di, ti)]);
}
function renderNav() {
  const nav = document.getElementById("nav-tabs");
  nav.innerHTML = "";
  BLOCKS.forEach((b, bi) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (bi === 0 ? " active" : "");
    btn.dataset.bi = bi;
    btn.innerHTML =
      '<span class="tab-dot" style="background:' +
      b.color +
      '"></span>' +
      b.label;
    btn.onclick = () => switchTab(bi);
    nav.appendChild(btn);
  });
}
function renderAll() {
  const area = document.getElementById("content-area");
  area.innerHTML = "";
  BLOCKS.forEach((b, bi) => {
    const panel = document.createElement("div");
    panel.className = "block-panel" + (bi === 0 ? " active" : "");
    panel.id = "panel-" + bi;
    buildBlock(b, bi, panel);
    area.appendChild(panel);
  });
}
function buildBlock(b, bi, panel) {
  const { done, total } = blockStats(b);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const hdr = document.createElement("div");
  hdr.className = "block-header";
  hdr.innerHTML =
    '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:10px;"><div><div class="block-title" style="color:' +
    b.color +
    '">' +
    b.title +
    '</div><div class="block-meta">' +
    b.meta +
    '</div></div><div style="text-align:right;flex-shrink:0;"><div id="bnum-' +
    b.id +
    "\" style=\"font-family:'DM Mono',monospace;font-size:1.3rem;color:" +
    b.color +
    '">' +
    done +
    "/" +
    total +
    '</div><div style="font-size:0.62rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.06em">topicos</div></div></div><div class="block-bar"><div class="block-bar-fill" id="bar-' +
    b.id +
    '" style="width:' +
    pct +
    "%;background:" +
    b.color +
    '"></div></div>';
  panel.appendChild(hdr);
  let curSec = "";
  let gDay = 0;
  b.days.forEach((day, di) => {
    gDay++;
    if (day.sec !== curSec) {
      curSec = day.sec;
      const sl = document.createElement("div");
      sl.className = "section-label";
      sl.textContent = curSec;
      panel.appendChild(sl);
    }
    panel.appendChild(buildCard(b, day, di, gDay));
  });
  const rb = document.createElement("button");
  rb.className = "reset-btn";
  rb.textContent = "↺ Resetar progresso deste bloco";
  rb.onclick = () => resetBlock(b.id, bi);
  panel.appendChild(rb);
}
function buildCard(b, day, di, num) {
  const dayDone = isDayDone(b, di);
  const doneCnt = day.topics.filter(
    (_, ti) => state[tKey(b.id, di, ti)],
  ).length;
  const card = document.createElement("div");
  card.className = "day-card" + (dayDone ? " completed" : "");
  card.id = "card-" + b.id + "-" + di;
  const hdr = document.createElement("div");
  hdr.className = "day-header";
  hdr.innerHTML =
    '<span class="day-num">Dia ' +
    num +
    '</span><div class="day-info"><div class="day-title">' +
    day.title +
    '</div><div class="day-sub">' +
    day.sub +
    '</div></div><div class="day-right"><span class="done-badge">✓ Feito</span><span id="cnt-' +
    b.id +
    "-" +
    di +
    '" style="font-family:\'DM Mono\',monospace;font-size:0.7rem;color:var(--muted)">' +
    doneCnt +
    "/" +
    day.topics.length +
    '</span><span class="chevron">▾</span></div>';
  hdr.onclick = () => card.classList.toggle("open");
  card.appendChild(hdr);
  const tasks = document.createElement("div");
  tasks.className = "day-tasks";
  day.topics.forEach((topic, ti) => {
    const done = state[tKey(b.id, di, ti)];
    const item = document.createElement("div");
    item.className = "topic-item" + (done ? " done" : "");
    item.dataset.bid = b.id;
    item.dataset.di = di;
    item.dataset.ti = ti;
    item.innerHTML =
      '<div class="topic-check"></div><span class="topic-text">' +
      topic +
      "</span>";
    item.onclick = () => toggleTopic(item, b, di, ti);
    tasks.appendChild(item);
  });
  card.appendChild(tasks);
  return card;
}
function toggleTopic(item, b, di, ti) {
  const k = tKey(b.id, di, ti);
  state[k] = !state[k];
  saveState(state);
  item.classList.toggle("done", state[k]);
  const doneCnt = b.days[di].topics.filter(
    (_, i) => state[tKey(b.id, di, i)],
  ).length;
  const cntEl = document.getElementById("cnt-" + b.id + "-" + di);
  if (cntEl) cntEl.textContent = doneCnt + "/" + b.days[di].topics.length;
  const card = document.getElementById("card-" + b.id + "-" + di);
  if (card) card.classList.toggle("completed", isDayDone(b, di));
  updateBlockBar(b);
  updateGlobal();
  syncUp();
}
function updateBlockBar(b) {
  const { done, total } = blockStats(b);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const bar = document.getElementById("bar-" + b.id);
  if (bar) bar.style.width = pct + "%";
  const num = document.getElementById("bnum-" + b.id);
  if (num) num.textContent = done + "/" + total;
}
function updateGlobal() {
  const { done, total } = globalStats();
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("gpct-num").textContent = pct + "%";
  const ring = document.getElementById("g-ring");
  if (ring) ring.style.strokeDashoffset = 100.5 - (pct / 100) * 100.5;
}
function switchTab(bi) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b, i) => b.classList.toggle("active", i === bi));
  document
    .querySelectorAll(".block-panel")
    .forEach((p, i) => p.classList.toggle("active", i === bi));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function resetBlock(bid, bi) {
  if (!confirm("Apagar progresso deste bloco?")) return;
  BLOCKS[bi].days.forEach((d, di) =>
    d.topics.forEach((_, ti) => delete state[tKey(bid, di, ti)]),
  );
  saveState(state);
  const panel = document.getElementById("panel-" + bi);
  panel.innerHTML = "";
  buildBlock(BLOCKS[bi], bi, panel);
  updateGlobal();
  syncUp();
}

// Sincronização em Nuvem Automática via keyvalue.immanuel.co
const APP_KEY = "jg3vupzv";
const CLOUD_KEY = "taci_surgery_residency_progress";
let isSyncing = false;

function updateCloudStatus(status) {
  const icon = document.getElementById("cloud-icon");
  const text = document.getElementById("cloud-text");
  const container = document.getElementById("cloud-status");
  if (!icon || !text || !container) return;

  if (status === 'syncing') {
    icon.textContent = "🔄";
    icon.style.color = "#7c9ef8";
    text.textContent = "Salvando...";
    container.style.borderColor = "rgba(124, 158, 248, 0.2)";
  } else if (status === 'synced') {
    icon.textContent = "☁️";
    icon.style.color = "#34d399";
    text.textContent = "Salvo na Nuvem";
    container.style.borderColor = "rgba(52, 211, 153, 0.2)";
  } else if (status === 'error') {
    icon.textContent = "⚠️";
    icon.style.color = "#f87171";
    text.textContent = "Offline (Local)";
    container.style.borderColor = "rgba(248, 113, 113, 0.2)";
  }
}

function serializeState(s) {
  return Object.keys(s).filter(k => s[k]);
}

function deserializeState(arr) {
  const s = {};
  if (Array.isArray(arr)) {
    arr.forEach(k => { s[k] = true; });
  }
  return s;
}

async function syncUp() {
  if (isSyncing) return;
  isSyncing = true;
  updateCloudStatus('syncing');
  try {
    await saveRemoteState(state);
    updateCloudStatus('synced');
  } catch (err) {
    console.error(err);
    updateCloudStatus('error');
  } finally {
    isSyncing = false;
  }
}

async function syncDown() {
  isSyncing = true;
  updateCloudStatus('syncing');
  try {
    const remote = await fetchRemoteState();
    if (remote) {
      state = { ...state, ...remote };
      saveState(state);
      renderAll();
      updateGlobal();
      await saveRemoteState(state);
    }
    updateCloudStatus('synced');
  } catch (err) {
    console.error(err);
    updateCloudStatus('error');
  } finally {
    isSyncing = false;
  }
}

async function fetchRemoteState() {
  const response = await fetch(`https://keyvalue.immanuel.co/api/KeyVal/GetValue/${APP_KEY}/${CLOUD_KEY}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados remotos');
  }
  const data = await response.json();
  if (!data) return null;
  try {
    const arr = JSON.parse(data);
    return deserializeState(arr);
  } catch (e) {
    console.error("Erro ao analisar dados", e);
    return null;
  }
}

async function saveRemoteState(data) {
  const serialized = JSON.stringify(serializeState(data));
  const encoded = encodeURIComponent(serialized);
  const response = await fetch(`https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${APP_KEY}/${CLOUD_KEY}/${encoded}`, {
    method: 'POST',
    body: '' // IIS requires Content-Length: 0 for empty POST, browser sets this automatically with empty string body
  });
  if (!response.ok) {
    throw new Error('Erro ao salvar dados remotos');
  }
}

renderNav();
renderAll();
updateGlobal();
const first = document.querySelector(".day-card");
if (first) first.classList.add("open");

// Inicialização do sync automático em segundo plano
syncDown();
