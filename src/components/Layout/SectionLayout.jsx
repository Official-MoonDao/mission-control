const SectionLayout = ({ children }) => {
  return (
    <section className="mt-[31px] flex flex-col xl:mt-0 xl:mr-16 xl:min-w-[700px] xl:rounded-lg xl:bg-white xl:bg-opacity-60 xl:px-[58px] xl:pt-[16px] xl:pb-[24px] dark:xl:bg-opacity-[0.04]">
      {children}
    </section>
  );
};

export default SectionLayout;
