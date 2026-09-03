import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { LinkedText } from "@/components/ui/LinkedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — John Mthembu`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: [{ url: project.heroImage.split("?")[0] }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const siteHost = project.link
    ? project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  return (
    <article className="pt-32 pb-20">
      <header className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)] mb-16">
        <Link
          href="/work"
          className="text-label text-stone link-hover mb-8 inline-block"
          data-cursor="pointer"
        >
          ← Back to work
        </Link>

        <p className="text-label text-accent mb-4">{project.tags.join(" · ")}</p>
        <h1 className="font-display text-display-xl max-w-4xl">{project.title}</h1>
        <p className="mt-6 text-body-lg text-stone max-w-2xl">
          <LinkedText text={project.description} />
        </p>

        {project.link && (
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton
              href={project.link}
              className="border border-ink bg-ink px-6 py-3 text-label text-ivory transition-colors hover:bg-charcoal"
            >
              Visit live site →
            </MagneticButton>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-caption text-stone link-hover"
              data-cursor="pointer"
            >
              {siteHost}
            </a>
          </div>
        )}

        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <dt className="text-label text-stone">Client</dt>
            <dd className="mt-1 font-display text-display-sm">
              <LinkedText text={project.client} />
            </dd>
          </div>
          <div>
            <dt className="text-label text-stone">Year</dt>
            <dd className="mt-1 font-display text-display-sm">{project.year}</dd>
          </div>
          <div>
            <dt className="text-label text-stone">Role</dt>
            <dd className="mt-1 font-display text-display-sm">{project.role}</dd>
          </div>
          <div>
            <dt className="text-label text-stone">
              {project.link ? "Website" : "Category"}
            </dt>
            <dd className="mt-1 font-display text-display-sm">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover text-accent"
                  data-cursor="pointer"
                >
                  {siteHost}
                </a>
              ) : (
                <span className="capitalize">{project.category.join(", ")}</span>
              )}
            </dd>
          </div>
        </dl>
      </header>

      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)] mb-20">
        <ImageReveal
          src={project.heroImage}
          alt={`${project.title} hero image`}
          aspectRatio="16/9"
          priority
        />
      </div>

      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        {project.caseStudy.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className="grid grid-cols-1 gap-8 border-t border-ink/10 py-16 lg:grid-cols-12 lg:gap-16"
            aria-labelledby={`section-${section.id}`}
          >
            <div className="lg:col-span-4">
              <span className="text-label text-stone">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2
                id={`section-${section.id}`}
                className="font-display text-display-sm mt-2"
              >
                {section.title}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-body-lg text-stone leading-relaxed whitespace-pre-line">
                <LinkedText text={section.content} />
              </p>

              {section.images && section.images.length > 0 && (
                <div className="mt-8 grid grid-cols-1 gap-6">
                  {section.images.map((img) => (
                    <div key={img} className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={img}
                        alt={`${project.title} — ${section.title}`}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="(max-width: 1200px) 100vw, 800px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {project.link && (
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)] pb-8">
          <div className="flex flex-col gap-4 border border-ink/10 bg-ivory px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-label text-stone mb-2">Preview the platform</p>
              <p className="font-display text-display-sm">
                Open {project.title} in a new tab
              </p>
            </div>
            <MagneticButton
              href={project.link}
              className="border border-ink bg-ink px-6 py-3 text-label text-ivory transition-colors hover:bg-charcoal"
            >
              Visit live site →
            </MagneticButton>
          </div>
        </div>
      )}

      {project.gallery.length > 0 && (
        <section className="section-padding bg-dark-section" aria-label="Project gallery">
          <div className="horizontal-scroll">
            {project.gallery.map((img) => (
              <div
                key={img}
                className="relative w-[80vw] max-w-lg aspect-[4/3] overflow-hidden shrink-0"
              >
                <Image
                  src={img}
                  alt={`${project.title} gallery`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="80vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section-padding border-t border-ink/10">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
          <p className="text-label text-stone mb-8">Next project</p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center"
            data-cursor="pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={nextProject.thumbnail}
                alt={nextProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-display text-display-md transition-colors group-hover:text-accent">
                {nextProject.title}
              </h3>
              <p className="mt-3 text-body-lg text-stone">
                <LinkedText text={nextProject.description} />
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-label">
                View project →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
