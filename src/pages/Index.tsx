
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import SearchBar from "@/components/SearchBar";
import TrendCard from "@/components/TrendCard";
import PlatformFilter from "@/components/PlatformFilter";
import EmptyState from "@/components/EmptyState";
import LoadingState from "@/components/LoadingState";
import ComponentDemo from "@/components/ComponentDemo";

// Temporary mock data for UI development
const MOCK_TRENDS = [
  {
    id: "1",
    topic: "Apple Vision Pro",
    platform: "youtube",
    content: "Apple Vision Pro: Revolutionary or Overpriced? An Honest Review",
    summary: "Mixed opinions about pricing but praise for technological innovation",
    sentiment: "mixed",
    likes: 1542,
    timestamp: "2023-02-10T15:30:00Z",
    author: "TechReviewsDaily",
    link: "#"
  },
  {
    id: "2",
    topic: "Apple Vision Pro",
    platform: "reddit",
    content: "Just tried Vision Pro at the Apple Store - My experience as a developer",
    summary: "Positive review focusing on development opportunities and spatial computing",
    sentiment: "positive",
    likes: 832,
    timestamp: "2023-02-12T09:15:00Z",
    author: "devExplorer",
    link: "#"
  },
  {
    id: "3",
    topic: "Apple Vision Pro",
    platform: "twitter",
    content: "Vision Pro is cool but $3500 is way too much for what it currently offers #AppleVisionPro",
    summary: "Criticism of pricing compared to features currently available",
    sentiment: "negative",
    likes: 2103,
    timestamp: "2023-02-11T18:45:00Z",
    author: "@techcritic",
    link: "#"
  },
  {
    id: "4",
    topic: "Apple Vision Pro",
    platform: "youtube",
    content: "Using Apple Vision Pro for 30 Days: What I Learned",
    summary: "In-depth review highlighting pros and cons after extended use",
    sentiment: "positive",
    likes: 3267,
    timestamp: "2023-02-08T12:00:00Z",
    author: "TechLifestyle",
    link: "#"
  },
  {
    id: "5",
    topic: "Apple Vision Pro",
    platform: "reddit",
    content: "Vision Pro vs. Meta Quest: A comprehensive comparison thread",
    summary: "Technical comparison between competing VR products",
    sentiment: "neutral",
    likes: 1205,
    timestamp: "2023-02-09T14:30:00Z",
    author: "VRenthusiast",
    link: "#"
  },
];

type Platform = "all" | "youtube" | "reddit" | "twitter";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trends, setTrends] = useState<any[]>([]);
  const [activePlatform, setActivePlatform] = useState<Platform>("all");
  const [showComponentDemo, setShowComponentDemo] = useState(false);
  
  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    setIsLoading(true);
    
    try {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/trends?topic=${encodeURIComponent(term)}`);
      // const data = await response.json();
      
      // Using mock data for now
      setTimeout(() => {
        setTrends(MOCK_TRENDS);
        setIsLoading(false);
      }, 1500); // Simulate loading
    } catch (error) {
      console.error("Error fetching trends:", error);
      toast.error("Failed to fetch trends. Please try again.");
      setIsLoading(false);
    }
  };
  
  const filteredTrends = activePlatform === "all" 
    ? trends 
    : trends.filter(trend => trend.platform === activePlatform);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">
            Social Media Trend Aggregator
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Discover trending discussions, reviews, and opinions from across YouTube, Reddit, and Twitter on any topic
          </p>
          <button 
            onClick={() => setShowComponentDemo(!showComponentDemo)}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            {showComponentDemo ? "Hide Component Demo" : "Show Component Demo"}
          </button>
        </div>
        
        {showComponentDemo && <ComponentDemo />}
        
        <SearchBar onSearch={handleSearch} />
        
        {isLoading ? (
          <LoadingState />
        ) : trends.length > 0 ? (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-slate-800">
                Trends for "{searchTerm}"
              </h2>
              <PlatformFilter 
                activePlatform={activePlatform}
                onChange={setActivePlatform}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrends.map((trend) => (
                <TrendCard key={trend.id} trend={trend} />
              ))}
            </div>
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default Index;
