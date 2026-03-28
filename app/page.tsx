import Link from "next/link";
import { PROJECTS } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange-500">집</span>업
          </Link>
          <span className="text-sm text-stone-500">{PROJECTS.length}개 시공 사례</span>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          재개발 밸류업, 한눈에 모아보기
        </h2>
        <p className="text-lg text-stone-500 mb-4">
          실제 시공 사례 — 비용, 면적, 시공사, 자재까지
        </p>
        <p className="text-sm text-stone-400">
          출처: LX Z:IN 랜선 집들이, 집닥 시공사례
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {PROJECTS.map((project, i) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="block break-inside-avoid">
              <div className="bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Placeholder image with gradient */}
                <div
                  className="w-full flex items-center justify-center text-white relative overflow-hidden"
                  style={{
                    height: `${180 + (i % 4) * 60}px`,
                    background: GRADIENTS[i % GRADIENTS.length],
                  }}
                >
                  <div className="text-center z-10">
                    <div className="text-3xl mb-1">{project.beforeAfter ? "🔄" : "✨"}</div>
                    <div className="text-xs font-medium opacity-80">
                      {project.beforeAfter ? "Before & After" : "After"}
                    </div>
                  </div>
                  {/* Source badge */}
                  <span className="absolute top-2 right-2 text-xs bg-black/30 text-white px-2 py-0.5 rounded-full">
                    {project.source}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-sm leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full">{project.type}</span>
                    <span className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded-full">{project.area}</span>
                    <span className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded-full">{project.familyType}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm pt-1">
                    <span className="font-bold text-orange-600">{project.budget}</span>
                    <span className="text-xs text-stone-400">{project.location.split(" ").slice(0, 2).join(" ")}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-stone-400 border-t space-y-1">
        <p>집업 &mdash; 재개발 밸류업 갤러리</p>
        <p className="text-xs">데이터 출처: LX Z:IN, 집닥</p>
      </footer>
    </main>
  );
}

const GRADIENTS = [
  "linear-gradient(135deg, #92400e, #d97706)",
  "linear-gradient(135deg, #1e3a5f, #3b82f6)",
  "linear-gradient(135deg, #064e3b, #059669)",
  "linear-gradient(135deg, #581c87, #a855f7)",
  "linear-gradient(135deg, #7c2d12, #ea580c)",
  "linear-gradient(135deg, #1e1b4b, #6366f1)",
  "linear-gradient(135deg, #312e81, #818cf8)",
  "linear-gradient(135deg, #134e4a, #2dd4bf)",
  "linear-gradient(135deg, #78350f, #fbbf24)",
];
