import AnnoucementSelect from "./AnnoucementSelect";
import AnnoucementBoard from "./AnnoucementBoard";

const Announcements = () => {
  return (
    <section className={` mt-[65px] pb-[150px] xl:px-6`}>
      <div className="flex flex-col items-center xl:flex-row-reverse xl:items-start xl:justify-center">
          <AnnoucementSelect />
          <AnnoucementBoard />
      </div>
    </section>
  );
};

export default Announcements;
