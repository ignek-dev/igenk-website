// components/LiferayTechnologicalStacks/index.tsx
import Image from "next/image"
import React from "react"

// --- Data for the Section ---

// This data structure matches the layout in the image,
// where each category on the left corresponds to a 4-item row on the right.
const stackData = [
  {
    category: "UI Framework",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [
      { name: "HTML 5", logo: "/images/tech-logos/html-logo.png" },
      { name: "CSS", logo: "/images/tech-logos/css-logo.png" },
      { name: "JavaScript", logo: "/images/tech-logos/javascript-logo.png" },
      { name: "JQuery", logo: "/images/tech-logos/jquery-logo.png" },
    ],
  },
  {
    category: "Apps Integration",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [
      { name: "React", logo: "/images/tech-logos/react-logo.png" },
      { name: "Angular", logo: "/images/tech-logos/angular-logo.png" },
      { name: "Clay", logo: "/images/tech-logos/clay-logo.png" }, // Placeholder path
      { name: "JSF", logo: "/images/tech-logos/jsf-logo.png" }, // Placeholder path
    ],
  },
  {
    category: "Database",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [
      { name: "Bootstrap", logo: "/images/tech-logos/bootstrap-logo.png" },
      { name: "Lexicon", logo: "/images/tech-logos/html-logo.png" }, // Placeholder path
      { name: "AUI", logo: "/images/tech-logos/aui-logo.png" }, // Placeholder path
      { name: "Liferay DXP", logo: "/images/tech-logos/liferay-dxp-logo.png" }, // Placeholder path
    ],
  },
  {
    category: "Payment Integration",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [
      { name: "Liferay CMS", logo: "/images/tech-logos/html-logo.png" }, // Placeholder path
      { name: "Liferay Cloud", logo: "/images/tech-logos/liferay-cloud-logo.png" }, // Placeholder path
      { name: "Liferay AWS", logo: "/images/tech-logos/liferay-dxp-logo.png" }, // Placeholder path
      { name: "Liferay AWP", logo: "/images/tech-logos/liferay-cloud-logo.png" }, // Placeholder path
    ],
  },
  {
    category: "APIs",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [], // Empty array will render dots
  },
  {
    category: "Deployment",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "Authentication",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "Persistence (JPA)",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "Search Engine",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "Server Setup",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "Frontend Component",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "Source Control",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "Source Control", // As per the image, this is duplicated
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "Build Tools",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "3rd Party API Integration",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
  {
    category: "Project Management Tools",
    description: "Lorem ipsum dolor sit amet, consectetur",
    technologies: [],
  },
]

// --- The Component ---

export const LiferayTechnologicalStacks = () => {
  return (
    <section className="bg-[#F6F6F6] py-16 text-black">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        <div className="w-full">
          <h2 className="text-5xl leading-tight font-bold tracking-tight">Liferay Technological Stacks</h2>
          <p className="mt-4 text-lg text-black/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue.
          </p>
        </div>

        {/* 3. Main Content Layout (Sidebar + Grid) */}
        {/* We use a flex container to hold the two columns */}
        <div className="mt-16 flex flex-col md:flex-row md:gap-15.5">
          {/* Left Side: Category List */}
          <div className="w-full md:w-1/4">
            {/* We map over the data to create the list */}
            <div className="flex flex-col gap-8">
              {stackData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex w-full items-center p-4 ${
                    index === 0 // First item is active as per image
                      ? "rounded-lg bg-blue-600 text-white"
                      : "bg-white text-black"
                  } `}
                  // This ensures each left item has a minimum height
                  // to visually align with the right-side grid boxes
                  style={{ minHeight: "90px" }}
                >
                  {/* Indicator Divider */}
                  <span
                    className={`absolute top-1/2 left-0 h-[90px] w-1 -translate-y-1/2 ${
                      index === 0 // Active state
                        ? "bg-[#D1D5DB]"
                        : "bg-gray-300"
                    } `}
                  />
                  {/* Text Content */}
                  <div className="pl-5">
                    <h3 className="text-xl font-semibold">{item.category}</h3>
                    <p className={`mt-1 text-sm ${index === 0 ? "text-white/90" : "text-black/70"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Technology Grid */}
          <div className="mt-8 max-w-[1115px] md:mt-0 md:w-3/4">
            <div className="grid grid-cols-4 overflow-hidden">
              {/* We map over the stackData again to create the grid rows */}
              {stackData.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {item.technologies.length > 0
                    ? // This item has technologies, so we render them
                      item.technologies.map((tech, index) => (
                        <div
                          key={tech.name}
                          className="tech-grid-card relative flex h-[140px] w-full flex-col items-center justify-center px-6 py-25 text-center"
                        >
                          <Image
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            width={144} // From min-w-36 (9rem * 16px)
                            height={144} // From min-h-36 (9rem * 16px)
                            objectFit="contain" // From object-contain class
                          />
                          <span className="mt-3 text-sm font-medium text-black/90">{tech.name}</span>
                          {/* Right-side dot (show for all except last column) */}
                          {(index + 1) % 4 !== 0 && (
                            <span className="absolute right-[-6px] bottom-[-6px] z-5 h-3 w-3 rounded-full bg-[#D9D9D9]"></span>
                          )}

                          {/* Bottom dot (show for all except last row) */}
                          {(index + 1) % 4 === 0 && index < item.technologies.length - 4 && (
                            <span className="absolute right-[-6px] bottom-[-6px] z-5 h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                          )}
                        </div>
                      ))
                    : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiferayTechnologicalStacks
