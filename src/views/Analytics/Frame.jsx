function Frame(props) {
  return (
    <div className="component-background mt-6 flex w-[336px] sm:w-[400px] lg:w-[650px] xl:w-[800px] 2xl:w-[1080px]  min-h-[85vh] 2xl:max-w-[1080px] flex-col justify-center items-center rounded-2xl border-[0.5px] border-blue-500 shadow-md shadow-blue-500 dark:border-moon-gold dark:shadow-moon-gold ">
      {props.children}
    </div>
  );
}
export default Frame;
