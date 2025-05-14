
import { Card, CardContent } from "@/components/ui/card";

const LoadingState = () => {
  // Create an array of 6 elements to represent loading cards
  const loadingCards = Array.from({ length: 6 });
  
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3 h-8 rounded bg-slate-200 animate-pulse-slow"></div>
        <div className="w-1/4 h-8 rounded bg-slate-200 animate-pulse-slow"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadingCards.map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-1/3 h-6 rounded bg-slate-200 animate-pulse-slow"></div>
                <div className="w-1/4 h-5 rounded bg-slate-200 animate-pulse-slow"></div>
              </div>
              
              <div className="w-full h-6 rounded bg-slate-200 animate-pulse-slow mb-2"></div>
              <div className="w-3/4 h-6 rounded bg-slate-200 animate-pulse-slow mb-4"></div>
              
              <div className="w-5/6 h-4 rounded bg-slate-200 animate-pulse-slow mb-2"></div>
              <div className="w-full h-4 rounded bg-slate-200 animate-pulse-slow"></div>
              
              <div className="mt-4 w-1/3 h-5 rounded bg-slate-200 animate-pulse-slow"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoadingState;
