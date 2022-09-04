import AnnoucementSelect from "./AnnoucementSelect";
import AnnoucementBoard from "./AnnoucementBoard";

const Announcements = () => {
  return <section className={`w-full flex flex-col pb-[150px]`}>

<div className="mx-[19px] mt-[77px]">
    <AnnoucementSelect/>
    <div className="mt-[5px]">
    <AnnoucementBoard/>
    </div>
</div>


  </section>;
};

export default Announcements;
