function Frame(props) {
  return (
    <div className="component-background mt-4 mb-16 flex min-h-[85vh] w-[80vw] flex-col justify-center rounded-2xl lg:flex-row">
      <div className="blur-background absolute z-[-10] rounded-2xl"></div>
      {props.children}
    </div>
  );
}
export default Frame;
