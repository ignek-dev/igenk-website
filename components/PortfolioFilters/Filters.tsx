import { ChevronDown, Search } from "lucide-react";

interface FiltersProps {
    search: string;
    setSearch: (v: string) => void;
    selectedIndustry: number | null;
    setSelectedIndustry: (v: number | null) => void;
    selectedTechnology: number | null;
    setSelectedTechnology: (v: number | null) => void;
}

export default function Filters({
    search,
    setSearch,
    selectedIndustry,
    setSelectedIndustry,
    selectedTechnology,
    setSelectedTechnology,
}: FiltersProps) {
    
    const industriesData = [
        { id: 0, name: "All Case Studies" },
        { id: 53, name: "Telecom" },
        { id: 230, name: "Enterprise Website" },
        { id: 232, name: "Communication" },
        { id: 234, name: "Fintech" },
        { id: 19, name: "Manufacturing" },
        { id: 235, name: "Electronics" },
        { id: 49, name: "Corporate" },
        { id: 236, name: "IT Sector" },
        { id: 60, name: "Government" },
        { id: 231, name: "Intranet" },
        { id: 238, name: "Hospitality" },
        { id: 75, name: "NGOs" },
        { id: 69, name: "Aviation" },
        { id: 233, name: "Saas" }
    ];

    const technologiesData = [
        { id: 0, name: "All Technologies" },
        { id: 198, name: "Liferay" },
        { id: 199, name: "React" },
        { id: 200, name: "Spring Boot" }
    ];

    // Data for Mobile Dropdowns
    const industryOptions = [
        { id: -1, name: "Search By Industry" },
        ...industriesData
    ];
    const technologyOptions = [
        { id: -1, name: "Search By Technology" },
        ...technologiesData
    ];

    return (
        <>
            {/* --- MOBILE & TABLET VIEW --- */}
            <div className="w-full bg-[#F9FAF7] lg:hidden mb-8">
                <div className="grid grid-cols-2 gap-3 md:flex md:items-center md:gap-4 md:w-full">
                    
                    {/* Industry Dropdown */}
                    <div className="relative w-full md:w-1/3">
                        <select
                            value={selectedIndustry !== null ? selectedIndustry : -1}
                            onChange={(e) => {
                                const val = Number(e.target.value);
                                if (val === -1) return;
                                setSelectedIndustry(val);
                            }}
                            className="w-full appearance-none rounded-full border border-gray-300 bg-white pl-4 pr-10 py-3 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none truncate"
                        >
                            {industryOptions.map((item) => (
                                <option key={item.id} value={item.id} disabled={item.id === -1} className={item.id === -1 ? "text-gray-400" : ""}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Technology Dropdown */}
                    <div className="relative w-full md:w-1/3">
                        <select
                            value={selectedTechnology !== null ? selectedTechnology : -1}
                            onChange={(e) => {
                                const val = Number(e.target.value);
                                if (val === -1) return;
                                setSelectedTechnology(val);
                            }}
                            className="w-full appearance-none rounded-full border border-gray-300 bg-white pl-4 pr-10 py-3 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none truncate"
                        >
                            {technologyOptions.map((item) => (
                                <option key={item.id} value={item.id} disabled={item.id === -1} className={item.id === -1 ? "text-gray-400" : ""}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Search Bar */}
                    <div className="col-span-2 w-full md:col-span-1 md:w-1/3">
                        <div className="relative flex items-center rounded-full border border-gray-300 bg-white px-4 py-3 shadow-sm">
                            <Search className="mr-2 h-4 w-4 text-[#0C64CE]" />
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- DESKTOP SIDEBAR VIEW --- */}
            <aside className="hidden lg:block h-full w-auto max-w-fit rounded-2xl bg-[#F1F5F5] p-6 shadow-sm sticky top-[8vw] px-[3.125vw] py-[1.719vw]">
                <h4 className="mb-4 text-xl font-medium lg:mb-[1.6667vw] lg:text-[1.5625vw] lg:leading-[1.67vw]">
                    Filters
                </h4>

                {/* Search */}
                <div className="mb-6 lg:mb-[1.6667vw]">
                    <div className="flex w-full items-center rounded-full border border-gray-300 bg-white px-4 py-2 lg:px-[0.833vw] lg:py-[0.625vw]">
                        <Search className="mr-2 h-5 w-5 lg:mr-[0.625vw] lg:h-[1.25vw] lg:w-[1.25vw] text-[#0C64CE]" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-transparent text-base text-gray-700 placeholder-gray-400 focus:outline-none lg:text-[1.041vw]"
                        />
                    </div>
                </div>

                {/* Industry */}
                <div className="mb-6 lg:mb-[1.6667vw]">
                    <h3 className="mb-4 text-xs! font-medium text-black lg:mb-[1.0417vw] lg:text-[1.25vw]!">
                        Search By Industry
                    </h3>
                    <ul className="grid grid-cols-2 gap-2 text-base lg:gap-[0.52vw] lg:text-[1.041vw]">
                        {industriesData.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer transition ${
                                    (selectedIndustry === item.id) || (item.id === 0 && selectedIndustry === -1)
                                    ? "text-[#374151] font-medium"
                                    : "text-[#6B7280] hover:text-[#374151] hover:font-medium"
                                    }`}
                                onClick={() => setSelectedIndustry(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technology */}
                <div>
                    <h3 className="mb-4 text-xs! font-medium text-black lg:mb-[1.0417vw] lg:text-[1.25vw]!">
                        Search By Technology
                    </h3>
                    <ul className="space-y-2 text-base text-[#6B7280] lg:space-y-[0.52vw] lg:text-[1.041vw]">
                        {technologiesData.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer transition ${
                                    (selectedTechnology === item.id) || (item.id === 0 && selectedTechnology === -1)
                                    ? "font-medium text-[#374151]"
                                    : "text-[#6B7280] hover:text-[#374151] hover:font-medium"
                                    }`}
                                onClick={() => setSelectedTechnology(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}