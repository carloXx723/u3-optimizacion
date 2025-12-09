
export default function Prompt4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">

      <main className="flex-1 overflow-y-auto h-full relative p-0">
        {children}
      </main>

    </div>
  );
}