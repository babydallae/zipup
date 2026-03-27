import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="text-orange-600 hover:underline text-sm">&larr; 갤러리</Link>
        <h1 className="text-2xl font-bold">프로젝트 상세</h1>
      </div>

      {/* Before & After */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-stone-200 rounded-xl aspect-[4/3] flex items-center justify-center text-stone-400">
          <div className="text-center">
            <div className="text-3xl mb-2">🔧</div>
            <div className="text-sm font-medium">Before</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl aspect-[4/3] flex items-center justify-center text-orange-400">
          <div className="text-center">
            <div className="text-3xl mb-2">✨</div>
            <div className="text-sm font-medium">After</div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DetailCard title="기본 정보">
          <DetailRow label="위치" value="서울시 송파구" />
          <DetailRow label="면적" value="25평 (82.5㎡)" />
          <DetailRow label="건물 유형" value="빌라 / 다세대" />
          <DetailRow label="시공 범위" value="전체 리모델링" />
        </DetailCard>

        <DetailCard title="비용">
          <DetailRow label="총 시공비" value="4,200만원" highlight />
          <DetailRow label="철거" value="350만원" />
          <DetailRow label="욕실" value="800만원" />
          <DetailRow label="주방" value="1,200만원" />
          <DetailRow label="바닥/벽" value="950만원" />
          <DetailRow label="전기/설비" value="500만원" />
          <DetailRow label="기타" value="400만원" />
        </DetailCard>

        <DetailCard title="시공 정보">
          <DetailRow label="시공사" value="(주) 예시건설" />
          <DetailRow label="공사 기간" value="8주" />
          <DetailRow label="시공 시기" value="2025년 11월" />
        </DetailCard>

        <DetailCard title="밸류업 효과">
          <DetailRow label="시공 전 시세" value="2.8억원" />
          <DetailRow label="시공 후 시세" value="3.5억원" />
          <DetailRow label="시세 상승" value="+7,000만원" highlight />
          <DetailRow label="투자 수익률" value="167%" highlight />
        </DetailCard>
      </div>
    </main>
  );
}

function DetailCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border p-5">
      <h2 className="font-semibold text-lg mb-4 pb-2 border-b">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function DetailRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-stone-500">{label}</span>
      <span className={highlight ? "font-bold text-orange-600" : "font-medium"}>{value}</span>
    </div>
  );
}
