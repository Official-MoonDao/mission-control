const SectionLayout = ({ children, twoSection }) => {
  return (
    <section className={`mt-20 flex flex-col ${twoSection ? "xl:w-[93%]" : "lg:w-[80%]"} lg:px-14 xl:px-16 2xl:px-20`}>
      <span>{children}</span>
    </section>
  );
};

export default SectionLayout;
