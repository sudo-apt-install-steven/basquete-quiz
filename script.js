const DIFFICULTY = {
  easy: { label: "Facil", timeLimit: 15, baseXp: 80 },
  medium: { label: "Medio", timeLimit: 22, baseXp: 120 },
  hard: { label: "Dificil", timeLimit: 30, baseXp: 170 },
};

const CATEGORIES = {
  mixed: {
    label: "Misto",
    shortLabel: "Misto",
    description: "Regras, fundamentos, quadra, arbitragem e leitura de jogo.",
  },
  rules: {
    label: "Regras do basquete",
    shortLabel: "Regras",
    description: "Pontuacao, violacoes, posse e situacoes comuns de partida.",
  },
  refereeing: {
    label: "Arbitragem",
    shortLabel: "Arbitragem",
    description: "Faltas, penalidades, relogio, reposicoes e decisoes de jogo.",
  },
  fundamentals: {
    label: "Fundamentos",
    shortLabel: "Fundamentos",
    description: "Drible, passe, rebote, defesa, bloqueios e acoes tecnicas.",
  },
  court: {
    label: "Quadra e pontuacao",
    shortLabel: "Quadra",
    description: "Linhas, areas, medidas, valores de cesta e espacos da quadra.",
  },
  strategy: {
    label: "Relogio e estrategia",
    shortLabel: "Estrategia",
    description: "Tempo de ataque, defesa por zona, corta-luz e escolhas taticas.",
  },
};

const questionBank = [
  {
    id: 1,
    difficulty: "easy",
    categories: ["rules", "court"],
    question: "Quantos pontos vale uma cesta feita de dentro do arco?",
    options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"],
    answerIndex: 1,
    hint: "Pense no arremesso comum, feito antes da linha de tres pontos.",
    explanation: "Arremessos convertidos de dentro do arco valem 2 pontos.",
  },
  {
    id: 2,
    difficulty: "easy",
    categories: ["rules", "strategy"],
    question: "Quantos jogadores de um time ficam em quadra ao mesmo tempo?",
    options: ["4 jogadores", "5 jogadores", "6 jogadores", "7 jogadores"],
    answerIndex: 1,
    hint: "Conte apenas quem esta jogando naquele momento, sem incluir o banco.",
    explanation: "Cada equipe joga com 5 atletas em quadra.",
  },
  {
    id: 3,
    difficulty: "easy",
    categories: ["fundamentals"],
    question: "Qual fundamento e usado para se deslocar com a bola?",
    options: ["Drible", "Bloqueio", "Rebote", "Lance livre"],
    answerIndex: 0,
    hint: "E o fundamento em que a bola precisa tocar o chao repetidamente.",
    explanation: "O drible permite avancar quicando a bola no chao.",
  },
  {
    id: 4,
    difficulty: "easy",
    categories: ["rules", "court"],
    question: "Qual linha marca arremessos que valem tres pontos?",
    options: ["Linha lateral", "Linha de lance livre", "Arco de tres pontos", "Linha central"],
    answerIndex: 2,
    hint: "Ela forma um arco grande em volta da area proxima a cesta.",
    explanation: "Cestas feitas de fora do arco valem 3 pontos.",
  },
  {
    id: 5,
    difficulty: "easy",
    categories: ["rules", "refereeing"],
    question: "O que acontece depois de uma falta em um arremesso convertido?",
    options: ["Bola ao alto", "Um lance livre extra", "Dois tempos tecnicos", "Fim do ataque"],
    answerIndex: 1,
    hint: "A cesta ja valeu, entao a punicao adiciona uma cobranca parada.",
    explanation: "A cesta conta e o jogador ganha um lance livre adicional.",
  },
  {
    id: 6,
    difficulty: "easy",
    categories: ["fundamentals"],
    question: "Qual e o objetivo principal do rebote?",
    options: ["Recuperar a bola apos erro", "Cobrar lateral", "Pedir tempo", "Trocar posse automaticamente"],
    answerIndex: 0,
    hint: "Ele acontece logo depois de um arremesso que nao cai.",
    explanation: "O rebote recupera a posse depois de um arremesso errado.",
  },
  {
    id: 7,
    difficulty: "easy",
    categories: ["rules", "court"],
    question: "Uma cesta de lance livre vale quantos pontos?",
    options: ["1 ponto", "2 pontos", "3 pontos", "5 pontos"],
    answerIndex: 0,
    hint: "E a cobranca parada mais simples do placar.",
    explanation: "Cada lance livre convertido vale 1 ponto.",
  },
  {
    id: 8,
    difficulty: "easy",
    categories: ["court"],
    question: "Qual parte da quadra divide defesa e ataque?",
    options: ["Garrafao", "Linha central", "Tabela", "Circulo do lance livre"],
    answerIndex: 1,
    hint: "Ela corta a quadra em duas metades iguais.",
    explanation: "A linha central separa as duas metades da quadra.",
  },
  {
    id: 9,
    difficulty: "easy",
    categories: ["rules", "refereeing"],
    question: "Quando a bola sai pela lateral, como ela volta ao jogo?",
    options: ["Com lance livre", "Com bola ao alto", "Com reposicao lateral", "Com tiro de meta"],
    answerIndex: 2,
    hint: "A bola volta de fora da quadra, perto do ponto onde saiu.",
    explanation: "A equipe repoe a bola de fora da quadra no ponto indicado.",
  },
  {
    id: 10,
    difficulty: "easy",
    categories: ["fundamentals"],
    question: "Qual acao defensiva tenta impedir um arremesso perto da cesta?",
    options: ["Toco", "Assistencia", "Enterrada", "Corta-luz"],
    answerIndex: 0,
    hint: "A defesa mira a bola no momento em que ela esta subindo para o aro.",
    explanation: "O toco bloqueia ou desvia a tentativa de arremesso.",
  },
  {
    id: 11,
    difficulty: "medium",
    categories: ["rules", "refereeing", "strategy"],
    question: "Qual e o tempo de posse para finalizar um ataque no basquete profissional?",
    options: ["24 segundos", "8 segundos", "14 segundos", "30 segundos"],
    answerIndex: 0,
    hint: "Esse e o relogio que obriga o ataque a arremessar rapidamente.",
    explanation: "O ataque precisa tentar um arremesso valido antes de 24 segundos.",
  },
  {
    id: 12,
    difficulty: "medium",
    categories: ["rules", "refereeing", "strategy"],
    question: "Quanto tempo uma equipe tem para passar da defesa ao ataque?",
    options: ["3 segundos", "5 segundos", "8 segundos", "12 segundos"],
    answerIndex: 2,
    hint: "A contagem termina quando a equipe cruza a linha central.",
    explanation: "A regra dos 8 segundos exige atravessar a meia quadra nesse prazo.",
  },
  {
    id: 13,
    difficulty: "medium",
    categories: ["rules", "refereeing"],
    question: "O que caracteriza a infracao de andar?",
    options: ["Quicar com as duas maos", "Mover os pes sem driblar corretamente", "Tocar a bola na tabela", "Pular para disputar rebote"],
    answerIndex: 1,
    hint: "Observe os pes: sem drible legal, eles nao podem passear livremente.",
    explanation: "Andar ocorre quando o jogador desloca os pes alem do permitido sem drible.",
  },
  {
    id: 14,
    difficulty: "medium",
    categories: ["fundamentals", "strategy"],
    question: "O que e uma assistencia?",
    options: ["Passe que leva direto a uma cesta", "Falta de ataque", "Rebote defensivo", "Bloqueio ilegal"],
    answerIndex: 0,
    hint: "Nao e qualquer passe: ele precisa criar uma cesta logo em seguida.",
    explanation: "Assistencia e o passe que cria uma cesta imediatamente.",
  },
  {
    id: 15,
    difficulty: "medium",
    categories: ["court"],
    question: "Qual area perto da cesta tambem e chamada de garrafao?",
    options: ["Area restritiva", "Zona morta", "Linha lateral", "Arco central"],
    answerIndex: 0,
    hint: "E a area pintada abaixo do aro, onde varias regras especiais aparecem.",
    explanation: "O garrafao e a area restritiva pintada proxima ao aro.",
  },
  {
    id: 16,
    difficulty: "medium",
    categories: ["rules", "refereeing", "fundamentals"],
    question: "O que acontece quando um jogador para o drible e volta a quicar?",
    options: ["Falta tecnica", "Dois dribles", "Toco legal", "Reposicao alternada"],
    answerIndex: 1,
    hint: "Depois que o drible acaba, ele nao pode nascer de novo na mesma posse individual.",
    explanation: "Parar e reiniciar o drible configura a infracao de dois dribles.",
  },
  {
    id: 17,
    difficulty: "medium",
    categories: ["fundamentals", "strategy"],
    question: "Em uma defesa por zona, cada defensor protege principalmente o que?",
    options: ["Uma area da quadra", "A bola do arbitro", "A propria cesta apenas", "Um jogador fixo o tempo todo"],
    answerIndex: 0,
    hint: "A palavra-chave e espaco, nao marcacao individual permanente.",
    explanation: "Na defesa por zona, a prioridade e proteger espacos definidos.",
  },
  {
    id: 18,
    difficulty: "medium",
    categories: ["rules", "refereeing"],
    question: "Qual e o reinicio usado no comeco da partida em muitas regras?",
    options: ["Reposicao lateral", "Bola ao alto", "Lance livre", "Cobranca no fundo"],
    answerIndex: 1,
    hint: "Dois jogadores disputam a bola lancada para cima no circulo central.",
    explanation: "A bola ao alto inicia a disputa de posse no circulo central.",
  },
  {
    id: 19,
    difficulty: "medium",
    categories: ["rules", "refereeing", "strategy"],
    question: "O que significa estouro do relogio de posse?",
    options: ["Fim do quarto", "Ataque sem arremesso valido no prazo", "Troca obrigatoria", "Pedido automatico de tempo"],
    answerIndex: 1,
    hint: "Se o ataque nao entrega um arremesso valido a tempo, a posse muda.",
    explanation: "Se o ataque nao arremessa no prazo, perde a posse.",
  },
  {
    id: 20,
    difficulty: "medium",
    categories: ["fundamentals", "strategy"],
    question: "Qual acao ofensiva usa o corpo parado para liberar um companheiro?",
    options: ["Corta-luz", "Toco", "Rebote", "Lance livre"],
    answerIndex: 0,
    hint: "O jogador vira uma barreira legal para abrir caminho ao colega.",
    explanation: "O corta-luz cria espaco bloqueando legalmente o caminho do defensor.",
  },
  {
    id: 21,
    difficulty: "hard",
    categories: ["rules", "refereeing"],
    question: "Na regra FIBA, uma equipe entra em penalidade coletiva apos quantas faltas no quarto?",
    options: ["3 faltas", "4 faltas", "5 faltas", "6 faltas"],
    answerIndex: 1,
    hint: "Depois desse limite, as faltas seguintes colocam o adversario no bonus.",
    explanation: "A partir da 5a falta sofrida no quarto, o adversario cobra lances livres; isso ocorre depois de 4 faltas coletivas.",
  },
  {
    id: 22,
    difficulty: "hard",
    categories: ["rules", "refereeing", "strategy"],
    question: "Quando o relogio de posse costuma ser resetado para 14 segundos?",
    options: ["Apos rebote ofensivo", "Apos qualquer passe", "Apos bola ao alto no inicio", "Apos pedido de tempo da defesa"],
    answerIndex: 0,
    hint: "A equipe continua no ataque, entao o relogio nao volta completo.",
    explanation: "Em muitas regras atuais, o rebote ofensivo reseta a posse para 14 segundos.",
  },
  {
    id: 23,
    difficulty: "hard",
    categories: ["rules", "refereeing"],
    question: "Qual e a consequencia comum de uma falta antidesportiva?",
    options: ["Somente lateral", "Dois pontos automaticos", "Lances livres e posse", "Volta o relogio ao inicio"],
    answerIndex: 2,
    hint: "A punicao combina cobrancas e manutencao da posse.",
    explanation: "Ela normalmente gera lances livres e posse de bola para a equipe prejudicada.",
  },
  {
    id: 24,
    difficulty: "hard",
    categories: ["rules", "refereeing", "strategy"],
    question: "O que e uma violacao de volta de quadra?",
    options: ["Chutar a bola", "Retornar a bola para a defesa apos controle no ataque", "Tocar no aro", "Trocar de marcador"],
    answerIndex: 1,
    hint: "Depois que o ataque e estabelecido, a linha central vira uma fronteira.",
    explanation: "Depois de estabelecer posse no ataque, a equipe nao pode voltar a bola para a meia quadra defensiva.",
  },
  {
    id: 25,
    difficulty: "hard",
    categories: ["court"],
    question: "Em regras internacionais, qual e a distancia aproximada do arco de tres pontos no topo?",
    options: ["5,80 m", "6,75 m", "7,90 m", "9,15 m"],
    answerIndex: 1,
    hint: "A medida internacional fica um pouco abaixo dos 7 metros.",
    explanation: "No padrao FIBA, o arco fica a cerca de 6,75 metros no topo.",
  },
  {
    id: 26,
    difficulty: "hard",
    categories: ["rules", "refereeing", "strategy"],
    question: "Qual infracao ocorre quando um jogador permanece tempo demais no garrafao ofensivo?",
    options: ["3 segundos ofensivos", "8 segundos", "24 segundos", "Interferencia"],
    answerIndex: 0,
    hint: "O garrafao ofensivo nao pode virar estacionamento.",
    explanation: "A regra dos 3 segundos limita a permanencia no garrafao ofensivo.",
  },
  {
    id: 27,
    difficulty: "hard",
    categories: ["rules", "refereeing"],
    question: "O que e interferencia na bola perto do aro?",
    options: ["Tocar a bola em trajetoria proibida", "Passar sem olhar", "Quicar alto demais", "Pisar fora da quadra"],
    answerIndex: 0,
    hint: "A regra protege a bola quando ela esta sobre ou muito perto do aro.",
    explanation: "Interferencia envolve tocar a bola quando ela esta sobre o aro ou em condicao protegida pela regra.",
  },
  {
    id: 28,
    difficulty: "hard",
    categories: ["rules", "refereeing", "court"],
    question: "Em um arremesso de tres pontos com falta e cesta convertida, o maximo da jogada pode chegar a quantos pontos?",
    options: ["3 pontos", "4 pontos", "5 pontos", "6 pontos"],
    answerIndex: 1,
    hint: "Some a cesta de fora com uma cobranca extra.",
    explanation: "A cesta de 3 conta e o lance livre extra pode transformar a jogada em 4 pontos.",
  },
  {
    id: 29,
    difficulty: "hard",
    categories: ["rules"],
    question: "Qual organizacao define as regras internacionais mais usadas fora da liga norte-americana?",
    options: ["FIBA", "FIFA", "IAAF", "ITF"],
    answerIndex: 0,
    hint: "E a federacao internacional do proprio basquete.",
    explanation: "A FIBA e a federacao internacional responsavel pelas regras globais do basquete.",
  },
  {
    id: 30,
    difficulty: "hard",
    categories: ["court"],
    question: "Qual medida da quadra adulta FIBA e mais proxima do comprimento oficial?",
    options: ["22 metros", "24 metros", "28 metros", "32 metros"],
    answerIndex: 2,
    hint: "A quadra adulta internacional fica um pouco abaixo de 30 metros.",
    explanation: "A quadra FIBA adulta mede aproximadamente 28 metros de comprimento.",
  },
].map((item) => ({
  ...item,
  timeLimit: DIFFICULTY[item.difficulty].timeLimit,
}));

const storageKey = "basquete-quiz-hq-history";
const roomStoragePrefix = "basquete-quiz-room-";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  startScreen: $("#startScreen"),
  appShell: $("#appShell"),
  roomScreen: $("#roomScreen"),
  modeModal: $("#modeModal"),
  categoryModal: $("#categoryModal"),
  categoryGrid: $("#categoryGrid"),
  roomCategoryGrid: $("#roomCategoryGrid"),
  createRoomPanel: $("#createRoomPanel"),
  joinRoomPanel: $("#joinRoomPanel"),
  roomCodeBox: $("#roomCodeBox"),
  roomCodeLabel: $("#roomCodeLabel"),
  roomCreatedMeta: $("#roomCreatedMeta"),
  startRoomButton: $("#startRoomButton"),
  joinRoomCode: $("#joinRoomCode"),
  joinFeedback: $("#joinFeedback"),
  scoreRail: $("#scoreRail"),
  levelMeter: $("#levelMeter"),
  levelLabel: $("#levelLabel"),
  nextLevelLabel: $("#nextLevelLabel"),
  sessionModeBadge: $("#sessionModeBadge"),
  sessionCategoryBadge: $("#sessionCategoryBadge"),
  sessionHintBadge: $("#sessionHintBadge"),
  mobileScore: $("#mobileScore"),
  mobileStreak: $("#mobileStreak"),
  mobileAccuracy: $("#mobileAccuracy"),
  questionLabel: $("#questionLabel"),
  questionCount: $("#questionCount"),
  progressStrip: $("#progressStrip"),
  difficultyChip: $("#difficultyChip"),
  questionText: $("#questionText"),
  hintText: $("#hintText"),
  timerBadge: $("#timerBadge"),
  timer: $("#timer"),
  answersGrid: $("#answersGrid"),
  explanation: $("#explanation"),
  streakBadge: $("#streakBadge"),
  nextButtonText: $("#nextButtonText"),
  scoreList: $("#scoreList"),
  currentStreak: $("#currentStreak"),
  accuracy: $("#accuracy"),
  precisionMeter: $("#precisionMeter"),
  resultModal: $("#resultModal"),
  resultTitle: $("#resultTitle"),
  resultSummary: $("#resultSummary"),
  finalScore: $("#finalScore"),
  finalCorrect: $("#finalCorrect"),
  finalAccuracy: $("#finalAccuracy"),
  finalBestStreak: $("#finalBestStreak"),
  historyList: $("#historyList"),
};

let questions = getQuestionSet("mixed");

const setupState = {
  selectedCategory: "mixed",
  roomCategory: "mixed",
  roomTab: "create",
  playStyle: "casual",
  pendingRoom: null,
};

const state = {
  phase: "setup",
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  correct: 0,
  answered: new Map(),
  remainingById: new Map(),
  hintsShown: new Set(),
  finished: false,
  timerId: null,
  session: {
    mode: "individual",
    category: "mixed",
    playStyle: "casual",
    hintsEnabled: true,
    roomCode: null,
    roomRole: null,
  },
};

function getQuestionSet(categoryId) {
  const selected = categoryId === "mixed" ? questionBank : questionBank.filter((question) => question.categories.includes(categoryId));
  return selected.length ? selected.map((question) => ({ ...question })) : questionBank.map((question) => ({ ...question }));
}

function formatTime(totalSeconds) {
  return `00:${String(Math.max(0, totalSeconds)).padStart(2, "0")}`;
}

function getCurrentQuestion() {
  return questions[state.currentIndex];
}

function getAnswer(question) {
  return question ? state.answered.get(question.id) : undefined;
}

function getAnsweredCount() {
  return state.answered.size;
}

function getAccuracy() {
  const answered = getAnsweredCount();
  return answered ? Math.round((state.correct / answered) * 100) : 0;
}

function getLevel(score) {
  if (score >= 1800) return { level: 5, next: 2400, previous: 1800 };
  if (score >= 1200) return { level: 4, next: 1800, previous: 1200 };
  if (score >= 700) return { level: 3, next: 1200, previous: 700 };
  if (score >= 300) return { level: 2, next: 700, previous: 300 };
  return { level: 1, next: 300, previous: 0 };
}

function calculateXp(question, remainingSeconds, newStreak) {
  const config = DIFFICULTY[question.difficulty];
  const timeBonus = Math.round((remainingSeconds / question.timeLimit) * 30);
  const streakBonus = Math.min(newStreak * 8, 48);
  return config.baseXp + timeBonus + streakBonus;
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function closeSetupDialogs() {
  closeDialog(elements.modeModal);
  closeDialog(elements.categoryModal);
}

function showScreen(screen) {
  elements.startScreen.classList.toggle("is-hidden", screen !== "start");
  elements.roomScreen.classList.toggle("is-hidden", screen !== "room");
  elements.appShell.classList.toggle("is-hidden", screen !== "quiz");
}

function openModeModal() {
  closeDialog(elements.categoryModal);
  showScreen("start");
  if (!elements.modeModal.open) elements.modeModal.showModal();
}

function openCategoryModal() {
  closeDialog(elements.modeModal);
  renderCategoryControls();
  if (!elements.categoryModal.open) elements.categoryModal.showModal();
}

function showRoomScreen() {
  closeSetupDialogs();
  stopTimer();
  state.phase = "setup";
  setupState.roomTab = "create";
  setupState.pendingRoom = null;
  elements.joinFeedback.textContent = "Aguardando codigo.";
  elements.joinFeedback.classList.remove("is-error", "is-ok");
  elements.roomCodeBox.hidden = true;
  elements.startRoomButton.disabled = true;
  renderRoomTabs();
  renderCategoryControls();
  showScreen("room");
}

function renderCategoryControls() {
  renderCategoryGrid(elements.categoryGrid, setupState.selectedCategory, "individual");
  renderCategoryGrid(elements.roomCategoryGrid, setupState.roomCategory, "room");
  renderPlayStyleControls();
}

function renderCategoryGrid(container, selectedCategory, target) {
  if (!container) return;
  container.innerHTML = Object.entries(CATEGORIES)
    .map(([id, category]) => {
      const count = getQuestionSet(id).length;
      const classes = ["category-card"];
      if (id === selectedCategory) classes.push("is-selected");
      return `
        <button class="${classes.join(" ")}" type="button" data-action="select-category" data-category="${id}" data-target="${target}">
          <strong>${category.label}</strong>
          <span>${category.description}</span>
          <small>${count} perguntas</small>
        </button>
      `;
    })
    .join("");
}

function renderPlayStyleControls() {
  $$("[data-play-style]").forEach((button) => {
    const isActive = button.dataset.playStyle === setupState.playStyle;
    button.classList.toggle("is-active", isActive);
  });
}

function renderRoomTabs() {
  $$("[data-room-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.roomTab === setupState.roomTab);
  });
  elements.createRoomPanel.classList.toggle("is-hidden", setupState.roomTab !== "create");
  elements.joinRoomPanel.classList.toggle("is-hidden", setupState.roomTab !== "join");
}

function selectCategory(categoryId, target) {
  if (!CATEGORIES[categoryId]) return;
  if (target === "room") {
    setupState.roomCategory = categoryId;
    setupState.pendingRoom = null;
    elements.roomCodeBox.hidden = true;
    elements.startRoomButton.disabled = true;
  } else {
    setupState.selectedCategory = categoryId;
  }
  renderCategoryControls();
}

function selectPlayStyle(playStyle) {
  setupState.playStyle = playStyle === "tournament" ? "tournament" : "casual";
  setupState.pendingRoom = null;
  elements.roomCodeBox.hidden = true;
  elements.startRoomButton.disabled = true;
  renderPlayStyleControls();
}

function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let index = 0; index < 4; index += 1) {
    suffix += chars[Math.floor(Math.random() * chars.length)];
  }
  return `BQ-${suffix}`;
}

function saveRoom(room) {
  window.localStorage.setItem(`${roomStoragePrefix}${room.code}`, JSON.stringify(room));
}

function readRoom(code) {
  try {
    return JSON.parse(window.localStorage.getItem(`${roomStoragePrefix}${code}`) || "null");
  } catch {
    return null;
  }
}

function createRoom() {
  const room = {
    code: generateRoomCode(),
    category: setupState.roomCategory,
    playStyle: setupState.playStyle,
    createdAt: Date.now(),
  };
  setupState.pendingRoom = room;
  saveRoom(room);
  elements.roomCodeLabel.textContent = room.code;
  elements.roomCreatedMeta.textContent = `${CATEGORIES[room.category].label} - ${room.playStyle === "tournament" ? "modo torneio" : "modo casual"}`;
  elements.roomCodeBox.hidden = false;
  elements.startRoomButton.disabled = false;
}

function normalizeRoomCode(value) {
  return value.trim().toUpperCase().replace(/\s+/g, "");
}

function joinRoom() {
  const code = normalizeRoomCode(elements.joinRoomCode.value);
  const room = readRoom(code);
  if (!room) {
    elements.joinFeedback.textContent = "Room nao encontrada neste navegador. Confira o codigo do criador.";
    elements.joinFeedback.classList.add("is-error");
    elements.joinFeedback.classList.remove("is-ok");
    return;
  }

  elements.joinFeedback.textContent = `Room pronta: ${CATEGORIES[room.category].label}, ${room.playStyle === "tournament" ? "torneio" : "casual"}.`;
  elements.joinFeedback.classList.add("is-ok");
  elements.joinFeedback.classList.remove("is-error");
  startQuiz({
    mode: "group",
    category: room.category,
    playStyle: room.playStyle,
    roomCode: room.code,
    roomRole: "guest",
  });
}

function startRoom() {
  if (!setupState.pendingRoom) return;
  startQuiz({
    mode: "group",
    category: setupState.pendingRoom.category,
    playStyle: setupState.pendingRoom.playStyle,
    roomCode: setupState.pendingRoom.code,
    roomRole: "host",
  });
}

function startQuiz(sessionOptions) {
  closeSetupDialogs();
  closeResults();
  stopTimer();
  questions = getQuestionSet(sessionOptions.category);
  state.phase = "quiz";
  state.currentIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.correct = 0;
  state.finished = false;
  state.answered = new Map();
  state.hintsShown = new Set();
  state.remainingById = new Map(questions.map((question) => [question.id, question.timeLimit]));
  state.session = {
    mode: sessionOptions.mode,
    category: sessionOptions.category,
    playStyle: sessionOptions.playStyle || "casual",
    hintsEnabled: sessionOptions.playStyle !== "tournament",
    roomCode: sessionOptions.roomCode || null,
    roomRole: sessionOptions.roomRole || null,
  };
  showScreen("quiz");
  renderSessionStrip();
  renderQuestion();
}

function renderSessionStrip() {
  const category = CATEGORIES[state.session.category] || CATEGORIES.mixed;
  const isGroup = state.session.mode === "group";
  const roleLabel = state.session.roomRole === "host" ? "criador" : state.session.roomRole === "guest" ? "participante" : "";
  elements.sessionModeBadge.textContent = isGroup
    ? `Grupo ${state.session.roomCode || ""}${roleLabel ? ` - ${roleLabel}` : ""}`
    : "Individual";
  elements.sessionCategoryBadge.textContent = category.shortLabel;
  elements.sessionHintBadge.textContent = state.session.hintsEnabled ? "Dicas ON" : "Torneio: dicas OFF";
  elements.sessionHintBadge.classList.toggle("is-locked", !state.session.hintsEnabled);
}

function updateScoreboard() {
  const history = getHistory();
  const rows = [
    { label: "Voce", score: state.score, meta: `${state.correct} acertos agora` },
    { label: "Sequencia", score: state.bestStreak * 30, meta: `${state.bestStreak} seguidas` },
    { label: "Precisao", score: getAccuracy(), meta: `${getAccuracy()}% corretas`, suffix: "%" },
  ];

  if (history[0]) {
    rows.push({ label: "Melhor local", score: history[0].score, meta: history[0].date });
  }

  elements.scoreList.innerHTML = rows
    .slice(0, 4)
    .map(
      (row, index) => `
        <li class="score-row">
          <span class="medal">${index + 1}</span>
          <span>${row.label}<small>${row.meta}</small></span>
          <strong>${row.score}${row.suffix || " XP"}</strong>
        </li>
      `,
    )
    .join("");
}

function updateStats() {
  elements.scoreRail.textContent = `${state.score} XP`;
  elements.mobileScore.textContent = state.score;
  elements.streakBadge.textContent = state.streak;
  elements.mobileStreak.textContent = state.streak;
  elements.currentStreak.textContent = state.streak;
  elements.accuracy.textContent = `${getAccuracy()}%`;
  elements.mobileAccuracy.textContent = `${getAccuracy()}%`;
  elements.precisionMeter.style.width = `${getAccuracy()}%`;

  const level = getLevel(state.score);
  const levelRange = level.next - level.previous;
  const levelProgress = Math.min(100, Math.round(((state.score - level.previous) / levelRange) * 100));
  elements.levelMeter.style.width = `${levelProgress}%`;
  elements.levelLabel.textContent = `Nivel ${level.level}`;
  elements.nextLevelLabel.textContent =
    level.level === 5 ? "Nivel maximo da rodada" : `${level.next - state.score} XP para o proximo nivel`;

  updateScoreboard();
}

function renderProgress() {
  elements.progressStrip.style.gridTemplateColumns = `repeat(${Math.min(questions.length, 10)}, minmax(0, 1fr))`;
  elements.progressStrip.innerHTML = questions
    .map((question, index) => {
      const answer = getAnswer(question);
      const classes = ["progress-segment"];
      if (index === state.currentIndex) classes.push("is-current");
      if (answer) classes.push(answer.correct ? "is-correct" : "is-wrong");
      if (!answer && index < state.currentIndex) classes.push("is-done");
      return `<span class="${classes.join(" ")}"></span>`;
    })
    .join("");
}

function renderHint() {
  const question = getCurrentQuestion();
  if (!question) return;

  elements.hintText.classList.toggle("is-locked", !state.session.hintsEnabled);
  if (!state.session.hintsEnabled) {
    elements.hintText.hidden = false;
    elements.hintText.textContent = "Dicas desativadas no modo torneio.";
  } else {
    elements.hintText.hidden = !state.hintsShown.has(question.id);
    elements.hintText.textContent = `Dica: ${question.hint}`;
  }

  $$('[data-action="hint"]').forEach((button) => {
    button.disabled = !state.session.hintsEnabled || Boolean(getAnswer(question));
    button.classList.toggle("is-disabled", button.disabled);
  });
}

function renderQuestion() {
  const question = getCurrentQuestion();
  if (!question) return;
  const answer = getAnswer(question);
  const difficulty = DIFFICULTY[question.difficulty];
  const remaining = state.remainingById.get(question.id) ?? question.timeLimit;

  elements.questionLabel.textContent = `${String(state.currentIndex + 1).padStart(2, "0")} Pergunta`;
  elements.questionCount.textContent = `${state.currentIndex + 1} de ${questions.length}`;
  elements.difficultyChip.textContent = `${difficulty.label} - ${question.timeLimit}s`;
  elements.questionText.textContent = question.question;
  elements.timer.textContent = formatTime(remaining);
  elements.timerBadge.classList.toggle("is-hot", !answer && remaining <= 5);
  renderHint();

  elements.answersGrid.innerHTML = question.options
    .map((option, index) => {
      const isSelected = answer?.selectedIndex === index;
      const isCorrect = answer && question.answerIndex === index;
      const isWrong = answer && isSelected && !answer.correct;
      const classes = ["answer-button"];
      if (isSelected) classes.push("is-selected");
      if (isCorrect) classes.push("is-correct");
      if (isWrong) classes.push("is-wrong");
      return `
        <button class="${classes.join(" ")}" type="button" data-answer="${index}" ${answer ? "disabled" : ""}>
          <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
          <span class="answer-text">${option}</span>
        </button>
      `;
    })
    .join("");

  elements.explanation.hidden = !answer;
  elements.explanation.textContent = answer
    ? answer.timeout
      ? `Tempo esgotado. ${question.explanation}`
      : question.explanation
    : "";

  elements.nextButtonText.textContent = state.currentIndex === questions.length - 1 ? "Finalizar" : "Proxima";
  $$('[data-action="previous"]').forEach((button) => {
    button.disabled = state.currentIndex === 0;
  });

  renderProgress();
  updateStats();
  startTimer();
}

function startTimer() {
  stopTimer();
  const question = getCurrentQuestion();
  if (state.phase !== "quiz" || getAnswer(question) || state.finished) return;

  state.timerId = window.setInterval(() => {
    const current = getCurrentQuestion();
    const remaining = (state.remainingById.get(current.id) ?? current.timeLimit) - 1;
    state.remainingById.set(current.id, remaining);
    elements.timer.textContent = formatTime(remaining);
    elements.timerBadge.classList.toggle("is-hot", remaining <= 5);
    if (remaining <= 0) {
      markTimeout(current);
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function chooseAnswer(selectedIndex) {
  const question = getCurrentQuestion();
  if (!question || getAnswer(question)) return;

  const remaining = state.remainingById.get(question.id) ?? question.timeLimit;
  const correct = selectedIndex === question.answerIndex;
  let xp = 0;

  if (correct) {
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.correct += 1;
    xp = calculateXp(question, remaining, state.streak);
    state.score += xp;
  } else {
    state.streak = 0;
  }

  state.answered.set(question.id, {
    selectedIndex,
    correct,
    xp,
    timeout: false,
    remaining,
  });

  stopTimer();
  renderQuestion();
}

function markTimeout(question) {
  stopTimer();
  if (getAnswer(question)) return;
  state.streak = 0;
  state.remainingById.set(question.id, 0);
  state.answered.set(question.id, {
    selectedIndex: -1,
    correct: false,
    xp: 0,
    timeout: true,
    remaining: 0,
  });
  renderQuestion();
}

function goNext() {
  if (state.phase !== "quiz") return;
  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
    return;
  }
  finishQuiz();
}

function goPrevious() {
  if (state.phase !== "quiz" || state.currentIndex === 0) return;
  state.currentIndex -= 1;
  renderQuestion();
}

function finishQuiz() {
  state.finished = true;
  stopTimer();
  saveHistory();
  showResults();
}

function showResults() {
  if (state.phase === "quiz" && !state.finished) {
    stopTimer();
  }

  const accuracy = getAccuracy();
  const total = questions.length || questionBank.length;
  elements.resultTitle.textContent = state.phase === "quiz" ? "Placar final" : "Ranking local";
  elements.finalScore.textContent = state.score;
  elements.finalCorrect.textContent = `${state.correct}/${total}`;
  elements.finalAccuracy.textContent = `${accuracy}%`;
  elements.finalBestStreak.textContent = state.bestStreak;
  elements.resultSummary.textContent =
    state.phase !== "quiz"
      ? "Suas melhores rodadas ficam salvas neste navegador."
      : state.score >= 1800
        ? "Partida monstruosa: voce dominou regras, fundamentos e leitura de jogo."
        : state.score >= 1000
          ? "Boa rodada! Voce mostrou jogo coletivo e boa mao no quiz."
          : "Aquecimento feito. Revise as explicacoes e volte para cravar mais cestas.";

  const history = getHistory();
  elements.historyList.innerHTML = history.length
    ? history
        .slice(0, 5)
        .map(
          (item, index) => `
            <li>
              <span>#${index + 1} ${item.date} - ${item.category || "Misto"}</span>
              <strong>${item.score} XP - ${item.correct}/${item.total || total}</strong>
            </li>
          `,
        )
        .join("")
    : "<li><span>Sem historico</span><strong>Jogue uma rodada</strong></li>";

  if (!elements.resultModal.open) {
    elements.resultModal.showModal();
  }
}

function closeResults() {
  if (elements.resultModal.open) elements.resultModal.close();
  if (state.phase === "quiz" && !state.finished) {
    startTimer();
  }
}

function restartQuiz() {
  stopTimer();
  if (state.phase !== "quiz") {
    startQuiz({
      mode: "individual",
      category: setupState.selectedCategory || "mixed",
      playStyle: "casual",
    });
    return;
  }

  const currentSession = { ...state.session };
  startQuiz(currentSession);
}

function backToStart() {
  stopTimer();
  closeResults();
  closeSetupDialogs();
  state.phase = "setup";
  showScreen("start");
}

function toggleHint() {
  const question = getCurrentQuestion();
  if (!question || getAnswer(question)) return;
  if (!state.session.hintsEnabled) {
    renderHint();
    return;
  }

  if (state.hintsShown.has(question.id)) {
    state.hintsShown.delete(question.id);
  } else {
    state.hintsShown.add(question.id);
  }
  renderHint();
}

function getHistory() {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function saveHistory() {
  const category = CATEGORIES[state.session.category] || CATEGORIES.mixed;
  const entry = {
    score: state.score,
    correct: state.correct,
    total: questions.length,
    accuracy: getAccuracy(),
    bestStreak: state.bestStreak,
    category: category.shortLabel,
    mode: state.session.mode,
    playStyle: state.session.playStyle,
    date: new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date()),
  };
  const history = getHistory()
    .concat(entry)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
  window.localStorage.setItem(storageKey, JSON.stringify(history));
}

function handleAction(action, target) {
  if (action === "open-mode") openModeModal();
  if (action === "close-setup-dialog") closeSetupDialogs();
  if (action === "choose-mode") {
    if (target.dataset.mode === "group") showRoomScreen();
    if (target.dataset.mode === "individual") openCategoryModal();
  }
  if (action === "select-category") selectCategory(target.dataset.category, target.dataset.target);
  if (action === "start-individual") {
    startQuiz({
      mode: "individual",
      category: setupState.selectedCategory,
      playStyle: "casual",
    });
  }
  if (action === "switch-room-tab") {
    setupState.roomTab = target.dataset.roomTab;
    renderRoomTabs();
  }
  if (action === "select-play-style") selectPlayStyle(target.dataset.playStyle);
  if (action === "create-room") createRoom();
  if (action === "start-room") startRoom();
  if (action === "join-room") joinRoom();
  if (action === "back-start") backToStart();
  if (action === "previous") goPrevious();
  if (action === "next") goNext();
  if (action === "restart") restartQuiz();
  if (action === "show-results" || action === "show-start-ranking") showResults();
  if (action === "close-results") closeResults();
  if (action === "hint") toggleHint();
}

document.addEventListener("click", (event) => {
  const answerTarget = event.target.closest("[data-answer]");
  if (answerTarget) {
    chooseAnswer(Number(answerTarget.dataset.answer));
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  handleAction(actionTarget.dataset.action, actionTarget);
});

elements.joinRoomCode.addEventListener("input", () => {
  elements.joinRoomCode.value = normalizeRoomCode(elements.joinRoomCode.value);
});

elements.resultModal.addEventListener("cancel", closeResults);
elements.modeModal.addEventListener("cancel", closeSetupDialogs);
elements.categoryModal.addEventListener("cancel", closeSetupDialogs);

renderCategoryControls();
updateStats();
showScreen("start");
