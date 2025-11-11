export default function Filters() {
    return (
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-white p-5 rounded-2xl shadow-sm h-full">
            <h2 className="font-semibold text-2xl mb-4">Filters</h2>

            {/* Search */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-200"
                />
            </div>

            {/* Search by Industry */}
            <div className="mb-6">
                <h3 className="font-semibold text-xl text-black mb-2">
                    Search By Industry
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-lg text-gray-600">
                    {[
                        "Telecom",
                        "Communication",
                        "Fintech",
                        "Electronics",
                        "Corporate",
                        "Government",
                        "Manufacturing",
                        "NGOs",
                    ].map((item) => (
                        <li
                            key={item}
                            className="hover:text-indigo-600 cursor-pointer transition"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

            </div>

            {/* Search by Technology */}
            <div>
                <h3 className="font-medium text-xl text-black mb-2">
                    Search By Technology
                </h3>
                <ul className="space-y-1 text-lg text-gray-600">
                    {["Liferay", "React", "Spring Boot"].map((item) => (
                        <li
                            key={item}
                            className="hover:text-indigo-600 cursor-pointer transition"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
