function Frame(props) {
  return (
    <div className="flex h-[70vh] w-[80vw] justify-center">
      {props.children}
    </div>
  );
}
export default Frame;
