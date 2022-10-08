const SectionLayout = ({ children }) => {
  return (
    <section className="xl:light-glass dark:xl:dark-glass mt-[31px] flex flex-col xl:relative xl:mt-0 xl:w-[80%] xl:rounded-lg xl:px-[58px] xl:pt-[16px] xl:pb-[56px]">
      <div className="absolute -inset-3 hidden rounded-lg dark:opacity-75 border-[20px] border-emerald-100 blur-md dark:border-indigo-500 dark:bg-indigo-100 dark:bg-opacity-10 xl:block"></div>

      <span className="xl:relative">{children}</span>
    </section>
  );
};

export default SectionLayout;
