
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Platform = "all" | "youtube" | "reddit" | "twitter";

interface PlatformFilterProps {
  activePlatform: Platform;
  onChange: (platform: Platform) => void;
}

const PlatformFilter = ({ activePlatform, onChange }: PlatformFilterProps) => {
  const platforms: { id: Platform; label: string }[] = [
    { id: "all", label: "All platforms" },
    { id: "youtube", label: "YouTube" },
    { id: "reddit", label: "Reddit" },
    { id: "twitter", label: "Twitter" },
  ];

  return (
    <div className="flex items-center space-x-2">
      {platforms.map((platform) => (
        <Button
          key={platform.id}
          onClick={() => onChange(platform.id)}
          variant="outline"
          size="sm"
          className={cn(
            "border-slate-200 text-slate-600",
            activePlatform === platform.id && "bg-slate-100 border-slate-300 font-medium"
          )}
        >
          {platform.id !== "all" && (
            <span className={`w-2 h-2 rounded-full bg-${platform.id} mr-2`}></span>
          )}
          {platform.label}
        </Button>
      ))}
    </div>
  );
};

export default PlatformFilter;
