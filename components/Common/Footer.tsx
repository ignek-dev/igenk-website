import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const menus: { title: string; items: { label: string; href: string }[] }[] = [
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Career", href: "/career" },
        { label: "Case Study", href: "#" },
        { label: "Blogs", href: "#" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { label: "Enterprise Websites", href: "#" },
        { label: "Employee Experience", href: "#" },
        { label: "Digital Commerce", href: "#" },
        { label: "Partner Experience", href: "#" },
        { label: "Supplier Experience", href: "#" },
        { label: "Customer Experience", href: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Enterprise Portal Development", href: "#" },
        { label: "Dedicated Development Team", href: "#" },
        { label: "Back-end Development", href: "#" },
        { label: "Front-end Development", href: "#" },
        { label: "Digital Transformation", href: "#" },
        { label: "SaaS Development", href: "#" },
      ],
    },
    {
      title: "Integrations",
      items: [
        { label: "Matomo Integration with Liferay", href: "#" },
        { label: "Microsoft Teams integration with Liferay", href: "#" },
        { label: "Jira Integration With Liferay", href: "#" },
      ],
    },
    {
      title: "Hire Us",
      items: [
        { label: "Liferay", href: "#" },
        { label: "Spring Boot", href: "#" },
        { label: "ReactJS", href: "#" },
        { label: "Healthcare", href: "#" },
      ],
    },
  ]

  return (
    <footer className="relative bg-black text-white">
      {/* Top section: menus with right decorative lines and partial width */}
      <div className="relative mx-auto w-full px-4 md:px-6 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px] pt-20 pb-16 md:pt-24 md:pb-20 border-b border-white/100 ">
        {/* Decorative grid lines */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[20%] border-l border-white/100">
        </div>

        <div className="w-[80%] grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {menus.map((menu) => (
            <div key={menu.title}>
              <h4 className="text-2xl font-semibold text-white/90">{menu.title}</h4>
              <ul className="mt-5 space-y-3 text-xl text-white/80">
                {menu.items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href} className="hover:text-white">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section: contacts + big logo + motto + bottom bar */}
      <div className="relative mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-20 md:pt-16 md:pb-24">
        {/* Horizontal divider across 80% width */}
        <div className="pointer-events-none absolute left-0 right-[20%] top-0 h-px bg-white/20" />
        {/* Right decorative curve */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[20%] border-l border-white/100">
        </div>
        

        <div className="w-[80%]">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h5 className="text-2xl font-semibold">Emails</h5>
              <div className="mt-4 space-y-3 text-xl text-white/80">
                <div>
                  <Link href="mailto:sales@ignek.com" className="hover:text-white">
                    sales@ignek.com
                  </Link>
                  <div className="text-lg text-gray-600">(For sales inquiry)</div>
                </div>
                <div>
                  <Link href="mailto:hr@ignek.com" className="hover:text-white">
                    Hr@ignek.com
                  </Link>
                  <div className="text-lg text-gray-600">(For hiring inquiry)</div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-2xl font-semibold">Call</h5>
              <div className="mt-4 space-y-3 text-xl text-white/80">
                <div>
                  <Link href="tel:+916351576580" className="hover:text-white">
                    (+91) 635 157 6580
                  </Link>
                  <div className="text-lg text-gray-600">(For sales inquiry)</div>
                </div>
                <div>
                  <Link href="tel:+919328495160" className="hover:text-white">
                    (+91) 932 849 5160
                  </Link>
                  <div className="text-lg text-gray-600">(For hiring inquiry)</div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-2xl font-semibold">Office</h5>
              <p className="mt-4 text-xl text-white/80">
                E 910-912, Ganesh Glory 11, Jagatpur Road, SG Highway, Ahmedabad, Gujarat - 382470
              </p>
            </div>
          </div>

          {/* Big brand logo */}
          <div className="mt-12 flex justify-center">
            <Image src="/images/footer_logo.svg" alt="IGNEK" width={1350} height={355} className="h-auto w-full max-w-5xl" />
          </div>
          <p className="mt-6 text-2xl text-center tracking-[0.3em] text-white/80 spacing-7">DRIVING DIGITAL SOLUTIONS</p>
        </div>
      </div>
    </footer>
  )
}