// GANTIKAN URL INI DENGAN WEB APP URL GOOGLE APPS SCRIPT ANDA
const GOOGLE_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzr5XK9ejUdCiryIKuHw8kj2wyPLwgwLHBZDu1o7iIkGcbr10-v4CCDcPlAKYMd7ZiP/exec";

// 1. DATA MURID MENGIKUT KELAS (DARI DATABASE GOOGLE SHEET)
const dbMurid = {
  "4C": [
    "AAIRA AILEEN BINTI AMAR AMIRUL",
    "AAIRA BINTI SAHIRULASMI",
    "AARIZ FAYYADH BIN IBRAHIM",
    "AHMAD ILMAN SYAHMI BIN AHMAD SABRI",
    "AL HARRAZ FAID KHAN BIN MOHAMAD EFFENDY",
    "ALYA NATASYA BINTI ALIF AFDAL",
    "AMAL ZULFIRASH BIN AMAL ZULHILMI",
    "AMNI ZUHAIRA BINTI MOHD FADZIL FIKRI",
    "AMSYAR RIZQIN BIN MOHD SHAHRULNIZAM",
    "ARIQ DANIEL HARRAZ BIN SHAIRUL AZMANLIZAM",
    "ARISYA RANIA BINTI MOHD AFZANYZAM",
    "AUNI RAUDHAH BINTI MOHD HAFIDZ",
    "BALQIS BATRISYA BINTI NOR MOHD ARIF SYAH",
    "CHE WAN MUHAMMAD FAHIM BIN CHE WAN MOHD FAIZAL",
    "CHE WAN NUR FARIHA SUFINA BINTI CHE WAN MOHD FAIZAL",
    "DAHLIA DAMIA BINTI MUSTAFFA",
    "DHIYA SARAH AISYAH BINTI MUHAMMAD YUNUS",
    "ELLYSHA ERYNA BINTI MOHD NURULANWAR",
    "IMAN NAUFAL BIN MOHD ROHAIZAL IEQWAL",
    "IRFAN DANIYAL BIN MUHD HAIKAL AKID",
    "IZZ HADI RIFQIY BIN AHMAD ADZRI",
    "IZZ HAFIY RAIQAL BIN AHMAD ADZRI",
    "KHAIREENA SOFEA BINTI MOHD HAIRI",
    "LUTH ISLAM BAIHAQI BIN MOHD HAFIDZ",
    "MUHAMAD ZHAFRAN RIZQIN BIN MUHAMAD RIDZUAN"
  ],
  "4I": [
    "ADAM FAYYADH BIN MOHD FAREEZ",
    "AHMAD SAYF NAEEM BIN AHMAD BUKHARI",
    "AHMAD ZAFFRAN DARWISY BIN AHMAD ZAHRUL ASUAD",
    "AHNAF SYAFI BIN SUFIAN",
    "AISYAH HUMAIRA BINTI MUHAMMAD",
    "AISYAH RAUDHAH BINTI NUR FIRDAUS",
    "ALEESYA BINTI MOHD NIZAM",
    "ANISSA KHAYRA BINTI AMIR FAIZAL",
    "AQIL RAYHAN BIN RAZMAN",
    "HARRAZ SHAHMIE BIN SHAHRIZWAL",
    "IZZ DARWISH ILMAN BIN MUHD AZUZUDDIN",
    "KALEB KANE RODRIGUES"
  ],
  "4J": [
    "AHMAD AMMAR ALFIAN BIN AHMAD TAUFEQ",
    "AHMAD DANIEL BIN ABDUL GHAFUR",
    "AMIRA NUR HUSNA BINTI MOHD HARIRI",
    "ARYYAN AZMI BIN JASMIN",
    "DHIA NUR QAISYA BINTI MOHAMAD AFEZEI",
    "DHIYA NUR RANIA BINTI SHAH AHMAD FAIZAN",
    "IRIS SUMAYYAH BINTI MOHD IHSHARUDDIN",
    "IZA NAJDA BINTI MOHD HARIZULFAZLI",
    "IZZ QAYLA IMAANI BINTI MOHD WARIQ KHUZAIMY",
    "MAIZA AQILLAH BINTI MUHAMAD HAFIZ",
    "MARISSA MAISARAH BINTI MAZLAN",
    "MOHAMAD KASYAF ARYAN BIN ZULKIFLIE"
  ],
  "4M": [
    "AHMAD ABSYAR BIN AZHARI",
    "DURRAH IRDINA BINTI ABDUL JALIL",
    "MARYAM AAKIFAH BINTI KADAR SULTAN ALI",
    "MOHAMAD AIREL ISKANDAR BIN MOHAMAD RABBANI",
    "MUHAMAD AUS NAUFAL BIN MUHAMAD FAIZOL",
    "MUHAMAD AZLAN ASHRAF BIN MOHD ASRUL IZUWAN",
    "MUHAMMAD AARIZ ZHAFRAN BIN AB AZIZ",
    "MUHAMAD ADAM DARWISY BIN ABDULLAH"
  ],
  "4P": [
    "ADEERA AZZAHRA BINTI MUHAMMAD JAHAN ZAIB",
    "AHMAD MU'IZZUDDIN BIN ZANHAYI",
    "HANA AMMARA BINTI MOHD HAFIZULDIN",
    "MARYAM BATRISYA BINTI ABU KASIM ALKUSYAIRI",
    "MUHAMAD ZARIF ZIKWAN BIN MUHAMAD RAHMAT",
    "MUHAMMAD ADAM SYAKIRIN BIN ABDULLAH"
  ],
  "4S": [
    "AFYAH NUR UFAIRAH BINTI MOHD ZAIDY",
    "AHMAD HAZIM LUTFI BIN ABDUL RAHIM",
    "AIRIS AZZAHRA BINTI MOHD RIZAL",
    "ANNUR HANNA HAWADAH BINTI MOHD FAUZI",
    "AQIL ZAYYAD BIN MOHAMMAD AMIRUL",
    "EIDLAN HAKIM BIN AHMAD HELMI",
    "FARISHA BINTI ZAINUDDIN",
    "ISYRAFF RIFQY BIN ZAKARIA",
    "IZZ NUR IMAN BINTI AHMAD ZUBIR",
    "MIRZA FITRI FARZANA BINTI JAMIAN",
    "MUAMMAR AISH BIN MOHD SHAHRUL MIZA",
    "MUHAMMAD ADAM MIKHAEL BIN MUHAMMAD ASYRAF HAZWAN"
  ]
};

// 2. BANK SOALAN (DSKP 6.1.1: Sudut Tegak, Tirus & Cakah)
const questions = [
  {
    id: 1,
    type: "mcq",
    title: "Namakan jenis sudut X yang ditunjukkan pada segi tiga di bawah.",
    shape: "right_triangle",
    highlightAngle: "right",
    options: ["Sudut Tegak", "Sudut Tirus", "Sudut Cakah"],
    answer: "Sudut Tegak"
  },
  {
    id: 2,
    type: "mcq",
    title: "Apakah jenis sudut Y yang ditunjukkan pada segi tiga sama sisi berikut?",
    shape: "equilateral_triangle",
    highlightAngle: "acute",
    options: ["Sudut Tegak", "Sudut Tirus", "Sudut Cakah"],
    answer: "Sudut Tirus"
  },
  {
    id: 3,
    type: "mcq",
    title: "Lihat sudut Z pada segi tiga tak sama sisi di bawah. Namakan jenis sudut tersebut.",
    shape: "obtuse_triangle",
    highlightAngle: "obtuse",
    options: ["Sudut Tegak", "Sudut Tirus", "Sudut Cakah"],
    answer: "Sudut Cakah"
  },
  {
    id: 4,
    type: "mcq",
    title: "Bentuk segi empat tepat mempunyai 4 sudut. Apakah jenis sudut tersebut?",
    shape: "rectangle",
    highlightAngle: "right",
    options: ["Sudut Tirus", "Sudut Cakah", "Sudut Tegak"],
    answer: "Sudut Tegak"
  },
  {
    id: 5,
    type: "mcq",
    title: "Berapakah bilangan sudut tegak yang terdapat dalam satu segi empat sama?",
    shape: "square",
    highlightAngle: "all_right",
    options: ["2", "3", "4", "0"],
    answer: "4"
  },
  {
    id: 6,
    type: "mcq",
    title: "Satu segi tiga bersudut tegak mempunyai ______ sudut tegak dan ______ sudut tirus.",
    shape: "right_triangle",
    highlightAngle: "none",
    options: ["1 sudut tegak, 2 sudut tirus", "2 sudut tegak, 1 sudut tirus", "3 sudut tegak, 0 sudut tirus"],
    answer: "1 sudut tegak, 2 sudut tirus"
  },
  {
    id: 7,
    type: "mcq",
    title: "Sudut yang saiznya LEBIH KECIL daripada sudut tegak (kurang daripada 90°) dipanggil...",
    shape: "none",
    options: ["Sudut Cakah", "Sudut Tirus", "Sudut Tegak"],
    answer: "Sudut Tirus"
  },
  {
    id: 8,
    type: "mcq",
    title: "Sudut yang saiznya LEBIH BESAR daripada sudut tegak (lebih daripada 90°) dipanggil...",
    shape: "none",
    options: ["Sudut Tegak", "Sudut Tirus", "Sudut Cakah"],
    answer: "Sudut Cakah"
  },
  {
    id: 9,
    type: "mcq",
    title: "Apakah saiz bagi satu sudut tegak?",
    shape: "none",
    options: ["Tepat 90°", "Less than 90°", "More than 90°"],
    optionsDisplay: ["Tepat 90°", "Kurang daripada 90°", "Lebih daripada 90°"],
    answer: "Tepat 90°"
  },
  {
    id: 10,
    type: "mcq",
    title: "Berapakah bilangan sudut cakah yang ada pada bentuk segi empat tepat?",
    shape: "rectangle",
    highlightAngle: "none",
    options: ["0", "2", "4"],
    answer: "0"
  }
];

// VARIABEL GLOBAL
let currentQuestionIndex = 0;
let userAnswers = {};
let selectedClass = "";
let selectedName = "";
let timerInterval = null;
let secondsElapsed = 0;

// ELEMEN DOM
const selectKelas = document.getElementById("select-kelas");
const selectNama = document.getElementById("select-nama");
const btnStart = document.getElementById("btn-start");
const loginCard = document.getElementById("login-card");
const quizCard = document.getElementById("quiz-card");
const resultCard = document.getElementById("result-card");

const displayNama = document.getElementById("display-nama");
const displayKelas = document.getElementById("display-kelas");
const timerDisplay = document.getElementById("timer-display");
const progressBar = document.getElementById("progress-bar");
const questionContainer = document.getElementById("question-container");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnSubmit = document.getElementById("btn-submit");

// 3. EVENT LISTENERS PADA BORANG LOG MASUK
selectKelas.addEventListener("change", (e) => {
  selectedClass = e.target.value;
  selectNama.innerHTML = '<option value="">-- Pilih Nama Murid --</option>';
  
  if (selectedClass && dbMurid[selectedClass]) {
    dbMurid[selectedClass].forEach(nama => {
      const opt = document.createElement("option");
      opt.value = nama;
      opt.textContent = nama;
      selectNama.appendChild(opt);
    });
    selectNama.disabled = false;
  } else {
    selectNama.disabled = true;
  }
  checkFormValid();
});

selectNama.addEventListener("change", (e) => {
  selectedName = e.target.value;
  checkFormValid();
});

function checkFormValid() {
  btnStart.disabled = !(selectedClass && selectedName);
}

btnStart.addEventListener("click", () => {
  loginCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  
  displayNama.textContent = selectedName;
  displayKelas.textContent = selectedClass;
  
  startTimer();
  renderQuestion();
});

// 4. PEMASA (TIMER)
function startTimer() {
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const secs = String(secondsElapsed % 60).padStart(2, '0');
    timerDisplay.textContent = `${mins}:${secs}`;
  }, 1000);
}

// 5. RENDERING SOALAN & CANVAS BENTUK
function renderQuestion() {
  const q = questions[currentQuestionIndex];
  
  // Kemaskini Progress Bar
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  let html = `
    <div class="question-title">Soalan ${currentQuestionIndex + 1} daripada ${questions.length}:<br>${q.title}</div>
  `;

  if (q.shape !== "none") {
    html += `<div class="canvas-container"><canvas id="shapeCanvas" width="220" height="160"></canvas></div>`;
  }

  const displayOpts = q.optionsDisplay || q.options;
  html += `<div class="options-grid">`;
  q.options.forEach((opt, idx) => {
    const isSelected = userAnswers[q.id] === opt ? "selected" : "";
    html += `<button class="option-btn ${isSelected}" onclick="selectOption(${q.id}, '${opt}')">${displayOpts[idx]}</button>`;
  });
  html += `</div>`;

  questionContainer.innerHTML = html;

  if (q.shape !== "none") {
    drawShape(q.shape, q.highlightAngle);
  }

  // Kawalan Butang Navigasi
  btnPrev.disabled = currentQuestionIndex === 0;
  if (currentQuestionIndex === questions.length - 1) {
    btnNext.classList.add("hidden");
    btnSubmit.classList.remove("hidden");
  } else {
    btnNext.classList.remove("hidden");
    btnSubmit.classList.add("hidden");
  }
}

// LUKIS GEOMETRI DAN SUDUT PADA CANVAS
function drawShape(shape, highlight) {
  const canvas = document.getElementById("shapeCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#2C3E50";
  ctx.fillStyle = "#EBF3FA";

  if (shape === "right_triangle") {
    ctx.beginPath();
    ctx.moveTo(40, 130);
    ctx.lineTo(180, 130);
    ctx.lineTo(40, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    if (highlight === "right") {
      ctx.strokeStyle = "#FF7043";
      ctx.strokeRect(40, 110, 20, 20); // Simbol Sudut Tegak (Tanda Petak)
      ctx.fillStyle = "#FF7043";
      ctx.font = "bold 14px Segoe UI";
      ctx.fillText("X", 65, 120);
    }
  } else if (shape === "equilateral_triangle") {
    ctx.beginPath();
    ctx.moveTo(110, 30);
    ctx.lineTo(40, 130);
    ctx.lineTo(180, 130);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    if (highlight === "acute") {
      ctx.beginPath();
      ctx.arc(40, 130, 25, -Math.PI/3, 0);
      ctx.strokeStyle = "#FF7043";
      ctx.stroke();
      ctx.fillStyle = "#FF7043";
      ctx.font = "bold 14px Segoe UI";
      ctx.fillText("Y", 75, 122);
    }
  } else if (shape === "obtuse_triangle") {
    ctx.beginPath();
    ctx.moveTo(30, 120);
    ctx.lineTo(110, 120);
    ctx.lineTo(190, 50);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    if (highlight === "obtuse") {
      ctx.beginPath();
      ctx.arc(110, 120, 20, Math.PI, -Math.PI/4, false);
      ctx.strokeStyle = "#FF7043";
      ctx.stroke();
      ctx.fillStyle = "#FF7043";
      ctx.font = "bold 14px Segoe UI";
      ctx.fillText("Z", 100, 95);
    }
  } else if (shape === "rectangle" || shape === "square") {
    const w = shape === "square" ? 90 : 130;
    const h = 90;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);

    if (highlight === "right") {
      ctx.strokeStyle = "#FF7043";
      ctx.strokeRect(x, y + h - 20, 20, 20);
    }
  }
}

// FUNGSI PILIH JAWAPAN
window.selectOption = function(qId, val) {
  userAnswers[qId] = val;
  renderQuestion();
};

btnPrev.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
});

btnNext.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
});

// 6. HANTAR JAWAPAN DAN INTEGRASI GOOGLE SHEET
btnSubmit.addEventListener("click", () => {
  if (Object.keys(userAnswers).length < questions.length) {
    if (!confirm("Anda belum menjawab semua soalan. Adakah anda pasti ingin menghantar?")) {
      return;
    }
  }

  clearInterval(timerInterval);

  // Kira Markah
  let scoreCount = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.answer) {
      scoreCount++;
    }
  });

  const finalScoreVal = Math.round((scoreCount / questions.length) * 100);
  const formattedTime = timerDisplay.textContent;

  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  document.getElementById("final-score").textContent = finalScoreVal;
  document.getElementById("final-time").textContent = formattedTime;

  // Hantar Data ke Google Apps Script
  const payload = {
    Nama: selectedName,
    Kelas: selectedClass,
    Skor: `${finalScoreVal}/100`,
    Masa_Diambil: formattedTime,
    Detail_Jawapan: userAnswers
  };

  const statusMsg = document.getElementById("status-message");

  fetch(GOOGLE_APP_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(() => {
    statusMsg.textContent = "✅ Keputusan anda telah berjaya disimpan ke Google Sheet!";
    statusMsg.style.color = "#67C23A";
  })
  .catch(err => {
    console.error(err);
    statusMsg.textContent = "⚠️ Terdapat masalah semasa menyimpan data, tetapi keputusan anda telah direkodkan.";
  });
});