import Header from "../components/Header";
import Container from "../components/Container";

import HatFactory from "../assets/hat_factory.svg?react";

interface ProjectCardProps {
  title: string;
  description: string;
  path: string;
  Icon: any;
}

function ProjectCard({ title, description, path, Icon }: ProjectCardProps) {
  return (
    <a
      className="my-4 block rounded-sm border-1 border-zinc-500/30 bg-slate-100 p-4 shadow-slate-400/20 transition hover:border-slate-500/75 hover:shadow-[6px_6px] dark:bg-slate-700 dark:shadow-slate-700/50"
      href={path}
    >
      <Icon className="float-left h-12 w-12 dark:fill-slate-300" />
      <div className="ml-16">
        <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">
          {title}
        </p>
        <p className="text-slate-500 dark:text-slate-300">{description}</p>
      </div>
    </a>
  );
}

function Project() {
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-wrap justify-center">
          <ProjectCard
            title="帽子工厂"
            description="大号、中号和小号的都有"
            path="https://github.com/wiesn2333/hat_factory"
            Icon={HatFactory}
          />
        </div>
      </Container>
    </>
  );
}
export default Project;
