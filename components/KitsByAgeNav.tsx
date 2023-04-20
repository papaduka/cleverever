import Heading from "./styles.tsx"
import {
  AGE_LINK_STYLES,
  AGE_LINK_GRAPHIC_CIRCLE_STYLES,
  AGE_LINK_ICON_IMAGE_STYLES,
  AGE_LINK_AGE_RANGE_STYLES,
  GRID_STYLES,
} from "@/utils/constants.ts";

interface AgeLinkProps {
  ageRange: string;
  href: string;
  iconSrc: string;
  altText: string;
}

function AgeLink({ ageRange, href, iconSrc, altText }: AgeLinkProps) {
  return (
    <a className="age-link" href={href} style={{ display: "inline-block", margin: "0 2rem" }}>
      <div
        className="age-link__graphic-circle"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          borderRadius: "50%",
          backgroundColor: "rgba(128, 0, 128, 0.2)", // Purple with 20% opacity
          width: "138px",
          height: "138px",
          padding: "20px 0",
        }}
      >
        <img
          src={iconSrc}
          width="80"
          alt={altText}
          className="age-link__icon-image"
        />
        <p
          className="type type--color-default type-body type-body-l type--space-under-small type--lh-small type--align-center type--block type--sentence"
          style={{
            color: "#4f06be",
            fontWeight: "bold",
          }}
        >
          {ageRange}
        </p>
      </div>
    </a>
  );
}




export default function KitsByAgeNav() {
  const ageLinksData: AgeLinkProps[] = [
    {
      ageRange: "2-4",
      href: "/us/store/cp/0-2-years-old",
      iconSrc: "/toddler.svg",
      altText: "Shop by age 2-4 years old",
    },
    {
      ageRange: "5-8",
      href: "/us/store/cp/0-2-years-old",
      iconSrc: "/kid.svg",
      altText: "Shop by age 5-8 years old",
    },
    {
      ageRange: "9-11",
      href: "/us/store/cp/0-2-years-old",
      iconSrc: "/pre-teen.svg",
      altText: "Shop by age 9-11 years old",
    },
    {
      ageRange: "12+",
      href: "/us/store/cp/0-2-years-old",
      iconSrc: "/teen.svg",
      altText: "Shop by age 12+ years old",
    },  
  ];

  return (
    <section id="store-age-navigation">
      <Heading title="Serious fun & learning for all ages" />
      <div className="age-links-list">
        <ul className="grid" style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: "0" }}>
          {ageLinksData.map((ageLink) => (
            <li key={ageLink.ageRange} style={{ margin: "0 2rem" }}><AgeLink {...ageLink} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
