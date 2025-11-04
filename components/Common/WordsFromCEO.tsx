// components/Liferay/WordsFromCEO.tsx

export default function WordsFromCEO() {
  return (
    <section className="bg-black py-[64px] text-white">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Left Side: CEO Message Card */}
          <div className="w-full md:w-1/2">
            {/* Gradient Border Effect */}
            <div className="rounded-2xl bg-gradient-to-br from-[#00979E] to-black p-px">
              <div className="h-full w-full rounded-[15px] bg-black p-10">
                <h2 className="line-height-[60px] letter-spacing-[0.02em] mb-6 text-4xl font-semibold">
                  Words From Our CEO
                </h2>
                <p className="line-height-[30px] mb-8 text-justify text-lg leading-relaxed text-gray-300">
                  Over the past decade, my journey with Liferay has been a fascinating one. I’ve been there from its
                  version 6.0 and have watched it take significant steps in OSGI frameworks. I’ve followed its
                  progress in OSGI frameworks and witnessed its evolution from a basic Enterprise Content Management
                  System (CMS) into a comprehensive and highly Advanced Digital Experience Platform (DXP). Along the
                  way, I’ve seen the introduction of groundbreaking solutions like Liferay Commerce, the establishment
                  of Liferay Analytics Cloud, and the enhancement of its headless architecture capabilities. Liferay
                  stands as a genuine digital experience platform, consistently leading the way in the domain of
                  digital transformation. It empowers businesses to craft immersive and personalized experiences for
                  both customers and employees. What truly sets Liferay apart is its exceptional ability to tailor
                  solutions to meet the unique needs of various industries. Working with Liferay has been a both
                  enlightening and fulfilling experience, and I’m excited to continue this journey.
                </p>
                <div>
                  <p className="line-height-[44px] letter-spacing-[0.02em] font-serif text-5xl text-white italic">
                    Bhavin Panchani
                  </p>
                  <p className="line-height-[30px] text-xl text-gray-400">
                    Liferay Certified, Liferay Architect, 10+ Years Of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/liferay-pages-image/liferay-consultation-page/CEO-image.png"
              alt="CEO Bhavin Panchani"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}