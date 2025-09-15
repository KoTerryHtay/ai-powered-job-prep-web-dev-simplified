import { Suspense } from "react";

export default async function SuspendedItem<T>({
  item,
  fallback,
  result,
}: {
  item: Promise<T>;
  fallback: React.ReactNode;
  result: (item: T) => React.ReactNode;
}) {
  return (
    <Suspense fallback={fallback}>
      <InnerComponent item={item} result={result} />
    </Suspense>
  );
}

async function InnerComponent<T>({
  item,
  result,
}: {
  item: Promise<T>;
  result: (item: T) => React.ReactNode;
}) {
  return result(await item);
}
