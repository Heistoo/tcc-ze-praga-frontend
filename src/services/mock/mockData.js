export const actionPlanLevels = [
  { id: 'essencial', label: 'Essencial', description: 'Acoes imediatas e objetivas' },
  { id: 'campo', label: 'Estrategia de Campo', description: 'Manejo completo com cronograma' },
  { id: 'especialista', label: 'Visao Especialista', description: 'Analise tecnica aprofundada' },
];

export const diseases = [
  {
    id: 'ferrugem-asiatica',
    name: 'Ferrugem Asiatica',
    scientificName: 'Phakopsora pachyrhizi',
    confidence: 0.92,
    severity: 'alta',
    description:
      'Doenca fungica severa que causa lesoes amareladas a marrom-escuras na face inferior das folhas. E a principal doenca da soja no Brasil, podendo causar desfolha precoce e perdas de ate 80% na produtividade.',
    actionPlan: {
      essencial: [
        'Aplicar fungicida a base de triazol + estrobilurina imediatamente',
        'Monitorar a evolucao da doenca a cada 7 dias',
        'Registrar a ocorrencia no sistema de alerta fitossanitario',
      ],
      campo: [
        'Aplicacao imediata de fungicida sistemico (triazol + estrobilurina) — ex: Epoxiconazol + Piraclostrobina, dose conforme bula',
        'Aplicacao preventiva nas areas adjacentes num raio de 500m para conter a dispersao de esporos',
        'Monitoramento semanal com coleta de folhas do terco inferior, medio e superior da planta',
        'Verificar calendario do vazio sanitario da regiao e garantir conformidade',
        'Planejar segunda aplicacao em 14-21 dias com rotacao de principio ativo (ex: carboxamida + estrobilurina)',
        'Avaliar a necessidade de antecipacao da colheita caso a desfolha ultrapasse 50%',
        'Registrar ocorrencia no Consorcio Antiferrugem para contribuir com o sistema de alerta nacional',
      ],
      especialista: [
        'Identificacao — Lesoes "tan" (castanho-claras) com uredias na face abaxial da folha. A esporulacao abundante diferencia da ferrugem americana (P. meibomiae). Confirmar com lupa de campo (10-20x) ou envio de amostra para laboratorio',
        'Epidemiologia — Phakopsora pachyrhizi e um patogeno biotrofico obrigatorio, disseminado por esporos transportados pelo vento a longas distancias (ate 600 km). Condicoes otimas: temperatura 18-26°C, molhamento foliar >6h, umidade relativa >80%',
        'Controle quimico — Rotacionar grupos quimicos para evitar resistencia: (1a aplicacao) triazol + estrobilurina; (2a aplicacao) carboxamida + estrobilurina; (3a aplicacao) triazol + carboxamida. Respeitar intervalo de 14-21 dias entre aplicacoes',
        'Tecnologia de aplicacao — Volume de calda minimo de 150 L/ha. Bicos com gotas finas a medias. Aplicar preferencialmente no inicio da manha ou final da tarde para melhor deposicao. Adicionar adjuvante para melhor cobertura na face inferior das folhas',
        'Manejo integrado — Utilizar cultivares de ciclo precoce para escape. Semear no inicio da janela recomendada. Eliminar soja voluntaria ("tiguera") durante o vazio sanitario. Diversificar com milho safrinha para quebra do ciclo',
        'Analise economica — O custo medio de 3 aplicacoes gira em torno de R$ 250-350/ha. Sem controle, perdas podem atingir 80% da produtividade. O retorno do investimento em fungicidas para ferrugem e tipicamente de 5:1 a 8:1',
        'Monitoramento avancado — Utilizar armadilhas de esporos (caca-esporos) para deteccao precoce. Consultar o sistema de alerta do Consorcio Antiferrugem (www.embrapa.br/ferrugem). Considerar uso de imagens de satelite (NDVI) para mapeamento de areas afetadas',
      ],
      sources: [
        { name: 'EMBRAPA Soja', detail: 'Circular Tecnica 104 — Ferrugem Asiatica da Soja', url: 'https://www.embrapa.br/soja' },
        { name: 'Consorcio Antiferrugem', detail: 'Sistema de alerta e monitoramento nacional', url: 'https://www.embrapa.br/ferrugem' },
        { name: 'FRAC - Fungicide Resistance Action Committee', detail: 'Guia de rotacao de mecanismos de acao', url: 'https://www.frac.info' },
        { name: 'Godoy, C.V. et al. (2016)', detail: 'Asian soybean rust in Brazil: past, present, and future. Pesquisa Agropecuaria Brasileira, 51(5), 407-421' },
        { name: 'PlantVillage - Penn State University', detail: 'Dataset de imagens para treinamento dos modelos de classificacao', url: 'https://plantvillage.psu.edu' },
      ],
    },
  },
  {
    id: 'mancha-alvo',
    name: 'Mancha Alvo',
    scientificName: 'Corynespora cassiicola',
    confidence: 0.87,
    severity: 'media',
    description:
      'Doenca fungica caracterizada por lesoes circulares com aneis concentricos que lembram um alvo. Causa desfolha prematura e reducao na produtividade, especialmente em cultivares suscetiveis.',
    actionPlan: {
      essencial: [
        'Aplicar fungicida especifico para Corynespora',
        'Evitar cultivares suscetiveis na proxima safra',
        'Monitorar a lavoura a cada 10 dias',
      ],
      campo: [
        'Aplicar fungicida multissitio (ex: mancozebe ou clorotalonil) em mistura com sistemico (carboxamida + estrobilurina) para maior eficacia',
        'Realizar rotacao de culturas com milho ou algodao por pelo menos 2 safras para reducao do inoculo no solo',
        'Selecionar cultivares com tolerancia comprovada a Corynespora para a proxima safra — consultar ensaios regionais',
        'Monitoramento quinzenal com atencao especial ao terco inferior da planta, onde os sintomas iniciam',
        'Manejar a densidade de plantio para melhor circulacao de ar entre plantas e reducao da umidade foliar',
        'Planejar adubacao equilibrada — excesso de nitrogenio aumenta a suscetibilidade',
      ],
      especialista: [
        'Identificacao — Lesoes circulares (3-15 mm) com aneis concentricos e halo amarelado. C. cassiicola produz conidios longos e septados, visiveis em microscopia. Hospedeiro de ampla gama: soja, tomate, pepino, seringueira — atencao em areas com multiplos cultivos',
        'Epidemiologia — Fungo necrotrofico com sobrevivencia saprofita em restos culturais por ate 2 anos. Disseminacao por respingos de chuva e vento. Temperatura otima: 25-30°C. O patogeno produz a toxina cassiicolin, responsavel pela necrose rapida dos tecidos',
        'Resistencia a fungicidas — Populacoes brasileiras de C. cassiicola apresentam casos de resistencia a estrobilurinas (mutacao G143A) e reducao de sensibilidade a carboxamidas. Priorizar fungicidas multissitios na mistura e realizar rotacao de mecanismos de acao',
        'Manejo de solo e restos culturais — Incorporar restos culturais com grade apos a colheita para acelerar a decomposicao. Evitar plantio direto sobre palhada de soja em areas com historico severo da doenca',
        'Impacto economico — Perdas variam de 15-30% em cultivares suscetiveis. O custo de controle quimico e de R$ 120-180/ha por aplicacao. Cultivares tolerantes reduzem a necessidade de aplicacoes em 1-2 pulverizacoes/safra',
        'Estrategia de longo prazo — Integrar controle biologico com Trichoderma spp. no tratamento de sementes e solo. Acompanhar os programas de melhoramento genetico para lancamento de cultivares com resistencia poliganica',
      ],
      sources: [
        { name: 'EMBRAPA Soja', detail: 'Documentos 340 — Manejo da Mancha Alvo na Cultura da Soja', url: 'https://www.embrapa.br/soja' },
        { name: 'Godoy, C.V. et al. (2018)', detail: 'Target spot: an emerging disease in soybean. Tropical Plant Pathology, 43, 197-203' },
        { name: 'AGROFIT - MAPA', detail: 'Sistema de agrotoxicos fitossanitarios — produtos registrados para Corynespora', url: 'https://agrofit.agricultura.gov.br' },
        { name: 'PlantVillage - Penn State University', detail: 'Dataset de imagens para treinamento dos modelos de classificacao', url: 'https://plantvillage.psu.edu' },
      ],
    },
  },
  {
    id: 'antracnose',
    name: 'Antracnose',
    scientificName: 'Colletotrichum truncatum',
    confidence: 0.78,
    severity: 'media',
    description:
      'Doenca fungica que afeta hastes, vagens e folhas da soja. Causa manchas escuras e necrose dos tecidos, podendo levar a morte prematura das plantas em condicoes de alta umidade.',
    actionPlan: {
      essencial: [
        'Aplicar fungicida protetor + sistemico',
        'Utilizar sementes tratadas na proxima safra',
        'Monitorar a cada 7-10 dias',
      ],
      campo: [
        'Aplicar fungicida protetor (mancozebe) + sistemico (carbendazim ou tiofanato metilico) — iniciar na fase R1 (inicio do florescimento)',
        'Garantir boa drenagem na area de cultivo — evitar acumulo de agua que favorece a esporulacao',
        'Tratar sementes com fungicida (carbendazim + tiram) para prevenir infeccao inicial',
        'Reduzir a densidade de plantio em areas com historico da doenca para melhorar a aeracao',
        'Planejar colheita antecipada caso a infeccao em vagens ultrapasse 20% das amostras',
        'Realizar rotacao com milho ou sorgo por 1-2 safras para reducao do inoculo',
      ],
      especialista: [
        'Identificacao — Manchas irregulares marrom-escuras a negras em hastes, peciolos e vagens. Em condicoes umidas, massas de esporos alaranjadas (acervulos) sao visiveis. C. truncatum produz conidios falciformes caracteristicos em microscopia',
        'Ciclo da doenca — O fungo sobrevive em sementes infectadas e restos culturais. A infeccao pode ser latente durante o estagio vegetativo, manifestando-se com intensidade a partir do florescimento (R1-R3). Chuvas frequentes e temperaturas de 22-28°C aceleram a epidemia',
        'Controle quimico avancado — Carbendazim e o principio ativo mais eficaz, porem com risco de resistencia. Alternar com estrobilurinas + triazois. Em areas com alta pressao, realizar 2-3 aplicacoes: R1, R3 e R5.1. Volume de calda minimo: 120 L/ha',
        'Qualidade de sementes — A transmissao via sementes e a principal forma de introducao em novas areas. Realizar teste de sanidade (blotter test) no lote de sementes. Taxas de infeccao acima de 5% requerem tratamento quimico obrigatorio',
        'Impacto na qualidade dos graos — Alem da reducao de produtividade (10-40%), a antracnose causa graos manchados e enrugados, com reducao do peso de 1000 graos e do teor de oleo. Lotes severamente afetados podem sofrer desagio na comercializacao',
        'Controle biologico — Trichoderma harzianum e Bacillus subtilis apresentam resultados promissores como tratamento de sementes complementar. Aplicacao de Bacillus via foliar em R1 pode reduzir a severidade em 20-30%',
      ],
      sources: [
        { name: 'EMBRAPA Soja', detail: 'Circular Tecnica 100 — Antracnose da Soja', url: 'https://www.embrapa.br/soja' },
        { name: 'Dias, M.D. et al. (2016)', detail: 'Colletotrichum truncatum and soybean anthracnose. Fitopatologia Brasileira, 41(2), 89-97' },
        { name: 'ABRATES', detail: 'Normas para analise sanitaria de sementes — Regras para Analise de Sementes', url: 'https://www.abrates.org.br' },
        { name: 'PlantVillage - Penn State University', detail: 'Dataset de imagens para treinamento dos modelos de classificacao', url: 'https://plantvillage.psu.edu' },
      ],
    },
  },
  {
    id: 'cercosporiose',
    name: 'Cercosporiose',
    scientificName: 'Cercospora kikuchii',
    confidence: 0.84,
    severity: 'media',
    description:
      'Doenca fungica que causa manchas purpuras nas folhas e sementes. O fungo sobrevive nas sementes infectadas e nos restos culturais, sendo favorecido por temperaturas entre 23-27 graus e alta umidade.',
    actionPlan: {
      essencial: [
        'Aplicar fungicida a base de benzimidazol ou estrobilurina',
        'Utilizar sementes certificadas e tratadas',
        'Eliminar restos culturais apos a colheita',
      ],
      campo: [
        'Aplicar fungicida sistemico (benzimidazol + estrobilurina) na fase R3-R4, quando os sintomas foliares se intensificam',
        'Realizar segunda aplicacao em R5.1 para proteger as vagens em formacao contra a "mancha purpura da semente"',
        'Utilizar sementes com certificacao de sanidade — lotes com menos de 3% de sementes manchadas',
        'Tratar sementes com carboxim + tiram para eliminar o inoculo presente no tegumento',
        'Incorporar restos culturais com grade para acelerar a decomposicao e reducao do inoculo',
        'Realizar rotacao com milho, sorgo ou culturas nao hospedeiras por pelo menos 1 safra',
      ],
      especialista: [
        'Identificacao — Cercospora kikuchii causa dois sintomas distintos: (1) crestamento foliar — lesoes angulares purpura-avermelhadas no limbo foliar; (2) mancha purpura da semente — descoloracao purpura no tegumento. A toxina cercosporina (fotoativada) e responsavel pela necrose tecidual',
        'Epidemiologia — Patogeno necrotrofico com fase saprofita em restos culturais. A cercosporina e produzida sob luz e causa peroxidacao lipidica nas celulas vegetais. Condicoes otimas: 23-27°C, alta umidade, e periodos alternados de sol e chuva. Disseminacao por esporos transportados pelo vento e respingos',
        'Resistencia e sensibilidade — Populacoes de C. kikuchii no Brasil mantêm boa sensibilidade a benzimidazois e estrobilurinas. Porem, monitorar a eficacia — ha relatos de reducao de sensibilidade a QoIs (estrobilurinas) em outras especies de Cercospora. Uso de multissitios como parceiro de mistura e recomendado',
        'Impacto na qualidade comercial — A mancha purpura da semente nao afeta significativamente a germinacao, mas causa desclassificacao do lote para producao de sementes. Em mercados de exportacao, graos manchados sofrem desagio de 5-15% no preco. O impacto economico total (produtividade + qualidade) pode chegar a 20-30%',
        'Manejo integrado avancado — Combinar: (1) cultivares com tolerancia; (2) tratamento de sementes biologico (Bacillus amyloliquefaciens) + quimico; (3) aplicacao foliar estrategica em R3 e R5.1; (4) rotacao de culturas com gramineas; (5) eliminacao de soja voluntaria',
        'Pesquisa e tendencias — Novos fungicidas do grupo SDHI (carboxamidas) mostram excelente controle. Estudos com indutores de resistencia (acibenzolar-S-metilico) apresentam reducao de 25-40% na severidade quando aplicados preventivamente. Cultivares com gene de resistencia Rcs3 estao em fase de validacao',
      ],
      sources: [
        { name: 'EMBRAPA Soja', detail: 'Documentos 351 — Cercosporiose da Soja: epidemiologia e manejo', url: 'https://www.embrapa.br/soja' },
        { name: 'Almeida, A.M.R. et al. (2005)', detail: 'Doenças da soja. In: Manual de Fitopatologia, 4a ed., Agronômica Ceres' },
        { name: 'FRAC - Fungicide Resistance Action Committee', detail: 'Monitoramento de resistencia a fungicidas em Cercospora spp.', url: 'https://www.frac.info' },
        { name: 'PlantVillage - Penn State University', detail: 'Dataset de imagens para treinamento dos modelos de classificacao', url: 'https://plantvillage.psu.edu' },
      ],
    },
  },
  {
    id: 'mildio',
    name: 'Mildio',
    scientificName: 'Peronospora manshurica',
    confidence: 0.81,
    severity: 'baixa',
    description:
      'Doenca fungica que causa manchas verde-claras a amareladas na face superior das folhas, com esporulacao acinzentada na face inferior. Normalmente nao causa perdas significativas, mas pode indicar condicoes favoraveis a outras doencas.',
    actionPlan: {
      essencial: [
        'Monitorar a evolucao da doenca',
        'Aplicar fungicida preventivo se a incidencia aumentar',
        'Preferir cultivares com resistencia genetica',
      ],
      campo: [
        'Monitoramento semanal — o mildio sozinho raramente causa perdas expressivas, mas pode indicar microclima favoravel a doencas mais severas',
        'Se a incidencia foliar ultrapassar 25%, aplicar fungicida a base de metalaxil ou cimoxanil + mancozebe',
        'Selecionar cultivares com genes Rpm (resistencia a Peronospora) para as proximas safras',
        'Ajustar a epoca de semeadura para evitar coincidir o estagio vegetativo com periodos de alta umidade',
        'Manejar o espacamento entre linhas para favorecer a ventilacao e reducao da umidade na copa',
      ],
      especialista: [
        'Identificacao — Manchas verde-claras a amareladas (cloroticas) na face adaxial, com esporulacao cinza-esbranquicada (esporangioforos e esporangios) na face abaxial. Em infeccoes severas, as manchas coalescem e causam necrose. Sementes infectadas apresentam crosta esbranquicada de oosporos no tegumento',
        'Epidemiologia — Oomiceto biotrofico obrigatorio. Sobrevive como oosporos em sementes e restos culturais por ate 3 anos. A infeccao sistemica a partir de sementes contaminadas resulta em plantas com nanismo e esporulacao generalizada. Condicoes otimas: 20-22°C, umidade relativa >90%, orvalho prolongado',
        'Relevancia agronomica — Embora considerado de menor importancia economica isoladamente (perdas de 2-8%), o mildio e um indicador biologico de condicoes favoraveis a patogenos mais agressivos (ferrugem, septoriose). Sua presenca deve motivar intensificacao do monitoramento geral da lavoura',
        'Controle e manejo — O controle quimico raramente se justifica economicamente para mildio isolado. Quando necessario, fungicidas do grupo fenilamidas (metalaxil-M) sao mais eficazes. A principal estrategia e o uso de cultivares resistentes — mais de 30 genes Rpm ja foram identificados em germoplasma de soja',
        'Manejo de sementes — Lotes com mais de 10% de sementes com crosta de oosporos devem ser descartados para uso como semente. O tratamento com metalaxil reduz mas nao elimina a transmissao. Preferir sementes certificadas de lotes sadios',
      ],
      sources: [
        { name: 'EMBRAPA Soja', detail: 'Circular Tecnica 62 — Mildio da Soja: etiologia e controle', url: 'https://www.embrapa.br/soja' },
        { name: 'Hartman, G.L. et al. (2015)', detail: 'Compendium of Soybean Diseases and Pests, 5th Ed., APS Press' },
        { name: 'AGROFIT - MAPA', detail: 'Produtos registrados para Peronospora manshurica em soja', url: 'https://agrofit.agricultura.gov.br' },
        { name: 'PlantVillage - Penn State University', detail: 'Dataset de imagens para treinamento dos modelos de classificacao', url: 'https://plantvillage.psu.edu' },
      ],
    },
  },
  {
    id: 'saudavel',
    name: 'Folha Saudavel',
    scientificName: 'Glycine max',
    confidence: 0.95,
    severity: 'nenhuma',
    description:
      'Nenhuma doenca ou praga detectada. A folha apresenta coloracao e textura normais, indicando bom estado fitossanitario da planta.',
    actionPlan: {
      essencial: [
        'Continuar o monitoramento regular da lavoura',
        'Manter o programa preventivo de manejo integrado de pragas',
      ],
      campo: [
        'Manter monitoramento semanal com caminhamento em zigue-zague pela lavoura',
        'Realizar amostragens com pano de batida para deteccao de pragas (lagartas e percevejos)',
        'Manter calendario de aplicacoes preventivas de fungicidas conforme estagio fenologico',
        'Avaliar o estado nutricional com analise foliar em V4-V6 para correcao de micronutrientes',
      ],
      especialista: [
        'Status fitossanitario — A folha apresenta coloracao verde uniforme, turgidez adequada e ausencia de lesoes, cloroses ou deformacoes. Indicativo de bom equilibrio nutricional e sanitario da planta',
        'Manejo preventivo recomendado — Mesmo em ausencia de sintomas, manter: (1) monitoramento semanal com coleta de 30 pontos por talhao; (2) uso de armadilhas (feromonio para Helicoverpa, pano de batida para percevejos); (3) aplicacao preventiva de fungicida em R1 conforme historico da area',
        'Nutricao e defesa da planta — Plantas bem nutridas apresentam maior resistencia a patogenos. Garantir niveis adequados de potassio (aumenta espessura da parede celular), manganes (cofator de enzimas de defesa) e silicio (barreira fisica). Considerar uso de bioestimulantes a base de Ascophyllum nodosum',
        'Registro e historico — Documentar a condicao saudavel neste ponto da lavoura para construcao de historico espacial. Dados de areas sadias vs. afetadas ao longo das safras permitem identificar padroes e zonas de risco para manejo localizado',
      ],
      sources: [
        { name: 'EMBRAPA Soja', detail: 'Tecnologias de Producao de Soja — Regiao Central do Brasil', url: 'https://www.embrapa.br/soja' },
        { name: 'Fundacao MT', detail: 'Boletim de Pesquisa — Manejo Integrado de Pragas da Soja', url: 'https://www.fundacaomt.com.br' },
        { name: 'PlantVillage - Penn State University', detail: 'Dataset de imagens para treinamento dos modelos de classificacao', url: 'https://plantvillage.psu.edu' },
      ],
    },
  },
];

export const chatResponses = {
  greeting:
    'Ola! Sou o Ze Praga, seu assistente de diagnostico fitossanitario. Envie uma foto da folha de soja para que eu possa analisar, ou pergunte sobre pragas e doencas da cultura.',
  noImage:
    'Para realizar um diagnostico preciso, preciso que voce envie uma foto da folha de soja. Voce pode tirar uma foto ou selecionar uma imagem da galeria.',
  about:
    'Sou uma ferramenta de inteligencia artificial desenvolvida para auxiliar produtores rurais na deteccao de pragas e doencas em lavouras de soja. Utilizo modelos de visao computacional treinados com milhares de imagens para identificar as principais doencas da cultura.',
  ferrugem:
    'A ferrugem asiatica (Phakopsora pachyrhizi) e a doenca mais destrutiva da soja no Brasil. Ela pode causar perdas de ate 80% da produtividade. O monitoramento constante e a aplicacao preventiva de fungicidas sao essenciais para o controle.',
  mancha:
    'A mancha alvo (Corynespora cassiicola) e uma doenca fungica que tem se tornado cada vez mais importante nas lavouras brasileiras. O uso de cultivares resistentes e a rotacao de culturas sao estrategias importantes de controle.',
  default:
    'Entendo sua duvida! Para uma analise mais detalhada, recomendo enviar uma foto da folha afetada. Posso identificar a doenca e sugerir um plano de acao especifico.',
};
