import { useEffect, useState } from "react";
import coin from "../assets/images/coin.webp";
import LevelBar from "./LevelBar";
import StatusBar from "./StatusBar";
interface FloatingText {
  id: number;
  x: number;
  y: number;
}
const Mine = () => {
  const maxEnergy = 400;
  const [value, setValue] = useState(1000000);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [nextId, setNextId] = useState(0);
  const [energy, setEnergy] = useState(maxEnergy);

  const handleClick = (e: any) => {
    if (energy) {
      setValue((perv) => perv + 1);
      setEnergy((perv) => (perv > 0 ? perv - 1 : 0));
      const { clientX: x, clientY: y } = e;
      const newText: FloatingText = { id: nextId, x, y };
      setFloatingTexts((perv) => [...perv, newText]);
      setNextId((perv) => perv + 1);
      setTimeout(() => {
        setFloatingTexts((perv) =>
          perv.filter((text) => text.id !== newText.id)
        );
      }, 2000);
    }
  };

  const energyPercentage = (energy / maxEnergy) * 100;
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((pervEnergy) => {
        if (pervEnergy < maxEnergy) {
          return pervEnergy + 1;
        }
        return pervEnergy;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-between py-4">
      <LevelBar />
      <StatusBar />
      <div className="w-full flex items-center justify-center">
        <span className="font-bold text-[60px]">{value.toLocaleString()}</span>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={coin}
          alt="coin"
          onClick={handleClick}
          className="w-[70%] cursor-pointer drop-shadow-2xl coin-button"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <span className=" text-[15px]"> Energy Ziad</span>
          <span className=" text-[15px] font-semibold">
            {energy} / {maxEnergy}
          </span>
        </div>
        <div className="w-full relative rounded-full h-[16px] bg-[#012237] border border-[#073755]">
          <div
            className="absolute left-0 h-full rounded-full bg-gradient-to-r from-[#dc7b0c] to-[#fff973]"
            style={{ width: `${energyPercentage}%` }}
          ></div>
        </div>
      </div>
      {floatingTexts.map((text) => (
        <span
          className="floating-text font-semibold text-[30px]"
          key={text.id}
          style={{ top: text.y, left: text.x }}
        >
          +1
        </span>
      ))}
    </div>
  );
};

export default Mine;
