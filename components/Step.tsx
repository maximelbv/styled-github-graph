import { ReactNode } from "react";

interface IStepProps {
  number?: string;
  title: string;
  children?: ReactNode;
}

const Step = ({ number, title, children }: IStepProps) => {
  return (
    <div className="flex gap-6">
      {number && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center rounded-full aspect-square bg-foreground text-background font-display">
            {number}
          </div>
          <div className="w-px h-full bg-border"></div>
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 pb-16">
        <span className="text-xl tracking-tighter font-black">{title}</span>
        {children && children}
      </div>
    </div>
  );
};

export default Step;
