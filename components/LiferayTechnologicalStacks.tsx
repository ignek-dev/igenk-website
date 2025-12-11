"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

const stackData = [
  {
    category: "UI Framework",
    description: "Build responsive user interfaces.",
    technologies: [
      { name: "HTML 5", logo: "/images/tech-logos/html-logo.png" },
      { name: "CSS", logo: "/images/tech-logos/css-logo.png" },
      { name: "JavaScript", logo: "/images/tech-logos/javascript-logo.png" },
      { name: "jQuery", logo: "/images/tech-logos/jquery-logo.png" },
      { name: "React", logo: "/images/tech-logos/react-logo.png" },
      { name: "Angular", logo: "/images/tech-logos/angular-logo.png" },
      { name: "Clay", logo: "/images/tech-logos/clay-logo.png" },
      { name: "JSF", logo: "/images/tech-logos/jsf-logo.png" },
      { name: "Bootstrap", logo: "/images/tech-logos/bootstrap-logo.png" },
      { name: "Lexicon", logo: "/images/tech-logos/html-logo.png" },
      { name: "AUI", logo: "/images/tech-logos/aui-logo.png" },
    ],
  },
  {
    category: "Apps Integration",
    description: "Connect multiple applications seamlessly.",
    technologies: [
      { name: "Apache ActiveMQ", logo: "/images/tech-logos/apache_activeMQ.svg" },
      { name: "Google Drive", logo: "/images/tech-logos/google_drive.svg" },
      { name: "Google Analytics", logo: "/images/tech-logos/google_analytics.svg" },
      { name: "Microsoft Teams", logo: "/images/tech-logos/microsoft_teams.svg" },
      { name: "GZendesk Chat", logo: "/images/tech-logos/zendesk_chat.png" },
      { name: "MS Office", logo: "/images/tech-logos/MS_Office.svg" },
      { name: "Google Maps", logo: "/images/tech-logos/google_maps.svg" },
      { name: "Azure file storage", logo: "/images/tech-logos/azure_file_storage.svg" },
    ],
  },
  {
    category: "Database",
    description: "Manage and store data.",
    technologies: [
      { name: "MongoDB", logo: "/images/tech-logos/mongoDB.svg" },
      { name: "MySQL", logo: "/images/tech-logos/MySQL.svg" },
      { name: "PostgreSQL", logo: "/images/tech-logos/postgreSQL.svg" },
      { name: "Oracle", logo: "/images/tech-logos/Oracle.svg" },
      { name: "MS SQL", logo: "/images/tech-logos/MSSQL.svg" },
      { name: "HSQL", logo: "/images/tech-logos/hypersql.webp" },
    ],
  },
  {
    category: "Payment Integration",
    description: "Enable secure payment processing.",
    technologies: [
      { name: "Stripe", logo: "/images/tech-logos/Stripe.svg" }, // Placeholder path
      { name: "Vonage", logo: "/images/tech-logos/Vonage-Conference.svg" }, // Placeholder path
    ],
  },
  {
    category: "APIs",
    description: " Facilitate system communication efficiently.",
    technologies: [
      { name: "RESTful APIs", logo: "/images/tech-logos/REST_APIs.jpg" },
      { name: "Rest Builder", logo: "/images/tech-logos/Rest_Builder.png" },
      { name: "Soap", logo: "/images/tech-logos/Soap.png" },
      { name: "JAX RS", logo: "/images/tech-logos/JAX_RS.png" },
    ],
  },
  {
    category: "Deployment",
    description: "Launch applications to environments.",
    technologies: [
      { name: "Manual Deployment", logo: "/images/tech-logos/manual-deployment.png" },
      { name: "Scheduled Deployment", logo: "/images/tech-logos/schedule-deployment.jpg" },
      { name: "CICD", logo: "/images/tech-logos/CICD.webp" },
    ],
  },
  {
    category: "Authentication",
    description: "Secure user access control.",
    technologies: [
      { name: "SAML", logo: "/images/tech-logos/saml.png" },
      { name: "Google Authentication (2FA)", logo: "/images/tech-logos/Google_Authentication.png" },
      { name: "OpenID", logo: "/images/tech-logos/OpenID.svg" },
      { name: "Facebook Login", logo: "/images/tech-logos/Facebook_Login.png" },
      { name: "Oauth2.0", logo: "/images/tech-logos/Oauth2.png" },
      { name: "LDAP", logo: "/images/tech-logos/LDAP.png" },
      { name: "CAS", logo: "/images/tech-logos/CAS.png" },
    ],
  },
  {
    category: "Persistence (JPA)",
    description: "Store objects in database.",
    technologies: [
      { name: "Hibernate", logo: "/images/tech-logos/Hibernate.png" },
      { name: "Struts", logo: "/images/tech-logos/struts.svg" },
    ],
  },
  {
    category: "Search Engine",
    description: "Efficiently find data quickly.",
    technologies: [{ name: "Elastic Search", logo: "/images/tech-logos/elasticsearch.png" }],
  },
  {
    category: "Server Setup",
    description: "Configure servers for performance.",
    technologies: [
      { name: "Docker", logo: "/images/tech-logos/Docker.svg" },
      { name: "Cloud", logo: "/images/tech-logos/cloud.svg" },
      { name: "Virtual Private Servers", logo: "/images/tech-logos/VPS.png" },
      { name: "On-Premises Servers", logo: "/images/tech-logos/on-premise.png" },
    ],
  },
  {
    category: "Frontend Component",
    description: "Build interactive web elements.",
    technologies: [
      { name: "Material UI", logo: "/images/tech-logos/Material_UI.svg" },
      { name: "Clay", logo: "/images/tech-logos/cluyUi.png" },
      { name: "Chakra UI", logo: "/images/tech-logos/Chakra_UI.svg" },
      { name: "React Bootstrap", logo: "/images/tech-logos/React Bootstrap.svg" },
    ],
  },

  {
    category: "Build Tools",
    description: "Automate software compilation process.",
    technologies: [
      { name: "Gradle", logo: "/images/tech-logos/gradle.png" },
      { name: "Maven", logo: "/images/tech-logos/maven.svg" },
      { name: "Gulp", logo: "/images/tech-logos/gulp.svg" },
      { name: "NPM", logo: "/images/tech-logos/npm.svg" },
      { name: "Ant", logo: "/images/tech-logos/Apache-Ant.png" },
    ],
  },
  {
    category: "3rd Party API Integration",
    description: "Connect external services easily.",
    technologies: [
      { name: "Google Meet", logo: "/images/tech-logos/Google_Meet.png" },
      { name: "Zoom", logo: "/images/tech-logos/Zoom.png" },
      { name: "Teams", logo: "/images/tech-logos/Teams.png" },
      { name: "Jitsi", logo: "/images/tech-logos/Jitsi.png" },
      { name: "Twilio", logo: "/images/tech-logos/Twilio.png" },
      { name: "Digital Signature", logo: "/images/tech-logos/Digital_Signature.png" },
      { name: "Jasper Reports", logo: "/images/tech-logos/Jasper.png" },
    ],
  },
  {
    category: "Source Control",
    description: "Manage code versioning.",
    technologies: [
      { name: "Github", logo: "/images/tech-logos/Github.png" },
      { name: "GitLab", logo: "/images/tech-logos/GitLab.png" },
      { name: "Bitbucket", logo: "/images/tech-logos/Bitbucket.png" },
      { name: "SVN", logo: "/images/tech-logos/SVN.svg" },
    ],
  },
  {
    category: "Project Management Tools",
    description: "Track tasks and progress.",
    technologies: [
      { name: "Jira", logo: "/images/tech-logos/jira.svg" },
      { name: "Asana", logo: "/images/tech-logos/asana.svg" },
      { name: "Trello", logo: "/images/tech-logos/trello.svg" },
    ],
  },
]

export const LiferayTechnologicalStacks = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [topOffset, setTopOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  // Calculate Y offset of the hovered item
  const handleHover = (index: number) => {
    setActiveIndex(index)
    if (itemsRef.current[index] && containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top
      const itemTop = itemsRef.current[index]!.getBoundingClientRect().top
      const offset = itemTop - containerTop
      setTopOffset(offset)
    }
  }

  useEffect(() => {
    // set initial position on mount
    handleHover(0)
  }, [])

  return (
    <section className="relative bg-[#F6F6F6] py-[3.333vw] text-black">
      <div className="global-container">
        <div className="w-full">
          <h2 className="">Liferay Technological Stacks</h2>
          <p className="p18 mt-[1.458vw] text-black/80">
            Liferay runs on a strong mix of technologies that keep it stable and future-ready. It uses Java as its core
            language, supports multiple databases, and allows integration with many other systems. The platform also
            uses modern front-end tools to make websites look great and work smoothly on all devices.
          </p>
        </div>

        {/* Main layout */}
        <div className="item-start relative mt-[3.385vw] flex flex-col md:flex-row md:gap-16" ref={containerRef}>
          {/* Left Side */}
          <div className="relative z-10 flex w-full flex-col gap-y-[3.125vw] md:w-1/4">
            {stackData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el
                }}
                onMouseEnter={() => handleHover(index)}
                className={`relative flex max-w-[362px] cursor-pointer items-center border-l-[5px] border-[#D1D5DB] p-[20px] pl-[32px] transition-all duration-300 ${
                  activeIndex === index ? "bg-blue-600 text-white shadow-md" : "text-black hover:bg-blue-100"
                }`}
                style={{ minHeight: "90px" }}
              >
                <div>
                  <p className="text-[1.563vw] font-medium">{item.category}</p>
                  <p className={`mt-[4px] text-[0.833vw] ${activeIndex === index ? "text-white/90" : "text-black/70"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="w-full transition-all duration-300 md:w-3/4 sticky top-[30%] h-[100%]">
            {(() => {
              const cols = 4
              const items = stackData[activeIndex]?.technologies ?? []
              const total = items.length

              return (
                <div className="tech-grid grid grid-cols-4 overflow-hidden">
                  {items.map((tech, index) => {
                    const colIndex = index % cols
                    const lastCol = colIndex === cols - 1
                    const lastRow = index >= total - cols

                    return (
                      <div
                        key={index}
                        className={`tech-cell relative flex flex-col items-center justify-center py-6 px-7 transition ${
                          lastCol ? "tech-cell--last-col" : ""
                        } ${lastRow ? "tech-cell--last-row" : ""} `}
                      >
                        <Image src={tech.logo} alt={tech.name} width={130} height={130} className="object-contain" />
                        <span className="mt-[0.625vw] text-[1.042vw] font-medium text-black/90">{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiferayTechnologicalStacks
