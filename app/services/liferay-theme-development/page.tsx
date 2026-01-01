import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import ThemeDevelopment from "./ThemeDevelopment"

export const metadata: Metadata = constructMetadata({
  title: "Liferay Theme Development Services | Responsive UI & UX - IGNEK",
  description: "Transform your Liferay portal with expert theme development. IGNEK crafts visually stunning, responsive, and user-centric Liferay themes tailored to your brand.",
  canonicalUrl: "https://www.ignek.com/services/liferay-theme-development/",
  keywords: ["Liferay Theme Development", "Liferay UI/UX", "Liferay Responsive Themes"],
})

export default function LiferayThemeDevelopmentPage() {
  return (
    <ThemeDevelopment />
  )
}
