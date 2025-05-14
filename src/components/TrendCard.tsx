
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Trend {
  id: string;
  platform: string;
  content: string;
  summary?: string;
  sentiment?: string;
  likes?: number;
  timestamp: string;
  author?: string;
  link?: string;
}

interface TrendCardProps {
  trend: Trend;
}

const TrendCard = ({ trend }: TrendCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        );
      case "reddit":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-4.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-4.5 4.5c2.242 0 4.5-.5 4.5-1.5 0-.938-2.25-1.5-4.5-1.5s-4.5.563-4.5 1.5c0 1 2.25 1.5 4.5 1.5z" />
          </svg>
        );
      case "twitter":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getSentimentBadge = (sentiment?: string) => {
    if (!sentiment) return null;
    
    switch (sentiment.toLowerCase()) {
      case "positive":
        return <Badge className="bg-green-500 hover:bg-green-600">Positive</Badge>;
      case "negative":
        return <Badge className="bg-red-500 hover:bg-red-600">Negative</Badge>;
      case "mixed":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Mixed</Badge>;
      default:
        return <Badge className="bg-slate-500 hover:bg-slate-600">Neutral</Badge>;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className={`flex items-center text-${trend.platform} font-medium`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white bg-${trend.platform} mr-2`}>
              {getPlatformIcon(trend.platform)}
            </div>
            <span className="capitalize">{trend.platform}</span>
          </div>
          <div className="text-sm text-slate-500">{formatDate(trend.timestamp)}</div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{trend.content}</h3>
        
        {trend.summary && (
          <p className="text-slate-600 text-sm mb-4">
            {trend.summary}
          </p>
        )}
        
        <div className="flex items-center text-sm text-slate-500">
          <span className="font-medium">{trend.author}</span>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-4 bg-slate-50 border-t flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {getSentimentBadge(trend.sentiment)}
          {trend.likes && (
            <span className="text-sm text-slate-600">
              {trend.likes.toLocaleString()} likes
            </span>
          )}
        </div>
        
        {trend.link && (
          <a 
            href={trend.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
          >
            View original
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default TrendCard;
