{/*Adjust margin left here(the last property) at different widths to adjusts layout */}

const PageLayout = ({ children }) => {
  return <main className={`flex justify-center pb-[100px] md:ml-48`}>{children}</main>;
};

export default PageLayout;
