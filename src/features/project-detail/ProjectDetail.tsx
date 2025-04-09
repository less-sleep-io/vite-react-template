import Loading from "~/components/Loading/Loading";
import { ProjectType } from "~/types/shared.types";

const ProjectDetail = ({
  isLoading,
  project,
}: {
  isLoading: boolean;
  project?: ProjectType;
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (project) {
    return (
      <div>
        <table>
          <tbody>
            {[
              {
                label: "Name",
                value: project.name,
              },
            ].map(({ label, value }) => {
              return (
                <tr key={label}>
                  <th className="py-2 pr-1 text-neutral-300">{label}:</th>
                  <td className="py-2 pl-1 text-neutral-300">{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ProjectDetail;
