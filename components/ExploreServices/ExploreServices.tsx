"use client";

import { ArrowUpRight } from "lucide-react";

export default function ExploreServices() {
  return (
    <section className="bg-[#0B0B0B] text-white rounded-2xl p-10 flex flex-col gap-6">
      {/* Title */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">Explore Our Services</h2>
        <p className="text-gray-300 leading-relaxed ">
          And find out how we can help your small startup, SME, or large enterprise
          succeed. We are here to support your requirements and objectives with our
          knowledge and resources.
        </p>
      </div>

      {/* Service Link */}
      <div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#00ADB5] font-medium hover:underline"
        >
          Liferay Development &amp; Customization
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Subscribe Input */}
      <div className="flex flex-col gap-2 w-full max-w-xl">
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 bg-[#1A1A1A] text-gray-200 px-4 py-3 rounded-l-lg outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#00ADB5]"
          />
          <button className="bg-[#00ADB5] hover:bg-[#019CA3] text-white px-6 py-3 rounded-r-lg font-medium transition">
            Subscribe
          </button>
        </div>
        <span className="text-white text-sm">Subscribe to our channel</span>
      </div>
    </section>
  );
}
