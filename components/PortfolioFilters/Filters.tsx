interface FiltersProps {
    search: string;
    setSearch: (v: string) => void;
    selectedIndustry: string | null;
    setSelectedIndustry: (v: string | null) => void;
    selectedTechnology: string | null;
    setSelectedTechnology: (v: string | null) => void;
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
        "Telecom",
        // "Enterprise Website",
        "Communication",
        "Fintech",
        "Manufacturing",
        "Electronics",
        "Corporate",
        "IT Sector",
        "Government",
        "Intranet",
        "Hospitality",
        "NGOs",
        "Aviation",
        "Saas "
    ];

    const technologies = ["Liferay", "React", "Spring Boot"];

    return (
        <aside className="w-auto max-w-fit bg-[#F1F5F5] p-5 rounded-2xl shadow-sm h-full pb-20">
            <h2 className="font-semibold text-2xl mb-4">Filters</h2>

            {/* Search */}
            <div className="mb-6">
                <div className="flex items-center w-full bg-white rounded-full px-4 py-3 border border-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#0C64CE"
                        className="w-6 h-6 mr-3"
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
                        className="w-full text-xl bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                    />
                </div>
            </div>


            {/* Industry */}
            <div className="mb-6">
                <h3 className="font-semibold text-xl text-black mb-2">Search By Industry</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg text-gray-600">
                    {industries.map((item) => (
                        <li
                            key={item}
                            className={`cursor-pointer transition ${selectedIndustry === item
                                ? "font-semibold text-black"
                                : "hover:font-semibold"
                                }`}
                            onClick={() =>
                                setSelectedIndustry(selectedIndustry === item ? null : item)
                            }
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Technology */}
            <div>
                <h3 className="font-medium text-xl text-black mb-2">Search By Technology</h3>
                <ul className="space-y-1 text-lg text-gray-600">
                    {technologies.map((item) => (
                        <li
                            key={item}
                            className={`cursor-pointer transition ${selectedTechnology === item
                                ? "font-semibold text-black"
                                : "hover:font-semibold"
                                }`}
                            onClick={() =>
                                setSelectedTechnology(selectedTechnology === item ? null : item)
                            }
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>


    );
}
