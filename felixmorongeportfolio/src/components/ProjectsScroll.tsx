import SectionBlock from './SectionBlock';

const sections = [
  { id: 'projects', title: 'Projects' },
  { id: 'resume', title: 'Resume' },
  { id: 'work', title: 'Work History' },
  { id: 'skills', title: 'Skills & Tools' },
];

export default function ProjectsScroll() {
  return (
    <div className="relative space-y-0 snap-y snap-mandatory h-full overflow-y-scroll">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="h-screen snap-start flex flex-col justify-center items-center"
        >
          <SectionBlock title={section.title} />
        </section>
      ))}
    </div>
  );
}
