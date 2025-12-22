"use client";
import { useParams } from "next/navigation";
import Prism from "prismjs";
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react";
import "prismjs/themes/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/line-numbers/prism-line-numbers";

import "../../../components/Portfolio/PortfolioRenderer.css";
import { BlogSection } from "components/Common";
import CaseStudy from "components/Common/CaseStudy";

import Loader from "components/UI/Loader/Loader";


const caseStudies = [
  { id: 1, image: "/images/liferay-pages-image/caseStudy.png", tag: "Corporate", title: "Music License Management Portal: Onboarding & Data Integrity", description: "Lorem ipsum dolor sit amet..." },
  { id: 2, image: "/images/liferay-pages-image/caseStudy.png", tag: "FinTech", title: "Transforming Financial Services with Innovations", description: "Suspendisse potenti..." },
  { id: 3, image: "/images/liferay-pages-image/caseStudy.png", tag: "Healthcare", title: "Digital Health Platform: Patient-Centric Solutions", description: "Praesent ut ligula..." },
  { id: 4, image: "/images/liferay-pages-image/caseStudy.png", tag: "E-commerce", title: "Scaling Online Retail with Cloud Technologies", description: "Curabitur at lacus..." }
];

interface WPPortfolioPost {
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

export default function PortfolioRenderer() {
  const params = useParams();
  const slug = params.slug as string; // ✅ GET SLUG FROM URL

  const [post, setPost] = useState<WPPortfolioPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);

  // Load external CSS
  useEffect(() => {
    const cssUrls = [
      "https://www.ignek.com/wp-content/litespeed/css/ad83c34674cf09f56d46e7ed16b9ba6d.css?ver=ac0b8",
      "https://www.ignek.com/wp-content/litespeed/css/e5f517224ca259b2712b7381a2ffa7f0.css?ver=78aff",
      "https://www.ignek.com/wp-content/litespeed/css/0bbfb2c9170dc57a341ba754dd2e7b93.css?ver=13339",
      "https://www.ignek.com/wp-content/litespeed/css/3cd06061990ac340055b721bdb7e91bb.css?ver=5aefa",
      "https://www.gstatic.com/recaptcha/releases/naPR4A6FAh-yZLuCX253WaZq/styles__ltr.css",
      "https://www.ignek.com/wp-content/litespeed/css/641b8ac492ae62e0937c42f5a415e82e.css?ver=d61f9",
      "https://insights.ignek.com/wp-content/litespeed/css/d4d6d91032223f3b33cd2e79392b7260.css?ver=c3e76",
      "https://insights.ignek.com/wp-content/litespeed/css/6e0dfda62822ae3a23843afedf698f5a.css?ver=7fd49",
      "https://insights.ignek.com/wp-content/litespeed/css/6587daaa7b836f14e9c3361d309ae1e0.css?ver=b68aa",
      "https://insights.ignek.com/wp-content/litespeed/css/48aad058e457713ed101c0a3dcaf9810.css?ver=d9be3",
      "https://insights.ignek.com/wp-content/litespeed/css/92e7379ca2183f04e056c938791983ec.css?ver=0577e",
      "https://insights.ignek.com/wp-content/litespeed/css/8d6a32d4735de004e89b296963773091.css?ver=ad9df",
      "https://insights.ignek.com/wp-content/litespeed/css/0b99099d37f908bf4250693b2ff47f7e.css?ver=29bcd",
      "https://insights.ignek.com/wp-content/litespeed/css/d3dba56531497045165c409ecfc477d2.css?ver=8fd02",
      "https://insights.ignek.com/wp-content/litespeed/css/5ddf1972705ae21fedaa8a35c4ec90fa.css?ver=099bc",
      "https://insights.ignek.com/wp-content/litespeed/css/1ec80efb77b8e3f9aa5dec3373a8a864.css?ver=c0a48",
      "https://insights.ignek.com/wp-content/litespeed/css/828ae80a2fd5614df4567577a64bbdd8.css?ver=a5f7e",
      "https://insights.ignek.com/wp-content/litespeed/css/f7e928e00d08b028c7ea815e4abeeb35.css?ver=1827a",
      "https://insights.ignek.com/wp-content/litespeed/css/087b53dd6abcfa1c800dd0b95e2af472.css?ver=01e89",
      // "https://insights.ignek.com/wp-content/litespeed/css/2b4caa9c1cafc8f9452b4c52c55e4a1a.css?ver=73f9b", //red colour
      "https://insights.ignek.com/wp-content/litespeed/css/77907fd8468d19f48493181b34e1dee8.css?ver=cce91",
      "https://insights.ignek.com/wp-content/litespeed/css/db6c5f2ea069044a5bd7d19c7c225d1d.css?ver=59f76",
      "https://insights.ignek.com/wp-content/litespeed/css/ee5b4797920a0fc1e6cb5d4fc34c50f2.css?ver=c45e3",
      "https://insights.ignek.com/wp-content/litespeed/css/d9e29050f4bf16f9b72518f5c0adeecc.css?ver=90297",
      "https://insights.ignek.com/wp-content/litespeed/css/55f8b144ed47bdeb4ac1efc3eee838ba.css?ver=e5a82",
      "https://insights.ignek.com/wp-content/litespeed/css/8e1e592b6a4b72625c8ee60ac60e078e.css?ver=39bfc",
      "https://insights.ignek.com/wp-content/litespeed/css/cc3df9992690eb0dd62f2d688b3e2054.css?ver=9039d",
      "https://insights.ignek.com/wp-content/litespeed/css/869bfd3d0de50dd9197abd4bfd389d5a.css?ver=4a039",
      "https://insights.ignek.com/wp-content/litespeed/css/bd3db6a53e7dc7338e9fce777439a075.css?ver=d7072",
      "https://insights.ignek.com/wp-content/litespeed/css/8b981374e917c1707b0cefeec185b593.css?ver=a679b",
      "https://insights.ignek.com/wp-content/litespeed/css/320172b2c7316daf2c57f8482b267351.css?ver=f95fb",
      "https://insights.ignek.com/wp-content/litespeed/css/d7b9cb6dcbb9ab390b8101c00ffd6bac.css?ver=85d95",
      "https://insights.ignek.com/wp-content/litespeed/css/a4e1437dda069c5cf58e643f5bfd72a9.css?ver=3ffff",
      "https://insights.ignek.com/wp-content/litespeed/css/e4b3ce46a8ad66dbebf2061ee3d71f25.css?ver=f7183",
      "https://insights.ignek.com/wp-content/litespeed/css/2840adf5776aa316225bca05b85ffd5a.css?ver=0533e",
      "https://insights.ignek.com/wp-content/litespeed/css/59af37d3e7c59a3eba6213bd8f9c453d.css?ver=b2caa",
      "https://insights.ignek.com/wp-content/litespeed/css/aaadf66eddb1e2790f5e03cb4cbd6743.css?ver=aee4f",
      "https://insights.ignek.com/wp-content/litespeed/css/d404874b0b09abef5f83cef8e1857fb1.css?ver=97aa7",
      "https://insights.ignek.com/wp-content/litespeed/css/bbaad9e52cbaa956db0406acac12ad27.css?ver=5bdfd",
      "https://insights.ignek.com/wp-content/litespeed/css/e5ea1ffba0b1b049dbc286f17b61d8ad.css?ver=5e2c7",
      "https://insights.ignek.com/wp-content/litespeed/css/f37fafa1fe3924b36eeb10374810eba6.css?ver=ae473",
      "https://insights.ignek.com/wp-content/litespeed/css/cbd9895a544695265396eba6e04a381a.css?ver=cccd8",
      "https://insights.ignek.com/wp-content/litespeed/css/f613e6069b70bfdb414d1f3da4074c4c.css?ver=a4ddc",
      "https://insights.ignek.com/wp-content/litespeed/css/0488a6a7cf225c663d568815e394521d.css?ver=2ba86",
      "https://insights.ignek.com/wp-content/litespeed/css/ac8e926a547843d38ef1298c4261f41b.css?ver=268dc",
      "https://insights.ignek.com/wp-content/litespeed/css/83f842d009514124edcf3089b3750055.css?ver=cb763",
      "https://insights.ignek.com/wp-content/litespeed/css/2e07b91f921f0ed31c2551121ba55278.css?ver=885f6",
      "https://insights.ignek.com/wp-content/litespeed/css/5fc2173e9eb6d28713da0beeedf8f475.css?ver=6d5b8",
      "https://insights.ignek.com/wp-content/litespeed/css/bc91c149f66b1cae900483f2b8b40c11.css?ver=5079b",
      "https://insights.ignek.com/wp-content/litespeed/css/f68b187f852d75727b9bb6ef3093158a.css?ver=c32e5",
      "https://insights.ignek.com/wp-content/litespeed/css/d4d6d91032223f3b33cd2e79392b7260.css?ver=c3e76"
    ];

    const links: HTMLLinkElement[] = [];

    cssUrls.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach((link) => document.head.removeChild(link));
    };
  }, []);

  // Fetch by SLUG
  useEffect(() => {
    if (!slug) return;

    async function fetchPost() {
      try {
        const res = await fetch(
          `https://insights.ignek.com/wp-json/wp/v2/portfolio?slug=${slug}&_embed`
        );

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = (await res.json()) as WPPortfolioPost[];

        setPost(data[0] ?? null); // WP returns array
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch post");
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  // Prism highlight
  useEffect(() => {
    if (post && contentRef.current) {
      Prism.highlightAllUnder(contentRef.current);
    }
  }, [post]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <Loader />
      </div>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!post) return <p>No post found.</p>;
  
  return (
    <>
      <main>
        <section className="relative bg-black text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
          <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
            <div className="text-center">
              <h1
                className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-7xl"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p
                className="mt-6 text-lg text-white sm:text-lg md:mt-16"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />

              <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">

                <p className="text-lg text-white sm:text-lg">Share On</p>
                <div className="flex items-center gap-4">
                  {/* <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-[0.075rem] border-[#374151] shadow-[0_0.3rem_0.75rem_0_rgba(0,151,158,0.25)] transition hover:opacity-80 active:scale-95 sm:h-[3.5rem] sm:w-[3.5rem]"></div> */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-[0.075rem] border-[#374151] shadow-[0_0.3rem_0.75rem_0_rgba(0,151,158,0.25)] transition hover:opacity-80 active:scale-95 sm:h-[3.5rem] sm:w-[3.5rem]">
                    <a href="https://www.linkedin.com/company/ignek-infotech/about/" aria-label="X"  target="blank">
                      <Image
                        src="/images/case-studies/linkedin.png"
                        alt="linkedin"
                        width={28.8}
                        height={28.8}
                        className="h-6 w-6 sm:h-[1.8rem] sm:w-[1.8rem]"
                      />
                    </a>
                  </div>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-[0.075rem] border-[#374151] shadow-[0_0.3rem_0.75rem_0_rgba(0,151,158,0.25)] transition hover:opacity-80 active:scale-95 sm:h-[3.5rem] sm:w-[3.5rem]">
                    <a href="https://x.com/ignekinfotech" aria-label="X"  target="blank">
                      <Image
                        src="/images/case-studies/whatsapp.png"
                        alt="whatsapp"
                        width={28.8}
                        height={28.8}
                        className="h-6 w-6 sm:h-[1.8rem] sm:w-[1.8rem]"
                      />
                    </a>
                  </div>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-[0.075rem] border-[#374151] shadow-[0_0.3rem_0.75rem_0_rgba(0,151,158,0.25)] transition hover:opacity-80 active:scale-95 sm:h-[3.5rem] sm:w-[3.5rem]">
                    <a href="https://www.facebook.com/ignekinfo/" aria-label="Facebook" target="blank">
                      <Image
                        src="/images/case-studies/facebook.png"
                        alt="facebook"
                        width={28.8}
                        height={28.8}
                        className="h-6 w-6 sm:h-[1.8rem] sm:w-[1.8rem]"
                      />
                    </a>

                  </div>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-[0.075rem] border-[#374151] shadow-[0_0.3rem_0.75rem_0_rgba(0,151,158,0.25)] transition hover:opacity-80 active:scale-95 sm:h-[3.5rem] sm:w-[3.5rem]">
                    <a href="https://x.com/ignekinfotech" aria-label="X" className="flex-shrink-0" target="blank">
                      <Image
                        src="/images/case-studies/twitter.png"
                        alt="twitter"
                        width={28.8}
                        height={28.8}
                        className="h-6 w-6 sm:h-[1.8rem] sm:w-[1.8rem]"
                      />
                    </a>

                  </div>
                  <div
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-[0.075rem] border-[#374151] shadow-[0_0.3rem_0.75rem_0_rgba(0,151,158,0.25)] cursor-pointer hover:opacity-80 active:scale-95 transition sm:h-[3.5rem] sm:w-[3.5rem]"
                    title="Copy link"
                  >
                    <Image
                      src="/images/case-studies/link-fill.png"
                      alt="copy link"
                      width={28.8}
                      height={28.8}
                      className="h-6 w-6 sm:h-[1.8rem] sm:w-[1.8rem]"
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </main>

      <div className="portfolio-page portfolio-detail-page">
        <article className="portfolio-article">
          <div
            className="portfolio-content elementor-content m-0"
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </div>

      <CaseStudy caseStudies={caseStudies} />
      <BlogSection />
    </>
  );
}