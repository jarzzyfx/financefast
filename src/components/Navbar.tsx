import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Button } from "./ui/button";

const tabs = ["Blog", "Company", "Products"];

interface ChipProps {
  text: any;
  selected: any;
  setSelected: any;
}

const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -50 },
        vissible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="vissible"
      transition={{ duration: 0.5, delay: 0.35 }}
      className="px-14 py-14 flex items-center justify-between flex-wrap gap-2"
    >
      <motion.a
        variants={{
          hidden: { opacity: 0, x: -50 },
          vissible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="vissible"
        transition={{ duration: 0.5, delay: 0.6 }}
        href="/"
        id="logo"
        className="w-[161px] h-[32px] underline-none"
      >
        <img src="/svgs/logo.svg" alt="logo" />
      </motion.a>
      <section className="flex items-center gap-10">
        <div className="flex items-center gap-10">
          {tabs.map((tab) => (
            <Chip
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
            />
          ))}
        </div>
        <Button variant={"secondary"} className="bg-[#D8C6FF] rounded-3xl">
          <img src="/svgs/device-phone-mobile.svg" alt="" />
          <span>Download</span>
        </Button>
      </section>
    </motion.div>
  );
};

const Chip: FC<ChipProps> = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? "text-white" : "text-[#3A3A3A] hover:bg-slate-100"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-[#563ACC] rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default Navbar;
