import { CalendarOutline, LogoBitcoin, People } from "react-ionicons";

const StatusBar = () => {
  return (
    <div className="w-full flex items-center justify-center gap-3">
      <div className="w-full rounded-xl bg-[#012237] py-[6px] flex items-center gap-3 px-3 cursor-pointer">
        <People cssClasses={"animate-pulse !fill-[#fdb224]"} />
        <div className="flex flex-col justify-center">
          <span className="text-[13px] text-[#9fa0a7]">Player Online</span>
          <span>32,134,764</span>
        </div>
      </div>
      <div className="w-full rounded-xl bg-[#012237] py-[6px] flex items-center gap-3 px-3 cursor-pointer">
        <LogoBitcoin cssClasses={"animate-pulse !fill-[#fdb224]"} />
        <div className="flex flex-col justify-center">
          <span className="text-[13px] text-[#9fa0a7]">Total Token</span>
          <span>6,321,673</span>
        </div>
      </div>
      <div className="w-full rounded-xl bg-[#012237] py-[6px] flex items-center gap-3 px-3 cursor-pointer">
        <CalendarOutline cssClasses={"animate-pulse !fill-[#fdb224]"} />
        <div className="flex flex-col justify-center">
          <span className="text-[13px] text-[#9fa0a7]">Untill AirDrop</span>
          <span>7 Days</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
