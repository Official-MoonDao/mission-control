const PageLayout = ({children}) => {
  return (
    <main className={`flex justify-center pb-[150px] light-glass dark:dark-glass`}>
      <div className="absolute inset-0 hidden bg-amber-100 bg-opacity-40 blur dark:bg-black dark:bg-opacity-10 lg:block"></div>
        {children}
    </main>
  )
}

export default PageLayout
