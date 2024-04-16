export default function ParentLayout({
  menu,
  panel,
}: {
  children: React.ReactNode;
  menu: React.ReactNode;
  panel: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12">
      <div className="bg-slate-800 h-screen md:col-span-4 lg:col-span-3 text-white">
        {menu}
      </div>
      <div className="md:col-span-8 lg:col-span-9">{panel}</div>
    </section>
  );
}
