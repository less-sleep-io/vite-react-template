import { queryOptions } from "@tanstack/react-query";

import { api } from "~/lib/apiClient";
import { projectSchema } from "~/types/shared.types";

const responseSchema = projectSchema.array();

export const getProjectsList = async () => {
  return api
    .get("/projects")
    .then((response) => {
      return responseSchema.parse(response.data);
    })
    .catch((error) => {
      console.error("Error fetching project list:", error);
      throw error;
    });
};

export const getProjectsListQueryOptions = queryOptions({
  queryKey: ["projects", "list"],
  queryFn: () => getProjectsList(),
});
