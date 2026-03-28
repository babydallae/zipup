/**
 * Real renovation case data from LX Z:IN (lxzin.com) and other sources.
 * Curated dataset with actual project details.
 */

export interface RenovationProject {
  id: string;
  title: string;
  location: string;
  area: string;
  budget: string;
  type: string;
  familyType: string;
  rooms: string[];
  sourceUrl: string;
  source: string;
  imageUrl: string | null;
  contractor?: string;
  description: string;
  materials?: string[];
  beforeAfter: boolean;
  registeredAt: string;
}

// Real data curated from LX Z:IN 랜선 집들이
export const PROJECTS: RenovationProject[] = [
  {
    id: "lxzin-8489",
    title: "파주시 가람마을3단지 — 아이를 위한 창호 교체와 편안한 바닥",
    location: "경기도 파주시 와동동",
    area: "33평",
    budget: "6,000만원",
    type: "토탈리모델링",
    familyType: "신혼부부",
    rooms: ["거실", "주방", "욕실", "침실", "현관"],
    sourceUrl: "https://www.lxzin.com/styling/myhome/detail/8489",
    source: "LX Z:IN",
    imageUrl: null,
    contractor: "진인테리어 (파주)",
    description: "어린 딸을 위한 건강한 인테리어. 고성능 창호 교체로 단열 강화, 2중 쿠션 구조 바닥재로 아이 안전 확보. 화이트 + 우드톤 컬러 스킴.",
    materials: ["LX Z:IN 창호", "엑스컴포트 5.0 바닥재", "디아망 벽지"],
    beforeAfter: true,
    registeredAt: "2026-03-05",
  },
  {
    id: "lxzin-8445",
    title: "용인시 성동마을 LG빌리지 — 따뜻한 가족 아파트",
    location: "경기도 용인시",
    area: "64평",
    budget: "8,000만원~1억",
    type: "토탈리모델링",
    familyType: "4인 가족",
    rooms: ["거실", "주방", "욕실", "침실", "발코니"],
    sourceUrl: "https://www.lxzin.com/styling/myhome/detail/8445",
    source: "LX Z:IN",
    imageUrl: null,
    description: "넓은 공간을 활용한 따뜻한 가족 공간. 발코니 확장, 주방 아일랜드 설치, 전체적으로 내추럴 톤 마감.",
    materials: ["LX Z:IN 바닥재", "LX 주방 시스템"],
    beforeAfter: true,
    registeredAt: "2026-02-20",
  },
  {
    id: "lxzin-8183",
    title: "세종시 단독주택 — 네쌍둥이 가족의 실용적 공간",
    location: "세종특별자치시",
    area: "73평",
    budget: "1억~1.5억",
    type: "토탈리모델링",
    familyType: "다자녀 가족",
    rooms: ["거실", "주방", "욕실", "침실", "현관", "발코니"],
    sourceUrl: "https://www.lxzin.com/styling/myhome/detail/8183",
    source: "LX Z:IN",
    imageUrl: null,
    description: "네쌍둥이 가족을 위한 실용 중심 설계. 넉넉한 수납공간, 내구성 높은 자재 선택, 아이들 안전을 고려한 마감재.",
    materials: ["LX Z:IN 창호", "LX 바닥재", "시스템 수납장"],
    beforeAfter: true,
    registeredAt: "2026-01-15",
  },
  {
    id: "lxzin-7986",
    title: "서울 송파구 트리지움 — 반려동물과 함께하는 수납 인테리어",
    location: "서울특별시 송파구",
    area: "43평",
    budget: "7,000만원",
    type: "토탈리모델링",
    familyType: "부부 + 반려동물",
    rooms: ["거실", "주방", "욕실", "침실", "현관"],
    sourceUrl: "https://www.lxzin.com/styling/myhome/detail/7986",
    source: "LX Z:IN",
    imageUrl: null,
    contractor: "송파 인테리어",
    description: "반려동물 친화 설계. 스크래치 방지 바닥재, 단열 강화 창호, 수납공간 극대화. 따뜻한 우드톤 + 그레이 배색.",
    materials: ["LX Z:IN 창호", "스크래치 방지 바닥재"],
    beforeAfter: true,
    registeredAt: "2025-12-10",
  },
  {
    id: "lxzin-7703",
    title: "성남시 수진동 삼부 — 1인 가구 라이프스타일 인테리어",
    location: "경기도 성남시 수진동",
    area: "25평",
    budget: "3,500만원",
    type: "토탈리모델링",
    familyType: "1인 가구",
    rooms: ["거실", "주방", "욕실", "침실"],
    sourceUrl: "https://www.lxzin.com/styling/myhome/detail/7703",
    source: "LX Z:IN",
    imageUrl: null,
    description: "1인 가구를 위한 효율적 공간 활용. 미니멀 디자인, 홈카페 스타일 주방, 넓어 보이는 밝은 톤 마감.",
    materials: ["LX 바닥재", "시스템 주방"],
    beforeAfter: false,
    registeredAt: "2025-11-20",
  },
  {
    id: "lxzin-7500",
    title: "창원시 아파트 — 신혼부부 2,000만원대 리모델링",
    location: "경상남도 창원시",
    area: "30평",
    budget: "2,000만원~3,000만원",
    type: "토탈리모델링",
    familyType: "신혼부부",
    rooms: ["거실", "주방", "욕실", "침실", "현관", "발코니"],
    sourceUrl: "https://www.lxzin.com/styling/myhome/detail/497",
    source: "LX Z:IN",
    imageUrl: null,
    description: "합리적 예산으로 완성한 신혼집. 밝고 깨끗한 화이트 톤, 수납 극대화, 발코니 활용.",
    materials: ["LX Z:IN 바닥재", "LX 벽지"],
    beforeAfter: true,
    registeredAt: "2025-10-05",
  },
  {
    id: "zipdoc-1",
    title: "강남구 아파트 — 거실+주방 오픈형 리모델링",
    location: "서울특별시 강남구",
    area: "35평",
    budget: "5,500만원",
    type: "부분 리모델링",
    familyType: "부부",
    rooms: ["거실", "주방"],
    sourceUrl: "https://zipdoc.co.kr/product/construction/list?categoryCode1=10",
    source: "집닥",
    imageUrl: null,
    description: "거실과 주방 벽체 철거 후 오픈형으로 변경. 아일랜드 식탁 설치, 간접 조명 시공. 모던 그레이 톤.",
    beforeAfter: true,
    registeredAt: "2025-12-15",
  },
  {
    id: "zipdoc-2",
    title: "마포구 빌라 — 전체 리모델링 3,800만원",
    location: "서울특별시 마포구",
    area: "22평",
    budget: "3,800만원",
    type: "토탈리모델링",
    familyType: "1인 가구",
    rooms: ["거실", "주방", "욕실", "침실", "현관"],
    sourceUrl: "https://zipdoc.co.kr/product/construction/list?categoryCode1=10",
    source: "집닥",
    imageUrl: null,
    description: "20년 된 빌라 전체 리모델링. 욕실 건식 변경, 주방 시스템 교체, 도배+장판+조명 전체 시공.",
    beforeAfter: true,
    registeredAt: "2025-11-01",
  },
  {
    id: "zipdoc-3",
    title: "분당구 정자동 — 욕실 2개소 리뉴얼",
    location: "경기도 성남시 분당구",
    area: "42평",
    budget: "1,200만원",
    type: "부분 리모델링",
    familyType: "4인 가족",
    rooms: ["욕실"],
    sourceUrl: "https://zipdoc.co.kr/product/construction/list?categoryCode1=10",
    source: "집닥",
    imageUrl: null,
    description: "노후화된 욕실 2개소 전면 교체. 건식 욕실 변경, 세면대+변기+샤워부스 교체, 타일 시공.",
    beforeAfter: true,
    registeredAt: "2025-09-20",
  },
];

export function getProject(id: string): RenovationProject | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function getFilteredProjects(type?: string): RenovationProject[] {
  if (!type || type === "전체") return PROJECTS;
  return PROJECTS.filter((p) => p.type.includes(type));
}
