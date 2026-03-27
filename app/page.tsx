import Link from "next/link";

// Mock data for gallery preview
const MOCK_PROJECTS = [
  { id: "1", title: "송파 빌라 전면 리모델링", area: "25평", cost: "4,200만원", period: "8주", type: "전체 리모델링", image: null },
  { id: "2", title: "마포 원룸 → 신혼집 변신", area: "12평", cost: "1,800만원", period: "4주", type: "부분 인테리어", image: null },
  { id: "3", title: "강남 오피스텔 재개발", area: "18평", cost: "3,500만원", period: "6주", type: "전체 리모델링", image: null },
  { id: "4", title: "성북 다세대 외관 + 내부", area: "32평", cost: "7,800만원", period: "12주", type: "전체 리모델링", image: null },
  { id: "5", title: "용산 아파트 욕실 리뉴얼", area: "3평", cost: "850만원", period: "2주", type: "부분 인테리어", image: null },
  { id: "6", title: "서초 빌라 옥탑방 개조", area: "15평", cost: "2,600만원", period: "5주", type: "전체 리모델링", image: null },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="text-orange-500">집</span>업
          </h1>
          <nav className="flex gap-4 text-sm">
            <button className="px-3 py-1.5 bg-stone-100 rounded-full font-medium">전체</button>
            <button className="px-3 py-1.5 text-stone-500 hover:bg-stone-100 rounded-full">전체 리모델링</button>
            <button className="px-3 py-1.5 text-stone-500 hover:bg-stone-100 rounded-full">부분 인테리어</button>
            <button className="px-3 py-1.5 text-stone-500 hover:bg-stone-100 rounded-full">외관</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-3">
          재개발 밸류업, 한눈에 모아보기
        </h2>
        <p className="text-lg text-stone-500 mb-8">
          비포&amp;애프터 사진부터 비용, 시공사, 밸류업 효과까지
        </p>
      </div>

      {/* Pinterest-style Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {MOCK_PROJECTS.map((project, i) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="block break-inside-avoid">
              <div className="bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Placeholder image */}
                <div
                  className="w-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-400"
                  style={{ height: `${180 + (i % 3) * 80}px` }}
                >
                  <span className="text-4xl">🏠</span>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full">{project.type}</span>
                    <span className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded-full">{project.area}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-stone-500">
                    <span className="font-semibold text-stone-900">{project.cost}</span>
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-stone-400 border-t">
        집업 &mdash; 재개발 밸류업 갤러리
      </footer>
    </main>
  );
}
