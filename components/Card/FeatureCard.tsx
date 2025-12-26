import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
}

export function FeatureCard({
  icon,
  title,
  subtitle1,
  subtitle2,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg">
        <Image src={icon} alt="Feature" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-1 text-sm text-muted-foreground">{` ${subtitle1}`}</p>
      <p className="text-sm text-muted-foreground">{subtitle2}</p>
    </div>
  );
}
