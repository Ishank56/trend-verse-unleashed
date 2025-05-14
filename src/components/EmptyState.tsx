
import { Search } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center py-12">
      <div className="bg-slate-100 rounded-full p-6 mb-4">
        <Search className="w-12 h-12 text-slate-400" />
      </div>
      <h3 className="text-xl font-medium text-slate-700 mb-2">
        Start exploring social media trends
      </h3>
      <p className="text-slate-500 text-center max-w-md">
        Enter a topic in the search bar to discover trending discussions from YouTube, Reddit, and Twitter
      </p>
    </div>
  );
};

export default EmptyState;
