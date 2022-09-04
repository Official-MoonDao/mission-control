import React from "react";

const Proposal = ({ title, executionDays, author, active, idx }) => {
  return (
    <article className={`${idx === 0 ? "mt-[35px]" : "mt-[30px]"} text-white border-[0.5px] border-gray-300 rounded-[15px] w-[336px]`}>
      <div className="pt-[25px] pb-[19px] px-[20px]">
        <h5 className="font-bold text-[22px] leading-[36.42px]">{title}</h5>

        <p className="text-moon-gold font-semibold mt-[30px]">Executing {executionDays} days ago</p>

        <div className="mt-[30px] flex justify-between items-center">
          <p className="font-semibold">{author}</p>
          <p className={`${active ? "bg-moon-blue" : "bg-red-500"} rounded-full px-[16px] py-[4px] font-semibold`}>{active ? "Active" : "Paused"}</p>
        </div>
      </div>
    </article>
  );
};

export default Proposal;
