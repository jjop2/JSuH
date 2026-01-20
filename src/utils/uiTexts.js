/**
 * 네비게이션 메뉴명과 서브메뉴명(테마, 언어 선택)을 언어별로 구분했습니다.
 * 헤더와 각 영역의 제목에 사용됩니다.
 * 
 * 지원 언어 : 한국어(ko), 영어(en), 일본어(ja)
 */

const UITEXTS = {
  ko: {
    nav: {
      about: "소개",
      skills: "기술 스택",
      projects: "프로젝트",
      certificates: "교육 · 자격"
    },
    theme: {
      mode: "화면 모드",
      seasons: "계절 테마"
    }
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates"
    },
    theme: {
      mode: "Display Mode",
      seasons: "Season Theme"
    }
  },
  ja: {
    nav: {
      about: "自己紹介",
      skills: "スキル",
      projects: "プロジェクト",
      certificates: "修了・資格"
    },
    theme: {
      mode: "画面モード",
      seasons: "季節テーマ"
    }
  },
};

export { UITEXTS };