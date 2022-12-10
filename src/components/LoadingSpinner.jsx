function LoadingSpinner() {
  return (
    <div className="m-4 flex items-center justify-center">
      <span className="absolute h-[50px] w-[50px] animate-rotation rounded-full border-4 border-orange-200 border-b-transparent" />
      <span className="h-[30px] w-[30px] animate-[rotation_1s_reverse_infinite] rounded-full border-4 border-orange-300 border-t-transparent" />
    </div>
  );
}
export default LoadingSpinner;
