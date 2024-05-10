import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface Props {
  children: any;
  type: string;
  holder?: string;
  value?: string;
}
export const InputWithButton: FC<Props> = ({
  children,
  type,
  holder,
  value,
}) => {
  return (
    <div className="group flex w-full max-w-sm items-center space-x-2 bg-background group-hover:ring-[#563ACC] p-1 pl-2 ring-1 ring-[#1A1A1A] rounded-3xl">
      <Input
        type={type}
        placeholder={holder}
        value={value}
        className="border-none outline-none focus:text-[#563ACC] focus-visible:ring-none"
      />
      <Button type="submit" className="rounded-3xl bg-[#563ACC]">
        {children}
      </Button>
    </div>
  );
};
