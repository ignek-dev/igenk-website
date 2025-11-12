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
        <aside className="w-full md:w-1/4 lg:w-1/4 bg-[#F1F5F5] p-5 rounded-2xl shadow-sm h-full">
            <h2 className="font-semibold text-2xl mb-4">Filters</h2>

            {/* Search */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-200 "
                />
            </div>

            {/* Industry */}
            <div className="mb-6">
                <h3 className="font-semibold text-xl text-black mb-2">Search By Industry</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-lg text-gray-600">
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
