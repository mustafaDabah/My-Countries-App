export const CountryCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-lg border bg-card h-40 mb-2 animate-pulse">
      <div className="aspect-video bg-muted" />
      <div className="p-4 space-y-3">
        <div className="h-6 bg-muted rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-2/3" />
        </div>
      </div>
    </div>
  );
};

export const CountryDetailSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="aspect-[2/1] bg-muted rounded-lg" />
      <div className="space-y-4">
        <div className="h-10 bg-muted rounded w-1/2" />
        <div className="h-6 bg-muted rounded w-1/3" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-20 bg-muted rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};
