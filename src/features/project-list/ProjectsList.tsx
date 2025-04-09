import { Link } from "@tanstack/react-router";

import Button from "~/components/Button";
import Loading from "~/components/Loading/Loading";
import { ProjectType } from "~/types/shared.types";

export type ProjectsListProps = {
  isError: boolean;
  isLoading: boolean;
  projects: ProjectType[];
};

const ProjectsList = ({ isError, isLoading, projects }: ProjectsListProps) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-md flex-col">
        <h2 className="text-center text-2xl font-bold text-neutral-300">
          Projects
        </h2>
        {isError && (
          <div className="flex w-full justify-center">
            <h2 className="text-center text-2xl font-bold text-red-500">
              Error loading projects
            </h2>
          </div>
        )}
        {!isError && !isLoading && projects?.length === 0 && (
          <div className="flex w-full justify-center">
            <h2 className="text-center text-2xl font-bold text-neutral-300">
              No locations found
            </h2>
          </div>
        )}
        {isLoading && (
          <div className="flex w-full justify-center">
            <Loading />
          </div>
        )}
        {!isError && !isLoading && projects?.length !== 0 && (
          <ul className="flex flex-col gap-1">
            {projects?.map(({ id, name }) => {
              return (
                <li
                  className="grid grid-cols-2 items-center gap-4 px-4 py-1"
                  key={name}
                >
                  <span className="text-medium text-neutral-300">{name}</span>
                  <Button asChild={true} size="small" variant="contained">
                    <Link params={{ projectId: id }} to="/projects/$projectId">
                      View
                    </Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;
