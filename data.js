/* ============================================================
   밥먹공 — 지문 분석 데이터 (data.js)
   ▶ 새 모의고사 추가 = exams 배열에 객체 하나만 더 붙이기
   ▶ 지문 한 개(p)는 9단계 분석 객체
   ============================================================ */
window.STUDY_DATA = {
  exams: [
    /* ═══════════════════════════ 2023년 3월 ═══════════════════════════ */
    {
      id: "2303",
      name: "2023년 3월",
      passages: [
        {
          num: "33",
          topic: "가상 세계가 사회적 가치를 얻으려면 충분한 참여자가 필요하다",
          summary: "가상 세계는 사람이 '사회'라 부를 만큼 많이 모여야 진짜 가치를 가진다.",
          comic: [
            "1컷: 학자들 — '신화는 삶에 의미를 준다'",
            "2컷: 신화가 하나의 '세계'로 커지면 의미가 더 커짐",
            "3컷: 나+친구 9명만 하는 게임 → 그냥 이상한 취미",
            "4컷: 사람이 '사회' 규모로 많아지면 → 진짜 사회적 가치!"
          ],
          easy: "친구 몇 명이랑만 하는 게임은 아무리 재밌어도 우리끼리의 놀이예요. 그런데 전 세계 수백만 명이 하는 축구는 규칙·문화·산업까지 만들죠. 가상 세계도 똑같아요. 믿고 참여하는 사람이 '사회'만큼 많아져야 비로소 진짜 영향력과 가치가 생긴다는 얘기예요.",
          structure: {
            "도입": "신화는 삶에 의미를 주고, 세계로 진화하면 의미가 증폭된다.",
            "전개": "가상 세계의 능력은 믿는 사람이 많을수록 커진다(↔ 소수면 못 버틴다).",
            "예시/대조": "전 세계 스포츠 vs 나+친구 9명 게임 → 후자는 이상한 취미.",
            "결론": "참여자가 '사회'로 여겨질 만큼 커지면 심리적 가치 → 사회적 가치."
          },
          vocab: [
            { word: "amplify", mean: "증폭시키다", role: "신화→세계로 커질 때 의미가 커짐" },
            { word: "sustain", mean: "지속하다", role: "'소수로는 지속 불가'라는 핵심 대조" },
            { word: "adherent", mean: "추종자, 지지자", role: "a handful of adherents=소수 참여자" },
            { word: "immersive", mean: "몰입하게 하는", role: "내 게임의 매력 묘사" },
            { word: "threshold", mean: "기준점, 문턱", role: "이 선을 넘어야 사회적 가치로 전환" },
            { word: "wide-ranging", mean: "넓은 범위에 퍼지는", role: "지속적이고 넓은 '가치' 수식" }
          ],
          sentences: [
            { sent: "a virtual world cannot be long sustained by a mere handful of adherents", explain: "주어=a virtual world, 동사=cannot be sustained(수동, 지속될 수 없다), by 이하=소수에 '의해서는'. '소수로는 못 버틴다'가 핵심." },
            { sent: "its participants must be a large enough group to be considered a society", explain: "참여자가 / 충분히 큰 집단이어야 한다(must be) / to be considered a society='사회로 여겨질 만큼'. enough가 형용사 뒤에 온 점 주의." }
          ],
          examPoints: "• 주제·제목: '가치 = 충분한 참여자 규모'\n• 빈칸: 마지막 'a society' 또는 'threshold' 자리\n• 대조(global sport ↔ weird hobby) 묻는 요지/어휘 주의",
          review: "사람이 '사회'만큼 많아져야 가상 세계가 진짜 가치를 가진다!",
          quiz: [
            { q: "가상 세계가 오래 지속되지 못하는 경우는?", a: "참여자가 소수(a handful)일 때" },
            { q: "심리적 가치가 사회적 가치로 바뀌는 조건은?", a: "참여자가 '사회'로 여겨질 만큼 커지는 기준점을 넘을 때" }
          ]
        },
        {
          num: "34",
          topic: "생태학자는 다른 생물의 관점으로 환경을 봐야 한다",
          summary: "'극심한 환경'은 인간 기준일 뿐, 생태학자는 생물 각각의 입장에서 환경을 봐야 한다.",
          comic: [
            "1컷: 사람들 — 사막=극심, 남극=혹독 이라고 부름",
            "2컷: 잠깐, 그건 '우리 인간'에게 극심한 거잖아?",
            "3컷: 선인장에겐 사막이, 펭귄에겐 남극이 전혀 안 극심",
            "4컷: 그러니 생태학자는 '벌레의 눈, 식물의 눈'으로!"
          ],
          easy: "우리는 사막을 '극한 환경'이라 부르지만, 선인장에게 사막은 그냥 '집'이에요. 펭귄에게 남극은 '쾌적한 동네'고요. 우리 기준으로 환경을 평가하면 다른 생물을 오해해요. 그래서 생태학자는 자기 기준을 버리고 그 생물의 눈높이에서 세상을 봐야 한다는 거예요.",
          structure: {
            "도입": "환경을 '극심/혹독/온화'라 부르는 건 자연스러워 보인다.",
            "전개": "하지만 그건 '우리의' 생리적 특징 기준일 뿐.",
            "반전": "선인장·펭귄에겐 그 환경이 전혀 극심하지 않다.",
            "결론": "생태학자는 다른 생물의 관점을 얻으려 하고, 감정적 단어는 신중히."
          },
          vocab: [
            { word: "benign", mean: "온화한", role: "환경을 묘사하는 감정적 형용사 예" },
            { word: "salinity", mean: "염도", role: "'극심한' 환경의 구체 예(그레이트솔트호)" },
            { word: "physiological", mean: "생리적인", role: "'우리 기준'이라는 근거의 핵심어" },
            { word: "tolerance", mean: "내성", role: "우리의 특정 내성을 고려한다는 한정" },
            { word: "worm's-eye view", mean: "벌레의 관점", role: "생태학자가 가져야 할 관점 비유" },
            { word: "emotive", mean: "감정을 나타내는", role: "harsh/benign 같은 단어(신중히 쓰라)" }
          ],
          sentences: [
            { sent: "To a cactus there is nothing extreme about the desert conditions in which cacti have evolved", explain: "선인장에게는(To a cactus) / 극심한 게 전혀 없다 / in which=where(진화해온 사막 환경). '관점에 따라 다르다'가 핵심." },
            { sent: "It is lazy and dangerous for the ecologist to assume that all other organisms sense the environment in the way we do", explain: "It=가주어, to assume~=진주어, for the ecologist=의미상 주어. '모든 생물이 우리처럼 느낀다고 가정하면 나태·위험'." }
          ],
          examPoints: "• 빈칸: 'lazy and dangerous' 또는 마지막 'with care'\n• 어휘: extreme/harsh/benign이 '관점 의존적'\n• 주제·요지: '인간 중심 관점 버리기' 단골",
          review: "사막은 선인장의 집! 환경 평가는 그 생물의 눈으로.",
          quiz: [
            { q: "사막이 '극심'한 건 누구 기준?", a: "우리 인간(특정 생리적 특징과 내성)" },
            { q: "생태학자가 가져야 할 태도는?", a: "벌레/식물의 관점으로 보고, 감정적 단어는 신중히" }
          ]
        },
        {
          num: "35",
          topic: "인간의 과정은 이성적 과정과 다르다 (무관한 문장 찾기형)",
          summary: "인간은 본능·직관으로 움직여서 늘 규칙대로인 '이성적 과정'과 결과가 다르다.",
          comic: [
            "1컷: '이성적 과정'=항상 규칙대로, 책이 옳다고 믿음",
            "2컷: 인간은? 본능·직관이 끼어들고 데이터 무시도",
            "3컷: 운전 — 법규만 정확히 지키면?",
            "4컷: 남들이 안 지켜서 결국 갇힘 → 인간처럼 행동해야 성공!"
          ],
          easy: "교과서대로만 운전하면 오히려 길에 갇혀요. 다른 운전자들은 교과서대로 안 하니까요. 컴퓨터는 '규칙대로'가 정답이지만, 인간 세상은 본능·눈치·감으로 굴러가요. 그래서 자율주행차도 '이성적'이 아니라 '인간적'으로 행동해야 도로에서 성공한다는 거예요.",
          structure: {
            "도입": "인간의 과정은 결과 면에서 이성적 과정과 다르다.",
            "전개": "이성적=규칙대로·책이 옳다고 가정 / 인간=본능·직관, 데이터 무시도.",
            "예시": "운전 — 법규만 정확히 따르면 오히려 갇힌다.",
            "결론": "자율주행차도 이성적이기보다 인간적으로 행동해야 성공."
          },
          vocab: [
            { word: "rational", mean: "이성적인", role: "글 전체의 대조축(↔ human/instinct)" },
            { word: "go by the book", mean: "규칙대로 하다", role: "이성적 과정의 특징" },
            { word: "instinct / intuition", mean: "본능 / 직관", role: "인간 과정의 핵심 변인" },
            { word: "variable", mean: "변인", role: "책에 안 나오는 인간적 요소" },
            { word: "end up + 분사", mean: "결국 ~한 상태가 되다", role: "'결국 갇힌다'는 결과 표현" }
          ],
          sentences: [
            { sent: "if you follow the laws precisely, you end up stuck somewhere", explain: "if절(법규 정확히 지키면) + 주절(결국 갇힌다). end up + stuck(과거분사)='결국 ~한 상태가 되다'." },
            { sent: "a self-driving car must therefore act humanly, rather than rationally", explain: "주어=자율주행차, must act='행동해야 한다', humanly rather than rationally='이성적이기보다 인간적으로'. 결론 문장." }
          ],
          examPoints: "• 유형 주의: 35번 '무관한 문장' — 이성/인간 대조와 안 맞는 문장이 답\n• 빈칸: 마지막 'humanly rather than rationally'\n• 어휘: rational ↔ human/instinct 짝 흔들기",
          review: "교과서대로만 운전하면 갇힌다 — 인간 세상은 직관으로 굴러간다.",
          quiz: [
            { q: "이성적 과정의 두 특징은?", a: "규칙대로 진행 + 그 규칙(책)이 옳다고 가정" },
            { q: "자율주행차가 성공하려면?", a: "이성적이기보다 인간적으로 행동" }
          ]
        },
        {
          num: "36",
          topic: "'나쁜 습관을 깬다(break)'는 표현을 쓰지 말라",
          summary: "'습관을 깬다'는 말은 한 번에 힘쓰면 된다는 잘못된 기대를 줘서 안 좋다.",
          comic: [
            "1컷: 나쁜 습관 얘기할 때 '깨다(break)', '싸우다(battle)'",
            "2컷: 마치 습관이 무찔러야 할 악당인 것처럼!",
            "3컷: 근데 이 표현이 틀을 잘못 씌움",
            "4컷: '깨다'=한 방에 끝난다는 착각 → 실제론 안 됨"
          ],
          easy: "우리는 나쁜 습관을 '깨버린다'고 말하죠. 그런데 '깨다'는 망치로 한 번 내려치면 끝나는 느낌을 줘요. 하지만 습관은 한 방에 사라지지 않아요. 그래서 이런 말 자체가 잘못된 기대를 심어준다는 거예요. 표현을 바꿔야 접근법도 바뀐다는 얘기.",
          structure: {
            "도입": "나쁜 습관도 바꾸기 쉬움~어려움의 연속체 위에 있다.",
            "전개": "어려운 쪽에선 'break a habit', 'battle addiction' 전투적 언어.",
            "문제 제기": "이 언어는 습관을 '무찌를 악당'처럼 만들어 비효과적 틀을 씌움.",
            "결론": "'break'는 '한 번에 힘쓰면 없어진다'는 잘못된 기대를 준다(실제론 X)."
          },
          vocab: [
            { word: "continuum", mean: "연속체", role: "습관이 놓인 쉬움~어려움 스펙트럼" },
            { word: "nefarious", mean: "사악한", role: "습관을 악당으로 비유(과장된 전투 언어)" },
            { word: "frame", mean: "틀을 씌우다", role: "언어가 문제를 규정하는 핵심 동사" },
            { word: "misguide", mean: "잘못된 길로 이끌다", role: "'break'의 부작용" },
            { word: "imply", mean: "암시하다", role: "'break'가 주는 잘못된 함의" },
            { word: "get rid of", mean: "~을 없애다", role: "습관 제거를 가리키는 핵심 표현" }
          ],
          sentences: [
            { sent: "It's as if an unwanted behavior is a nefarious villain to be aggressively defeated", explain: "It's as if~='마치 ~인 것 같다'. 나쁜 행동을 '격렬히 무찌를 사악한 악당'에 비유. 전투적 언어 비판." },
            { sent: "The word \"break\" sets the wrong expectation for how you get rid of a bad habit", explain: "주어='break', 동사=sets(형성), the wrong expectation for how~(없애는 방법에 대한 잘못된 기대). 핵심 주장." }
          ],
          examPoints: "• 빈칸: 'wrong expectation' 또는 'break' 자리\n• 주제·제목: '전투적 표현을 바꿔라'\n• 어휘: break/battle/defeat 전투 어휘 묶음",
          review: "'습관을 깬다'=한 방에 된다는 착각. 표현부터 바꾸자.",
          quiz: [
            { q: "그만 쓰자고 한 표현은?", a: "'break a habit(습관을 깨다)'" },
            { q: "'break'가 주는 잘못된 기대는?", a: "한순간에 힘을 가하면 습관이 없어진다는 기대" }
          ]
        },
        {
          num: "37",
          topic: "의사결정에서 이성과 감정 (이유는 결국 감정에 뿌리)",
          summary: "우리는 이성의 존재 같지만, 모든 이유를 따라가면 결국 감정·가치에 닿는다.",
          comic: [
            "1컷: 흔한 착각 — '우리는 이성의 존재야'",
            "2컷: 사실 이성+감정 둘 다의 존재",
            "3컷: 통곡물 vs 초코 시리얼? 이유를 대고 또 대고…",
            "4컷: 끝까지 가면 결국 '가치·느낌·감정'에 도착!"
          ],
          easy: "시리얼 하나 고를 때도 '건강하려고'라는 이유를 대죠. 근데 '왜 건강하고 싶은데?' '오래 살고 싶어서.' '그건 왜?'… 계속 파고들면 결국 '내가 그걸 원하니까(감정·가치)'에서 멈춰요. 모든 이성적 이유의 바닥엔 감정이 깔려 있다는 거예요.",
          structure: {
            "도입": "흔하지만 틀린 가정: 우리는 이성의 존재다(사실은 이성+감정).",
            "전개": "어떤 이성도 결국 감정으로 이어진다(시리얼 선택 예).",
            "심화": "이유에 이유를 거듭 물으면 결국 가치·느낌·감정(비이성)에 근거.",
            "결론": "뿌리 깊은 가치·감정은 추론의 산물은 아니지만 추론의 영향은 받는다."
          },
          vocab: [
            { word: "assumption", mean: "가정", role: "'우리는 이성의 존재'라는 잘못된 전제" },
            { word: "creature of reason", mean: "이성의 피조물", role: "글이 반박하는 통념" },
            { word: "get by on ~", mean: "~만으로 살아가다", role: "'이성만으로 살 수 없다'" },
            { word: "be based on", mean: "~에 근거하다", role: "이유가 무언가에 기반함을 반복 강조" },
            { word: "deep-seated", mean: "뿌리 깊은", role: "가치·감정의 성격 묘사" },
            { word: "non-reason", mean: "비이성", role: "이유의 최종 근거(가치·느낌·감정)" }
          ],
          sentences: [
            { sent: "reasons are ultimately based on non-reason such as values, feelings, or emotions", explain: "주어=reasons, 동사=are based on, non-reason=비이성(가치·느낌·감정). '이유의 바닥엔 감정'." },
            { sent: "These deep-seated values ... are rarely a result of reasoning, but can certainly be influenced by reasoning", explain: "뿌리 깊은 가치·감정은 / 추론의 산물인 경우는 드물지만 / 추론의 영향은 받을 수 있다. 'A는 아니지만 B'." }
          ],
          examPoints: "• 빈칸: 'non-reason(values, feelings, emotions)' 고확률\n• 주제: '이성의 뿌리는 감정'\n• 어휘: reason ↔ feeling/emotion 대조 흔들기",
          review: "이유를 끝까지 캐물으면 결국 '감정'에 닿는다.",
          quiz: [
            { q: "글이 반박하는 흔한 가정은?", a: "우리는 (오로지) 이성의 존재라는 가정" },
            { q: "모든 이유의 최종 근거는?", a: "가치, 느낌, 감정 같은 비이성" }
          ]
        },
        {
          num: "38",
          topic: "전기 신호로 의사소통하는 물고기 (문장 삽입형)",
          summary: "물고기는 전기 기관으로 신호를 만들어 짧은 거리에서 소통하고, 짧은 범위가 오히려 장점이다.",
          comic: [
            "1컷: 어떤 물고기는 '전기'로 대화함!",
            "2컷: 특수 전기 기관에서 신호 발생 → 몸 주위에 전기장",
            "3컷: 전기장 형태·주파수를 바꿔 신호를 다양화",
            "4컷: 도달 거리 1~2m로 짧음 → 무리 속 간섭을 줄이는 장점!"
          ],
          easy: "전기뱀장어처럼 전기로 말하는 물고기 얘기예요. 몸속 특수 기관에서 전기를 내보내 주위에 전기장을 만들고, 그 모양과 깜빡임 빈도를 바꿔 다양한 '말'을 해요. 신호가 멀리 못 가는 게 단점 같지만, 떼로 모여 살 때 서로 신호가 안 섞이게 해주니 오히려 장점이에요.",
          structure: {
            "도입": "전기 의사소통은 주로 물고기에서 발견된다.",
            "전개": "특수 전기 기관에서 신호 발생 → 전기장 생성, 근육세포 덩어리로 전류↑.",
            "심화": "전기장 형태·방출 주파수를 바꿔 신호를 다양화.",
            "결론": "도달 범위가 짧음 → 무리 생활 시 신호 간섭 위험을 줄이는 '장점'."
          },
          vocab: [
            { word: "discharge", mean: "방출하다", role: "신호가 '방출'될 때 전기장 생성" },
            { word: "electric field", mean: "전기장", role: "물고기 주위에 형성되는 소통 매개" },
            { word: "contract", mean: "수축하다", role: "근육세포 수축 시 약한 전류 발생" },
            { word: "intensity", mean: "강도", role: "덩어리 연결로 총 전류 강도↑" },
            { word: "frequency", mean: "주파수", role: "신호를 다양화하는 변수" },
            { word: "interference", mean: "간섭", role: "짧은 범위가 줄여주는 '위험'" }
          ],
          sentences: [
            { sent: "In the electric organ the muscle cells are connected in larger chunks, which makes the total current intensity larger", explain: "근육세포가 더 큰 덩어리로 연결됨 → which(앞 절 전체)가 총 전류 강도를 더 크게 만든다. 계속적 용법." },
            { sent: "the short range decreases the risk of interference", explain: "주어=the short range(짧은 도달 범위), 동사=decreases, 목적어=간섭의 위험. '짧은 게 오히려 장점'이라는 반전 결론." }
          ],
          examPoints: "• 유형: 38번 '문장 삽입' — 전기장 생성→다양화→장점 흐름의 연결고리\n• 빈칸: 마지막 'interference(간섭)' 자리\n• 'This is an advantage'의 지시어 연결이 삽입 단서",
          review: "전기로 말하는 물고기 — 짧은 신호 거리가 떼 생활엔 오히려 장점!",
          quiz: [
            { q: "물고기는 신호를 어떻게 다양화하나?", a: "전기장의 형태나 방출 주파수를 바꿔서" },
            { q: "도달 범위가 짧은 게 왜 장점인가?", a: "무리 속에서 신호 간섭 위험을 줄여주기 때문" }
          ]
        },
        {
          num: "39",
          topic: "창의성이 생산성에 주는 (양면적) 영향",
          summary: "창의성은 어려운 문제를 보게 해 생산성을 낮출 수도, 방법을 개선해 높일 수도 있다.",
          comic: [
            "1컷: 창의성은 생산성에 영향을 줌",
            "2컷: 다윈 — 어렵고 얽힌 '종 분화'를 택함 → 오랜 연구",
            "3컷: 이런 경우 출판물 수(생산성)는 오히려 줄 수도",
            "4컷: 반대로 방법·기술에 창의성 발휘 → PCR처럼 작업을 확 줄임!"
          ],
          easy: "창의성에는 두 얼굴이 있어요. 다윈처럼 남이 못 본 '어려운 문제'에 꽂히면 연구가 길어져서 결과물(논문 수)은 오히려 줄 수 있어요. 반대로 '방법'을 창의적으로 개선하면(예: DNA를 빠르게 복제하는 PCR) 일이 확 줄어 생산성이 올라가요. 같은 창의성도 어디에 쓰느냐가 갈림길.",
          structure: {
            "도입": "창의성은 생산성에 영향을 줄 수 있다.",
            "전개①(↓)": "남이 못 본 어려운 문제를 보게 함 → 다윈의 종 분화 → 출판물↓.",
            "전개②(↑)": "방법·기술에 집중된 창의성 → 작업을 극적으로 줄임 → PCR 예시.",
            "결론": "단계를 줄이거나 덜 실패하는 단계로 대체 → 생산성↑(양면성)."
          },
          vocab: [
            { word: "productivity", mean: "생산성", role: "창의성이 영향 주는 대상(출판물 수로 측정)" },
            { word: "speciation", mean: "종 분화", role: "다윈이 택한 '어렵고 얽힌' 문제" },
            { word: "deliberation", mean: "심사숙고", role: "어려운 문제가 부른 긴 과정" },
            { word: "drastically", mean: "극적으로", role: "방법 개선이 작업을 줄이는 정도" },
            { word: "amplify", mean: "증폭시키다", role: "PCR이 DNA를 '증폭'시킴" },
            { word: "substitute", mean: "대체하다", role: "실패 가능성 낮은 단계로 '대체'→생산성↑" }
          ],
          sentences: [
            { sent: "creativity may actually decrease productivity because effort is focused on difficult problems", explain: "창의성이 오히려 생산성을 낮출 수 있다(actually decrease). 이유=노력이 어려운 문제에 집중되기 때문. 양면 중 '↓'쪽." },
            { sent: "creativity may lead to solutions that drastically reduce the work necessary to solve a problem", explain: "방법형 창의성은 / 해결책으로 이어진다 / that~=문제 해결에 필요한 작업을 극적으로 줄이는. 양면 중 '↑'쪽." }
          ],
          examPoints: "• 빈칸: 'decrease/increase productivity'의 방향 판단이 핵심\n• 어휘: decrease ↔ increase 흔들기 고확률\n• 두 사례(다윈 vs PCR)의 대조를 묻는 요지·제목",
          review: "창의성=양날의 칼. 어려운 문제엔 생산성↓, 방법 개선엔 생산성↑.",
          quiz: [
            { q: "창의성이 생산성을 '낮추는' 경우는?", a: "남이 못 본 어려운 문제에 노력이 집중될 때(예: 다윈)" },
            { q: "창의성이 생산성을 '높이는' 경우는?", a: "방법·기술을 개선해 작업을 줄일 때(예: PCR)" }
          ]
        },
        {
          num: "40",
          topic: "특정 부분의 진화가 공간 지각에 미친 영향 (요약문형)",
          summary: "진화에서 중요했던 위아래·앞뒤는 잘 구분하지만, 덜 중요했던 좌우는 헷갈린다.",
          comic: [
            "1컷: 아이에게 '오른쪽/왼쪽 구분해봐' → 헷갈려 함",
            "2컷: 근데 위아래, 앞뒤는 척척 구분함",
            "3컷: 왜? 진화에서 '수직(중력)'과 '앞뒤(감각·먹이)'가 중요했음",
            "4컷: 좌우는 자연에서 덜 중요 → 그래서 덜 발달, 더 헷갈림"
          ],
          easy: "어린아이는 왼쪽/오른쪽은 헷갈려도 위/아래, 앞/뒤는 잘 구분해요. 이유는 진화예요. 중력(위아래)과 먹이·감각(앞뒤)은 생존에 중요했지만, 좌우는 별로 안 중요했거든요. 곰은 왼쪽에서 오든 오른쪽에서 오든 똑같이 위험하지만, 거꾸로 뒤집히면 얘기가 다르죠. 그래서 좌우 감각만 덜 발달했어요.",
          structure: {
            "도입": "아이는 좌우는 헷갈리지만 위아래·앞뒤는 쉽게 구분한다.",
            "전개": "3차원 중 진화에 강한 영향을 준 건 둘 — 수직(중력)·앞뒤(감각·먹이).",
            "근거": "이 둘은 위/아래 위험 탐색 등 생존과 직결.",
            "결론": "좌우 축은 자연에서 덜 중요 → 곰은 좌우 무관, 뒤집힘만 다름."
          },
          vocab: [
            { word: "puzzled", mean: "당황한", role: "좌우 구분 요청에 아이가 보이는 반응" },
            { word: "dimension", mean: "차원", role: "위아래·앞뒤·좌우의 3차원" },
            { word: "vertical", mean: "수직의", role: "중력으로 정의되는 중요한 차원" },
            { word: "perception", mean: "지각", role: "진화가 영향 준 대상(공간 지각)" },
            { word: "axis", mean: "축", role: "좌-우 '축'이 덜 중요하다는 핵심" },
            { word: "relevant", mean: "중요한, 관련 있는", role: "좌우가 자연에서 '덜 중요'함을 표현" }
          ],
          sentences: [
            { sent: "only two had a strong influence on our evolution: the vertical dimension and the front/back dimension", explain: "3차원 중 '오직 둘'만 진화에 강한 영향 — 수직(중력)·앞뒤(감각·먹이). 콜론 뒤가 그 둘의 설명." },
            { sent: "A bear is equally dangerous from its left or the right side, but not if it is upside down", explain: "곰은 좌/우 어느 쪽이든 똑같이 위험 / but not if upside down(거꾸로면 다름). 좌우는 안 중요, 상하는 중요함의 예시." }
          ],
          examPoints: "• 유형: 40번 '요약문 빈칸 2개' — (진화상 중요/덜 중요) 짝 채우기\n• 빈칸: vertical·front/back ↔ left-right 대비\n• 어휘: relevant(중요한) 의미 흔들기",
          review: "위아래·앞뒤는 진화에 중요 → 잘 구분 / 좌우는 덜 중요 → 헷갈림.",
          quiz: [
            { q: "아이가 쉽게 구분하는 방향은?", a: "위/아래, 앞/뒤" },
            { q: "좌우를 헷갈리는 이유는?", a: "좌우 축이 진화·생존에서 상대적으로 덜 중요했기 때문" }
          ]
        },
        {
          num: "41-42",
          topic: "사람마다의 개성을 알고 그에 맞춰 대하라 (장문 1지문 2문항)",
          summary: "창의적인 사람도 제각각이라, 개성을 파악해 한 사람 한 사람 맞춤으로 대해야 한다.",
          comic: [
            "1컷: 창의적인 사람들 = 다 똑같지 않음(성숙도·민감성 제각각)",
            "2컷: 관리의 핵심 = 각자의 고유한 개성을 아는 것",
            "3컷: 같은 말도 사람마다 다르게 받아들임 → 공감·적응 필요",
            "4컷: Vincent와 Emily는 같은 소식에 반응이 다름 → 맞춤 관리!"
          ],
          easy: "팀원이 다 똑같다고 생각하고 똑같이 대하면 실패해요. 어떤 사람은 직설적으로 말해도 괜찮고, 어떤 사람은 조심스럽게 말해야 하죠. 주말 근무를 부탁하거나 승진 미뤄진 소식을 전할 때, 그 사람의 성격·상황·기분을 고려해서 말하는 방식을 바꿔야 모두에게서 최고의 결과를 끌어낼 수 있어요.",
          structure: {
            "도입": "창의적인 사람들도 다 같은 부류가 아니다(성숙도·민감성·동기 제각각).",
            "전개": "관리=각자의 고유한 개성을 알고, 공감·적응으로 보조 맞추기.",
            "예시": "주말 근무 요청·승진 보류 전달 시 그 '개인'을 명심해야.",
            "결론": "개인적 연결·동감·개별화된 관리가 모두의 최고 성과를 끌어내는 핵심."
          },
          vocab: [
            { word: "cut from the same cloth", mean: "같은 부류인", role: "'창의적인 사람도 제각각'을 부정 표현으로" },
            { word: "maturity", mean: "성숙도", role: "사람마다 다른 차이의 예" },
            { word: "empathy", mean: "공감", role: "관리에 필요한 핵심 자질" },
            { word: "adaptability", mean: "적응성", role: "상대에 맞춰 조절하는 능력" },
            { word: "interpret", mean: "해석하다", role: "내 말이 어떻게 받아들여질지" },
            { word: "receptive", mean: "수용적인", role: "상대가 소식을 더 잘 받아들이는 상태" },
            { word: "bear in mind", mean: "명심하다", role: "'그 개인을 명심하라'는 핵심 동사구" }
          ],
          sentences: [
            { sent: "knowing how the things you do and say will be interpreted and adapting accordingly", explain: "동명사 두 개(knowing~ / adapting~)가 'about' 뒤에 병렬. '내 말·행동이 어떻게 해석될지 알고 그에 맞춰 조절하기'." },
            { sent: "Personal connection, compassion, and an individualized management style are key to drawing ... work out of everyone", explain: "주어 셋(개인적 연결·동감·개별화 관리) / 동사=are key to / ~ing=모두에게서 최고 성과를 끌어내는 핵심. 결론." }
          ],
          examPoints: "• 41번(제목): '개성을 알고 맞춤으로 대하라' 류\n• 42번(어휘): receptive/individualized 등 문맥상 적절성\n• 빈칸: 'individualized(개별화된)' 자리 주의",
          review: "사람은 다 다르다 — 개성·상황·기분을 읽고 한 명씩 맞춤으로!",
          quiz: [
            { q: "창의적인 사람들에 대한 핵심 전제는?", a: "다 같은 부류가 아니라 제각각(성숙도·민감성·동기 다름)" },
            { q: "모두의 최고 성과를 끌어내는 핵심 3가지는?", a: "개인적 연결, 동감(compassion), 개별화된 관리 방식" }
          ]
        }
      ]
    },
    /* ═══════════════════════════ 2023년 6월 ═══════════════════════════ */
    {
      id: "2306",
      name: "2023년 6월",
      passages: [
        {
          num: "21",
          topic: "현대 문명과 함께 사라지는 전통 (밑줄 함축의미형)",
          summary: "북미 토착 요리는 세계화로 변질됐고, 우리는 땅이 주는 것을 음미하는 규범을 아직 못 만들었다.",
          comic: [
            "1컷: 북미 토착 요리, 원주민처럼 거의 사라짐(추수감사절 칠면조만 남음)",
            "2컷: 지역 음식도 California 토마토·인도네시아 새우가 섞임",
            "3컷: 패스트푸드로 변질돼도 우리는 못 알아채고 못 막음",
            "4컷: 땅·기후가 준 걸 음미·소비하는 '전통 규범'이 아직 없음"
          ],
          easy: "옛날엔 그 지역 땅에서 난 재료로 그 지역만의 음식을 만들었어요. 그런데 지금은 캐롤라이나 바비큐에도 캘리포니아 토마토가, 루이지애나 검보에도 인도네시아 새우가 들어가요. 세계화로 음식이 뒤섞이고 패스트푸드로 변질돼도 우리는 알아채지도, 막지도 못해요. 가족 대대로 내려오는 '음미의 규범'이 아직 없다는 거죠.",
          structure: {
            "도입": "북미 토착 요리는 원주민처럼 불행한 운명(거의 소멸).",
            "전개": "지역 특색 음식도 외국·타지역 재료가 섞임.",
            "문제": "패스트푸드로 변질돼도 식별·저항 못 함.",
            "결론": "땅·기후가 준 것을 음미·소비하는 일반화된 규범을 아직 못 만듦."
          },
          vocab: [
            { word: "cuisine", mean: "요리(문화)", role: "사라진 토착 '요리 전통'" },
            { word: "relic", mean: "전해 내려오는 풍속, 유물", role: "겨우 남은 칠면조 같은 잔재" },
            { word: "discern", mean: "식별하다", role: "변질을 '알아채는' 능력(없음)" },
            { word: "corruption", mean: "붕괴, 변질", role: "패스트푸드화된 음식의 타락" },
            { word: "norm", mean: "규범", role: "아직 못 만든 '음미의 규범'" },
            { word: "savor", mean: "음미하다", role: "땅이 준 것을 누리는 태도" }
          ],
          sentences: [
            { sent: "we seem unable either to discern or resist the corruption", explain: "unable to A or B='A도 B도 못 한다'. discern(식별)·resist(저항) 둘 다 못 함. 변질을 못 막는다는 핵심." },
            { sent: "We have yet to come up with a strong set of generalized norms ... for savoring and sensibly consuming what our land and climate give us", explain: "have yet to=아직 ~하지 못했다. '땅·기후가 주는 것을 음미·현명히 소비하기 위한 규범을 아직 못 만들었다'. 결론." }
          ],
          examPoints: "• 유형: 21번 밑줄/함축의미 — '규범이 없다'는 의미 파악\n• 어휘: discern/savor/corruption 문맥\n• 주제: '세계화로 음식 전통 소멸'",
          review: "땅이 준 걸 음미하는 전통이 사라졌다 — 변질도 못 알아챈다.",
          quiz: [
            { q: "북미 토착 요리는 무엇과 같은 운명을 맞았나?", a: "원주민(native people)과 같은 불행한 운명(거의 소멸)" },
            { q: "우리가 아직 못 만든 것은?", a: "땅·기후가 준 것을 음미·소비하는 일반화된 규범" }
          ]
        },
        {
          num: "22",
          topic: "미래 직장에서 감성 지능(EI)의 가치는 더 높아진다",
          summary: "AI가 일자리를 대체할수록, AI가 못 따라하는 감성 지능의 가치는 오히려 커진다.",
          comic: [
            "1컷: 직장에 AI 등장 → EI(감성 지능)엔 좋은 징조?",
            "2컷: AI가 모든 수준의 일자리를 대체해감",
            "3컷: 사람 간 감정 메시지는 AI가 모방 못 함",
            "4컷: 그래서 EI 높은 사람에게 프리미엄이 붙음!"
          ],
          easy: "AI가 점점 사람 일을 대신하니까 '사람은 뭘로 먹고살지?' 걱정되죠. 그런데 역설적으로, AI가 절대 못 따라하는 게 있어요. 바로 사람끼리 주고받는 미묘한 감정이에요. 그래서 AI 시대가 깊어질수록 감정을 읽고 다루는 능력(EI)이 높은 사람의 몸값이 더 올라간다는 거예요.",
          structure: {
            "도입": "직장 내 AI 출현이 감성 지능(EI)엔 좋은 징조일 수 있다.",
            "전개": "AI가 모든 수준의 일자리를 대체 → EI 능력자에 프리미엄 전망.",
            "근거": "상호작용 중 감정 메시지는 AI 모방 능력을 한참 넘어선다.",
            "결론": "스마트 기기 시대일수록 감정 감지·관리가 AI를 당혹케 하는 지능으로 남음."
          },
          vocab: [
            { word: "advent", mean: "출현, 도래", role: "AI의 '등장'" },
            { word: "bode well for ~", mean: "~의 좋은 징조가 되다", role: "AI가 EI엔 호재라는 핵심" },
            { word: "momentum", mean: "추진력", role: "AI가 '탄력'을 받음" },
            { word: "premium", mean: "프리미엄, 우대", role: "EI 능력자에게 붙는 가치" },
            { word: "mimic", mean: "모방하다", role: "AI가 감정 메시지를 '못 따라함'" },
            { word: "puzzle", mean: "당혹하게 하다", role: "감정 지능이 AI를 '당황시킴'" }
          ],
          sentences: [
            { sent: "The emotional messages people send and respond to while interacting are ... far beyond the ability of AI programs to mimic", explain: "주어=감정 메시지, 동사=are, 보어=AI 모방 능력을 훨씬 넘어선(far beyond). 'AI가 못 따라한다'가 핵심." },
            { sent: "sensing and managing emotions will remain one type of intelligence that puzzles AI", explain: "동명사 주어(감정 감지·관리), 동사=will remain, that puzzles AI='AI를 당혹케 하는' 지능. 결론." }
          ],
          examPoints: "• 빈칸: 마지막 'puzzles AI' 또는 'premium' 자리\n• 주제·제목: 'AI 시대 EI의 가치 상승'\n• 어휘: bode well/mimic 흔들기",
          review: "AI가 일자리를 먹을수록, AI가 못 따라하는 '감정 능력' 값이 오른다.",
          quiz: [
            { q: "AI 출현이 EI에 '좋은 징조'인 이유는?", a: "AI가 사람 간 감정 메시지를 모방하지 못해 EI 능력자가 더 귀해지기 때문" },
            { q: "AI를 당혹케 하는 지능은?", a: "감정을 감지하고 관리하는 능력" }
          ]
        },
        {
          num: "23",
          topic: "교육과정 통합을 위한 공통 언어의 필요성",
          summary: "여러 과목에 같은 용어(공통 언어)를 쓰면 학생이 과목 간 연결을 보고 경계를 넘어 사고한다.",
          comic: [
            "1컷: 교육은 지식 나무의 '줄기'에 집중해야 함",
            "2컷: 가지·잎이 다 공통 핵심에서 나옴을 보여주기",
            "3컷: 핵심에서 '공통 언어'가 나와 분야 간 경험을 공유",
            "4컷: 글쓰기·그림에서 다 '추상'이라 부르면 → 학문 경계를 넘는 사고!"
          ],
          easy: "글쓰기 시간에 배운 '추상'과 미술 시간의 '추상'을 따로따로 배우면 연결이 안 돼요. 그런데 모든 수업에서 똑같이 '추상'이라는 단어를 쓰면, 학생은 '아, 이게 그거랑 같은 거구나!' 하고 과목들을 연결하기 시작해요. 공통 언어가 학문의 칸막이를 넘게 해주는 다리가 되는 거죠.",
          structure: {
            "도입": "교육은 지식 나무의 '줄기(공통 핵심)'에 집중해야 한다.",
            "전개": "사고 도구는 이 핵심에서 나와 분야 간 '공통 언어'를 제공.",
            "메커니즘": "교육과정 전반에 같은 용어 → 학생이 과목·수업을 연결.",
            "결론": "여러 수업에서 똑같이 'abstracting'이라 부르면 학문 경계를 넘어 사고."
          },
          vocab: [
            { word: "trunk", mean: "줄기", role: "교육이 집중할 지식의 '공통 핵심' 비유" },
            { word: "stem from ~", mean: "~에서 비롯되다", role: "사고 도구가 핵심에서 나옴" },
            { word: "practitioner", mean: "실무자", role: "공통 언어로 경험을 공유하는 사람들" },
            { word: "employ", mean: "사용하다", role: "같은 용어가 '사용'될 때" },
            { word: "abstracting", mean: "추상(하기)", role: "여러 수업에서 쓰는 공통 용어 예" },
            { word: "disciplinary boundaries", mean: "학문의 경계", role: "공통 언어로 넘어서는 대상" }
          ],
          sentences: [
            { sent: "Education must focus on the trunk of the tree of knowledge, revealing the ways in which the branches ... emerge from a common core", explain: "교육은 줄기에 집중해야 / revealing~=분사구문(밝히면서), in which=방식. 가지·잎이 공통 핵심에서 나옴을 보여주기." },
            { sent: "When the same terms are employed across the curriculum, students begin to link different subjects", explain: "When절(같은 용어가 교육과정 전반에 쓰일 때) + 주절(학생이 과목을 연결하기 시작). 공통 언어의 효과." }
          ],
          examPoints: "• 빈칸: 'common language' 또는 'disciplinary boundaries'\n• 주제·제목: '공통 언어 → 과목 통합'\n• 비유(tree/trunk/branches) 이해 묻는 문제",
          review: "모든 수업에서 같은 용어를 쓰면 과목의 칸막이를 넘는다.",
          quiz: [
            { q: "교육이 집중해야 할 '줄기'는 무엇의 비유?", a: "지식의 공통 핵심(common core)" },
            { q: "같은 용어를 여러 수업에 쓰면 생기는 효과는?", a: "학생이 과목·수업을 연결하고 학문 경계를 넘어 사고" }
          ]
        },
        {
          num: "24",
          topic: "계속 변화하는 언어의 특성",
          summary: "언어는 새 상황에 맞춰 끊임없이 변하며, 셰익스피어조차 지금 영어를 절반 정도밖에 못 알아들 것이다.",
          comic: [
            "1컷: 새 상황·생각·감정에 맞춰 새 단어가 계속 생김",
            "2컷: 옥스퍼드 사전도 새 단어 추가분을 계속 출판",
            "3컷: 어떤 이는 '올바른 영어에서 벗어났다'며 한탄",
            "4컷: 근데 셰익스피어는 지금 영어 45만 단어 중 25만만 알 것!"
          ],
          easy: "언어는 살아있어서 계속 변해요. 새로운 상황이 생기면 새 단어가 만들어지고 사전에도 추가되죠. 어떤 사람은 '요즘 영어는 엉망'이라며 싫어해요. 그런데 사실 영어 철자 규칙조차 18세기에야 정리됐고, 셰익스피어를 지금 데려오면 우리 말을 절반 정도밖에 못 알아들을 거예요. 변화는 자연스러운 거예요.",
          structure: {
            "도입": "새 상황·생각·감정에 맞춰 새 단어·표현이 계속 생긴다.",
            "전개": "옥스퍼드 사전도 새 단어 추가분을 출판.",
            "대조": "일부는 '올바른 영어에서 벗어났다'며 한탄하지만,",
            "결론": "철자 공식화도 18세기에야 시작 → 셰익스피어는 지금 영어를 절반쯤만 이해."
          },
          vocab: [
            { word: "emerge", mean: "생겨나다, 나타나다", role: "새 단어가 '계속' 생김" },
            { word: "supplement", mean: "추가분, 보충", role: "사전이 출판하는 새 단어 모음" },
            { word: "deplore", mean: "한탄하다", role: "변화를 싫어하는 사람들의 태도" },
            { word: "drift", mean: "벗어남, 표류", role: "'올바른 영어에서의 이탈'" },
            { word: "formalize", mean: "공식화하다", role: "철자·구두법 정리(18세기에야)" },
            { word: "unintelligible", mean: "이해하기 어려운", role: "셰익스피어에게 지금 영어가" }
          ],
          sentences: [
            { sent: "it was only in the eighteenth century that any attempt was made to formalize spelling", explain: "It was only ... that~ 강조구문. '영어 철자를 공식화하려는 시도는 18세기에야 비로소' 있었다는 뜻." },
            { sent: "The language we speak ... would be virtually unintelligible to Shakespeare, and so would his way of speaking to us", explain: "지금 우리 언어는 셰익스피어에게 거의 이해 불가 / and so would~=도치(그의 말투도 우리에게 마찬가지). 양방향." }
          ],
          examPoints: "• 빈칸: 'unintelligible' 또는 변화 관련 핵심어\n• 주제·제목: '언어는 끊임없이 변한다'\n• 강조구문 'It was ... that' 해석 묻기",
          review: "언어는 살아 변한다 — 셰익스피어도 지금 영어 절반만 알아들을 것.",
          quiz: [
            { q: "변화를 싫어하는 사람들은 그것을 무엇으로 보나?", a: "올바른 영어에서 벗어난 것(a drift)" },
            { q: "영어 철자·구두법 공식화는 언제 시작됐나?", a: "18세기에 이르러서야" }
          ]
        },
        {
          num: "29",
          topic: "자기 보고(self-report)의 왜곡 (어법형)",
          summary: "자기 보고는 유용하지만 '사회적 바람직성 편향' 같은 왜곡에 오염될 수 있다.",
          comic: [
            "1컷: 심리학자들이 '자기 보고' 데이터로 연구함",
            "2컷: 장점 — 사람은 자신을 24시간 관찰할 수 있음",
            "3컷: 하지만! 여러 왜곡에 오염될 수 있음",
            "4컷: 대표 왜곡 = 사회적으로 '좋아 보이는' 답을 하는 편향"
          ],
          easy: "설문조사로 '당신은 얼마나 친절한가요?' 물으면, 사람들은 자기를 잘 알아서 답할 수 있다는 장점이 있어요. 그런데 문제는, 사람들이 솔직한 답 대신 '사회적으로 좋아 보이는 답'을 고르는 경향이 있다는 거예요. 이걸 '사회적 바람직성 편향'이라고 해요. 그래서 자기 보고 데이터는 왜곡될 수 있어요.",
          structure: {
            "도입": "심리학자는 자기 보고 데이터(행동에 대한 구두 설명)로 자주 작업.",
            "전개": "장점 — 사람은 자신을 풀타임으로 관찰하는 유일한 기회를 가짐.",
            "반전": "그러나 여러 왜곡에 오염될 수 있음.",
            "결론": "가장 문제적 왜곡 = 사회적 바람직성 편향(좋아 보이는 답 경향)."
          },
          vocab: [
            { word: "self-report", mean: "자기 보고", role: "글의 핵심 데이터 유형" },
            { word: "questionnaire", mean: "설문지", role: "자기 보고를 측정하는 도구" },
            { word: "take advantage of ~", mean: "~을 이용하다", role: "자기 관찰 기회를 '활용'" },
            { word: "plague", mean: "오염시키다, 괴롭히다", role: "왜곡이 자기 보고를 '오염'시킴" },
            { word: "distortion", mean: "왜곡", role: "자기 보고의 약점(제목어)" },
            { word: "social desirability bias", mean: "사회적 바람직성 편향", role: "가장 문제적 왜곡" }
          ],
          sentences: [
            { sent: "self-reports can be plagued by several kinds of distortion", explain: "주어=self-reports, 동사=can be plagued(수동, 시달리다/오염되다), by 이하=여러 왜곡. 반전 신호." },
            { sent: "the social desirability bias, which is a tendency to give socially approved answers about oneself", explain: "사회적 바람직성 편향, which=계속적 용법으로 설명. '자신에 대해 사회적으로 승인된 답을 주는 경향'." }
          ],
          examPoints: "• 유형: 29번 어법 — made up of(분사구문), used to measure, which 등\n• 어휘: plague/distortion 의미\n• 빈칸 변형 시 'social desirability bias'",
          review: "자기 보고는 유용하지만 '좋아 보이려는 편향'에 오염될 수 있다.",
          quiz: [
            { q: "자기 보고의 장점은?", a: "사람이 자신을 풀타임으로 관찰할 유일한 기회를 활용함" },
            { q: "가장 문제적인 왜곡은?", a: "사회적 바람직성 편향(사회적으로 승인된 답을 주는 경향)" }
          ]
        },
        {
          num: "30",
          topic: "비관세 무역 조치의 역효과 (어휘형)",
          summary: "부유국이 만든 비관세 조치와 보조금은 가난한 나라의 수출을 차별적으로 가로막는다.",
          comic: [
            "1컷: 가난한 나라 부채는 줄였지만, 무역장벽은 여전",
            "2컷: 할당제·보조금·수출 제한 등 비관세 조치가 늘어남",
            "3컷: 가난한 나라는 그 까다로운 요건을 못 맞춤",
            "4컷: 부유국의 거대 농업 보조금 → 가난한 농민이 경쟁 불가"
          ],
          easy: "관세(수입품에 붙는 세금) 말고도 무역을 막는 방법이 많아요. 할당제, 보조금, 수출 제한 같은 거요. 문제는 이런 까다로운 규칙을 부유한 나라가 만들면, 가난한 나라는 그걸 지킬 자원이 없어서 수출을 못 해요. 게다가 부자 나라가 자국 농민에게 엄청난 보조금을 주면, 가난한 나라 농민은 가격 경쟁에서 이길 수가 없죠.",
          structure: {
            "도입": "부채 감축 합의는 있었지만 무역장벽 같은 과제는 남음.",
            "전개": "비관세 조치(할당제·보조금·수출 제한)가 점점 늘고, 무역과 무관한 이유로도 제정.",
            "문제": "요건을 못 맞추는 가난한 나라 수출에 '차별적' 효과.",
            "결론": "부유국의 거대 농업 보조금이 타국 농민의 경쟁을 매우 어렵게 만듦."
          },
          vocab: [
            { word: "nontariff", mean: "비관세의", role: "관세 외 무역 조치(핵심어)" },
            { word: "quota", mean: "할당제", role: "비관세 조치의 예" },
            { word: "subsidy", mean: "보조금", role: "부유국이 자국 농민에게 주는 것" },
            { word: "prevalent", mean: "널리 퍼진", role: "비관세 조치가 '점점 흔해짐'" },
            { word: "discriminatory", mean: "차별적인", role: "가난한 나라에 미치는 효과" },
            { word: "comply with ~", mean: "~을 준수하다", role: "요건을 '못 맞추는' 나라들" }
          ],
          sentences: [
            { sent: "they have a discriminatory effect on exports from countries that lack the resources to comply with requirements", explain: "주어=they(비관세 조치), 동사=have, a discriminatory effect on~='~에 차별적 효과'. that~=요건 준수 자원이 부족한 나라들." },
            { sent: "the huge subsidies that rich nations give to their farmers make it very difficult for farmers in the rest of the world to compete", explain: "주어=거대 보조금, 동사=make, it=가목적어, to compete=진목적어. '타국 농민이 경쟁하기 매우 어렵게 만든다'." }
          ],
          examPoints: "• 유형: 30번 어휘 — discriminatory/prevalent 등 반의어 함정\n• 빈칸: 'discriminatory effect'\n• 주제: '비관세 조치의 차별적 역효과'",
          review: "부자 나라의 보조금·규칙이 가난한 나라 수출을 차별적으로 막는다.",
          quiz: [
            { q: "비관세 조치의 예 세 가지는?", a: "할당제(quota), 보조금(subsidy), 수출 제한" },
            { q: "부유국의 거대 농업 보조금이 초래하는 결과는?", a: "타국 농민이 가격 경쟁에서 이기기 매우 어려워짐" }
          ]
        },
        {
          num: "31",
          topic: "올바른 정책: 환경보호와 기업이익은 함께 간다 (빈칸형)",
          summary: "포터는 더 엄격한 환경 규제가 오히려 더 많은 혁신과 기업 이익을 낳는다는 걸 발견했다.",
          comic: [
            "1컷: 포터 — 기업이 규제로부터 '이익'을 얻는 패턴 발견",
            "2컷: 더 엄격한 규제가 더 많은 혁신을 유발!",
            "3컷: 네덜란드 꽃 산업이 물·토양을 오염시킴",
            "4컷: 1991년 농약 절반 감축 정책 → (혁신으로 이어짐)"
          ],
          easy: "보통 '환경 규제 = 기업에 손해'라고 생각하죠. 그런데 경영학자 포터는 반대를 발견했어요. 규제가 엄격할수록 기업이 그걸 해결하려고 더 많이 혁신하고, 결국 이익도 본다는 거예요. 네덜란드 꽃 산업이 환경을 오염시키자 정부가 농약을 줄이라고 규제했고, 기업은 어쩔 수 없이 새 방법을 찾아내며 발전했어요.",
          structure: {
            "도입": "포터는 기업이 규제로부터 이익을 얻는 독특한 패턴을 발견.",
            "전개": "더 엄격한 규제가 느슨한 규제보다 더 많은 혁신을 유발.",
            "예시": "네덜란드 꽃 산업이 비료·농약으로 물·토양 오염.",
            "결론(전개)": "1991년 정부가 2000년까지 농약 절반 감축 정책 채택 → 혁신 유도."
          },
          vocab: [
            { word: "regulation", mean: "규제", role: "기업이 '이익'을 얻는 의외의 원천" },
            { word: "profit from ~", mean: "~로부터 이익을 얻다", role: "규제와 이익의 역설적 연결" },
            { word: "stricter", mean: "더 엄격한", role: "혁신을 더 유발하는 규제의 강도" },
            { word: "prompt", mean: "유발하다", role: "엄격한 규제가 혁신을 '촉발'" },
            { word: "contaminate", mean: "오염시키다", role: "꽃 산업이 물·토양을 오염" },
            { word: "adopt", mean: "채택하다", role: "정부가 농약 감축 정책을 '채택'" }
          ],
          sentences: [
            { sent: "the stricter regulations were prompting more innovation than the weaker ones", explain: "주어=더 엄격한 규제, 동사=were prompting(유발하고 있었다), than the weaker ones=느슨한 규제보다. 역설적 핵심." },
            { sent: "the companies producing Holland's world-renowned tulips ... were also contaminating the country's water and soil", explain: "주어=꽃 생산 회사들(producing~ 수식), 동사=were contaminating, 목적어=물·토양. 규제가 필요했던 배경." }
          ],
          examPoints: "• 유형: 31번 빈칸 — '엄격한 규제 → 혁신/이익' 논지 채우기\n• 어휘: prompt/profit from 흔들기\n• 주제·제목: '환경규제와 기업이익의 양립'",
          review: "엄격한 환경 규제가 오히려 혁신과 이익을 낳는다 (포터의 발견).",
          quiz: [
            { q: "포터가 발견한 역설적 패턴은?", a: "기업이 (엄격한) 규제로부터 오히려 이익을 얻고 더 혁신한다는 것" },
            { q: "네덜란드 정부가 1991년 채택한 정책은?", a: "2000년까지 농약 사용을 절반으로 줄이는 정책" }
          ]
        },
        {
          num: "32",
          topic: "결과보다 노력을 중시하는 본성 (빈칸형)",
          summary: "사람들은 결과의 양보다 '들인 시간·노력'에 더 민감해서, 오래 걸린 작업에 더 많이 지불한다.",
          comic: [
            "1컷: 빠르지만 숙련된 사람에게 더 내긴 아까움(노력이 안 보여서)",
            "2컷: 데이터 복구에 얼마 낼지 묻는 실험",
            "3컷: 복구량보다 '기술자가 일한 시간'에 더 민감!",
            "4컷: 몇 분이면 적게, 일주일 걸리면 훨씬 많이 지불"
          ],
          easy: "고장난 걸 5분 만에 뚝딱 고치는 전문가보다, 끙끙대며 일주일 걸린 사람에게 더 많이 주고 싶은 마음, 있죠? 실험에서도 사람들은 복구된 데이터의 '양'보다 기술자가 '일한 시간'에 더 민감했어요. 같은 결과라도 노력이 많이 보이면 더 후하게 값을 쳐주는 게 인간 본성이라는 거예요.",
          structure: {
            "도입": "빠르고 숙련된 사람에게 더 내긴 어렵다 — 노력이 덜 보여서.",
            "전개": "두 연구자의 데이터 복구 지불 실험.",
            "발견": "복구량보다 '기술자가 일한 시간'에 가장 민감.",
            "결론": "몇 분 걸리면 적게, 일주일 넘게 걸리면 훨씬 많이 지불."
          },
          vocab: [
            { word: "skilled", mean: "숙련된", role: "빠르지만 노력이 덜 보이는 사람" },
            { word: "data recovery", mean: "데이터 복구", role: "실험의 소재" },
            { word: "sensitive to ~", mean: "~에 민감한", role: "사람들이 '시간'에 가장 민감" },
            { word: "quantity", mean: "양", role: "복구된 데이터의 '양'(덜 중요)" },
            { word: "willingness to pay", mean: "지불 의사", role: "시간에 따라 변하는 값" },
            { word: "be willing to ~", mean: "기꺼이 ~하다", role: "오래 걸리면 더 낼 의향" }
          ],
          sentences: [
            { sent: "what they were most sensitive to was the number of hours the technician worked", explain: "what~=관계대명사절 주어(사람들이 가장 민감한 것), 동사=was, 보어=기술자가 일한 시간 수. '노력=시간'에 민감." },
            { sent: "when it took more than a week to recover the same amount of data, people were willing to pay much more", explain: "when절(같은 양인데 일주일 넘게 걸리면) + 주절(훨씬 더 낼 의향). it takes 시간 to~ 구문. 노력 중시." }
          ],
          examPoints: "• 유형: 32번 빈칸 — '노력(시간)을 결과보다 중시' 논지\n• 어휘: sensitive/willingness 흔들기\n• 실험 결과의 방향(시간↑→지불↑) 묻기",
          review: "결과의 양보다 '들인 시간·노력'에 더 후하게 값을 쳐준다.",
          quiz: [
            { q: "사람들이 지불에서 가장 민감하게 본 것은?", a: "기술자가 일한 시간(노력)" },
            { q: "같은 데이터 양이라도 더 많이 지불한 경우는?", a: "복구에 일주일 넘게 오래 걸렸을 때" }
          ]
        },
        {
          num: "33",
          topic: "마음의 폐쇄가 주는 위험 (빈칸형)",
          summary: "젊을 땐 열린 마음으로 배우지만, 나이 들며 몸처럼 마음도 굳어 새 생각을 막을 위험이 있다.",
          comic: [
            "1컷: 청소년기 — 위대한 책·작가에 푹 빠짐",
            "2컷: 영향에 열려 있어 그 생각이 마음 깊이 가라앉음",
            "3컷: 그 영향이 수십 년 뒤까지 사고에 남음(지성을 풍부히)",
            "4컷: 근데 몸이 굳듯 마음도 굳음 → 폐쇄의 위험!"
          ],
          easy: "어릴 땐 좋은 책이나 작가에게 푹 빠져서 그 생각을 쭉쭉 흡수해요. 마음이 열려 있으니까요. 그게 평생 내 사고의 일부가 되죠. 그런데 나이가 들면 몸이 뻣뻣해지듯 마음도 굳어요. 새로운 생각을 잘 안 받아들이게 되는 거예요. 이렇게 마음이 닫히는 게 바로 위험이라는 얘기예요.",
          structure: {
            "도입": "청소년기엔 위대한 책·작가의 영향을 깊이 받는다.",
            "전개": "열린 마음이라 그 생각이 평생 사고의 일부가 됨(지성을 풍부히).",
            "근거": "지성은 더 현명한 이들의 교훈을 흡수하는 능력에 달림.",
            "반전/결론": "그러나 몸이 굳듯 마음도 굳는다 → 폐쇄의 위험."
          },
          vocab: [
            { word: "adolescence", mean: "청소년기", role: "열린 마음으로 배우던 시기" },
            { word: "fall under the sway of ~", mean: "~의 영향을 받다", role: "책·작가에 빠짐" },
            { word: "entranced", mean: "매료된", role: "참신한 생각에 빠진 상태" },
            { word: "absorb", mean: "흡수하다", role: "교훈·생각을 받아들이는 능력" },
            { word: "enrich", mean: "풍부하게 하다", role: "영향이 정신 풍경을 풍부히" },
            { word: "tighten", mean: "굳다, 조이다", role: "몸처럼 마음도 '굳는다'(핵심 비유)" }
          ],
          sentences: [
            { sent: "these early encounters with exciting ideas sank deeply into our minds and became part of our own thought processes", explain: "주어=이른 만남들, 동사 둘(sank/became), '마음 깊이 가라앉아 우리 사고의 일부가 됨'. 열린 마음의 효과." },
            { sent: "Just as the body tightens with age, however, so does the mind", explain: "Just as A, so does B='A하듯 B도 그러하다'. 몸이 굳듯 마음도 굳는다. 반전·핵심 비유." }
          ],
          examPoints: "• 유형: 33번 빈칸 — '마음도 몸처럼 굳는다(폐쇄)' 논지\n• 어휘: tighten/absorb 흔들기\n• 'Just as ~ so does ~' 도치 해석",
          review: "몸이 굳듯 마음도 굳는다 — 닫힌 마음을 경계하라.",
          quiz: [
            { q: "청소년기 배움이 가능했던 이유는?", a: "영향에 열려 있어(open to influence) 생각을 깊이 흡수했기 때문" },
            { q: "이 글이 경고하는 위험은?", a: "나이 들며 몸처럼 마음도 굳어 닫히는 것" }
          ]
        },
        {
          num: "34",
          topic: "대중적 사고의 예외성 (빈칸형)",
          summary: "다수가 믿는다고 옳은 건 아니다 — 코페르니쿠스·리스터처럼 대중적 사고는 자주 틀렸다.",
          comic: [
            "1컷: 사람들은 대중적 사고에서 안전·안심을 찾음",
            "2컷: '많이 하니까 옳겠지, 좋은 생각이겠지'",
            "3컷: 꼭 그렇진 않음! 지구가 우주 중심이라 믿었지만…",
            "4컷: 코페르니쿠스·리스터가 그 통념을 뒤집음"
          ],
          easy: "사람들은 '많은 사람이 그렇게 하니까 맞겠지'라고 생각하며 안심해요. 그런데 역사를 보면 다수의 생각이 틀린 경우가 많았어요. 옛날엔 다들 지구가 우주 중심이라 믿었지만 코페르니쿠스가 틀렸다고 증명했고, 수술에 깨끗한 도구가 필요 없다고 믿던 시절 리스터가 소독으로 생명을 구했죠. 다수 = 정답은 아니에요.",
          structure: {
            "도입": "사람들은 대중적 사고에서 안전·안심을 찾는다.",
            "전개": "'많은 사람이 하면 옳고 좋은 생각'이라 여김.",
            "반박": "꼭 그렇진 않다(Not necessarily).",
            "결론": "지구중심설(↔코페르니쿠스), 비소독 수술(↔리스터) — 대중적 사고는 자주 틀림."
          },
          vocab: [
            { word: "popular thinking", mean: "대중적 사고", role: "글이 의심하는 대상" },
            { word: "figure", mean: "생각하다, 판단하다", role: "'많으면 옳다'고 여김" },
            { word: "represent", mean: "상징하다, 나타내다", role: "다수가 받아들이면 공정·평등을 상징?(의문)" },
            { word: "Not necessarily", mean: "꼭 그렇진 않다", role: "반박의 전환점" },
            { word: "revolve around ~", mean: "~의 주위를 돌다", role: "행성이 태양을 돈다(코페르니쿠스)" },
            { word: "antiseptic", mean: "소독의", role: "리스터가 도입한 생명 구한 관행" }
          ],
          sentences: [
            { sent: "if a lot of people are doing something, then it must be right", explain: "if절(많은 사람이 하면) + 주절(틀림없이 옳다 must be). 글이 의심하는 '대중적 사고'의 논리." },
            { sent: "Copernicus ... proved mathematically that the earth and the other planets ... revolved around the sun", explain: "주어=코페르니쿠스, 동사=proved, that절=지구·행성이 태양 주위를 돈다. 대중적 사고를 뒤집은 예." }
          ],
          examPoints: "• 유형: 34번 빈칸 — '다수≠정답' 논지\n• 어휘: Not necessarily 전환, represent 흔들기\n• 두 예시(코페르니쿠스·리스터)의 공통점 묻기",
          review: "다수가 믿어도 틀릴 수 있다 — 대중적 사고를 의심하라.",
          quiz: [
            { q: "사람들이 대중적 사고를 따르는 이유는?", a: "안전과 안심(safety and security)을 느끼려고" },
            { q: "대중적 사고가 틀렸던 두 예시는?", a: "지구중심설(코페르니쿠스), 비소독 수술(리스터)" }
          ]
        },
        {
          num: "35",
          topic: "공간 기억이 뛰어난 런던 택시 운전사 (무관한 문장형)",
          summary: "런던 택시 시험은 2만 개 거리를 외워야 할 만큼 어렵고, 그 결과 운전사의 뇌가 달라진다.",
          comic: [
            "1컷: 런던 택시 면허 전 'The Knowledge'라는 무서운 시험",
            "2컷: 2만 개 넘는 거리 구획을 통째로 암기!",
            "3컷: 2~3년 공부해도 합격률 50% 미만",
            "4컷: 그 결과 택시 운전사의 뇌가 일반인과 달라짐"
          ],
          easy: "런던에서 택시 기사가 되려면 'The Knowledge'라는 악명 높은 시험을 통과해야 해요. 2만 개가 넘는 거리를 다 외워야 하죠. 2~3년 공부해도 절반이 떨어질 만큼 어려워요. 놀라운 건, 이 엄청난 암기 훈련 때문에 택시 기사들의 뇌 구조가 실제로 일반인과 달라진다는 거예요.",
          structure: {
            "도입": "런던 택시 면허 전 'The Knowledge'라는 매우 어려운 시험.",
            "전개": "2만 개 이상 거리 암기 = 엄청난 기억 자원 필요.",
            "근거": "2~3년 공부해도 합격률 50% 미만.",
            "결론": "그 결과 택시 운전사의 뇌가 초인적 기억 노력을 반영해 달라짐."
          },
          vocab: [
            { word: "get licensed", mean: "면허를 얻다", role: "택시 운전 자격 취득" },
            { word: "intimidating", mean: "위협적인", role: "시험 이름이 주는 압박" },
            { word: "layout", mean: "구획, 배치", role: "암기 대상(2만 개 거리)" },
            { word: "feat", mean: "위업, 대단한 일", role: "그 암기 자체가 대단한 기술" },
            { word: "sign up for ~", mean: "~에 등록하다", role: "택시 훈련에 지원" },
            { word: "herculean", mean: "초인적인", role: "택시 기사의 기억 노력 묘사" }
          ],
          sentences: [
            { sent: "fewer than 50 percent of the people who sign up for taxi driver training pass the test", explain: "주어=절반 미만의 사람들(who~ 수식), 동사=pass. '훈련 등록자 중 절반도 합격 못 함'. 시험 난이도." },
            { sent: "the brains of London cabbies are different ... in ways that reflect their herculean memory efforts", explain: "주어=택시기사 뇌, 동사=are different, that reflect~='초인적 기억 노력을 반영하는' 방식으로. 결론." }
          ],
          examPoints: "• 유형: 35번 '무관한 문장' — 시험 난이도·뇌 변화와 안 맞는 문장이 답\n• 어휘: feat/herculean\n• 주제: '극한 암기 훈련 → 뇌 변화'",
          review: "런던 택시 시험은 2만 거리 암기 — 그 훈련이 뇌를 바꾼다.",
          quiz: [
            { q: "'The Knowledge' 시험은 무엇을 외워야 하나?", a: "런던의 2만 개 이상 거리의 구획" },
            { q: "이 훈련의 놀라운 결과는?", a: "택시 운전사의 뇌가 일반인과 다르게 변함" }
          ]
        },
        {
          num: "36",
          topic: "의도하지 않은 결과의 법칙 (순서 배열형)",
          summary: "정책은 노린 문제는 풀지만, 예상 못 한 다른 부작용(의도하지 않은 결과)을 낳는다.",
          comic: [
            "1컷: 정책 평가할 때 '이 문제만' 보고 다른 효과는 무시함",
            "2컷: 경제학자는 이를 '의도하지 않은 결과의 법칙'이라 부름",
            "3컷: 예 — 국내 철강 보호하려 수입 철강에 관세",
            "4컷: 철강 일자리는 지켜도, 자동차 노동자 일자리가 날아감!"
          ],
          easy: "정책을 만들 때 사람들은 '이 문제만 해결하면 돼'라고 생각하고 다른 영향은 잘 안 봐요. 그런데 경제학자들은 '의도하지 않은 결과의 법칙'을 경고해요. 예를 들어 국내 철강 회사를 보호하려고 수입 철강에 세금을 매기면, 철강 일자리는 지켜지지만 철강 값이 올라서 자동차 회사가 힘들어지고 자동차 노동자가 일자리를 잃을 수 있어요.",
          structure: {
            "도입": "사람들은 정책 평가 시 특정 문제 해결에만 집중, 다른 효과는 무시.",
            "전개": "경제학자는 이를 '의도하지 않은 결과의 법칙'이라 부름.",
            "예시": "국내 철강 보호 위해 수입 철강에 관세 부과.",
            "결론": "철강 일자리는 보호되지만, 자동차 노동자 일자리가 외국 경쟁에 밀려 사라짐."
          },
          vocab: [
            { word: "evaluate", mean: "평가하다", role: "정책을 '평가'할 때의 편향" },
            { word: "downplay", mean: "경시하다", role: "다른 효과를 무시·축소" },
            { word: "unintended consequences", mean: "의도하지 않은 결과", role: "글의 핵심 개념(제목)" },
            { word: "impose a tariff", mean: "관세를 부과하다", role: "철강 보호 정책의 수단" },
            { word: "domestic", mean: "국내의", role: "보호하려는 국내 철강 노동자" },
            { word: "competition", mean: "경쟁", role: "외국 경쟁에 밀려 일자리 상실" }
          ],
          sentences: [
            { sent: "people tend to concentrate on how the policy will fix some particular problem while ignoring other effects", explain: "사람들은 ~에 집중하는 경향(concentrate on) / how절=특정 문제를 어떻게 풀지 / while ignoring~=다른 효과는 무시하면서. 편향 묘사." },
            { sent: "an unintended consequence is that the jobs of some autoworkers will be lost to foreign competition", explain: "주어=의도치 않은 결과, 동사=is, that절=자동차 노동자 일자리가 외국 경쟁에 밀려 사라짐. 부작용 예시." }
          ],
          examPoints: "• 유형: 36번 순서 — 개념 정의 → 'For instance' 철강 예시 → 부작용(Why?) 흐름\n• 빈칸: 'unintended consequences'\n• 'For instance/Why?' 같은 연결어가 순서 단서",
          review: "정책은 노린 문제는 풀어도, 예상 못 한 부작용을 낳는다.",
          quiz: [
            { q: "'의도하지 않은 결과의 법칙'이란?", a: "정책이 특정 문제는 풀지만 예상 못 한 다른 부작용을 낳는 것" },
            { q: "수입 철강 관세의 부작용 예는?", a: "철강 일자리는 지켜도 자동차 노동자 일자리가 사라짐" }
          ]
        },
        {
          num: "37",
          topic: "기후변화로 인한 생물종의 멸종 위기 (순서 배열형)",
          summary: "한 지역에만 사는 토착종은 멸종에 매우 취약하며, 황금 두꺼비가 기후변화로 사라진 대표 예다.",
          comic: [
            "1컷: 한 지역에만 사는 종 = '토착종', 멸종에 특히 취약",
            "2컷: 섬·열대우림처럼 작고 독특한 곳에 삶",
            "3컷: 예 — 코스타리카 산악 우림의 황금 두꺼비",
            "4컷: 보호구역에 살았는데도 1989년쯤 멸종(서식지 습기 변화)"
          ],
          easy: "딱 한 지역에만 사는 생물을 '토착종'이라고 해요. 사는 곳이 좁아서 환경이 조금만 변해도 멸종하기 쉬워요. 코스타리카 산속 열대우림에만 살던 황금 두꺼비가 대표적인데, 잘 보호된 구역에 살았는데도 1989년쯤 사라졌어요. 그 우림을 적셔주던 습기가 기후변화로 변했기 때문이에요.",
          structure: {
            "도입": "한 지역에만 사는 종=토착종, 멸종에 특히 취약.",
            "전개": "섬·열대우림 등 작고 독특한 지역에 특화되어 삶.",
            "예시": "코스타리카 산악 우림의 황금 두꺼비.",
            "결론": "보호구역에 살았어도 1989년쯤 멸종 — 서식지 습기(기후) 변화."
          },
          vocab: [
            { word: "endemic species", mean: "토착종", role: "한 지역에만 사는 취약한 종" },
            { word: "vulnerable to ~", mean: "~에 취약한", role: "토착종이 멸종에 '취약'" },
            { word: "extinction", mean: "멸종", role: "토착종이 직면한 위험" },
            { word: "specialized", mean: "특화된", role: "열대우림 종들이 환경에 '특화'됨" },
            { word: "habitat", mean: "서식지", role: "두꺼비의 우림 서식지" },
            { word: "moisture", mean: "습기", role: "서식지를 떠받치던 요소(변화로 멸종)" }
          ],
          sentences: [
            { sent: "Species that are found in only one area are called endemic species and are especially vulnerable to extinction", explain: "주어=한 지역에만 발견되는 종, 동사 둘(are called/are vulnerable). '토착종은 멸종에 특히 취약'. 도입 핵심." },
            { sent: "Despite living in the country's well-protected ... Reserve, by 1989, the golden toad had apparently become extinct", explain: "Despite+동명사(보호구역에 살았음에도) / had become extinct(과거완료, 멸종했었다). 보호에도 멸종한 반전." }
          ],
          examPoints: "• 유형: 37번 순서 — 정의 → 'One example' 두꺼비 → 'Despite~by 1989' 멸종 흐름\n• 어휘: endemic/vulnerable\n• 'One example/Despite'가 순서 단서",
          review: "한 지역에만 사는 토착종은 멸종에 취약 — 황금 두꺼비가 그 예.",
          quiz: [
            { q: "'토착종(endemic species)'이란?", a: "오직 한 지역에서만 발견되는 종(멸종에 취약)" },
            { q: "황금 두꺼비가 멸종한 핵심 원인은?", a: "서식지 우림을 떠받치던 습기(기후) 변화" }
          ]
        },
        {
          num: "38",
          topic: "실험에서 조작과 통제의 중요성 (문장 삽입형)",
          summary: "실험의 본질은 변인을 조작하고 나머지를 통제하는 것 — 현실은 변인이 얽혀 있어 통제가 필수다.",
          comic: [
            "1컷: 실험의 본질 = 조작(manipulation)과 통제(control)",
            "2컷: 관심 변인 하나를 바꿔보고 차이를 확인",
            "3컷: 동시에 다른 모든 변인의 영향을 통제",
            "4컷: 현실은 변인이 얽힘(비타민 먹는 사람=식습관도 다름)→통제 필요"
          ],
          easy: "과학 실험의 핵심은 두 가지예요. 하나는 궁금한 요소 하나만 바꿔보는 '조작', 다른 하나는 나머지 요소들을 똑같이 묶어두는 '통제'예요. 왜 통제가 중요할까요? 현실에선 여러 요소가 엉켜 있거든요. 예를 들어 비타민 먹는 사람은 운동·식습관도 다른 경우가 많아서, 통제 없이는 진짜 원인을 알 수 없어요.",
          structure: {
            "도입": "실험 방법의 본질 = 조작과 통제.",
            "전개": "관심 변인을 조작해 차이를 보고, 동시에 다른 변인을 통제.",
            "강조": "근본 원인 규명에서 통제된 실험의 중요성은 아무리 강조해도 지나치지 않음.",
            "근거": "현실에선 변인이 얽힘(비타민 복용자=식습관·운동도 다름)."
          },
          vocab: [
            { word: "manipulation", mean: "조작", role: "실험의 본질 한 축" },
            { word: "variable", mean: "변인", role: "조작·통제의 대상" },
            { word: "cannot be overstated", mean: "아무리 강조해도 지나치지 않다", role: "통제 실험의 중요성 강조" },
            { word: "underlying", mean: "근본적인", role: "통제로 밝히려는 '근본 원인'" },
            { word: "correlated", mean: "상관관계가 있는", role: "현실 변인들이 '얽혀' 있음" },
            { word: "control for ~", mean: "~을 통제하다", role: "다른 변인의 영향을 차단" }
          ],
          sentences: [
            { sent: "The importance of controlled experiments in identifying the underlying causes ... cannot be overstated", explain: "주어=통제된 실험의 중요성, 동사=cannot be overstated(아무리 강조해도 지나치지 않다). 통제의 가치 강조." },
            { sent: "people who take vitamin supplements may have different eating and exercise habits than people who don't", explain: "비타민 복용자는 / 비복용자와 식습관·운동이 다를 수 있다. '변인이 얽혀 있다'는 현실 예시(통제 필요 이유)." }
          ],
          examPoints: "• 유형: 38번 문장 삽입 — 조작/통제 정의 → 통제 중요성 → 'For example' 비타민 예시 연결\n• 어휘: manipulation/control for\n• 'In the real world/For example' 지시 연결이 삽입 단서",
          review: "실험=조작+통제. 현실은 변인이 얽혀 있어 통제가 필수다.",
          quiz: [
            { q: "실험 방법의 두 가지 본질은?", a: "조작(manipulation)과 통제(control)" },
            { q: "통제가 필요한 이유(현실 예)는?", a: "변인들이 얽혀 있어서(예: 비타민 복용자는 식습관·운동도 다름)" }
          ]
        },
        {
          num: "39",
          topic: "식품의 색깔과 건강의 상관관계 (문장 삽입형)",
          summary: "지중해 사람들이 건강한 이유 중 하나는 다양한 '색깔'의 식품(파이토케미컬)을 먹기 때문이다.",
          comic: [
            "1컷: 지중해 사람들은 왜 오래 살고 병이 적을까?",
            "2컷: 그들의 식단 = 과일·생선·채소·통곡물·견과류·올리브유",
            "3컷: 핵심은 '다양한 색깔'을 먹는 것!",
            "4컷: 색깔마다 다른 파이토케미컬(식물 화학물질)의 이점"
          ],
          easy: "지중해 사람들이 건강한 비결을 연구했더니, '무지개처럼 다양한 색깔'의 음식을 먹는 게 중요했어요. 빨강·초록·노랑 채소와 과일에는 각각 다른 몸에 좋은 식물 화학물질(파이토케미컬)이 들어 있거든요. 그래서 한 가지 색만 먹기보다 여러 색을 골고루 먹는 게 건강에 좋다는 거예요.",
          structure: {
            "도입": "지중해 사람들은 왜 더 오래 살고 병이 적을까?",
            "전개": "식단=신선한 과일·생선·채소·통곡물·견과류·적포도주·올리브유.",
            "핵심": "건강한 이유 하나 = 다양한 '색깔(palette of colors)'을 먹음.",
            "근거": "각 색의 파이토케미컬(식물 화학물질)의 이점을 보여주는 연구 증가."
          },
          vocab: [
            { word: "incidence", mean: "발생률", role: "질병 '발생률'이 낮음" },
            { word: "palette of colors", mean: "다양한 색깔", role: "건강 비결의 핵심 표현" },
            { word: "surface", mean: "표면화되다", role: "관련 연구가 '드러나고' 있음" },
            { word: "phytochemical", mean: "식물 화학물질", role: "색깔 식품의 건강 성분" },
            { word: "non-nutritive", mean: "비영양의", role: "파이토케미컬의 성격(영양소는 아니나 유익)" },
            { word: "be lacking ~", mean: "~이 부족하다", role: "특정 색을 피하면 그 성분 부족" }
          ],
          sentences: [
            { sent: "One reason is that they are eating a palette of colors", explain: "주어=One reason, 동사=is, that절=그들이 다양한 색을 먹고 있다는 것. 건강의 핵심 이유." },
            { sent: "if you avoid green-colored foods, you may be lacking chlorophyll", explain: "if절(초록 음식을 피하면) + 주절(엽록소가 부족할 수 있다). '색깔별 성분'의 구체 예." }
          ],
          examPoints: "• 유형: 39번 문장 삽입 — 질문 → 식단 나열 → '색깔' 핵심 → 'Similarly' 색별 예시\n• 어휘: incidence/palette\n• 'Similarly/One reason' 연결이 삽입 단서",
          review: "건강 비결은 '무지개 색' 식단 — 색마다 다른 파이토케미컬.",
          quiz: [
            { q: "지중해 식단이 건강한 핵심 이유는?", a: "다양한 색깔(palette of colors)의 식품을 먹기 때문" },
            { q: "색깔 식품에 든 건강 성분의 이름은?", a: "파이토케미컬(phytochemicals, 식물 화학물질)" }
          ]
        },
        {
          num: "40",
          topic: "행동이 생각의 원인이 될 수 있다 (요약문형)",
          summary: "생각이 행동을 낳을 뿐 아니라, 행동을 시키면 그에 맞는 생각이 거꾸로 생겨난다.",
          comic: [
            "1컷: 동의하면 고개를 끄덕임(생각→행동)",
            "2컷: '고유 수용 심리학'에 따르면 거꾸로도 작동!",
            "3컷: 특정 행동을 시키면 → 그에 맞는 생각이 생김",
            "4컷: 화면 속 제품을 보게 한 실험으로 입증됨"
          ],
          easy: "보통 '동의하니까 고개를 끄덕인다'고 생각하죠(생각→행동). 그런데 반대도 성립해요. 사람을 일부러 고개 끄덕이게 만들면, 그 사람이 실제로 더 동의하는 생각을 갖게 돼요(행동→생각). 처음엔 논란이었지만, 화면 속 제품을 보게 한 실험으로 증명됐어요. 몸을 움직이면 마음도 따라온다는 거죠.",
          structure: {
            "도입": "특정 생각을 하면 예측 가능하게 행동한다(동의→끄덕임).",
            "전환": "'고유 수용 심리학'에 따르면 이 과정은 역으로도 작동.",
            "주장": "특정 방식으로 행동시키면 그에 맞는 생각을 갖게 한다.",
            "근거": "처음엔 논란이었으나 설득력 있는 실험(화면 속 제품 응시)으로 뒷받침."
          },
          vocab: [
            { word: "predictable", mean: "예측 가능한", role: "생각에 따른 행동의 규칙성" },
            { word: "nod", mean: "(고개를) 끄덕이다", role: "생각→행동의 대표 예" },
            { word: "in reverse", mean: "역으로", role: "행동→생각으로 거꾸로 작동" },
            { word: "controversial", mean: "논란의 여지가 있는", role: "처음 이 아이디어의 위상" },
            { word: "compelling", mean: "설득력 있는", role: "주장을 뒷받침한 실험" },
            { word: "fixate on ~", mean: "~에 고정/응시하다", role: "실험에서 참가자가 한 행동" }
          ],
          sentences: [
            { sent: "Get people to behave in a certain way and you cause them to have certain thoughts", explain: "명령문+and 구조='~하면 …하게 된다'. '특정 행동을 시키면 특정 생각을 갖게 한다'. 핵심 주장(행동→생각)." },
            { sent: "the process also works in reverse", explain: "주어=the process(생각→행동 과정), 동사=works, in reverse=역으로도. 글의 전환점." }
          ],
          examPoints: "• 유형: 40번 요약문 빈칸 2개 — (행동/생각, 원인/결과 역전) 짝 채우기\n• 어휘: in reverse/compelling\n• '생각→행동'과 '행동→생각'의 방향 구분이 핵심",
          review: "몸을 움직이면 마음도 따라온다 — 행동이 생각의 원인이 될 수 있다.",
          quiz: [
            { q: "'고유 수용 심리학'의 핵심 주장은?", a: "행동이 거꾸로 생각의 원인이 될 수 있다는 것" },
            { q: "이 주장을 뒷받침한 것은?", a: "화면 속 제품을 응시하게 한 설득력 있는 실험" }
          ]
        },
        {
          num: "41-42",
          topic: "더 독특한 사건일수록 더 생생히 기억된다 (장문 1지문 2문항)",
          summary: "평범하지 않은 사건은 경쟁자가 없어 잘 기억되지만, 일상적 일은 비슷한 기억끼리 뭉쳐 흐릿해진다.",
          comic: [
            "1컷: 평범하지 않은 사건은 더 잘 기억됨",
            "2컷: 왜? 뇌가 꺼낼 때 '경쟁하는' 비슷한 기억이 없어서",
            "3컷: 2주 전 목요일 아침에 뭐 먹었지? → 기억 안 남",
            "4컷: 특별할 게 없어서 모든 아침 기억이 하나로 뭉쳐버림"
          ],
          easy: "특별한 일은 또렷이 기억나죠. 첫 해외여행 같은 거요. 이유는 그것과 비슷한 기억이 없어서 뇌가 헷갈리지 않기 때문이에요. 반대로 '2주 전 목요일 아침에 뭐 먹었지?'는 잘 기억 안 나요. 그날이 특별하지 않아서, 비슷비슷한 아침 식사 기억들이 다 뭉쳐 '그냥 아침밥'이라는 흐릿한 인상이 돼버리거든요.",
          structure: {
            "도입": "평범하지 않은 사건·경험은 더 잘 기억된다.",
            "이유": "뇌가 그것을 꺼낼 때 경쟁하는 비슷한 기억이 없어서.",
            "대조": "2주 전 목요일 아침처럼 특별할 것 없는 일은 기억하기 어려움.",
            "결론": "비슷한 일상 기억들이 합쳐져 '일반적 인상' 하나로 뭉쳐버림."
          },
          vocab: [
            { word: "out of ordinary", mean: "평범하지 않은", role: "잘 기억되는 사건의 특징" },
            { word: "compete with ~", mean: "~와 경쟁하다", role: "기억끼리 '경쟁'이 없을 때 또렷" },
            { word: "storehouse", mean: "창고", role: "기억이 저장된 '창고' 비유" },
            { word: "generic", mean: "일반적인, 포괄적인", role: "뭉쳐진 '일반적' 인상" },
            { word: "impression", mean: "인상", role: "흐릿해진 일상 기억의 형태" },
            { word: "merge", mean: "합치다, 병합하다", role: "비슷한 기억들이 '합쳐짐'" }
          ],
          sentences: [
            { sent: "Events ... that are out of ordinary tend to be remembered better because there is nothing competing with them", explain: "주어=평범하지 않은 사건, 동사=tend to be remembered better, because~=경쟁하는 게 없어서. 핵심 원리." },
            { sent: "all your breakfast memories combine together into a sort of generic impression of a breakfast", explain: "주어=모든 아침 식사 기억, 동사=combine together, into~=일종의 일반적 인상으로. 일상 기억이 흐릿해지는 이유." }
          ],
          examPoints: "• 41번(제목): '독특한 사건일수록 생생히 기억' 류\n• 42번(어휘): generic/compete/merge 문맥 적절성\n• 빈칸: 'nothing competing' 또는 'generic impression'",
          review: "독특한 일=경쟁 기억 없어 또렷 / 일상=비슷한 기억끼리 뭉쳐 흐릿.",
          quiz: [
            { q: "독특한 사건이 잘 기억되는 이유는?", a: "뇌가 꺼낼 때 경쟁하는 비슷한 기억이 없어서" },
            { q: "평범한 아침 식사가 기억 안 나는 이유는?", a: "특별할 게 없어 비슷한 기억끼리 하나의 일반적 인상으로 뭉쳐서" }
          ]
        }
      ]
    }
  ]
};
