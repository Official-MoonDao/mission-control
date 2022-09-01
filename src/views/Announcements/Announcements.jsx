import AnnoucementSelect from "./AnnoucementSelect";
import AnnoucementBoard from "./AnnoucementBoard";

const Announcements = () => {
  return <div className={`flex flex-col items-center bg-gray-800`}>

    <AnnoucementSelect/>
    <AnnoucementBoard/>

  </div>;
};

export default Announcements;
