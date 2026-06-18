import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCarousel } from "@/sections/ProjectsSection/components/ProjectCarousel";

export type ProjectsSectionProject = {
  imageUrl: string;
  imageAlt: string;
  badgeText: string;
  title: string;
  location: string;
  price: string;
  desktopPrice: string;
  averagePrice: string;
  sizeStartsAt: string;
  roadWidth: string;
  approvedBy: string;
  amenities: string[];
  nearby: string[];
  builderName: string;
  builderType: string;
  builderLogoUrl: string;
  builderLogoAlt: string;
  builderInitial: string;
};

export type ProjectsSectionProps = {
  rootElement: string;
  className: string;
  headerContainerClassName: string;
  title: string;
  titleClassName: string;
  underlineClassName: string;
  description: string;
  carouselVariant: string;
  projects: ProjectsSectionProject[];
};

export const ProjectsSection = (props: ProjectsSectionProps) => {
  const content = (
    <>
      <SectionHeader
        containerClassName={props.headerContainerClassName}
        title={props.title}
        titleClassName={props.titleClassName}
        underlineClassName={props.underlineClassName}
        description={props.description}
      />
      <ProjectCarousel
        variant={props.carouselVariant}
        projects={props.projects}
      />
    </>
  );

  if (props.rootElement === "section") {
    return <section className={props.className}>{content}</section>;
  }

  return <div className={props.className}>{content}</div>;
};
