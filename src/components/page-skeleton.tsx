export function PageSkeleton() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="animate-pulse space-y-8">
          <div className="space-y-3">
            <div className="h-10 w-64 bg-[#1a1a1a] rounded" />
            <div className="h-4 w-96 bg-[#1a1a1a] rounded" />
          </div>
          <div className="rule-top pt-12 space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rule-all p-6 space-y-3">
                <div className="h-5 w-48 bg-[#1a1a1a] rounded" />
                <div className="h-4 w-full bg-[#1a1a1a] rounded" />
                <div className="h-4 w-3/4 bg-[#1a1a1a] rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
