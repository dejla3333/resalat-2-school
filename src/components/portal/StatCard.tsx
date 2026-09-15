import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="group border border-[#e3e7e3] bg-white p-5 transition-colors duration-200 hover:border-[#cfd8ca]">
      <div className="flex items-start justify-between">
        {/* Icon */}

        <div className="flex size-9 items-center justify-center bg-[#f3f6f2] text-[#243b5b] transition-colors duration-200 group-hover:bg-[#edf5e5] group-hover:text-[#6a9d2d]">
          <Icon
            size={18}
            strokeWidth={1.7}
          />
        </div>

        {/* Label */}

        <span className="pt-1 text-[11px] font-medium text-[#8c948e]">
          {title}
        </span>
      </div>

      {/* Value */}

      <div className="mt-7">

        <p className="text-[30px] font-bold tracking-[-0.03em] text-[#243b5b]">
          {value}
        </p>

        <p className="mt-2 text-[11px] leading-6 text-[#8c948e]">
          {description}
        </p>

      </div>

      {/* Bottom accent */}

      <div className="mt-5 h-px w-full bg-[#edf0ec]">
        <div className="h-px w-8 bg-[#96d04f] transition-all duration-300 group-hover:w-14" />
      </div>
    </div>
  );
}