import AnnoucementSelect from "./AnnoucementSelect";
import AnnoucementBoard from "./AnnoucementBoard";

const Announcements = () => {
  return (
    <section className={` mt-[77px] pb-[150px]`}>
      <div className="flex flex-col items-center">
        <div>
          <AnnoucementSelect />
          <div className="mt-[5px]">
            <AnnoucementBoard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
