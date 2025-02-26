import router from "@/router";
import { useState, useEffect } from "react";

interface AutocompleteProps {
  options: string[];
  onSelect: (value: string) => void;
}

export default function Autocomplete({ options, onSelect }: AutocompleteProps) {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowDropdown(true);
    } else {
      setFilteredOptions([]);
      setShowDropdown(false);
    }
  }, [query, options]);

  const handleSelect = (value: string) => {
    setQuery(value);
    setShowDropdown(false);
    onSelect(value);
    router.navigate(`/stock/${value}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        Math.min(prev + 1, filteredOptions.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      handleSelect(filteredOptions[selectedIndex]);
    }
  };

  return (
    <div className="relative md:w-72">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
      />
      {showDropdown && filteredOptions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={option}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 ${
                selectedIndex === index ? "bg-slate-50" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
