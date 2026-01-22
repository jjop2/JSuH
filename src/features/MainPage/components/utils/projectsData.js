/**
 * 참여한 프로젝트 목록 & 내용
 */

// 프로젝트 이미지/gif 파일 기본 베이스 경로
const BASE_FILE_URL = "/project_files";

const projectsData = [
  {
    id: 4,
    name: "S.P.I.D.E.R",
    description: "설비 센서 데이터 · 제품 불량 검출 실시간 스트리밍 및 AI 기반 모니터링 시스템",
    start_date: "2025.12",
    end_date: "2026.01",
    tags: ["Leader", "Frontend", "UI/UX", "IoT", "Backend"],
    roles: [
      "노션을 활용한 전체 일정 관리 및 회의록 기록, 가이드라인 작성",
      "Socket.io를 활용한 실시간 센서 데이터 스트리밍 구현",
      "네비게이션 및 핵심 페이지 UI/UX",
      "Raspberry Pi를 통한 각종 센서 사용 및 IoT 개발"
    ],
    achievements: [
      {
        keyword: "렌더링 최적화",
        description: "React 메모이제이션 기법(useMemo 등)을 통해 프론트엔드의 불필요한 리렌더링 방지"
      },
      {
        keyword: "코드 효율",
        description: "소켓 이벤트 핸들링 로직의 커스텀 훅 모듈화로 코드 재사용성 향상"
      },
      {
        keyword: "시스템 설계",
        description: "실시간 데이터 전송-저장 로직 및 시간 분리로 서버(Backend) 부하 최소화 및 처리 효율 최적화"
      },
      {
        keyword: "데이터 수집",
        description: "SPI 통신 기반 MCP3008 제어를 통한 안정적인 아날로그 센서 데이터 수집 환경 구축"
      },
    ],
    link: {
      github: "https://github.com/betterproject-dev/spider_front.git",
      video: "https://youtu.be/jsGmotxAkgI",
    },
    files: [
      `${BASE_FILE_URL}/S.P.I.D.E.R/실시간 센서.gif`,
      `${BASE_FILE_URL}/S.P.I.D.E.R/센서그래프.gif`,
      `${BASE_FILE_URL}/S.P.I.D.E.R/제품불량그래프.gif`,
    ]
  },
  {
    id: 3,
    name: "Medi.Check!",
    description: "AI 기반 의약품·영양제 상호작용 분석 및 관리 서비스",
    start_date: "2025.10",
    end_date: "2025.11",
    tags: ["AI", "Backend", "DB", "Frontend", "UI/UX"],
    roles: [
      "YOLO를 통한 사진 속 의약품을 판별하는 모델 구축",
      "상호작용 분석 결과 저장 및 내역 기능 구현",
      "토스 결제위젯을 사용하여 스토어 결제 기능 구현",
      "스토어 퀵메뉴, 헤더 네비게이션 UI/UX"
    ],
    achievements: [
      {
        keyword: "모델 학습 최적화",
        description: "YOLO 모델에 맞는 라벨링 변환 및 로컬 환경에 따른 하이퍼파라미터 튜닝으로 AI 탐지 성능 개선"
      },
      {
        keyword: "데이터 안정성 확보",
        description: "임시 저장 프로세스 도입으로 이미지 업로드 시 데이터 유실 문제 해결"
      },
      {
        keyword: "스토리지 효율화",
        description: "자정 주기 스케줄러를 통한 자동 클린업 함수로 서버 저장 공간 관리"
      },
      {
        keyword: "결제 인터페이스 구현",
        description: "토스 결제위젯 API를 연동하여 주문 및 결제 승인까지 이어지는 전체 프로세스를 구축"
      }
    ],
    link: {
      github: "https://github.com/guswlsl1216/drug_project_front.git",
      video: "https://youtu.be/MQPhBeLTY3c",
    },
    files: [
      `${BASE_FILE_URL}/Medi.check!/스마트분석.gif`,
      `${BASE_FILE_URL}/Medi.check!/루틴.gif`,
      `${BASE_FILE_URL}/Medi.check!/쇼핑몰.gif`,
    ]
  },
];

export { projectsData };