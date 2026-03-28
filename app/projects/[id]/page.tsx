import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, PROJECTS } from "@/lib/data";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/" className="text-orange-600 hover:underline text-sm">&larr; 갤러리</Link>
        <span className="text-xs px-2 py-0.5 bg-stone-100 text-stone-500 rounded-full">{project.source}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
      <p className="text-sm text-stone-500 mb-6">{project.location} &middot; {project.registeredAt}</p>

      {/* Before & After placeholder */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {project.beforeAfter ? (
          <>
            <div className="bg-stone-200 rounded-xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-stone-400">
                <div className="text-3xl mb-2">🔧</div>
                <div className="text-sm font-medium">Before</div>
                <div className="text-xs mt-1">원본 사진은 출처에서 확인</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-orange-400">
                <div className="text-3xl mb-2">✨</div>
                <div className="text-sm font-medium">After</div>
                <div className="text-xs mt-1">원본 사진은 출처에서 확인</div>
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-2 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl aspect-[3/1] flex items-center justify-center">
            <div className="text-center text-orange-400">
              <div className="text-3xl mb-2">✨</div>
              <div className="text-sm font-medium">완성된 공간</div>
            </div>
          </div>
        )}
      </div>

      {/* CTA: View original */}
      <a
        href={project.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full p-4 mb-8 bg-orange-600 text-white text-center font-semibold rounded-xl hover:bg-orange-700 transition-colors"
      >
        {project.source}에서 원본 사진 보기 →
      </a>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DetailCard title="기본 정보">
          <DetailRow label="위치" value={project.location} />
          <DetailRow label="면적" value={project.area} />
          <DetailRow label="시공 범위" value={project.type} />
          <DetailRow label="가족 구성" value={project.familyType} />
          {project.contractor && <DetailRow label="시공사" value={project.contractor} />}
        </DetailCard>

        <DetailCard title="비용">
          <DetailRow label="시공비" value={project.budget} highlight />
          <div className="pt-2 text-xs text-stone-400">
            시공 범위: {project.rooms.join(", ")}
          </div>
        </DetailCard>

        <DetailCard title="시공 공간">
          <div className="flex flex-wrap gap-2">
            {project.rooms.map((room) => (
              <span key={room} className="px-3 py-1.5 bg-orange-50 text-orange-700 text-sm rounded-lg border border-orange-200">
                {room}
              </span>
            ))}
          </div>
        </DetailCard>

        {project.materials && project.materials.length > 0 && (
          <DetailCard title="사용 자재">
            <div className="space-y-1.5">
              {project.materials.map((mat) => (
                <div key={mat} className="text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0" />
                  {mat}
                </div>
              ))}
            </div>
          </DetailCard>
        )}

        <DetailCard title="설명" className="md:col-span-2">
          <p className="text-sm text-stone-600 leading-relaxed">{project.description}</p>
        </DetailCard>
      </div>
    </main>
  );
}

function DetailCard({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl border p-5 ${className || ""}`}>
      <h2 className="font-semibold text-lg mb-4 pb-2 border-b">{title}</h2>
      {children}
    </div>
  );
}

function DetailRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between text-sm py-1">
      <span className="text-stone-500">{label}</span>
      <span className={highlight ? "font-bold text-orange-600" : "font-medium"}>{value}</span>
    </div>
  );
}
