import DashboardNav from './DashboardNav';

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className='flex-row flex gap-4 p-4 min-h-screen'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <DashboardNav />
      <div className='grow bg-black/[0.5] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg '>
        {children}
      </div>
    </section>
  );
}