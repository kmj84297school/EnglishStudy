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
     /* ═══════════════════════════ 2023년 9월 ═══════════════════════════ */
    {
      id: "2309",
      name: "2023년 9월",
      passages: [
        {
          num: "21",
          topic: "숲에서 균류의 역할 — 다양성이 곧 안전이다",
          summary: "균류는 나무보다 멀리 내다봐서, 한 종이 독점하기보다 다양한 종이 공존하는 숲을 돕는다.",
          comic: [
            "1컷: 나무들끼리 '내 종이 최고' 하며 경쟁",
            "2컷: 너도밤나무가 숲을 독점한다고 상상 → 이게 정말 좋을까?",
            "3컷: 새 병원균이 와서 너도밤나무만 싹 죽이면? → 숲 전멸 위기!",
            "4컷: 균류는 안정을 원해서 다양한 종을 지원 → 다양성=안전"
          ],
          easy: "나무들은 자기 종만 퍼뜨리려고 경쟁해요. 그런데 만약 한 종(너도밤나무)이 숲을 독차지했는데, 그 종만 노리는 병이 돌면 숲 전체가 한 방에 무너져요. 균류는 이걸 미리 내다봐요. 안정적인 환경에서 살고 싶으니까, 참나무·단풍나무 같은 여러 종이 함께 자라도록 도와줘요. 다양해야 위기에 강하다는 거죠.",
          structure: {
            "도입": "균류는 더 큰 상대(나무)보다 조금 더 앞서 '생각'한다.",
            "전개": "나무는 종끼리 경쟁 — 한 종이 숲을 독점한다고 가정해보자.",
            "반전": "새 병원균이 그 종만 죽이면? 다양한 종이 있어야 더 유리.",
            "결론": "다양성은 오래된 숲에 안전을 주고, 균류는 안정을 위해 여러 종을 지원."
          },
          vocab: [
            { word: "fungi", mean: "균류 (fungus의 복수)", role: "글의 주인공, 멀리 내다보는 존재" },
            { word: "emerge victorious", mean: "승리하다, 우세하게 나타나다", role: "한 종이 숲을 독점하는 상황" },
            { word: "pathogen", mean: "병원균", role: "단일 종 숲을 위협하는 변수" },
            { word: "advantageous", mean: "유리한", role: "다양성이 주는 이점" },
            { word: "diversity", mean: "다양성", role: "숲의 안전을 보장하는 핵심어" },
            { word: "dependent on ~", mean: "~에 의존하는", role: "균류가 안정적 조건에 의존함" }
          ],
          sentences: [
            { sent: "wouldn't it be more advantageous if there were a certain number of other species around", explain: "가정법(if there were~). '주변에 다른 종이 일정 수 있다면 더 유리하지 않을까?' 다양성의 이점을 반문으로 강조." },
            { sent: "Because fungi are also very dependent on stable conditions, they support other species", explain: "Because절(균류는 안정적 조건에 의존하기에) + 주절(다른 종을 지원한다). 균류가 다양성을 돕는 이유." }
          ],
          examPoints: "• 주제·제목: '다양성 = 숲의 안전'\n• 빈칸: 마지막 'diversity/security' 자리\n• 가정법 반문(wouldn't it be~)의 의도 파악",
          review: "한 종이 독점하면 위험 — 다양성이 숲을 지킨다.",
          quiz: [
            { q: "한 종(너도밤나무)이 숲을 독점하면 위험한 이유는?", a: "그 종만 노리는 병원균이 오면 숲 전체가 무너질 수 있어서" },
            { q: "균류가 다양한 종을 지원하는 이유는?", a: "균류 자신이 안정적인 환경에 의존하기 때문" }
          ]
        },
        {
          num: "22",
          topic: "낙관적 상상은 소망 실현의 동력을 약화시킨다",
          summary: "긍정적 상상은 긴장을 풀어주지만, 목표를 이루려면 오히려 긴장과 동기가 필요하다.",
          comic: [
            "1컷: 긍정적 상상 → 몸이 편안해짐(검사로도 확인됨)",
            "2컷: 긴장 풀고 싶을 때: 심호흡·마사지·산책·좋은 미래 상상",
            "3컷: 근데 '소망을 진짜 이루고 싶을 때'는?",
            "4컷: 가장 피해야 할 게 '편안함' → 활력·동기가 필요!"
          ],
          easy: "기분 좋은 상상을 하면 몸이 편안해져요. 긴장을 풀고 싶을 땐 좋죠. 그런데 다이어트나 취업 같은 목표를 진짜 이루려면? 편안하면 안 돼요. 소파에서 일어나 움직이려면 활력과 동기가 필요하거든요. 그래서 낙관적 상상은 역설적으로 소망 실현에 필요한 '추진력'을 빼앗아 갈 수 있어요.",
          structure: {
            "도입": "긍정적 상상은 생리 검사에 나타날 만큼 우리를 편안하게 한다.",
            "전개": "긴장 풀고 싶으면 심호흡·마사지, 또는 미래 상상도 방법.",
            "전환": "하지만 목표가 '소망 실현'이라면?",
            "결론": "가장 피해야 할 건 편안함 — 활력·동기를 갖춰 장애물에도 전념해야."
          },
          vocab: [
            { word: "positive fantasies", mean: "긍정적 상상", role: "편안함을 주지만 동력은 뺏는 양면" },
            { word: "to such an extent that", mean: "~할 정도로", role: "상상이 몸을 이완시키는 정도 강조" },
            { word: "unwind", mean: "긴장을 풀다", role: "상상의 이완 효과" },
            { word: "energized", mean: "활력을 얻은", role: "소망 실현에 필요한 상태" },
            { word: "motivated", mean: "동기가 부여된", role: "장애물에도 전념하게 하는 힘" },
            { word: "inevitable obstacle", mean: "피할 수 없는 장애물", role: "목표 추구 중 만나는 난관" }
          ],
          sentences: [
            { sent: "The last thing you want to be is relaxed", explain: "The last thing=가장 피하고 싶은 것. '가장 피해야 할 상태는 긴장이 풀린 것'. 직역하면 오해하기 쉬운 핵심 문장." },
            { sent: "you want to be motivated enough to stay engaged even when the inevitable obstacles or challenges arise", explain: "충분히 동기부여돼야(motivated enough) / 장애물이 생겨도 전념하도록(to stay engaged). 소망 실현엔 동기가 필수." }
          ],
          examPoints: "• 빈칸: 'relaxed' 또는 'energized/motivated' 자리\n• 어휘: relaxed ↔ energized 대조 흔들기\n• 'The last thing ~ is' 역설 해석 주의",
          review: "편안한 상상으론 소망을 못 이룬다 — 활력과 동기가 필요!",
          quiz: [
            { q: "긍정적 상상의 효과는?", a: "몸을 편안하게(이완) 만든다" },
            { q: "소망을 실현하려 할 때 가장 피해야 할 상태는?", a: "긴장이 풀려 편안한(relaxed) 상태" }
          ]
        },
        {
          num: "23",
          topic: "요리 감소가 가져온 현대생활의 변화",
          summary: "요리를 기업에 맡기게 되면서 여성이 부담에서 벗어나고 가정 내 갈등도 줄어드는 긍정적 변화가 있었다.",
          comic: [
            "1컷: 요리는 인간 정체성·문화에 매우 중요(인류학자 주장)",
            "2컷: 그럼 요리가 줄면 부작용만 있을까? → 전혀 아님!",
            "3컷: 요리를 기업에 아웃소싱 → 여성이 '전담 책임'에서 해방",
            "4컷: 집 밖 일·커리어 가능 + 성역할 갈등도 줄어듦"
          ],
          easy: "요리가 인간에게 정말 중요하다면, 요리가 줄어든 현대엔 나쁜 일만 생겼을까요? 아니에요. 요리를 식품 회사에 맡기게 되면서, 전통적으로 '여자가 가족을 먹여야 한다'는 부담에서 여성이 벗어났어요. 덕분에 집 밖에서 일하고 커리어도 가질 수 있게 됐고, 성역할이 바뀌며 생길 뻔한 가정 갈등도 미리 막았죠.",
          structure: {
            "도입": "요리가 인간 정체성·문화에 중요하다면, 요리 감소는 심각한 결과를 낳을 것.",
            "전환": "그 결과가 다 나쁜가? → 전혀 아니다.",
            "전개": "요리의 기업 아웃소싱 → 여성을 '전담 책임'에서 해방.",
            "결론": "집 밖 일·커리어 가능, 성역할 변화로 생길 가정 갈등도 막음."
          },
          vocab: [
            { word: "stands to reason", mean: "이치에 맞다, 당연하다", role: "요리 감소가 결과를 낳음이 당연하다는 도입" },
            { word: "consequence", mean: "결과", role: "요리 감소가 현대생활에 미친 영향" },
            { word: "outsourcing", mean: "아웃소싱(외부 위탁)", role: "요리를 기업에 맡기는 핵심 변화" },
            { word: "relieve A of B", mean: "A를 B에서 벗어나게 하다", role: "여성을 책임에서 해방시킴" },
            { word: "exclusive responsibility", mean: "전담(한정된) 책임", role: "여성에게 지워졌던 요리 부담" },
            { word: "head off", mean: "막아내다, 방지하다", role: "가정 내 갈등을 미리 막음" }
          ],
          sentences: [
            { sent: "The outsourcing of much of the work of cooking to corporations has relieved women of ... their exclusive responsibility for feeding the family", explain: "주어=요리의 아웃소싱, 동사=has relieved A of B(A를 B에서 해방). 여성을 가족 먹이는 전담 책임에서 벗어나게 함." },
            { sent: "It has headed off many of the domestic conflicts that such a large shift in gender roles ... was bound to spark", explain: "It(아웃소싱)=주어, headed off=막아냈다, that~=성역할 변화가 촉발할 뻔한 갈등. be bound to=~하게 되어 있다." }
          ],
          examPoints: "• 주제·제목: '요리 감소의 긍정적 측면'\n• 빈칸: 'relieved/headed off' 동사 방향\n• 'Are they all bad? Not at all' 전환 포착",
          review: "요리를 기업에 맡기며 여성이 부담에서 해방되고 갈등도 줄었다.",
          quiz: [
            { q: "요리의 아웃소싱이 여성에게 준 변화는?", a: "가족을 먹이는 전담 책임에서 벗어나 집 밖 일·커리어가 가능해짐" },
            { q: "그 변화가 막아준 것은?", a: "성역할 변화가 촉발했을 가정 내 갈등" }
          ]
        },
        {
          num: "24",
          topic: "구매 활동은 기업에 정치·사회적 영향을 줄 수 있다",
          summary: "무엇을 어떻게 사는지가 곧 투표 — 소비자는 지갑으로 기업의 행동을 바꿀 수 있다.",
          comic: [
            "1컷: '무엇을 어떻게 사는가'는 정치적일 수 있다",
            "2컷: 내 돈을 누구에게 줄까? 어떤 기업을 존중할까?",
            "3컷: 기업을 조사 — 환경 오염? 공정 거래? 재활용 계획?",
            "4컷: 소비자는 '지갑으로 투표'해 더 나은 관행을 장려할 힘이 있다!"
          ],
          easy: "물건을 사는 행동이 사실은 '투표'예요. 내가 어떤 회사에 돈을 주느냐가 그 회사를 응원하는 거니까요. 그래서 사기 전에 그 기업이 환경을 오염시키는지, 공정 거래를 하는지 살펴보라는 거예요. 화장지 하나도 양심적인 회사 걸 고르면, 기업들이 더 건강하고 지속 가능한 방향으로 바뀌도록 압력을 줄 수 있어요.",
          structure: {
            "도입": "무엇을·어떻게 사는지는 정치적일 수 있다.",
            "전개": "내 돈을 누구에게? 기업을 조사해 지원할 자격이 있는지 판단.",
            "예시": "환경 오염·공정 거래·재활용 여부 확인 → 양심적 화장지 회사 발견.",
            "결론": "소비자는 '지갑으로 투표'해 더 지속 가능한 관행을 장려할 힘이 있다."
          },
          vocab: [
            { word: "political", mean: "정치적인", role: "구매 행동의 숨은 성격" },
            { word: "mindful", mean: "주의 깊은, 신경 쓰는", role: "구매 전 가져야 할 태도" },
            { word: "deserve", mean: "~받을 자격이 있다", role: "기업이 지원받을 자격이 있는지 판단" },
            { word: "fair-trade practices", mean: "공정 거래 관행", role: "좋은 기업의 기준" },
            { word: "vote with your wallet", mean: "지갑으로 투표하다", role: "소비=정치 행위라는 핵심 표현" },
            { word: "sustainable", mean: "지속 가능한", role: "소비자가 장려할 기업 관행" }
          ],
          sentences: [
            { sent: "Be mindful about every purchase by carefully researching the corporations that are taking our money", explain: "명령문(Be mindful). by ~ing=~함으로써. '돈을 가져가는 기업을 잘 조사해 모든 구매에 주의를 기울여라'." },
            { sent: "you have the power to vote with your wallet and encourage companies to embrace healthier ... practices", explain: "주어=you, 동사=have the power to(둘: vote / encourage). '지갑으로 투표하고 기업이 더 나은 관행을 받아들이도록 장려할 힘'. 주제문." }
          ],
          examPoints: "• 주제·제목: '소비=지갑 투표'\n• 빈칸: 'vote with your wallet' 또는 'sustainable'\n• 명령문·주제문(Remember that~) 위치 주의",
          review: "물건을 사는 건 투표 — 지갑으로 기업을 바꿀 수 있다.",
          quiz: [
            { q: "글에서 구매 활동을 무엇에 비유했나?", a: "투표(지갑으로 투표하기)" },
            { q: "사기 전에 기업의 무엇을 조사하라고 했나?", a: "환경 오염 기록, 공정 거래 관행, 제품 수명 종료 계획 등" }
          ]
        },
        {
          num: "29",
          topic: "유효기간에 대한 개인적 판단의 차이 (어법형)",
          summary: "우리는 판매 유효기한에 휘둘리지만, 그 판단은 사람마다 다르고 제조사는 안전하게 일찍 잡아둔다.",
          comic: [
            "1컷: 우리는 '판매 유효기한'에 따라 움직임",
            "2컷: 기한 지나면 버려짐 → 탄소 발자국까지 증가",
            "3컷: 근데 전쟁 세대는 그런 낭비를 경멸함(판단은 제각각)",
            "4컷: 제조사는 '이미 오래 이동했을 것' 가정해 안전하게 일찍 설정"
          ],
          easy: "우리는 '판매 유효기한'을 보고 음식을 버리죠. 근데 이 판단은 사람마다 달라요. 전쟁 시절을 겪은 어르신들은 '멀쩡한 걸 왜 버려' 하며 그 낭비를 싫어해요. 게다가 제조사는 제품이 선반에 오기까지 이미 오래 이동했을 거라 가정하고, 안전하게 기한을 좀 일찍 잡아둬요. 그러니 기한이 절대적 기준은 아닌 거죠.",
          structure: {
            "도입": "우리는 판매 유효기한에 따라 움직인다(의심의 여지 없음).",
            "전개": "기한 지나면 폐기 → 탄소 발자국 증가(이미 멀리 이동한 식품).",
            "대조": "하지만 판단은 제각각 — 전쟁 세대는 그 낭비를 경멸.",
            "결론": "제조사는 이동 기간을 고려해 안전하게 소비 기한을 설정."
          },
          vocab: [
            { word: "sell-by date", mean: "판매 유효 기한", role: "우리 행동을 좌우하는 기준" },
            { word: "waste stream", mean: "폐기물 흐름", role: "기한 지난 식품이 가는 곳" },
            { word: "carbon footprint", mean: "탄소 발자국", role: "폐기로 증가하는 환경 비용" },
            { word: "scornful of ~", mean: "~을 경멸하는", role: "전쟁 세대가 낭비를 보는 태도" },
            { word: "caution", mean: "경고, 조심", role: "유효기한이라는 '경고'가 낭비를 조장" },
            { word: "manufacturer", mean: "제조업자", role: "기한을 안전하게 설정하는 주체" }
          ],
          sentences: [
            { sent: "those brought up during the Second World War are often scornful of the terrible waste", explain: "주어=those(사람들)+brought up(과거분사 수식, 전쟁 중 자란), 동사=are scornful of. '전쟁 세대는 낭비를 경멸한다'." },
            { sent: "by the time the product reaches the shelves it has already been travelling for so many days", explain: "by the time절(제품이 선반에 도달할 무렵엔) + 현재완료진행(이미 여러 날 이동해 왔다). 제조사가 기한을 일찍 잡는 이유." }
          ],
          examPoints: "• 유형: 29번 어법 — 과거분사(brought up), 현재완료진행, 삽입절(they believe)\n• 어휘: scornful/caution\n• 주제: '유효기한 판단의 주관성'",
          review: "유효기한은 절대 기준 아님 — 판단은 제각각, 제조사는 안전하게 일찍 설정.",
          quiz: [
            { q: "전쟁 세대가 유효기한에 보이는 태도는?", a: "그것이 조장하는 낭비를 경멸함" },
            { q: "제조사가 기한을 일찍 설정하는 이유는?", a: "제품이 선반에 오기까지 이미 오래(여러 날·여러 마일) 이동했다고 보기 때문" }
          ]
        },
        {
          num: "30",
          topic: "카페인 분해에 영향을 주는 요소 — 유전과 노화 (어휘형)",
          summary: "카페인 분해 속도는 간 효소에 달렸는데, 유전적으로 또 나이가 들수록 느려져 더 민감해진다.",
          comic: [
            "1컷: 카페인 충격은 결국 사라짐 — 간 효소가 분해하니까",
            "2컷: 유전상 효소가 빠른 사람: 저녁에 에스프레소 마셔도 꿀잠",
            "3컷: 효소가 느린 사람: 같은 양 분해에 훨씬 오래 → 매우 민감",
            "4컷: 나이 들수록 제거가 느려져 → 노후엔 더 민감해짐"
          ],
          easy: "커피를 마셔도 잠 잘 자는 사람, 한 잔에 밤새는 사람 있죠? 차이는 간에 있는 '카페인 분해 효소'예요. 유전적으로 이 효소가 빠른 사람은 저녁에 커피 마셔도 멀쩡히 자요. 느린 사람은 같은 카페인을 빼는 데 훨씬 오래 걸려 예민하죠. 게다가 나이가 들수록 분해가 느려져서, 노후엔 카페인에 더 민감해져요.",
          structure: {
            "도입": "카페인 충격은 결국 사라진다 — 간 효소가 점진적으로 분해.",
            "전개①(유전)": "효소가 효율적인 사람 → 빠르게 제거, 저녁 커피도 OK.",
            "전개②(개인차)": "효소가 느린 사람 → 제거에 오래 걸려 매우 민감.",
            "결론(노화)": "나이 들수록 제거가 느려져 카페인의 수면 방해에 더 민감."
          },
          vocab: [
            { word: "wear off", mean: "점차 사라지다", role: "카페인 효과가 결국 없어짐" },
            { word: "enzyme", mean: "효소", role: "카페인을 분해하는 핵심 물질" },
            { word: "degrade", mean: "분해하다", role: "효소가 카페인을 처리하는 작용" },
            { word: "genetics", mean: "유전(적 특징)", role: "효소 효율을 결정하는 요인①" },
            { word: "sensitive to ~", mean: "~에 민감한", role: "분해가 느릴수록 커지는 반응" },
            { word: "alter", mean: "변화시키다", role: "노화가 제거 속도를 바꿈" }
          ],
          sentences: [
            { sent: "It takes far longer for their system to eliminate the same amount of caffeine", explain: "It takes 시간 for 의미상주어 to V 구문. '그들의 신체가 같은 양을 제거하는 데 훨씬 더 오래 걸린다'. far=비교급 강조." },
            { sent: "the older we are, the longer it takes ... and thus the more sensitive we become", explain: "the 비교급, the 비교급 구문(3개 연결). '나이 들수록 → 제거가 오래 → 더 민감'. 노화-민감도 연결." }
          ],
          examPoints: "• 유형: 30번 어휘 — efficient/sensitive 등 반의어 함정\n• 'the 비교급 ~ the 비교급' 구문 해석\n• 두 요인(유전·노화) 구분 묻기",
          review: "카페인 분해는 간 효소 — 유전·노화로 느려지면 더 민감해진다.",
          quiz: [
            { q: "카페인 분해 속도를 결정하는 두 요인은?", a: "유전(효소 효율)과 노화" },
            { q: "효소가 느린 사람의 특징은?", a: "같은 카페인 제거에 오래 걸려 카페인에 매우 민감함" }
          ]
        },
        {
          num: "31",
          topic: "반항을 이용한 마케팅 전략 (빈칸형)",
          summary: "반항하는 사람도 마케팅에 휘둘리며, 영리한 마케터는 일부러 다수 안을 먼저 보여줘 반대로 유도한다.",
          comic: [
            "1컷: 반항자들 — '난 안 휩쓸려' 라고 믿음",
            "2컷: 근데 '모두가 한다'는 말은 오히려 반항자를 돌아서게 함",
            "3컷: 그들은 '대안'을 찾음 → 마케터가 노린 게 바로 그것!",
            "4컷: 다수 안을 먼저 제시 → 반항자가 거부 → 마케터 의도대로!"
          ],
          easy: "'난 남들 따라 안 해'라는 반항적인 사람도 사실 마케팅에 당해요. 마케터가 '모두가 이걸 써요'라고 하면 반항자는 일부러 다른 걸 찾죠. 영리한 마케터는 이걸 역이용해요. 내가 진짜 팔고 싶은 게 B라면, 일부러 다수가 쓰는 A를 먼저 보여줘요. 그럼 반항자는 'A는 싫어' 하며 B를 고르죠. 결국 마케터 의도대로!",
          structure: {
            "도입": "반항자도 마케터에게 우리처럼 영향받는다.",
            "전개": "'모두가 한다'는 말 → 일부는 흥미를 잃고 대안을 찾음.",
            "전략": "그 대안이 바로 마케터가 원한 것일 수 있다.",
            "결론": "다수 안을 먼저 제시 → 반항자가 거부하게 해 실제 선호로 유도(reversal)."
          },
          vocab: [
            { word: "rebel", mean: "반항자", role: "스스로 독립적이라 믿지만 조종당하는 대상" },
            { word: "turn A off B", mean: "A가 B에 흥미를 잃게 하다", role: "'모두가 한다'는 말의 역효과" },
            { word: "alternative", mean: "대안", role: "반항자가 찾는 것 = 마케터의 노림수" },
            { word: "in favor of ~", mean: "~을 위해/선호하여", role: "독립성을 위해 대중 의견을 거부" },
            { word: "defiance", mean: "반항", role: "유지하려다 오히려 속는 입장" },
            { word: "reversal", mean: "반전(역이용)", role: "마케터가 쓰는 핵심 전략" }
          ],
          sentences: [
            { sent: "I would present the majority option first, which you would reject in favor of my actual preference", explain: "다수 안을 먼저 제시(present first), which=그것을, 반항자가 거부(reject) → 내 실제 선호로. 역이용 전략의 핵심." },
            { sent: "People use this reversal to make us \"independently\" choose an option which suits their purposes", explain: "use this reversal to make 목적어 V(원형). '이 반전을 이용해 우리가 자기 목적에 맞는 걸 \"독립적으로\" 고르게 만든다'. 따옴표가 반어." }
          ],
          examPoints: "• 유형: 31번 빈칸 — '반항 심리를 역이용' 논지\n• 어휘: reversal/defiance\n• '모두가 한다 → 반대로 행동'의 인과 파악",
          review: "반항자도 조종당한다 — 다수 안을 먼저 보여줘 반대로 유도한다.",
          quiz: [
            { q: "마케터가 반항적인 사람에게 쓰는 전략은?", a: "다수가 택하는 안을 일부러 먼저 제시해, 그가 거부하며 실제 의도한 안을 고르게 함" },
            { q: "'모두가 그것을 한다'는 말이 반항자에게 주는 효과는?", a: "오히려 흥미를 잃고 대안을 찾게 만듦" }
          ]
        }
      ]
    },
    /* ═══════════════════════════ 2023년 11월 ═══════════════════════════ */
    {
      id: "2311",
      name: "2023년 11월",
      passages: [
        {
          num: "21",
          topic: "연결과 변화를 위한 강력한 도구로서의 예술 (밑줄 함축형)",
          summary: "예술은 단순한 즐거움을 넘어, 불편함과 마주하게 해 변화와 변형의 가능성을 준다.",
          comic: [
            "1컷: 예술은 '혀 위의 설탕'(달콤한 즐거움) 그 이상일 수 있다",
            "2컷: 예술 속 도전적이고 불편한 것과 마주침",
            "3컷: 그 불편함에 기꺼이 참여하면 → 변화의 가능성!",
            "4컷: 피카소의 게르니카처럼, 어려운 주제와 싸우는 매개체가 됨"
          ],
          easy: "예술이 그냥 예쁘고 달콤하기만 한 건 아니에요. 좋은 예술은 우리를 불편하게 만들기도 해요. 그런데 그 불편함을 피하지 않고 마주하면, 거기서 변화와 성장이 생겨요. 피카소가 전쟁의 참상을 그린 '게르니카'처럼, 예술은 평소엔 마주하기 어려운 무거운 주제와 씨름하게 해주는 통로가 되는 거죠.",
          structure: {
            "도입": "예술과 미학은 다양한 인간 경험에 정서적 연결을 제공.",
            "전개": "예술은 '혀 위의 설탕' 이상 — 불편한 도전을 담을 수 있다.",
            "핵심": "그 불편함에 참여하면 변화·변형의 가능성이 열린다.",
            "결론": "예술은 어렵고 불편한 개념과 싸우는 매개체가 된다(예: 게르니카)."
          },
          vocab: [
            { word: "aesthetics", mean: "미학", role: "정서적 연결을 주는 예술의 영역" },
            { word: "sugar on the tongue", mean: "혀 위의 설탕(달콤한 즐거움)", role: "예술이 그 이상임을 강조하는 비유" },
            { word: "challenging", mean: "도전적인", role: "좋은 예술의 불편하지만 가치 있는 면" },
            { word: "engage with ~", mean: "~에 참여하다", role: "불편함과 마주하는 태도" },
            { word: "transformation", mean: "변형, 변화", role: "예술이 주는 궁극적 가능성" },
            { word: "vehicle", mean: "매개체, 수단", role: "어려운 개념과 싸우게 하는 예술의 역할" }
          ],
          sentences: [
            { sent: "this discomfort, if we're willing to engage with it, offers the possibility of some change", explain: "주어=this discomfort, 삽입(if we're willing~), 동사=offers. '이 불편함은, 기꺼이 마주한다면, 변화의 가능성을 준다'." },
            { sent: "The arts become vehicles to contend with ideas and concepts that are difficult and uncomfortable otherwise", explain: "예술=매개체(vehicles) to contend with(~와 싸우는). otherwise=그렇지 않았다면. '평소엔 어려울 개념과 씨름하는 수단'." }
          ],
          examPoints: "• 유형: 21번 밑줄/함축 — 'sugar on the tongue 이상' 의미\n• 어휘: vehicle/transformation\n• 주제: '예술 = 불편함을 통한 변화의 도구'",
          review: "예술은 달콤함 이상 — 불편함과 마주해 변화를 끌어낸다.",
          quiz: [
            { q: "'혀 위의 설탕 이상'이라는 말의 의미는?", a: "예술이 단순한 즐거움을 넘어 변화·변형을 일으킬 수 있다는 뜻" },
            { q: "예술이 변화를 주는 조건은?", a: "예술 속 불편함에 기꺼이 참여(engage)할 때" }
          ]
        },
        {
          num: "22",
          topic: "서구 경제 발전의 촉매가 된 정확한 시간 측정",
          summary: "공공 기계 시계의 등장으로 시간이 정확해지자, 시장과 경제 활동이 체계화되어 서구 경제가 발전했다.",
          comic: [
            "1컷: 역사가들 — 정확한 시간 측정이 서구 경제 발전에 중요",
            "2컷: 중세까지는 해시계·물시계 → 경제엔 별 역할 못 함",
            "3컷: 시장은 해 뜨면 열고 정오면 닫는 '대충' 운영",
            "4컷: 공공 기계 시계 등장 → 시간을 알리는 소리로 시장 시간 확정!"
          ],
          easy: "옛날엔 시계가 해시계·물시계뿐이라 시간이 부정확했어요. 그래서 시장도 '해 뜨면 열고 해 가장 높을 때 닫고' 식으로 대충 돌아갔죠. 그런데 도시에 공공 기계 시계가 등장하면서, '몇 시 종이 울리면 시작'처럼 시간이 딱 정해졌어요. 시간이 정확해지자 경제 활동이 체계적으로 굴러가기 시작했고, 이게 서구 경제 발전의 전환점이 됐어요.",
          structure: {
            "도입": "많은 역사가가 정확한 시간 측정과 서구 경제 발전의 관련성을 지적.",
            "근거": "한 역사가는 공공 기계 시계의 탄생을 '전환점'이라 평가.",
            "대조": "중세까지 해·물시계는 경제에 의미 있는 역할 못 함(시장은 해 기준).",
            "결론": "기계 시계 확산 → 시장 시간이 '시간 종'으로 정해짐(체계화)."
          },
          vocab: [
            { word: "catalyst", mean: "촉매(제)", role: "시간 측정이 경제 발전을 촉진함" },
            { word: "significance", mean: "중요성", role: "정확한 시간 측정의 가치" },
            { word: "turning point", mean: "전환점", role: "공공 기계 시계의 역사적 의미" },
            { word: "meaningful role", mean: "의미 있는 역할", role: "해·물시계가 경제에서 못 한 것" },
            { word: "spread across ~", mean: "~ 전역에 퍼지다", role: "기계 시계의 확산" },
            { word: "stroke of the hour", mean: "정시를 알리는 종소리", role: "시장 시간을 정하는 새 기준" }
          ],
          sentences: [
            { sent: "people had sun or water clocks, which did not play any meaningful role in business activities", explain: "해·물시계, which(계속적 용법)=그것들은 경제 활동에 의미 있는 역할을 못 했다. 기계 시계 이전의 한계." },
            { sent: "when the first public mechanical clocks were introduced ..., market times were set by the stroke of the hour", explain: "when절(기계 시계 도입·확산되자) + 주절(시장 시간이 정시 종소리로 정해짐). 정확한 시간이 경제를 체계화." }
          ],
          examPoints: "• 주제·제목: '정확한 시간 측정 = 경제 발전의 촉매'\n• 빈칸: 'turning point' 또는 'stroke of the hour'\n• 시계 이전/이후 대조 구조 파악",
          review: "기계 시계로 시간이 정확해지자 시장·경제가 체계화됐다.",
          quiz: [
            { q: "공공 기계 시계 이전 시장은 어떻게 운영됐나?", a: "해가 뜨면 시작하고 정오(해가 최고점)에 끝나는 식" },
            { q: "기계 시계가 가져온 변화는?", a: "시장 시간이 정시 종소리로 정확히 정해져 경제가 체계화됨" }
          ]
        },
        {
          num: "23",
          topic: "쇼핑 카트의 발명과 그 수용",
          summary: "쇼핑 카트는 훌륭한 발명이었지만, 체면·연상 이미지 때문에 처음엔 사람들이 쓰기를 꺼렸다.",
          comic: [
            "1컷: 1937년 골드먼이 쇼핑 카트 발명 → 가게에 도입",
            "2컷: 지치지 않고 많이 살 수 있는 훌륭한 장치!",
            "3컷: 근데 광고·설명에도 손님들이 안 씀",
            "4컷: 남자는 '나약해 보일까', 여자는 '유모차 같아서' 거부"
          ],
          easy: "쇼핑 카트는 1937년에 발명된 정말 편리한 물건이에요. 안 힘들이고 많이 살 수 있으니까요. 그런데 처음엔 아무도 안 썼어요. 남자들은 카트를 밀면 '나약해 보일까 봐' 싫어했고, 여자들은 카트가 '유모차를 연상시켜서' 손도 안 댔거든요. 결국 처음 쓴 건 몇몇 노인뿐이었죠. 좋은 발명도 받아들여지려면 시간이 걸린다는 얘기예요.",
          structure: {
            "도입": "골드먼이 1937년 쇼핑 카트를 발명·도입.",
            "전개": "지치지 않고 많이 살 수 있는 훌륭한 장치.",
            "반전": "광고·설명에도 손님들이 사용을 거부.",
            "결론": "남자는 나약해 보일까, 여자는 유모차 연상 → 결국 노인만 사용."
          },
          vocab: [
            { word: "device", mean: "장치", role: "쇼핑 카트를 가리킴" },
            { word: "persuade A to V", mean: "A가 ~하도록 설득하다", role: "손님이 카트를 쓰게 설득 못 함" },
            { word: "reluctant", mean: "꺼리는, 주저하는", role: "남성들이 카트를 안 쓴 태도" },
            { word: "appear weak", mean: "나약해 보이다", role: "남성들이 카트를 꺼린 이유" },
            { word: "remind A of B", mean: "A에게 B를 연상시키다", role: "여성에게 유모차를 떠올리게 함" },
            { word: "baby carriage", mean: "유모차", role: "여성들이 카트를 거부한 연상 이미지" }
          ],
          sentences: [
            { sent: "in spite of his repeated advertisements ..., he could not persuade his shoppers to use the wheeled carts", explain: "in spite of(~에도 불구하고) + persuade A to V(A가 ~하게 설득). '광고에도 손님이 카트를 쓰게 설득 못 함'. 반전." },
            { sent: "Women wouldn't touch them because the carts reminded them of baby carriages", explain: "remind A of B(A에게 B를 연상). '카트가 여성에게 유모차를 떠올리게 해서 손대지 않으려 했다'. 거부 이유." }
          ],
          examPoints: "• 주제·제목: '좋은 발명도 수용엔 심리적 장벽'\n• 어휘: reluctant/persuade\n• 남녀 거부 이유 대조, 'It was only ~ who' 강조구문",
          review: "편리한 쇼핑 카트도 체면·유모차 연상 때문에 처음엔 외면받았다.",
          quiz: [
            { q: "남성들이 쇼핑 카트를 꺼린 이유는?", a: "카트를 밀면 나약해 보일 거라고 생각해서" },
            { q: "여성들이 쇼핑 카트를 거부한 이유는?", a: "카트가 유모차를 연상시켰기 때문" }
          ]
        },
        {
          num: "24",
          topic: "치매 환자 돌봄 로봇 — 도덕적 해이와 인간 존엄성 (밑줄/주제형)",
          summary: "인간을 닮은 돌봄 로봇은 취약한 환자를 속일 위험이 있어, 진짜 우정의 대체물이 될 수 없다는 비판이 있다.",
          comic: [
            "1컷: 인간 닮은 돌봄 로봇 → 비평가들이 우려 제기",
            "2컷: 가치 있는 목표라도 '취약한 사용자'를 속여도 될까?",
            "3컷: 자폐 아동·인지 결함 노인은 로봇을 친구로 착각하기 쉬움",
            "4컷: 학자들 — 로봇은 진짜 우정보다 열등한 '가짜 친구'"
          ],
          easy: "치매 환자를 돌보는, 사람처럼 생긴 로봇이 등장했어요. 그런데 비평가들이 걱정해요. 인지 능력이 약한 환자가 로봇을 '진짜 친구'로 착각하면, 그건 일종의 속임수잖아요? 좋은 목적이라도 취약한 사람을 속이는 게 옳을까요? 학자들은 로봇이 진짜 우정보다 못한 '가짜 친구'일 뿐이라며, 로봇은 차라리 만화처럼 '로봇답게' 보여야 한다고 봐요.",
          structure: {
            "도입": "인간 닮은 돌봄 로봇에 대해 비평가들이 도덕적 위험을 지적.",
            "전개": "가치 있는 목표라도 취약한 사용자를 속이는 게 허용될까?",
            "근거": "자폐 아동·인지 결함 노인은 로봇을 친구로 쉽게 착각.",
            "결론": "로봇은 진짜 우정보다 열등한 '가짜 친구' — 로봇답게 보여야."
          },
          vocab: [
            { word: "moral hazard", mean: "도덕적 해이/위험", role: "돌봄 로봇이 만드는 윤리 문제" },
            { word: "deception", mean: "속임수", role: "취약한 환자를 속이는 행위" },
            { word: "vulnerable", mean: "취약한", role: "보호가 필요한 사용자(환자)" },
            { word: "cognitive deficit", mean: "인지 결함", role: "로봇을 친구로 착각하기 쉬운 이유" },
            { word: "inferior to ~", mean: "~보다 열등한", role: "로봇 우정이 진짜 우정보다 못함" },
            { word: "false friend", mean: "가짜 친구", role: "로봇을 규정하는 핵심 표현" }
          ],
          sentences: [
            { sent: "Even if deception is sometimes allowed when it serves worthy goals, should it be allowed for vulnerable users?", explain: "Even if(비록 ~라도) 양보절 + 반문(취약한 사용자에겐 허용돼야 할까?). 윤리적 핵심 질문." },
            { sent: "robots are false friends, inferior to true friendship", explain: "주어=robots, 보어=false friends, inferior to~(진짜 우정보다 열등한). 로봇 우정에 대한 비판적 정의." }
          ],
          examPoints: "• 유형: 24번 주제·밑줄 — '돌봄 로봇의 윤리적 문제'\n• 어휘: deception/vulnerable/inferior\n• 'false friend' 함축의미 파악",
          review: "돌봄 로봇은 취약한 환자를 속일 위험 — 진짜 우정의 대체물은 못 된다.",
          quiz: [
            { q: "비평가들이 돌봄 로봇에서 우려하는 점은?", a: "취약한(인지 결함) 환자를 속여 로봇을 친구로 착각하게 하는 도덕적 위험" },
            { q: "학자들은 로봇을 무엇이라 규정했나?", a: "진짜 우정보다 열등한 '가짜 친구'" }
          ]
        },
        {
          num: "29",
          topic: "식물의 방어 메커니즘 — 렉틴과 건강 효과 (어법형)",
          summary: "렉틴은 식물의 방어 무기인 단백질로, 우리 몸에 들어오면 세포 소통을 방해해 해로운 반응을 일으킬 수 있다.",
          comic: [
            "1컷: 렉틴 = 식물이 자기 방어에 쓰는 커다란 단백질",
            "2컷: 우리가 먹으면 탄수화물·당 분자와 결합",
            "3컷: 장·뇌·관절·체액 곳곳의 당과 들러붙음",
            "4컷: 세포 간 메시지 방해 → 독성·염증, 뇌 피로까지"
          ],
          easy: "식물도 자기를 지키려고 무기를 써요. 그 무기 중 하나가 '렉틴'이라는 단백질이에요. 문제는 우리가 그 식물을 먹으면, 렉틴이 우리 몸속 당분과 들러붙는다는 거예요. 장, 뇌, 관절 등 곳곳에서요. 그러면 세포끼리 주고받는 신호를 방해해서 독성·염증 반응을 일으킬 수 있어요. 머리가 멍한 '뇌 피로'도 그 결과 중 하나죠.",
          structure: {
            "도입": "렉틴 = 식물이 자기 방어에 쓰는 커다란 단백질(무기).",
            "전개": "우리가 식물을 먹으면 렉틴이 탄수화물·당 분자와 결합.",
            "확장": "장·뇌·신경 말단·관절·체액의 당과 들러붙음.",
            "결론": "세포 간 메시지를 방해 → 독성·염증 반응, 뇌 피로 유발."
          },
          vocab: [
            { word: "protein", mean: "단백질", role: "렉틴의 정체" },
            { word: "serve as ~", mean: "~로서 역할을 하다", role: "렉틴이 방어 무기 역할" },
            { word: "bind to ~", mean: "~에 결합하다", role: "렉틴이 탄수화물·당과 붙는 작용" },
            { word: "interrupt", mean: "방해하다", role: "세포 간 메시지 전달을 막음" },
            { word: "inflammatory", mean: "염증성의", role: "렉틴이 일으키는 해로운 반응" },
            { word: "brain fog", mean: "뇌 피로(멍함)", role: "신경 소통 방해의 한 결과" }
          ],
          sentences: [
            { sent: "Lectins are large proteins that serve as a crucial weapon that plants use to defend themselves", explain: "주어=Lectins, 관계절 두 개(that serve as~ / that plants use~). '식물이 자기 방어에 쓰는 중요한 무기 역할을 하는 단백질'." },
            { sent: "these sticky proteins can interrupt messaging between cells and cause toxic and inflammatory reactions", explain: "주어=these sticky proteins, 동사 둘(interrupt / cause). '세포 간 메시지를 방해하고 독성·염증 반응을 일으킨다'." }
          ],
          examPoints: "• 유형: 29번 어법 — 관계대명사 that, 분사, 병렬 동사\n• 어휘: bind to/interrupt/inflammatory\n• 주제: '렉틴 = 식물 방어 무기이자 인체 부작용'",
          review: "렉틴은 식물의 방어 단백질 — 우리 몸에선 세포 소통을 방해할 수 있다.",
          quiz: [
            { q: "렉틴은 식물에게 무슨 역할을 하나?", a: "자기를 방어하는 중요한 무기(단백질)" },
            { q: "렉틴이 우리 몸에서 일으킬 수 있는 문제는?", a: "세포 간 메시지 방해로 독성·염증 반응, 뇌 피로 등" }
          ]
        },
        {
          num: "30",
          topic: "기술이 개인정보 보호에 미치는 영향 (어휘형)",
          summary: "새 기술로 정보 접근이 가능해진다고 정당한 건 아니며, 오히려 사생활 보호를 어떻게 확대할지 고민해야 한다.",
          comic: [
            "1컷: 기술이 '사생활' 개념을 이해하는 방식을 바꿈",
            "2컷: '할 수 있다'고 해서 '해도 된다'는 건 아님!",
            "3컷: 오히려 사생활 보호를 어떻게 넓힐지 고민해야",
            "4컷: 카메라 등장 때도 '허락 없는 촬영' 법을 두고 고심함"
          ],
          easy: "기술이 발전하면 남의 정보를 보거나 행동을 지켜볼 '능력'이 생겨요. 그런데 '할 수 있다'가 '해도 된다'는 뜻은 아니죠. 오히려 기술이 발전할수록 사생활 보호를 어떻게 더 넓힐지 고민해야 해요. 옛날 카메라가 처음 나왔을 때도, 사람들은 '허락 없이 사진 찍는 걸 막는 법이 필요한가'를 두고 한참 고민했거든요.",
          structure: {
            "도입": "기술은 개인·사회가 사생활 개념을 이해하는 방식을 바꾼다.",
            "핵심": "정보 접근 '능력'이 생겼다고 그렇게 하는 게 정당화되진 않는다.",
            "주장": "오히려 사생활 보호를 어떻게 확대할지 고민해야.",
            "예시": "카메라 등장 시에도 무단 촬영 방지법을 두고 사회가 고심."
          },
          vocab: [
            { word: "privacy", mean: "사생활", role: "기술이 재정의하는 핵심 개념" },
            { word: "justify", mean: "정당화하다", role: "'능력 있음 ≠ 정당함'의 핵심어" },
            { word: "advances in technology", mean: "기술의 발전", role: "사생활 고민을 요구하는 원인" },
            { word: "expand", mean: "확장하다", role: "사생활 보호를 넓혀야 함" },
            { word: "enact", mean: "(법을) 제정하다", role: "무단 촬영 방지법 논의" },
            { word: "permission", mean: "허가", role: "허락 없는 촬영이 문제됨" }
          ],
          sentences: [
            { sent: "The fact that someone has a new ability to access information ... does not justify doing so", explain: "주어=The fact that~(능력이 있다는 사실), 동사=does not justify. '능력이 있다고 그렇게 하는 게 정당화되진 않는다'. 핵심." },
            { sent: "advances in technology require citizens and policy makers to consider how privacy protections should be expanded", explain: "require A to V(A가 ~하도록 요구). '기술 발전은 시민·정책 입안자가 사생활 보호 확대 방안을 고민하게 한다'." }
          ],
          examPoints: "• 유형: 30번 어휘 — justify/expand 등 반의어 함정\n• '능력 있음 ≠ 정당함' 논리 파악\n• 카메라 예시의 역할(과거 사례) 묻기",
          review: "기술로 할 수 있다고 해도 되는 건 아니다 — 사생활 보호를 넓혀야.",
          quiz: [
            { q: "글의 핵심 논리는?", a: "정보 접근 능력이 생겼다고 그렇게 하는 것이 정당화되지는 않는다" },
            { q: "카메라 등장 시 사회가 고민한 것은?", a: "허락 없이 촬영당하는 것을 막는 법을 제정할지 여부" }
          ]
        },
        {
          num: "31",
          topic: "무지와 게으름이 만들어낸 기적 (빈칸형)",
          summary: "기적이라 불리는 것은 자연을 거스른 게 아니라, 우리의 무지·지식 부족 때문에 그렇게 보이는 것이다.",
          comic: [
            "1컷: 통계적으로 불가능한 우연 → '기적'이라 부름",
            "2컷: 몽테뉴 — '기적의 기원은 자연이 아니라 우리의 무지'",
            "3컷: 옛 기적들도 알고 보니 자연법칙·당시 몰랐던 기술",
            "4컷: 괴테 — '신비한 것이 아직 기적은 아니다'"
          ],
          easy: "도저히 일어날 수 없는 우연이 일어나면 사람들은 '기적'이라 불러요. 그런데 몽테뉴는 말했어요. '기적은 자연 자체에 있는 게 아니라, 자연을 잘 모르는 우리의 무지에 있다'고요. 실제로 옛날에 기적이라 여겨진 일들은 나중에 자연법칙이나 당시엔 몰랐던 기술로 밝혀졌어요. 즉, 모르니까 기적처럼 보였던 거죠.",
          structure: {
            "도입": "통계적으로 불가능한 우연을 사람들은 기적으로 정의.",
            "반박": "몽테뉴 — 기적의 기원은 자연이 아니라 '우리의 무지'.",
            "근거": "옛 기적들은 나중에 자연법칙·미지의 기술로 밝혀짐.",
            "결론": "괴테 — '신비한 것이 아직 기적은 아니다'(무지가 기적을 만든다)."
          },
          vocab: [
            { word: "coincidence", mean: "우연", role: "기적으로 오인되는 사건" },
            { word: "irrational", mean: "비이성적인", role: "불가능한 우연이 주는 인상" },
            { word: "ignorance", mean: "무지", role: "기적의 진짜 기원(핵심어)" },
            { word: "obedience to ~", mean: "~에 대한 순응/따름", role: "기적이 사실 자연법칙을 따른 것" },
            { word: "mysterious", mean: "신비한", role: "아직 기적은 아닌 단계" },
            { word: "intervention", mean: "개입", role: "기적이 가정하는 'higher power'의 개입" }
          ],
          sentences: [
            { sent: "the origin of a miracle is in our ignorance ... and not in nature itself", explain: "주어=기적의 기원, A is in B and not in C 구조. '기적의 기원은 자연 자체가 아니라 우리의 무지에 있다'. 핵심 인용." },
            { sent: "Glorious miracles have been later on discovered to be obedience to the laws of nature", explain: "현재완료 수동(have been discovered to be). '영광스러운 기적들은 나중에 자연법칙을 따른 것으로 밝혀졌다'. 무지가 기적을 만든 증거." }
          ],
          examPoints: "• 유형: 31번 빈칸 — '기적 = 무지의 산물' 논지\n• 어휘: ignorance/mysterious\n• 두 인용(몽테뉴·괴테)의 공통 메시지 파악",
          review: "기적은 자연을 거스른 게 아니라 우리가 몰라서 그렇게 보일 뿐이다.",
          quiz: [
            { q: "몽테뉴에 따르면 기적의 기원은?", a: "자연 자체가 아니라 우리의 무지(지식 부족)에 있다" },
            { q: "옛 기적들은 나중에 무엇으로 밝혀졌나?", a: "자연법칙에 대한 순응이나 당시 몰랐던 기술적 발전" }
          ]
        },
        {
          num: "32",
          topic: "사건 후 잘못된 정보는 기억 왜곡으로 이어진다 (빈칸형)",
          summary: "사건 뒤 접한 정보는 기억에 섞여 들며, 원래 기억이 약할수록 잘못된 정보가 더 쉽게 받아들여진다.",
          comic: [
            "1컷: 사건 후 마주친 정보가 이후 기억에 영향을 줌",
            "2컷: 특히 사건이 흐릿하게 기억됐거나 오래된 경우",
            "3컷: 원래 기억이 약하면 새 정보를 거부하기 어려움",
            "4컷: 게다가 그게 내 생각과 맞으면 → 그럴듯한 이야기로 굳어짐"
          ],
          easy: "어떤 사건을 겪은 뒤에 들은 정보가, 나중에 그 사건을 기억하는 방식을 바꿔놔요. 특히 사건을 흐릿하게 기억하거나 오래된 일일수록 그래요. 원래 기억이 희미하면 '이게 맞나?' 확인할 근거가 없어서, 나중에 들은 잘못된 정보를 그냥 받아들이게 되죠. 그게 내 평소 생각과 잘 맞으면 더더욱 그럴듯한 기억으로 굳어버려요.",
          structure: {
            "도입": "사건 후 마주친 정보가 이후의 기억에 영향을 줄 수 있다.",
            "전개": "특히 사건이 흐릿하게 부호화됐거나 오래됐을 때 쉽게 통합됨.",
            "메커니즘": "확인할 원래 정보가 적으면 새 정보를 거부하기 어려움.",
            "결론": "내 현재 생각과 맞고 이야기로 말이 되면 더 쉽게 받아들여짐."
          },
          vocab: [
            { word: "encounter", mean: "마주치다", role: "사건 후 새 정보를 접함" },
            { word: "subsequent", mean: "이후의", role: "영향받는 '나중' 기억" },
            { word: "integrate into ~", mean: "~에 통합되다", role: "외부 정보가 기억에 섞여 듦" },
            { word: "poorly encoded", mean: "불충분하게 부호화된", role: "왜곡되기 쉬운 약한 기억" },
            { word: "validity", mean: "유효성", role: "잘못된 정보의 진위 확인" },
            { word: "reject", mean: "거부하다", role: "약한 기억일수록 거부 어려움" }
          ],
          sentences: [
            { sent: "External information can easily integrate into a witness's memory, especially if the event was poorly encoded", explain: "외부 정보가 목격자 기억에 쉽게 통합 / especially if~=특히 사건이 흐릿하게 부호화됐다면. 왜곡 조건." },
            { sent: "With reduced information available ... it is less likely that this new information will be rejected", explain: "With+명사구(확인할 정보가 줄면) / it is less likely that~(새 정보가 거부될 가능성이 낮다). 약한 기억 → 잘못된 정보 수용." }
          ],
          examPoints: "• 유형: 32번 빈칸 — '약한 기억일수록 오정보 수용' 논지\n• 어휘: subsequent/validity/reject\n• '원래 기억 약함 → 거부 어려움' 인과 파악",
          review: "원래 기억이 약하면 사건 후 잘못된 정보가 기억에 섞여 굳어진다.",
          quiz: [
            { q: "사건 후 정보가 기억에 쉽게 섞이는 조건은?", a: "사건이 흐릿하게 부호화됐거나 오래된 일일 때" },
            { q: "원래 기억이 약하면 왜 잘못된 정보를 받아들이기 쉬운가?", a: "그 정보의 진위를 확인할 원래 정보가 부족해 거부하기 어려워서" }
          ]
        },
        {
          num: "33",
          topic: "상관관계의 힘 vs 인과관계 (빈칸형)",
          summary: "상관관계는 통찰이 명확해 강력하지만, 굳이 '왜'(인과)를 따지면 오히려 그 통찰이 가려진다.",
          comic: [
            "1컷: 상관관계는 통찰이 명확해서 강력함",
            "2컷: 근데 '왜?'(인과)를 끌어들이면 통찰이 가려짐",
            "3컷: 중고차 데이터 — 주황색 차가 결함이 훨씬 적다!",
            "4컷: 우린 바로 '왜 그럴까' 고민 시작 → 사실 이유는 몰라도 됨"
          ],
          easy: "데이터에서 'A와 B가 함께 움직인다'는 상관관계는 통찰이 명확해서 강력해요. 예를 들어 중고차 데이터에서 '주황색 차가 결함이 훨씬 적다'가 나왔다고 해봐요. 우리는 바로 '왜 그렇지?' 하고 이유(인과)를 찾기 시작해요. 그런데 그 '왜'에 매달리면 오히려 '주황색 차를 고르면 된다'는 명확한 통찰이 흐려진다는 거예요.",
          structure: {
            "도입": "상관관계는 통찰이 비교적 명확해서 강력하다.",
            "반전": "그 통찰은 인과관계를 끌어들이면 오히려 가려진다.",
            "예시": "중고차 데이터 — 주황색 차가 결함이 훨씬 적음.",
            "전개": "우리는 즉시 '왜 그럴까'를 고민하기 시작(인과에 매달림)."
          },
          vocab: [
            { word: "correlation", mean: "상관관계", role: "명확한 통찰을 주는 강력한 도구" },
            { word: "insight", mean: "통찰(력)", role: "상관관계가 제공하는 것" },
            { word: "cover up", mean: "가리다, 덮다", role: "인과를 끌어오면 통찰이 가려짐" },
            { word: "causality", mean: "인과관계", role: "통찰을 흐리는 '왜'에 대한 집착" },
            { word: "defect", mean: "결함", role: "주황색 차가 적게 가진 것" },
            { word: "enthusiast", mean: "애호가", role: "주황색 차주에 대한 추측(왜?)" }
          ],
          sentences: [
            { sent: "Correlations are powerful because the insights they offer are relatively clear", explain: "주어=Correlations, because절=그것들이 주는 통찰이 비교적 명확해서. 상관관계가 강력한 이유." },
            { sent: "These insights are often covered up when we bring causality back into the picture", explain: "주어=these insights, 동사=are covered up(가려진다), when절=인과를 다시 끌어올 때. 인과 집착의 역효과." }
          ],
          examPoints: "• 유형: 33번 빈칸 — '인과를 따지면 통찰이 가려진다' 논지\n• 어휘: cover up/causality\n• 주황색 차 예시의 역할(상관 vs 인과) 파악",
          review: "상관관계는 명확해서 강력 — '왜'(인과)를 따지면 오히려 통찰이 흐려진다.",
          quiz: [
            { q: "상관관계가 강력한 이유는?", a: "그것이 주는 통찰이 비교적 명확하기 때문" },
            { q: "통찰이 가려지는 경우는?", a: "인과관계('왜 그런가')를 다시 끌어들일 때" }
          ]
        },
        {
          num: "34",
          topic: "동물의 수명은 야생 생존 능력으로 결정된다 (빈칸형)",
          summary: "동물의 수명은 노화 자체가 아니라, 그 종이 야생에서 평균적으로 살아남는 시간에 맞춰 정해진다.",
          comic: [
            "1컷: 야생 쥐는 대부분 2년 수명 전에 잡아먹히거나 죽음",
            "2컷: 노화가 아니라 질병·굶주림·포식자 같은 '외부 원인'으로",
            "3컷: 그래서 자연은 쥐를 평균 2년만 살게 만듦",
            "4컷: 핵심 — 수명은 야생 생존 가능 시간에 맞춰 결정됨(박쥐는 30년!)"
          ],
          easy: "야생 쥐는 보통 2년 못 채우고 죽어요. 늙어서가 아니라 잡아먹히거나 병들어서요. 그러니 자연이 쥐를 굳이 오래 살게 만들 이유가 없죠. 어차피 외부 원인으로 죽으니까요. 그래서 동물의 수명은 '그 종이 야생에서 평균 얼마나 버티느냐'에 맞춰 정해져요. 박쥐는 잘 안 잡아먹혀서 30년이나 살 수 있는 거예요.",
          structure: {
            "도입": "야생 쥐는 대부분 2년 수명 전에 죽는다.",
            "근거": "노화 같은 내부 원인이 아니라 질병·포식자 등 외부 원인으로.",
            "결론": "그래서 자연은 쥐를 평균 2년만 살게 만듦.",
            "일반화": "동물 수명은 야생에서 생존 가능한 평균 시간으로 결정(박쥐=30년)."
          },
          vocab: [
            { word: "life span", mean: "수명", role: "글의 핵심 주제어" },
            { word: "external causes", mean: "외부적 원인", role: "야생 동물의 실제 사망 원인" },
            { word: "starvation", mean: "굶주림", role: "외부 원인의 예" },
            { word: "predator", mean: "포식자", role: "외부 원인의 예" },
            { word: "internal causes", mean: "내부적 원인", role: "노화 등(실제 사망 원인 아님)" },
            { word: "determined by ~", mean: "~에 의해 결정되는", role: "수명이 야생 생존 시간에 좌우됨" }
          ],
          sentences: [
            { sent: "They die from external causes, such as disease, starvation, or predators, not due to internal causes, such as aging", explain: "외부 원인(질병·굶주림·포식자)으로 죽지, 내부 원인(노화)으로가 아니다. 'A, not B' 대조 구조." },
            { sent: "The average life span ... is determined by the average time that this animal species can survive in the wild", explain: "주어=평균 수명, 동사=is determined by, that~=야생 생존 가능 평균 시간. 글의 핵심 결론." }
          ],
          examPoints: "• 유형: 34번 빈칸 — '수명 = 야생 생존 시간' 논지\n• 어휘: external/internal causes 대조\n• 쥐·박쥐 대비(생존력 차이→수명 차이) 파악",
          review: "동물 수명은 노화가 아니라 야생에서 버티는 평균 시간으로 정해진다.",
          quiz: [
            { q: "야생 쥐의 실제 주요 사망 원인은?", a: "노화 같은 내부 원인이 아니라 질병·굶주림·포식자 같은 외부 원인" },
            { q: "동물 종의 수명을 결정하는 것은?", a: "그 종이 야생에서 평균적으로 생존할 수 있는 시간" }
          ]
        },
        {
          num: "35",
          topic: "도덕적 우수성은 습관인가 타고난 것인가 (무관한 문장형)",
          summary: "도덕적 우수성은 습관·반복의 결과이며 생애 초기에 형성되므로, 일찍 가르치는 것이 중요하다.",
          comic: [
            "1컷: 아리스토텔레스 — 도덕적 우수성은 습관과 반복의 결과",
            "2컷: (현대 과학: 선천적·유전적 요소도 있다고 덧붙임)",
            "3컷: 그래서 도덕성은 생애 초기에 광범위하게 설정됨",
            "4컷: 따라서 '얼마나 일찍 가르치느냐'가 매우 중요!"
          ],
          easy: "아리스토텔레스는 도덕성이 습관과 반복으로 만들어진다고 봤어요. 좋은 행동을 자꾸 하다 보면 좋은 사람이 된다는 거죠. 현대 과학은 '타고난 유전적 요소도 있다'고 덧붙이지만요. 어쨌든 도덕성은 어린 시절에 큰 틀이 잡혀요. 그래서 '얼마나 일찍 가르치느냐'가 정말 중요하다는 거예요. 프로이트는 5세 이후엔 안 변한다 했지만, 그건 틀렸어요.",
          structure: {
            "도입": "아리스토텔레스 — 도덕적 우수성은 습관·반복의 결과(+유전적 요소).",
            "전개": "그래서 도덕성은 생애 초기에 광범위하게 설정됨.",
            "결론": "따라서 '얼마나 일찍 가르칠지'가 매우 중요.",
            "보강": "성격 특성은 30세 무렵 안정화(프로이트의 '5세설'은 틀림)."
          },
          vocab: [
            { word: "moral excellence", mean: "도덕적 우수성", role: "글의 주제어" },
            { word: "habit and repetition", mean: "습관과 반복", role: "도덕성 형성의 핵심 경로" },
            { word: "innate", mean: "선천적인", role: "현대 과학이 더한 유전적 요소" },
            { word: "broadly set", mean: "광범위하게 설정된", role: "도덕성이 초기에 형성됨" },
            { word: "stabilize", mean: "안정화되다", role: "성격이 30세 무렵 굳어짐" },
            { word: "thereabouts", mean: "그 무렵", role: "프로이트의 '5세 무렵' 주장" }
          ],
          sentences: [
            { sent: "Moral excellence ... is the result of habit and repetition, though modern science would also suggest that it may have an innate, genetic component", explain: "주어=도덕적 우수성, 보어=습관·반복의 결과, though~=현대 과학은 선천적 요소도 시사. 두 관점 통합." },
            { sent: "moral excellence will be broadly set early in our lives, which is why the question of how early to teach it is so important", explain: "도덕성은 생애 초기에 설정 / which is why~=그래서 '얼마나 일찍 가르칠지'가 중요. 핵심 결론." }
          ],
          examPoints: "• 유형: 35번 무관한 문장 — 도덕성 형성·조기 교육과 안 맞는 문장이 답\n• 어휘: innate/stabilize\n• 아리스토텔레스 vs 현대 과학 관점 통합 파악",
          review: "도덕성은 습관·반복으로 초기에 형성 — 그래서 일찍 가르치는 게 중요하다.",
          quiz: [
            { q: "아리스토텔레스가 본 도덕적 우수성의 근원은?", a: "습관과 반복" },
            { q: "도덕성을 일찍 가르치는 것이 중요한 이유는?", a: "도덕적 우수성이 생애 초기에 광범위하게 설정되기 때문" }
          ]
        },
        {
          num: "36",
          topic: "기후 변화로 작아지는 동물들 (순서 배열형)",
          summary: "동물 크기는 환경과의 정교한 상호작용으로, 5억 년간 커지는 추세였지만 이제 기후 변화로 작아지고 있다.",
          comic: [
            "1컷: 종의 크기는 우연이 아니라 환경과의 정교한 상호작용",
            "2컷: 오랜 시간 크기 변동은 환경 변화의 신호였음",
            "3컷: 지난 5억 년 추세 = 동물이 점점 커짐(해양 동물 150배!)",
            "4컷: 그런데 이 추세가 뒤집힘 → 많은 동물이 작아지는 중"
          ],
          easy: "동물의 크기는 그냥 정해진 게 아니라, 사는 환경과 딱 맞춰진 결과예요. 그래서 크기가 변하면 환경이 변했다는 신호죠. 지난 5억 년 동안엔 동물들이 점점 커지는 추세였어요. 특히 바다 동물은 평균 150배나 커졌고요. 그런데 요즘 이 추세가 거꾸로 가고 있어요. 기후 변화 때문에 많은 동물이 작아지고 있다는 걸 과학자들이 발견했어요.",
          structure: {
            "도입": "종의 크기는 우연이 아니라 환경과의 정교한 상호작용.",
            "전개": "오랜 시간, 크기 변동은 환경 변화의 신호였다.",
            "추세": "지난 5억 년간 동물은 커지는 쪽(해양 동물 150배 증가).",
            "반전": "하지만 이 추세가 변하기 시작 — 많은 동물이 작아지는 중."
          },
          vocab: [
            { word: "accidental", mean: "우연한", role: "종의 크기가 우연이 아님을 강조" },
            { word: "fine-tuned", mean: "미세 조정된", role: "종과 환경의 정교한 상호작용" },
            { word: "inhabit", mean: "서식하다", role: "종이 사는 세계와의 관계" },
            { word: "fluctuation", mean: "변동", role: "크기 변화가 환경 신호임" },
            { word: "notable", mean: "두드러진", role: "해양 동물의 크기 증가 강조" },
            { word: "shrink", mean: "줄어들다, 작아지다", role: "현재 추세 반전의 핵심어" }
          ],
          sentences: [
            { sent: "It's a fine-tuned interaction between a species and the world it inhabits", explain: "주어=It(종의 크기), 보어=정교한 상호작용, the world (that) it inhabits=그것이 서식하는 세계. 크기=환경 맞춤 결과." },
            { sent: "size fluctuations have often signalled significant changes in the environment", explain: "주어=크기 변동, 동사=have signalled(신호해 왔다), 목적어=환경의 상당한 변화. 크기 변화의 의미." }
          ],
          examPoints: "• 유형: 36번 순서 — 정의 → 'Generally' 커지는 추세 → 'But' 작아지는 반전\n• 어휘: fine-tuned/shrink\n• 'Generally/But' 연결어가 순서 단서",
          review: "동물 크기는 환경 맞춤 결과 — 커지던 추세가 기후 변화로 작아지는 중.",
          quiz: [
            { q: "지난 5억 년간 동물 크기의 추세는?", a: "점점 커지는 쪽(특히 해양 동물은 150배 증가)" },
            { q: "최근 관찰되는 추세 변화는?", a: "기후 변화로 많은 동물이 작아지고 있음" }
          ]
        },
        {
          num: "37",
          topic: "무작위 샘플링 vs 전체 데이터 (순서 배열형)",
          summary: "샘플링은 과거의 좋은 지름길이었지만 정보 손실이 따르며, 전체 데이터가 있으면 탐색의 자유가 훨씬 커진다.",
          comic: [
            "1컷: 무작위 추출법은 오랫동안 좋은 '지름길'이었음",
            "2컷: 디지털 이전 시대에 대용량 분석을 가능케 함",
            "3컷: 근데 파일 압축처럼, 추출하면 정보가 손실됨",
            "4컷: 전체 데이터가 있으면 다양한 각도로 탐색할 자유가 큼!"
          ],
          easy: "예전엔 데이터가 너무 많아서 일부만 뽑아 분석하는 '무작위 추출법'이 유용했어요. 컴퓨터가 약하던 시절엔 좋은 지름길이었죠. 그런데 이건 사진이나 노래를 작은 파일로 압축할 때 화질·음질이 깎이는 것처럼, 정보가 손실돼요. 반면 전체 데이터를 다 가지고 있으면, 여러 각도로 들여다보고 특정 부분을 깊이 파볼 자유가 훨씬 커져요.",
          structure: {
            "도입": "무작위 추출법은 오랫동안 좋은 지름길이었다.",
            "전개": "디지털 이전 시대에 대용량 데이터 분석을 가능케 함.",
            "한계": "파일 압축처럼, 추출하면 정보가 손실된다.",
            "결론": "전체 데이터가 있으면 다양한 각도로 탐색할 자유가 훨씬 크다."
          },
          vocab: [
            { word: "random sampling", mean: "무작위 추출법", role: "과거의 분석 지름길" },
            { word: "shortcut", mean: "지름길", role: "샘플링의 장점(과거)" },
            { word: "pre-digital era", mean: "디지털 이전 시대", role: "샘플링이 유용했던 시기" },
            { word: "loss of data", mean: "데이터 손실", role: "샘플링·압축의 단점" },
            { word: "dataset", mean: "데이터 세트", role: "전체 데이터를 가리킴" },
            { word: "flexibility", mean: "유연성", role: "전체 데이터가 주는 탐색의 자유" }
          ],
          sentences: [
            { sent: "much as converting a digital image ... into a smaller file results in loss of data, information is lost when sampling", explain: "much as A, B 구조(A이듯 B하다). '파일 압축이 데이터를 잃듯, 추출할 때도 정보가 손실된다'. 비유 연결." },
            { sent: "Having the full dataset provides a lot more freedom to explore, to look at the data from different angles", explain: "동명사 주어(Having~), 동사=provides, freedom to explore/to look(병렬). '전체 데이터는 탐색의 자유를 훨씬 더 준다'." }
          ],
          examPoints: "• 유형: 37번 순서 — 지름길 → 'But' 정보 손실 → 전체 데이터의 자유 → 'example' 라이트필드 카메라\n• 어휘: shortcut/flexibility\n• 압축 비유의 위치 파악",
          review: "샘플링은 지름길이나 정보 손실 — 전체 데이터는 탐색의 자유가 크다.",
          quiz: [
            { q: "무작위 추출법의 장점과 단점은?", a: "장점: 디지털 이전 시대 대용량 분석 가능 / 단점: 정보 손실" },
            { q: "전체 데이터를 갖는 것의 이점은?", a: "여러 각도로 탐색하고 특정 측면을 깊이 볼 자유가 훨씬 큼" }
          ]
        },
        {
          num: "38",
          topic: "내성적인 리더십 — 선입견 극복하기 (문장 삽입형)",
          summary: "외향적인 사람이 더 나은 리더라는 통념은 틀렸으며, 내향적 리더의 봉사·역량 강화 성향이 오히려 강점이다.",
          comic: [
            "1컷: 내향적 리더는 '외향=유능한 리더'라는 통념을 넘어야 함",
            "2컷: 인구는 반반인데 관리자·임원의 96%가 외향적",
            "3컷: 임원 65%가 '내향성=리더십 장애'로 봄",
            "4컷: 근데 이 고정관념은 틀림 — 봉사·역량강화 성향이 핵심!"
          ],
          easy: "사람들은 '리더는 외향적이어야 한다'고 믿어요. 실제로 임원의 96%가 외향적이고, 65%는 내향성을 리더십의 걸림돌로 봤죠. 그런데 이 고정관념은 항상 맞는 게 아니에요. 한 연구에 따르면, 다른 사람을 돕고 성장하도록 힘을 실어주려는 마음(이건 내향적인 사람에게 더 흔해요)이 오히려 좋은 리더가 되는 핵심 요인이거든요.",
          structure: {
            "도입": "내향적 리더는 '외향=유능한 리더'라는 강한 통념을 극복해야.",
            "전개": "인구는 반반인데 관리자·임원의 96%가 외향적.",
            "근거": "임원 65%가 내향성을 리더십 장애로 간주.",
            "반전": "하지만 이 고정관념은 틀림 — 봉사·역량강화 성향(내향에 흔함)이 핵심."
          },
          vocab: [
            { word: "introverted", mean: "내향적인", role: "선입견을 극복해야 하는 리더 유형" },
            { word: "presumption", mean: "억측, 가정", role: "'외향=유능한 리더'라는 통념" },
            { word: "extrovert", mean: "외향적인 사람", role: "리더로 선호되는 통념 속 유형" },
            { word: "barrier", mean: "장애물", role: "내향성을 보는 부정적 시각" },
            { word: "stereotype", mean: "고정관념", role: "재검토해야 할 대상" },
            { word: "empower", mean: "역량을 강화하다", role: "내향적 리더의 핵심 강점" }
          ],
          sentences: [
            { sent: "Introverted leaders do have to overcome the strong cultural presumption that extroverts are more effective leaders", explain: "do=동사 강조, that~=동격절(외향적인 사람이 더 유능한 리더라는). '내향적 리더는 이 강한 통념을 극복해야'." },
            { sent: "a desire to be of service to others and to empower them to grow ... is a key factor in becoming a leader", explain: "주어=a desire(to be of service / to empower 병렬), 동사=is a key factor. '봉사·역량강화 욕구가 리더가 되는 핵심 요인'." }
          ],
          examPoints: "• 유형: 38번 문장 삽입 — 통념 → 통계(96%·65%) → 'however' 반전 → 연구 근거\n• 어휘: presumption/stereotype/empower\n• 'however/this' 연결이 삽입 단서",
          review: "'외향=유능한 리더'는 통념일 뿐 — 내향적 리더의 봉사·역량강화가 강점.",
          quiz: [
            { q: "글이 반박하는 통념은?", a: "외향적인 사람이 더 유능한 리더라는 고정관념" },
            { q: "내향적 리더의 핵심 강점은?", a: "타인을 돕고 성장하도록 역량을 강화해주려는 성향" }
          ]
        },
        {
          num: "39",
          topic: "측정의 진화와 완벽 측정의 환상 (문장 삽입형)",
          summary: "19세기 프랑스는 완벽한 측정 체계를 꿈꿨지만, 양자역학이 그 꿈을 깼음에도 완벽 측정 정신은 계속됐다.",
          comic: [
            "1컷: 19세기 프랑스 — 정밀한 측정 단위 체계 개발",
            "2컷: 다른 나라들도 같은 기준 채택하게 함",
            "3컷: 반세기 뒤 양자역학 → '완벽한 측정' 꿈을 깨버림",
            "4컷: 그래도 물리학자 빼곤 완벽 측정 정신이 계속됨(상업으로 확장)"
          ],
          easy: "19세기 프랑스는 공간·시간을 정밀하게 재는 측정 체계를 만들고, 다른 나라들도 같은 기준을 쓰게 했어요. '모든 걸 완벽하게 측정하자'는 꿈이었죠. 그런데 1920년대 양자역학이 등장하면서 '완벽한 측정은 불가능하다'는 게 밝혀졌어요. 그런데도 일부 물리학자를 빼면, 공학자·과학자·상업계는 여전히 완벽하게 측정하려는 정신을 이어갔어요.",
          structure: {
            "도입": "19세기 프랑스, 정밀한 측정 단위 체계 개발·국제 표준화 시작.",
            "반전": "반세기 뒤 양자역학이 완벽·포괄적 측정의 꿈을 영원히 깸.",
            "전개": "그럼에도 소수 물리학자 외엔 완벽 측정 정신이 지속.",
            "확장": "수학·통계의 영향으로 상업의 모든 영역으로까지 확대."
          },
          vocab: [
            { word: "precisely defined", mean: "정밀하게 규정된", role: "프랑스 측정 단위의 특징" },
            { word: "adopt", mean: "채택하다", role: "다른 나라가 같은 표준을 받아들임" },
            { word: "quantum mechanics", mean: "양자역학", role: "완벽 측정의 꿈을 깬 발견" },
            { word: "comprehensive", mean: "포괄적인", role: "깨진 '완벽 측정'의 성격" },
            { word: "flawlessly", mean: "완벽하게", role: "측정하려는 인류의 추진 정신" },
            { word: "precision-oriented", mean: "정확성 지향의", role: "수학·통계가 상업에 미친 영향" }
          ],
          sentences: [
            { sent: "the discoveries of quantum mechanics forever destroyed the dream of comprehensive and perfect measurement", explain: "주어=양자역학의 발견, 동사=destroyed, 목적어=포괄적·완벽한 측정의 꿈. 반전의 핵심 문장." },
            { sent: "outside a relatively small circle of physicists, the mindset of humankind's drive to flawlessly measure continued", explain: "outside~(소수 물리학자를 제외하면) / 주어=완벽 측정 추진 정신, 동사=continued. 꿈이 깨졌어도 지속." }
          ],
          examPoints: "• 유형: 39번 문장 삽입 — 체계 개발 → 'half a century later' 양자역학 반전 → 'And yet' 정신 지속\n• 어휘: comprehensive/flawlessly\n• 'And yet/even' 연결이 삽입 단서",
          review: "완벽 측정의 꿈은 양자역학이 깼지만, 그 정신은 상업까지 계속 퍼졌다.",
          quiz: [
            { q: "양자역학의 발견이 깬 것은?", a: "포괄적이고 완벽한 측정에 대한 꿈" },
            { q: "그 꿈이 깨진 뒤에도 무슨 일이 있었나?", a: "소수 물리학자를 빼곤 완벽 측정 정신이 지속되어 상업 전반으로 확대됨" }
          ]
        },
        {
          num: "40",
          topic: "협력적 행동은 사회적 이점으로 이어진다 (요약문형)",
          summary: "여러 실험에서 협력적인 사람은 평판을 통해 더 많은 보상과 책임 등 사회적 이점을 받았다.",
          comic: [
            "1컷: 여러 실험 — 협력적인 사람은 사회적 혜택을 받음",
            "2컷: 증명법: 기여자에게 긍정/부정 반응할 기회를 줌",
            "3컷: 집단 기금 게임 → 평판 기반으로 서로에게 돈 줌",
            "4컷: 많이 기여한 사람이 더 많은 돈·책임을 받음!"
          ],
          easy: "여러 실험에서 '협력을 잘하는 사람은 남들에게 보상을 받는다'는 게 확인됐어요. 한 게임에서 사람들이 다 같이 쓰는 공동 기금에 돈을 기부하게 하고, 서로의 평판을 보고 돈을 줄 수 있게 했어요. 그랬더니 기금에 많이 기여한 '협력적인' 사람이 더 많은 돈과 책임을 받았죠. 협력이 결국 사회적 이득으로 돌아온다는 거예요.",
          structure: {
            "도입": "여러 실험실 연구 — 협력적인 사람은 사회적 이점을 받는 경향.",
            "방법": "기여자에게 긍정/부정으로 반응할 기회를 부여해 증명.",
            "예시": "집단 기금 협동 게임 → 평판 기반으로 서로에게 돈 분배.",
            "결론": "많이 기여한 사람이 더 많은 돈·책임을 부여받음."
          },
          vocab: [
            { word: "cooperative", mean: "협력적인", role: "사회적 이점을 받는 사람의 특성" },
            { word: "social advantage", mean: "사회적 이점/혜택", role: "협력이 가져오는 보상" },
            { word: "demonstrate", mean: "증명하다, 보여주다", role: "실험으로 입증하는 방식" },
            { word: "contributor", mean: "기여자", role: "협력 게임의 참가자" },
            { word: "reputation", mean: "평판", role: "보상 분배의 기준" },
            { word: "responsibility", mean: "책임", role: "많이 기여한 자에게 주어진 것" }
          ],
          sentences: [
            { sent: "cooperative people tend to receive social advantages from others", explain: "주어=협력적인 사람, 동사=tend to receive, 목적어=사회적 이점. 글의 핵심 주장." },
            { sent: "People who contributed more to the group fund were given responsibility for more money than people who contributed less", explain: "주어=더 많이 기여한 사람, 수동태(were given), than~=덜 기여한 사람보다. 협력→보상의 실험 결과." }
          ],
          examPoints: "• 유형: 40번 요약문 빈칸 2개 — (협력적/평판 → 보상·책임) 짝 채우기\n• 어휘: cooperative/reputation\n• 게임 결과(기여↑→보상↑)의 인과 파악",
          review: "협력적인 사람은 평판을 통해 더 많은 보상·책임 등 사회적 이점을 얻는다.",
          quiz: [
            { q: "협력적인 사람이 받는 것은?", a: "다른 사람들로부터 사회적 이점(보상·책임 등)" },
            { q: "실험에서 더 많은 돈·책임을 받은 사람은?", a: "집단 기금에 더 많이 기여한 사람" }
          ]
        },
        {
          num: "41-42",
          topic: "공연자와 청중의 구분, 그리고 그 거리 좁히기 (장문 1지문 2문항)",
          summary: "서구 음악 공연은 공연자와 청중을 뚜렷이 나누지만, 청중 참여나 공연자 배경 설명이 그 거리를 좁혀 경험을 풍부하게 한다.",
          comic: [
            "1컷: 서구 공연 — 공연자='행위자', 청중='수동적 역할'로 구분",
            "2컷: 무대와 객석의 물리적 분리가 구분을 더 강화",
            "3컷: 그래서 청중은 공연자에 '특별한 접근'을 원함",
            "4컷: 공연자 배경·선곡 이유 설명 → 청중이 가까이 느낌 → 경험 향상!"
          ],
          easy: "서양 음악 공연에선 공연자와 관객이 딱 나뉘어요. 공연자는 '하는 사람', 관객은 '보는 사람'이죠. 무대와 객석이 떨어져 있어 이 구분이 더 강해져요. 그래서 관객은 공연자에게 더 가까이 다가갈 기회를 원해요. 공연자가 자기 배경이나 '이 곡을 왜 골랐는지' 설명해주면, 관객이 음악가를 더 가깝게 느끼고 공연 경험도 풍부해지거든요.",
          structure: {
            "도입": "서구 공연은 공연자('행위자')와 청중('수동적')을 뚜렷이 구분.",
            "전개": "무대-객석의 물리적 분리가 그 구분을 강화.",
            "전환": "그래서 청중은 공연자에 대한 '특별한 접근'을 가치 있게 여김.",
            "결론": "공연자 배경·선곡 이유 설명 → 청중이 가까이 느껴 경험이 향상."
          },
          vocab: [
            { word: "distinction", mean: "구분", role: "공연자와 청중 사이의 경계" },
            { word: "passive role", mean: "수동적 역할", role: "전통적으로 청중이 맡는 위치" },
            { word: "reinforce", mean: "강화하다", role: "물리적 분리가 구분을 강화" },
            { word: "incorporate", mean: "포함시키다, 통합하다", role: "청중 참여를 공연에 넣음" },
            { word: "program notes", mean: "프로그램 해설", role: "청중에게 제공되는 배경 정보" },
            { word: "metaphorically", mean: "비유적으로", role: "청중이 음악가를 가깝게 느끼는 방식" }
          ],
          sentences: [
            { sent: "the performers are the \"doers\" and those in the audience take a decidedly passive role", explain: "공연자='행위자', 청중=확실히 수동적 역할. 두 집단의 대조적 위치를 정의." },
            { sent: "What may be of more interest to audience members is background information about the very performers who are onstage", explain: "관계대명사절 주어(What~), 동사=is, 보어=무대 위 공연자에 대한 배경 정보. 청중이 더 흥미로워하는 것." }
          ],
          examPoints: "• 41번(제목): '공연자-청중 거리를 좁히기' 류\n• 42번(어휘): passive/reinforce/incorporate 문맥 적절성\n• 빈칸: 'passive role' 또는 'program notes'",
          review: "공연자와 청중은 구분되지만, 참여·배경 설명이 거리를 좁혀 경험을 풍부하게 한다.",
          quiz: [
            { q: "서구 음악 공연에서 공연자와 청중의 역할은?", a: "공연자는 '행위자', 청중은 수동적 역할로 뚜렷이 구분됨" },
            { q: "공연자와 청중의 거리를 좁히는 방법은?", a: "청중 참여를 넣거나, 공연자의 배경·선곡 이유를 설명해 가깝게 느끼게 함" }
          ]
        }
      ]
    },
  ]
};
