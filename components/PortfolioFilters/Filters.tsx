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
    const industries = [
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


    const technologies = [
        { id: 198, name: "Liferay" },
        { id: 199, name: "React" },
        { id: 200, name: "Spring Boot" }
    ];

    return (
        <aside className="h-full w-full rounded-2xl bg-[#F1F5F5] p-6 shadow-sm lg:sticky lg:top-[8vw] lg:w-auto lg:max-w-fit lg:px-[3.125vw] lg:py-[1.719vw]">

            <h4 className="mb-4 text-xl font-medium lg:mb-[1.6667vw] lg:text-[1.5625vw] lg:leading-[1.67vw]">
                Filters
            </h4>

            {/* Search */}
            <div className="mb-6 lg:mb-[1.6667vw]">
                <div className="flex items-center w-full bg-white rounded-full px-4 py-2 lg:px-[0.833vw] lg:py-[0.625vw] border border-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#0C64CE"
                        className="mr-2 h-5 w-5 lg:mr-[0.625vw] lg:h-[1.25vw] lg:w-[1.25vw]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                        />
                    </svg>

                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full text-base lg:text-[1.041vw] bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Industry */}
            <div className="mb-6 lg:mb-[1.6667vw]">
                <h3 className="mb-4 text-xs! font-medium text-black lg:mb-[1.0417vw] lg:text-[1.25vw]!">
                    Search By Industry
                </h3>

                <ul className="grid grid-cols-2 gap-[0.52vw] text-[1.041vw]">
                    {industries.map((item) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer transition ${selectedIndustry === item.id
                                ? "text-[#374151] font-medium"
                                : "text-[#6B7280] hover:text-[#374151] hover:font-medium"
                                }`}
                            onClick={() =>
                                setSelectedIndustry(selectedIndustry === item.id ? null : item.id)
                            }
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

                <ul className="space-y-[0.52vw] text-[1.041vw] text-[#6B7280]">
                    {technologies.map((item) => (
                        <li
                            key={item?.id}
                            className={`cursor-pointer transition ${selectedTechnology === item?.id
                                ? "font-medium text-[#374151]"
                                : "text-[#6B7280] hover:text-[#374151] hover:font-medium"
                                }`}
                            onClick={() =>
                                setSelectedTechnology(selectedTechnology === item?.id ? null : item?.id)
                            }
                        >
                            {item?.name}
                        </li>
                    ))}
                </ul>
            </div>

        </aside>



    );
}
