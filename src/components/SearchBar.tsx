
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term.trim());
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form 
        onSubmit={handleSubmit}
        className="relative flex items-center"
      >
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search any topic (e.g., Apple Vision Pro, Tesla Cybertruck)"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="pl-4 pr-20 py-6 text-lg rounded-lg shadow-md border-slate-200 focus:border-blue-500 w-full"
          />
          <Button 
            type="submit"
            className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-5 px-6"
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </form>
      
      <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-slate-500">
        <span>Popular searches:</span>
        {["Apple Vision Pro", "Tesla Cybertruck", "ChatGPT", "Metaverse"].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setTerm(suggestion);
              onSearch(suggestion);
            }}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
