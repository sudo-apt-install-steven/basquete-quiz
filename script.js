const DIFFICULTY = {
  easy: { label: "Fácil", timeLimit: 15, baseXp: 80 },
  medium: { label: "Médio", timeLimit: 22, baseXp: 120 },
  hard: { label: "Difícil", timeLimit: 30, baseXp: 170 },
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
    description: "Pontuação, violações, posse e situações comuns de partida.",
  },
  refereeing: {
    label: "Arbitragem",
    shortLabel: "Arbitragem",
    description: "Faltas, penalidades, relógio, reposições e decisões de jogo.",
  },
  fundamentals: {
    label: "Fundamentos",
    shortLabel: "Fundamentos",
    description: "Drible, passe, rebote, defesa, bloqueios e ações técnicas.",
  },
  court: {
    label: "Quadra e pontuação",
    shortLabel: "Quadra",
    description: "Linhas, áreas, medidas, valores de cesta e espaços da quadra.",
  },
  strategy: {
    label: "Relógio e estratégia",
    shortLabel: "Estratégia",
    description: "Tempo de ataque, defesa por zona, corta-luz e escolhas táticas.",
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
    hint: "Pense no arremesso comum, feito antes da linha de três pontos.",
    explanation: "Arremessos convertidos de dentro do arco valem 2 pontos.",
  },
  {
    id: 2,
    difficulty: "easy",
    categories: ["rules", "strategy"],
    question: "Quantos jogadores de um time ficam em quadra ao mesmo tempo?",
    options: ["4 jogadores", "5 jogadores", "6 jogadores", "7 jogadores"],
    answerIndex: 1,
    hint: "Conte apenas quem está jogando naquele momento, sem incluir o banco.",
    explanation: "Cada equipe joga com 5 atletas em quadra.",
  },
  {
    id: 3,
    difficulty: "easy",
    categories: ["fundamentals"],
    question: "Qual fundamento é usado para se deslocar com a bola?",
    options: ["Drible", "Bloqueio", "Rebote", "Lance livre"],
    answerIndex: 0,
    hint: "É o fundamento em que a bola precisa tocar o chão repetidamente.",
    explanation: "O drible permite avançar quicando a bola no chão.",
  },
  {
    id: 4,
    difficulty: "easy",
    categories: ["rules", "court"],
    question: "Qual linha marca arremessos que valem três pontos?",
    options: ["Linha lateral", "Linha de lance livre", "Arco de três pontos", "Linha central"],
    answerIndex: 2,
    hint: "Ela forma um arco grande em volta da área próxima à cesta.",
    explanation: "Cestas feitas de fora do arco valem 3 pontos.",
  },
  {
    id: 5,
    difficulty: "easy",
    categories: ["rules", "refereeing"],
    question: "O que acontece depois de uma falta em um arremesso convertido?",
    options: ["Bola ao alto", "Um lance livre extra", "Dois tempos técnicos", "Fim do ataque"],
    answerIndex: 1,
    hint: "A cesta já valeu, então a punição adiciona uma cobrança parada.",
    explanation: "A cesta conta e o jogador ganha um lance livre adicional.",
  },
  {
    id: 6,
    difficulty: "easy",
    categories: ["fundamentals"],
    question: "Qual é o objetivo principal do rebote?",
    options: ["Recuperar a bola após um erro", "Cobrar lateral", "Pedir tempo", "Trocar posse automaticamente"],
    answerIndex: 0,
    hint: "Ele acontece logo depois de um arremesso que não cai.",
    explanation: "O rebote recupera a posse depois de um arremesso errado.",
  },
  {
    id: 7,
    difficulty: "easy",
    categories: ["rules", "court"],
    question: "Uma cesta de lance livre vale quantos pontos?",
    options: ["1 ponto", "2 pontos", "3 pontos", "5 pontos"],
    answerIndex: 0,
    hint: "É a cobrança parada mais simples do placar.",
    explanation: "Cada lance livre convertido vale 1 ponto.",
  },
  {
    id: 8,
    difficulty: "easy",
    categories: ["court"],
    question: "Qual parte da quadra divide defesa e ataque?",
    options: ["Garrafão", "Linha central", "Tabela", "Círculo do lance livre"],
    answerIndex: 1,
    hint: "Ela corta a quadra em duas metades iguais.",
    explanation: "A linha central separa as duas metades da quadra.",
  },
  {
    id: 9,
    difficulty: "easy",
    categories: ["rules", "refereeing"],
    question: "Quando a bola sai pela lateral, como ela volta ao jogo?",
    options: ["Com lance livre", "Com bola ao alto", "Com reposição lateral", "Com tiro de meta"],
    answerIndex: 2,
    hint: "A bola volta de fora da quadra, perto do ponto onde saiu.",
    explanation: "A equipe repõe a bola de fora da quadra no ponto indicado.",
  },
  {
    id: 10,
    difficulty: "easy",
    categories: ["fundamentals"],
    question: "Qual ação defensiva tenta impedir um arremesso perto da cesta?",
    options: ["Toco", "Assistência", "Enterrada", "Corta-luz"],
    answerIndex: 0,
    hint: "A defesa mira a bola no momento em que ela está subindo para o aro.",
    explanation: "O toco bloqueia ou desvia a tentativa de arremesso.",
  },
  {
    id: 11,
    difficulty: "medium",
    categories: ["rules", "refereeing", "strategy"],
    question: "Qual é o tempo de posse para finalizar um ataque no basquete profissional?",
    options: ["24 segundos", "8 segundos", "14 segundos", "30 segundos"],
    answerIndex: 0,
    multiplier: 2,
    multiplierReason: "Relógio de posse: pergunta 2X.",
    hint: "É o relógio que obriga o ataque a arremessar rapidamente.",
    explanation: "O ataque precisa tentar um arremesso válido antes de 24 segundos.",
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
    question: "O que caracteriza a infração de andar?",
    options: ["Quicar com as duas mãos", "Mover os pés sem driblar corretamente", "Tocar a bola na tabela", "Pular para disputar rebote"],
    answerIndex: 1,
    hint: "Observe os pés: sem drible legal, eles não podem se deslocar livremente.",
    explanation: "Andar ocorre quando o jogador desloca os pés além do permitido sem drible.",
  },
  {
    id: 14,
    difficulty: "medium",
    categories: ["fundamentals", "strategy"],
    question: "O que é uma assistência?",
    options: ["Passe que leva direto a uma cesta", "Falta de ataque", "Rebote defensivo", "Bloqueio ilegal"],
    answerIndex: 0,
    hint: "Não é qualquer passe: ele precisa criar uma cesta logo em seguida.",
    explanation: "Assistência é o passe que cria uma cesta imediatamente.",
  },
  {
    id: 15,
    difficulty: "medium",
    categories: ["court"],
    question: "Qual área perto da cesta também é chamada de garrafão?",
    options: ["Área restritiva", "Zona morta", "Linha lateral", "Arco central"],
    answerIndex: 0,
    multiplier: 2,
    multiplierReason: "Domínio de quadra: pergunta 2X.",
    hint: "É a área pintada abaixo do aro, onde várias regras especiais aparecem.",
    explanation: "O garrafão é a área restritiva pintada próxima ao aro.",
  },
  {
    id: 16,
    difficulty: "medium",
    categories: ["rules", "refereeing", "fundamentals"],
    question: "O que acontece quando um jogador para o drible e volta a quicar?",
    options: ["Falta técnica", "Dois dribles", "Toco legal", "Reposição alternada"],
    answerIndex: 1,
    hint: "Depois que o drible acaba, ele não pode recomeçar na mesma posse individual.",
    explanation: "Parar e reiniciar o drible configura a infração de dois dribles.",
  },
  {
    id: 17,
    difficulty: "medium",
    categories: ["fundamentals", "strategy"],
    question: "Em uma defesa por zona, cada defensor protege principalmente o quê?",
    options: ["Uma área da quadra", "A bola do árbitro", "A própria cesta apenas", "Um jogador fixo o tempo todo"],
    answerIndex: 0,
    hint: "A palavra-chave é espaço, não marcação individual permanente.",
    explanation: "Na defesa por zona, a prioridade é proteger espaços definidos.",
  },
  {
    id: 18,
    difficulty: "medium",
    categories: ["rules", "refereeing"],
    question: "Qual reinício é usado no começo da partida em muitas regras?",
    options: ["Reposição lateral", "Bola ao alto", "Lance livre", "Cobrança no fundo"],
    answerIndex: 1,
    hint: "Dois jogadores disputam a bola lançada para cima no círculo central.",
    explanation: "A bola ao alto inicia a disputa de posse no círculo central.",
  },
  {
    id: 19,
    difficulty: "medium",
    categories: ["rules", "refereeing", "strategy"],
    question: "O que significa estouro do relógio de posse?",
    options: ["Fim do quarto", "Ataque sem arremesso válido no prazo", "Troca obrigatória", "Pedido automático de tempo"],
    answerIndex: 1,
    hint: "Se o ataque não entrega um arremesso válido a tempo, a posse muda.",
    explanation: "Se o ataque não arremessa no prazo, perde a posse.",
  },
  {
    id: 20,
    difficulty: "medium",
    categories: ["fundamentals", "strategy"],
    question: "Qual ação ofensiva usa o corpo parado para liberar um companheiro?",
    options: ["Corta-luz", "Toco", "Rebote", "Lance livre"],
    answerIndex: 0,
    hint: "O jogador vira uma barreira legal para abrir caminho ao colega.",
    explanation: "O corta-luz cria espaço bloqueando legalmente o caminho do defensor.",
  },
  {
    id: 21,
    difficulty: "hard",
    categories: ["rules", "refereeing"],
    question: "Na regra FIBA, uma equipe entra em penalidade coletiva após quantas faltas no quarto?",
    options: ["3 faltas", "4 faltas", "5 faltas", "6 faltas"],
    answerIndex: 1,
    multiplier: 2,
    multiplierReason: "Arbitragem avançada: pergunta 2X.",
    hint: "Depois desse limite, as faltas seguintes colocam o adversário no bônus.",
    explanation: "Depois da 4ª falta coletiva no quarto, as faltas seguintes levam o adversário aos lances livres.",
  },
  {
    id: 22,
    difficulty: "hard",
    categories: ["rules", "refereeing", "strategy"],
    question: "Quando o relógio de posse costuma ser resetado para 14 segundos?",
    options: ["Após rebote ofensivo", "Após qualquer passe", "Após bola ao alto no início", "Após pedido de tempo da defesa"],
    answerIndex: 0,
    hint: "A equipe continua no ataque, então o relógio não volta completo.",
    explanation: "Em muitas regras atuais, o rebote ofensivo reseta a posse para 14 segundos.",
  },
  {
    id: 23,
    difficulty: "hard",
    categories: ["rules", "refereeing"],
    question: "Qual é a consequência comum de uma falta antidesportiva?",
    options: ["Somente lateral", "Dois pontos automáticos", "Lances livres e posse", "Voltar o relógio ao início"],
    answerIndex: 2,
    multiplier: 2,
    multiplierReason: "Decisão crítica: pergunta 2X.",
    hint: "A punição combina cobranças e manutenção da posse.",
    explanation: "Ela normalmente gera lances livres e posse de bola para a equipe prejudicada.",
  },
  {
    id: 24,
    difficulty: "hard",
    categories: ["rules", "refereeing", "strategy"],
    question: "O que é uma violação de volta de quadra?",
    options: ["Chutar a bola", "Retornar a bola para a defesa após controlar no ataque", "Tocar no aro", "Trocar de marcador"],
    answerIndex: 1,
    hint: "Depois que o ataque é estabelecido, a linha central vira uma fronteira.",
    explanation: "Depois de estabelecer posse no ataque, a equipe não pode voltar a bola para a meia quadra defensiva.",
  },
  {
    id: 25,
    difficulty: "hard",
    categories: ["court"],
    question: "Em regras internacionais, qual é a distância aproximada do arco de três pontos no topo?",
    options: ["5,80 m", "6,75 m", "7,90 m", "9,15 m"],
    answerIndex: 1,
    multiplier: 2,
    multiplierReason: "Medida oficial: pergunta 2X.",
    hint: "A medida internacional fica um pouco abaixo dos 7 metros.",
    explanation: "No padrão FIBA, o arco fica a cerca de 6,75 metros no topo.",
  },
  {
    id: 26,
    difficulty: "hard",
    categories: ["rules", "refereeing", "strategy"],
    question: "Qual infração ocorre quando um jogador permanece tempo demais no garrafão ofensivo?",
    options: ["3 segundos ofensivos", "8 segundos", "24 segundos", "Interferência"],
    answerIndex: 0,
    hint: "O garrafão ofensivo não pode virar estacionamento.",
    explanation: "A regra dos 3 segundos limita a permanência no garrafão ofensivo.",
  },
  {
    id: 27,
    difficulty: "hard",
    categories: ["rules", "refereeing"],
    question: "O que é interferência na bola perto do aro?",
    options: ["Tocar a bola em trajetória protegida", "Passar sem olhar", "Quicar alto demais", "Pisar fora da quadra"],
    answerIndex: 0,
    hint: "A regra protege a bola quando ela está sobre ou muito perto do aro.",
    explanation: "Interferência envolve tocar a bola quando ela está sobre o aro ou em condição protegida pela regra.",
  },
  {
    id: 28,
    difficulty: "hard",
    categories: ["rules", "refereeing", "court"],
    question: "Em um arremesso de três pontos com falta e cesta convertida, a jogada pode chegar a quantos pontos?",
    options: ["3 pontos", "4 pontos", "5 pontos", "6 pontos"],
    answerIndex: 1,
    multiplier: 2,
    multiplierReason: "Jogada rara: pergunta 2X.",
    hint: "Some a cesta de fora com uma cobrança extra.",
    explanation: "A cesta de 3 conta e o lance livre extra pode transformar a jogada em 4 pontos.",
  },
  {
    id: 29,
    difficulty: "hard",
    categories: ["rules"],
    question: "Qual organização define as regras internacionais mais usadas fora da liga norte-americana?",
    options: ["FIBA", "FIFA", "IAAF", "ITF"],
    answerIndex: 0,
    hint: "É a federação internacional do próprio basquete.",
    explanation: "A FIBA é a federação internacional responsável pelas regras globais do basquete.",
  },
  {
    id: 30,
    difficulty: "hard",
    categories: ["court"],
    question: "Qual medida da quadra adulta FIBA é mais próxima do comprimento oficial?",
    options: ["22 metros", "24 metros", "28 metros", "32 metros"],
    answerIndex: 2,
    multiplier: 2,
    multiplierReason: "Conhecimento de quadra: pergunta 2X.",
    hint: "A quadra adulta internacional fica um pouco abaixo de 30 metros.",
    explanation: "A quadra FIBA adulta mede aproximadamente 28 metros de comprimento.",
  },
].map((item) => ({
  ...item,
  baseTimeLimit: DIFFICULTY[item.difficulty].timeLimit,
  timeLimit: DIFFICULTY[item.difficulty].timeLimit,
  multiplier: item.multiplier || 1,
  multiplierReason: item.multiplierReason || "",
}));

const storageKey = "basquete-quiz-hq-history";
const roomStoragePrefix = "basquete-quiz-room-";
const settingsKey = "basquete-quiz-settings";
const DEFAULT_SETTINGS = {
  volume: 0.7,
  musicEnabled: false,
  individualExtra: 0,
  groupExtra: 15,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  startScreen: $("#startScreen"),
  appShell: $("#appShell"),
  roomScreen: $("#roomScreen"),
  modeModal: $("#modeModal"),
  categoryModal: $("#categoryModal"),
  settingsModal: $("#settingsModal"),
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
  volumeControl: $("#volumeControl"),
  volumeValue: $("#volumeValue"),
  musicToggle: $("#musicToggle"),
  individualExtraControl: $("#individualExtraControl"),
  individualExtraValue: $("#individualExtraValue"),
  groupExtraField: $("#groupExtraField"),
  groupExtraControl: $("#groupExtraControl"),
  groupExtraValue: $("#groupExtraValue"),
  groupExtraNote: $("#groupExtraNote"),
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
let settings = loadSettings();
let audioContext = null;
let masterGain = null;
let musicTimer = null;
let musicStep = 0;

const musicPattern = [196, 246.94, 293.66, 246.94, 220, 261.63, 329.63, 261.63];

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
  lastTickSecond: null,
  session: {
    mode: "individual",
    category: "mixed",
    playStyle: "casual",
    hintsEnabled: true,
    roomCode: null,
    roomRole: null,
    groupExtra: DEFAULT_SETTINGS.groupExtra,
  },
};

function clampNumber(value, min, max, fallback = min) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

function loadSettings() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(settingsKey) || "{}");
    return {
      volume: clampNumber(saved.volume, 0, 1, DEFAULT_SETTINGS.volume),
      musicEnabled: Boolean(saved.musicEnabled),
      individualExtra: clampNumber(saved.individualExtra, 0, 20, DEFAULT_SETTINGS.individualExtra),
      groupExtra: clampNumber(saved.groupExtra, 10, 20, DEFAULT_SETTINGS.groupExtra),
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings() {
  window.localStorage.setItem(settingsKey, JSON.stringify(settings));
}

function ensureAudio() {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return null;

  if (!audioContext) {
    audioContext = new AudioContextConstructor();
    masterGain = audioContext.createGain();
    masterGain.gain.value = settings.volume;
    masterGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function applyAudioVolume() {
  if (!audioContext || !masterGain) return;
  masterGain.gain.setTargetAtTime(settings.volume, audioContext.currentTime, 0.015);
}

function playTone(frequency, duration, type = "sine", gain = 0.08, delay = 0) {
  if (settings.volume <= 0) return;
  const context = ensureAudio();
  if (!context || !masterGain) return;

  const oscillator = context.createOscillator();
  const toneGain = context.createGain();
  const start = context.currentTime + delay;
  const end = start + duration;

  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.type = type;
  toneGain.gain.setValueAtTime(0.0001, start);
  toneGain.gain.linearRampToValueAtTime(gain, start + 0.012);
  toneGain.gain.exponentialRampToValueAtTime(0.001, end);

  oscillator.connect(toneGain);
  toneGain.connect(masterGain);
  oscillator.start(start);
  oscillator.stop(end + 0.04);
  oscillator.addEventListener("ended", () => {
    oscillator.disconnect();
    toneGain.disconnect();
  });
}

function playSound(kind) {
  if (settings.volume <= 0) return;

  if (kind === "click") {
    playTone(620, 0.045, "square", 0.025);
  }

  if (kind === "correct") {
    playTone(523.25, 0.09, "triangle", 0.06);
    playTone(659.25, 0.1, "triangle", 0.055, 0.07);
    playTone(783.99, 0.12, "triangle", 0.05, 0.14);
  }

  if (kind === "wrong") {
    playTone(246.94, 0.12, "sawtooth", 0.06);
    playTone(164.81, 0.18, "sawtooth", 0.05, 0.08);
  }

  if (kind === "timeout") {
    playTone(130.81, 0.26, "sawtooth", 0.065);
    playTone(98, 0.28, "square", 0.045, 0.12);
  }

  if (kind === "tick") {
    playTone(880, 0.055, "square", 0.025);
  }

  if (kind === "bonus") {
    playTone(783.99, 0.09, "triangle", 0.045);
    playTone(1046.5, 0.11, "triangle", 0.04, 0.08);
    playTone(1318.51, 0.14, "triangle", 0.035, 0.16);
  }
}

function startMusic() {
  if (!settings.musicEnabled || musicTimer) return;
  ensureAudio();
  musicTimer = window.setInterval(() => {
    const note = musicPattern[musicStep % musicPattern.length];
    playTone(note, 0.18, "triangle", 0.018);
    if (musicStep % 4 === 0) {
      playTone(note / 2, 0.26, "sine", 0.012);
    }
    musicStep += 1;
  }, 620);
}

function stopMusic() {
  if (musicTimer) {
    window.clearInterval(musicTimer);
    musicTimer = null;
  }
}

function syncMusic() {
  if (settings.musicEnabled) {
    startMusic();
  } else {
    stopMusic();
  }
}

function unlockAudioFromGesture() {
  ensureAudio();
  syncMusic();
}

function getTimeBonusForSession(sessionOptions) {
  if (sessionOptions.mode === "group") {
    return clampNumber(sessionOptions.groupExtra ?? settings.groupExtra, 10, 20, DEFAULT_SETTINGS.groupExtra);
  }

  return clampNumber(settings.individualExtra, 0, 20, DEFAULT_SETTINGS.individualExtra);
}

function applyTiming(question, sessionOptions) {
  const bonus = getTimeBonusForSession(sessionOptions);
  return {
    ...question,
    timeLimit: question.baseTimeLimit + bonus,
    sessionTimeBonus: bonus,
  };
}

function getQuestionSet(categoryId, sessionOptions = null) {
  const selected = categoryId === "mixed" ? questionBank : questionBank.filter((question) => question.categories.includes(categoryId));
  const source = selected.length ? selected : questionBank;
  const copy = source.map((question) => ({ ...question }));
  return sessionOptions ? copy.map((question) => applyTiming(question, sessionOptions)) : copy;
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
  const clutchBonus = remainingSeconds > 0 && remainingSeconds <= 3 ? 25 : 0;
  return Math.round((config.baseXp + timeBonus + streakBonus) * question.multiplier + clutchBonus);
}

function getAnswerLetter(index) {
  return String.fromCharCode(65 + index);
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function closeSetupDialogs() {
  closeDialog(elements.modeModal);
  closeDialog(elements.categoryModal);
}

function closeSettings(shouldResume = true) {
  closeDialog(elements.settingsModal);
  if (shouldResume && state.phase === "quiz" && !state.finished) {
    startTimer();
  }
}

function showScreen(screen) {
  elements.startScreen.classList.toggle("is-hidden", screen !== "start");
  elements.roomScreen.classList.toggle("is-hidden", screen !== "room");
  elements.appShell.classList.toggle("is-hidden", screen !== "quiz");
}

function openModeModal() {
  closeSettings(false);
  closeDialog(elements.categoryModal);
  showScreen("start");
  if (!elements.modeModal.open) elements.modeModal.showModal();
}

function openCategoryModal() {
  closeSettings(false);
  closeDialog(elements.modeModal);
  renderCategoryControls();
  if (!elements.categoryModal.open) elements.categoryModal.showModal();
}

function openSettings() {
  closeSetupDialogs();
  closeDialog(elements.resultModal);
  stopTimer();
  renderSettings();
  if (!elements.settingsModal.open) elements.settingsModal.showModal();
}

function showRoomScreen() {
  closeSettings(false);
  closeSetupDialogs();
  stopTimer();
  state.phase = "setup";
  setupState.roomTab = "create";
  setupState.pendingRoom = null;
  elements.joinFeedback.textContent = "Aguardando código.";
  elements.joinFeedback.classList.remove("is-error", "is-ok");
  elements.roomCodeBox.hidden = true;
  elements.startRoomButton.disabled = true;
  renderRoomTabs();
  renderCategoryControls();
  showScreen("room");
}

function renderSettings() {
  if (!elements.settingsModal) return;

  elements.volumeControl.value = Math.round(settings.volume * 100);
  elements.volumeValue.textContent = `${Math.round(settings.volume * 100)}%`;
  elements.musicToggle.checked = settings.musicEnabled;
  elements.individualExtraControl.value = settings.individualExtra;
  elements.individualExtraValue.textContent = `+${settings.individualExtra}s`;
  elements.groupExtraControl.value = settings.groupExtra;
  elements.groupExtraValue.textContent = `+${settings.groupExtra}s`;

  const guestInGroup = state.phase === "quiz" && state.session.mode === "group" && state.session.roomRole === "guest";
  elements.groupExtraControl.disabled = guestInGroup;
  elements.groupExtraField.classList.toggle("is-disabled", guestInGroup);
  elements.groupExtraNote.textContent = guestInGroup
    ? "Somente quem criou a sala pode ajustar este tempo."
    : "Quem cria a sala define o bônus de tempo do grupo.";
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
    groupExtra: settings.groupExtra,
    createdAt: Date.now(),
  };
  setupState.pendingRoom = room;
  saveRoom(room);
  elements.roomCodeLabel.textContent = room.code;
  elements.roomCreatedMeta.textContent = `${CATEGORIES[room.category].label} - ${
    room.playStyle === "tournament" ? "modo torneio" : "modo casual"
  } - +${room.groupExtra}s em grupo`;
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
    elements.joinFeedback.textContent = "Sala não encontrada neste navegador. Confira o código do criador.";
    elements.joinFeedback.classList.add("is-error");
    elements.joinFeedback.classList.remove("is-ok");
    playSound("wrong");
    return;
  }

  elements.joinFeedback.textContent = `Sala pronta: ${CATEGORIES[room.category].label}, ${
    room.playStyle === "tournament" ? "torneio" : "casual"
  }, +${room.groupExtra ?? settings.groupExtra}s.`;
  elements.joinFeedback.classList.add("is-ok");
  elements.joinFeedback.classList.remove("is-error");
  startQuiz({
    mode: "group",
    category: room.category,
    playStyle: room.playStyle,
    roomCode: room.code,
    roomRole: "guest",
    groupExtra: room.groupExtra ?? settings.groupExtra,
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
    groupExtra: setupState.pendingRoom.groupExtra,
  });
}

function startQuiz(sessionOptions) {
  closeSettings(false);
  closeSetupDialogs();
  closeResults(false);
  stopTimer();

  const session = {
    mode: sessionOptions.mode,
    category: sessionOptions.category,
    playStyle: sessionOptions.playStyle || "casual",
    hintsEnabled: sessionOptions.playStyle !== "tournament",
    roomCode: sessionOptions.roomCode || null,
    roomRole: sessionOptions.roomRole || null,
    groupExtra: clampNumber(sessionOptions.groupExtra ?? settings.groupExtra, 10, 20, DEFAULT_SETTINGS.groupExtra),
  };

  questions = getQuestionSet(session.category, session);
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
  state.lastTickSecond = null;
  state.session = session;
  showScreen("quiz");
  renderSessionStrip();
  renderQuestion();
}

function renderSessionStrip() {
  const category = CATEGORIES[state.session.category] || CATEGORIES.mixed;
  const isGroup = state.session.mode === "group";
  const roleLabel = state.session.roomRole === "host" ? "criador" : state.session.roomRole === "guest" ? "participante" : "";
  const timeBonus = isGroup ? `+${state.session.groupExtra}s` : `+${settings.individualExtra}s`;

  elements.sessionModeBadge.textContent = isGroup
    ? `Grupo ${state.session.roomCode || ""}${roleLabel ? ` - ${roleLabel}` : ""} - ${timeBonus}`
    : `Individual ${timeBonus}`;
  elements.sessionCategoryBadge.textContent = category.shortLabel;
  elements.sessionHintBadge.textContent = state.session.hintsEnabled ? "Dicas ON" : "Torneio: dicas OFF";
  elements.sessionHintBadge.classList.toggle("is-locked", !state.session.hintsEnabled);
}

function updateScoreboard() {
  const history = getHistory();
  const rows = [
    { label: "Você", score: state.score, meta: `${state.correct} acertos agora` },
    { label: "Sequência", score: state.bestStreak * 30, meta: `${state.bestStreak} seguidas` },
    { label: "Precisão", score: getAccuracy(), meta: `${getAccuracy()}% corretas`, suffix: "%" },
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
  elements.levelLabel.textContent = `Nível ${level.level}`;
  elements.nextLevelLabel.textContent =
    level.level === 5 ? "Nível máximo da rodada" : `${level.next - state.score} XP para o próximo nível`;

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
  const timeBonus = question.timeLimit - question.baseTimeLimit;
  const timeLabel = timeBonus > 0 ? `${question.timeLimit}s (+${timeBonus}s)` : `${question.timeLimit}s`;

  elements.questionLabel.textContent = `${String(state.currentIndex + 1).padStart(2, "0")} Pergunta`;
  elements.questionCount.textContent = `${state.currentIndex + 1} de ${questions.length}`;
  elements.difficultyChip.textContent = `${difficulty.label} - ${timeLabel}${question.multiplier > 1 ? " - 2X" : ""}`;
  elements.difficultyChip.classList.toggle("is-double", question.multiplier > 1);
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
          <span class="answer-letter">${getAnswerLetter(index)}</span>
          <span class="answer-text">${option}</span>
        </button>
      `;
    })
    .join("");

  elements.explanation.hidden = !answer;
  if (answer) {
    const correctPrefix = answer.correct ? `+${answer.xp} XP. ` : `Resposta certa: ${getAnswerLetter(question.answerIndex)}. `;
    const multiplierPrefix = answer.correct && question.multiplier > 1 ? `${question.multiplierReason} ` : "";
    const timeoutPrefix = answer.timeout ? "Tempo esgotado. " : "";
    elements.explanation.textContent = `${timeoutPrefix}${correctPrefix}${multiplierPrefix}${question.explanation}`;
  } else {
    elements.explanation.textContent = "";
  }

  elements.nextButtonText.textContent = state.currentIndex === questions.length - 1 ? "Finalizar" : "Próxima";
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
  state.lastTickSecond = null;
  if (state.phase !== "quiz" || getAnswer(question) || state.finished) return;

  state.timerId = window.setInterval(() => {
    const current = getCurrentQuestion();
    const remaining = (state.remainingById.get(current.id) ?? current.timeLimit) - 1;
    state.remainingById.set(current.id, remaining);
    elements.timer.textContent = formatTime(remaining);
    elements.timerBadge.classList.toggle("is-hot", remaining <= 5);

    if (remaining > 0 && remaining <= 5 && state.lastTickSecond !== remaining) {
      state.lastTickSecond = remaining;
      playSound("tick");
    }

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
    playSound("correct");
    if (question.multiplier > 1) window.setTimeout(() => playSound("bonus"), 160);
  } else {
    state.streak = 0;
    playSound("wrong");
  }

  state.answered.set(question.id, {
    selectedIndex,
    correct,
    xp,
    timeout: false,
    remaining,
    multiplier: question.multiplier,
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
    multiplier: question.multiplier,
  });
  playSound("timeout");
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
  const shouldSave = state.phase === "quiz" && !state.finished;
  state.finished = true;
  stopTimer();
  if (shouldSave) saveHistory();
  showResults();
}

function finishNow() {
  closeSettings(false);
  if (state.phase === "quiz") {
    finishQuiz();
    return;
  }
  showResults();
}

function showResults() {
  closeSettings(false);
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
        ? "Partida absurda: você dominou regras, fundamentos e leitura de jogo."
        : state.score >= 1000
          ? "Boa rodada! Você mostrou visão de quadra e mão quente no quiz."
          : "Aquecimento feito. Revise as explicações e volte para cravar mais respostas.";

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
    : "<li><span>Sem histórico</span><strong>Jogue uma rodada</strong></li>";

  if (!elements.resultModal.open) {
    elements.resultModal.showModal();
  }
}

function closeResults(shouldResume = true) {
  if (elements.resultModal.open) elements.resultModal.close();
  if (shouldResume && state.phase === "quiz" && !state.finished) {
    startTimer();
  }
}

function restartQuiz() {
  stopTimer();
  closeSettings(false);
  closeSetupDialogs();
  closeResults(false);
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
  closeSettings(false);
  closeResults(false);
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
  if (action === "open-settings") openSettings();
  if (action === "close-settings") closeSettings();
  if (action === "finish-now") finishNow();
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
  const actionTarget = event.target.closest("[data-action]");
  const interactiveTarget = answerTarget || actionTarget;

  if (interactiveTarget && !interactiveTarget.disabled) {
    unlockAudioFromGesture();
    playSound("click");
  }

  if (answerTarget) {
    chooseAnswer(Number(answerTarget.dataset.answer));
    return;
  }

  if (!actionTarget) return;
  handleAction(actionTarget.dataset.action, actionTarget);
});

elements.joinRoomCode.addEventListener("input", () => {
  elements.joinRoomCode.value = normalizeRoomCode(elements.joinRoomCode.value);
});

elements.volumeControl.addEventListener("input", () => {
  settings.volume = clampNumber(Number(elements.volumeControl.value) / 100, 0, 1, DEFAULT_SETTINGS.volume);
  elements.volumeValue.textContent = `${Math.round(settings.volume * 100)}%`;
  saveSettings();
  applyAudioVolume();
});

elements.musicToggle.addEventListener("change", () => {
  unlockAudioFromGesture();
  settings.musicEnabled = elements.musicToggle.checked;
  saveSettings();
  syncMusic();
  playSound(settings.musicEnabled ? "correct" : "click");
});

elements.individualExtraControl.addEventListener("input", () => {
  settings.individualExtra = clampNumber(elements.individualExtraControl.value, 0, 20, DEFAULT_SETTINGS.individualExtra);
  elements.individualExtraValue.textContent = `+${settings.individualExtra}s`;
  saveSettings();
  renderSessionStrip();
});

elements.groupExtraControl.addEventListener("input", () => {
  if (elements.groupExtraControl.disabled) return;
  settings.groupExtra = clampNumber(elements.groupExtraControl.value, 10, 20, DEFAULT_SETTINGS.groupExtra);
  elements.groupExtraValue.textContent = `+${settings.groupExtra}s`;
  if (state.phase === "quiz" && state.session.mode === "group" && state.session.roomRole === "host") {
    state.session.groupExtra = settings.groupExtra;
  }
  if (setupState.pendingRoom) {
    setupState.pendingRoom.groupExtra = settings.groupExtra;
    saveRoom(setupState.pendingRoom);
    elements.roomCreatedMeta.textContent = `${CATEGORIES[setupState.pendingRoom.category].label} - ${
      setupState.pendingRoom.playStyle === "tournament" ? "modo torneio" : "modo casual"
    } - +${setupState.pendingRoom.groupExtra}s em grupo`;
  }
  saveSettings();
  renderSessionStrip();
});

elements.resultModal.addEventListener("cancel", () => closeResults());
elements.modeModal.addEventListener("cancel", closeSetupDialogs);
elements.categoryModal.addEventListener("cancel", closeSetupDialogs);
elements.settingsModal.addEventListener("cancel", () => closeSettings());

renderCategoryControls();
renderSettings();
updateStats();
showScreen("start");
