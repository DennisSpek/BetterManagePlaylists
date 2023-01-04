export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className='flex-row flex gap-4 p-4'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className='bg-white/5 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg '>Navigation goes here</nav>
      <div className='grow bg-white/5 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg '>
        {children}
      </div>
    </section>
  );
}