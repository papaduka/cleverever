import Heading from "./styles.tsx"

interface AgeLinkProps {
  ageRange: string;
  href: string;
  iconSrc: string;
  altText: string;
}

function AgeLink({ ageRange, href, iconSrc, altText }: AgeLinkProps) {
    return (
      <a
        className="age-link"
        href={href}
        style={{ display: "inline-block", margin: "0 2rem" }}
      >
        <li
          className="age-link__list-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            className="age-link__graphic-circle"
            style={{
              position: "absolute",
              borderRadius: "50%",
              backgroundColor: "rgba(128, 0, 128, 0.2)", // Purple with 20% opacity
              width: "110px",
              height: "110px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
            }}
          ></div>
          <img
            src={iconSrc}
            width="80"
            alt={altText}
            className="age-link__icon-image"
          />
          <p
            className="type type--color-default type-body type-body-l type--space-under-small type--lh-small type--align-center type--block type--sentence"
            style={{ color: "rgb(74, 144, 226)", fontWeight: "bold", zIndex: 1 }}
          >
            {ageRange}
          </p>
        </li>
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
    <section
      id="store-age-navigation"
      className="section section--default section--align-center section--padding-store-compact section--space-under-none"
    >
      <Heading
        title="Serious fun and learning for all ages."
        subtitle="With love."
      /> 
      <div className="age-links-list">
        <ul
          className="grid grid--gap-default space-under--none grid--columns-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {ageLinksData.map((ageLink) => (
            <AgeLink key={ageLink.ageRange} {...ageLink} />
          ))}
        </ul>
      </div>
    </section>
  );
}
