// =====================
// 1) 다크모드 (저장 + 버튼 텍스트 변경)
// =====================
const btn = document.getElementById("themeToggle");

const saved = localStorage.getItem("theme");
if (saved === "dark") {
  document.body.classList.add("dark");
  btn.setAttribute("aria-pressed", "true");
  btn.textContent = "☀️ 라이트모드";
}

btn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  btn.setAttribute("aria-pressed", String(isDark));
  btn.textContent = isDark ? "☀️ 라이트모드" : "🌙 다크모드";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// =====================
// 2) 히어로 펼치기/접기
// =====================
const heroToggle = document.getElementById("heroToggle");
const heroMore = document.getElementById("heroMore");

heroToggle.addEventListener("click", () => {
  const expanded = heroToggle.getAttribute("aria-expanded") === "true";
  heroToggle.setAttribute("aria-expanded", String(!expanded));

  if (expanded) {
    heroMore.hidden = true;
    heroToggle.textContent = "+ 소개 더보기";
  } else {
    heroMore.hidden = false;
    heroToggle.textContent = "- 접기";
  }
});

// =====================
// 3) 탭 전환
// =====================
const tabs = document.querySelectorAll(".tab");
const titleEl = document.getElementById("contentTitle");
const bodyEl = document.getElementById("contentBody");

const templates = {
  intro: `
    <p><strong>인삿말:</strong> 안녕하세요. SSAFY 15기 Java 전공반 강동현입니다.</p>

    <ul class="info-list">
      <li class="info-item">MBTI: ESTJ</li>
      <li class="info-item">본가: 수원</li>
      <li class="info-item">현재 거주지: 한밭대 근방</li>
      <li class="info-item">다뤄본 언어: C/C++, Python, Java</li>
      <li class="info-item">취미: 운동, 당구, 탁구, 노래방 등...</li>
    </ul>
  `,

  interests: `
    <div class="interest-grid-4">
      <div class="interest-card">
        <img class="interest-img" src="images/dev.jpg" alt="개발">
        <div class="interest-body">
          <h3>개발</h3>
          <p>논리적으로 문제를 해결하는 과정이 좋아요.</p>
        </div>
      </div>

      <div class="interest-card">
        <img class="interest-img" src="images/travel.jpg" alt="여행">
        <div class="interest-body">
          <h3>여행</h3>
          <p>새로운 환경을 경험하는 걸 좋아합니다.</p>
        </div>
      </div>

      <div class="interest-card">
        <img class="interest-img" src="images/food.jpg" alt="식사">
        <div class="interest-body">
          <h3>식사</h3>
          <p>먹는 걸 아주 좋아합니다!</p>
        </div>
      </div>

      <div class="interest-card">
        <img class="interest-img" src="images/music.jpg" alt="노래">
        <div class="interest-body">
          <h3>노래</h3>
          <p>음악 듣는 것을 즐깁니다.</p>
        </div>
      </div>
    </div>
  `,

  goals: `
    <p style="text-align:center">SSAFY에서 나는..</p>

    <div class="goals">
      <div class="goal goal--early">
        <div>
          <div class="stage">초기</div>
          <div class="detail">기본기 학습과 알고리즘 습관화</div>
        </div>
      </div>

      <div class="goal goal--mid">
        <div>
          <div class="stage">중기</div>
          <div class="detail">프로젝트 경험과 협업 역량 강화</div>
        </div>
      </div>

      <div class="goal goal--late">
        <div>
          <div class="stage">말기</div>
          <div class="detail">포트폴리오 완성과 취업 준비</div>
        </div>
      </div>
    </div>
  `
};

function setActiveTab(tabKey) {
  tabs.forEach(t => t.classList.toggle("is-active", t.dataset.tab === tabKey));

  titleEl.textContent =
    tabKey === "intro" ? "소개" :
    tabKey === "interests" ? "관심사" : "목표";

  bodyEl.innerHTML = templates[tabKey];
}

tabs.forEach(t =>
  t.addEventListener("click", () => setActiveTab(t.dataset.tab))
);

setActiveTab("intro");
