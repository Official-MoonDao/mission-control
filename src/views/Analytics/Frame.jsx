function Frame(props) {
  return (
    <div className="absolute flex h-[70vh] w-[90vw]">{props.children}</div>
  );
}
export default Frame;
