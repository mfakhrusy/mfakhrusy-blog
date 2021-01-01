import SiteConfig from "@/config/seo.json";

type SiteMetadata = typeof SiteConfig["siteMetadata"];

export function getSiteMetaData(): SiteMetadata {
  return SiteConfig.siteMetadata;
}
