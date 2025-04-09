import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "~/lib/apiClient";
import { ProjectType, projectSchema } from "~/types/shared.types";

const payloadSchema = z.object({
  projectId: z.string(),
});

export type PayloadType = z.infer<typeof payloadSchema>;

export const getProjectDetail = async ({ projectId }: PayloadType) => {
  return api
    .get(`/projects/${projectId}`)
    .then((response) => projectSchema.parse(response.data))
    .catch((error) => {
      console.error("Error fetching project detail:", error);
      throw error;
    });
};

export const getProjectDetailQueryOptions = (projectId: string) =>
  queryOptions({
    queryKey: ["projects", "list", "detail", projectId],
    queryFn: () => getProjectDetail({ projectId }),
  });
