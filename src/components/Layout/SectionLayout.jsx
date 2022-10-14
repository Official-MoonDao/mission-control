const SectionLayout = ({ children, twoSection }) => {
  return (
    <section
      className={`lg:light-glass dark:lg:dark-glass mt-[31px] flex flex-col lg:relative lg:mt-0 lg:w-[80%] ${
        twoSection ? "lg:w-[93%]" : "lg:w-[80%]"
      }  lg:rounded-lg lg:px-[58px] lg:pt-[32px] lg:pb-[56px] xl:px-16 xl:pt-[36px] 2xl:px-20 2xl:pt-[36px]`}
    >
      <div className="absolute -inset-3 hidden rounded-lg border-[8px] bg-gray-200 bg-opacity-40 border-emerald-200 blur dark:border-indigo-200 dark:bg-indigo-100 dark:bg-opacity-10 dark:opacity-75 lg:block"></div>

      <span className="lg:relative">{children}</span>
    </section>
  );
};

export default SectionLayout;
