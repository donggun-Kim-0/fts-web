const mockKpis = [
  { label: "전체 가맹점", value: "252", tone: "bg-blue-50 text-blue-700" },
  { label: "운영중", value: "247", tone: "bg-emerald-50 text-emerald-700" },
  { label: "오픈 준비", value: "3", tone: "bg-amber-50 text-amber-700" },
  { label: "점검 필요", value: "2", tone: "bg-rose-50 text-rose-700" },
];

export default function FranchiseDashboardView() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">가맹점 관리</h1>
        <p className="mt-1 text-sm text-slate-500">
          도메인 컴포넌트에서 UI를 렌더링하는 샘플 화면입니다.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {mockKpis.map((kpi) => (
          <article key={kpi.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{kpi.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{kpi.value}</p>
            <span className={`mt-3 inline-flex rounded-full px-2 py-1 text-xs font-medium ${kpi.tone}`}>
              실시간 집계
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
