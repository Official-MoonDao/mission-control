function Frame(props) {
  return (
    <div className="component-background my-16 flex h-[80vh] w-[80vw] justify-center rounded-2xl">
      <div className="blur-background z-[-10] rounded-2xl"></div>
      {props.children}
    </div>
  );
}
export default Frame;
