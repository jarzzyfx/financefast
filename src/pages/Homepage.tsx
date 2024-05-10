import { InputWithButton } from "@/components/ui/InputwithButton";
import { Badge } from "@/components/ui/badge";
import { useScroll, motion, useInView, useAnimation } from "framer-motion";
import { X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

type Props = {};

export const Homepage = (props: Props) => {
  const [active, setActive] = useState(false);

  const reactY = (e: any) => {
    const myel = window.document.querySelector("#features");
    const elY = myel?.getBoundingClientRect().y;
    let y = e.clientY;
    const eltop = myel?.firstChild;
    const elbottom = myel?.children[1];

    if (eltop) eltop.style.top = `calc(${y}px - 470px)`;
    if (elbottom) elbottom.style.top = `calc(${y}px - 470px)`;
    // console.log(y, myel?.children);
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });
  const inView = useInView(titleRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView || inView) {
      mainControls.start("vissible");
    }
  }, [isInView, inView]);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center">
      <motion.div
        ref={heroRef}
        variants={{
          hidden: { opacity: 0, y: 55 },
          vissible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        id="hero"
        className="w-full h-[500px] flex items-center justify-center flex-col"
      >
        <h1 className="text-[#1A1A1A] text-5xl font-bold text-center leading-[54px] mb-[12px]">
          Simplify Your International <br />
          Transaction with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#6364FF] to-[#563ACC]">
            One Platform
          </span>
        </h1>

        <p className="text-sm font-regular text-[#3A3A3A] text-center capitalize mb-[40px]">
          Say Goodbye to the hassels of traditional money transfers.
          financialfast allows <br />
          you effortlessly transfer money anywhere in the world with confidence
          and ease
        </p>
        <InputWithButton
          children={"Download Now"}
          type="number"
          holder="+234"
        />
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className=""
      >
        <section
          className="w-full flex items-center justify-center"
          id="app_demo"
        >
          <img
            src="/svgs/app-demo.svg"
            className="max-w-[1140px] w-full min-h-[339px] h-full"
            alt=""
          />
        </section>
      </motion.div>
      <div className="w-full h-[155px] bg-[#E5DBFB] flex items center gap-8 pl-14 ">
        <article className="max-w-[339px] mt-auto mb-auto text-sm" id="heading">
          We're have been recognized by Leading Finance Publications and
          Organizations.
        </article>
        <div
          className="overflow-hidden w-full flex items-center justify-start gap-2"
          id="brands"
        >
          <span
            id="start"
            className="w-[40px] h-full bg-gradient-to-r from-[#ffffff34] 50% to-[#fff0]"
          ></span>

          <div className="group flex items-center w-auto">
            <div
              className="w-auto flex items-center gap-[90px] mr-[580px] animate-loop-scroll group-hover:paused"
              id="brand-items"
            >
              <img src="/svgs/huffpost.svg" alt="" />
              <img src="/svgs/bloomberg.svg" alt="" />
              <img src="/svgs/tc.svg" alt="" />
              <img src="/svgs/havard.svg" alt="" />
              <img src="/svgs/y-combinator.svg" alt="" />
            </div>
            <div
              className="w-auto flex items-center gap-[90px] animate-loop-scroll group-hover:paused"
              id="brand-items"
              aria-hidden={true}
            >
              <img src="/svgs/huffpost.svg" alt="" />
              <img src="/svgs/bloomberg.svg" alt="" />
              <img src="/svgs/tc.svg" alt="" />
              <img src="/svgs/havard.svg" alt="" />
              <img src="/svgs/y-combinator.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        ref={titleRef}
        variants={{
          hidden: { opacity: 0, y: 55 },
          vissible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="w-full min-h-[400px] gap-4 flex flex-col items-center justify-center"
      >
        <h3 className="text-xs uppercase font-bold text-[#6364FF] text-center">
          Cross-Border Transactions
        </h3>
        <h1 className="text-4xl font-bold text-center text-[#1A1A1A]">
          Say Goodbye to International <br />
          Payment Hassles
        </h1>
        <p className="text-xs font-regular text-[#1A1A1A] text-center">
          Start your journey to hassle free Cross-Border Payments by downloading
          the <br />
          FastFinance app from your iOS of Android store.
        </p>
      </motion.div>
      <section className="w-full h[400px] flex justify-between items-center">
        <div
          onMouseMoveCapture={reactY}
          className="relative overflow-hidden min-w-[400px] flex flex-col gap-2 w-full h-full px-32 p-10"
          id="features"
        >
          <span
            id="top-blur"
            className="absolute top-0 -translate-y-[60%] left-0 w-full h-full bg-gradient-to-b from-[#F9F9F9] from-65% to-[#ffffff13] z-0"
          ></span>
          <span
            id="bottom-blur"
            className="absolute bottom-0 left-0 translate-y-[60%] w-full h-full bg-gradient-to-t from-[#F9F9F9] from-65% to-[#ffffff13] z-20"
          ></span>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />{" "}
            Expensive high fees and unfavorable exchange rates
          </Badge>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />{" "}
            Transfer delays and inconvenience
          </Badge>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />{" "}
            Fraud and loss of funds
          </Badge>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />{" "}
            Traditional in-person transactions
          </Badge>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />{" "}
            Lack of transparency
          </Badge>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />{" "}
            Limited payment methods
          </Badge>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />
            Complex verification processes
          </Badge>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />{" "}
            Long payment wait times
          </Badge>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />{" "}
            Hidden costs
          </Badge>
          <Badge
            className={`group transition ease-linear gap-8 px-2 py-2 h-8 font-light w-fit border-none hover:ring-1 hover:ring-[#C0C0C0]`}
            variant={"outline"}
          >
            <X
              className="transition ease-linear group-hover:text-red-500 group-hover:w-[20px] group-hover:h-[20px] text-[#C0C0C0]"
              width={10}
              height={10}
            />{" "}
            Currency exchange rates
          </Badge>
        </div>
        <div className="flex gap-2 items-center w-full h-full " id="showcase">
          <div
            className=" w-[1px] h-[400px] bg-[#949494]"
            id="feature_tracker"
          ></div>
        </div>
      </section>
    </div>
  );
};
