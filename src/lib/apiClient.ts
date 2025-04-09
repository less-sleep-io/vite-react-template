import { ProjectType, TodoType } from "~/types/shared.types";

export type ResponseType<T> = {
  data: T;
  error?: string;
};

const DB_NAME = "vite-react-template-demo";

const initialProjects = localStorage.getItem(DB_NAME);

if (!initialProjects) {
  localStorage.setItem(
    DB_NAME,
    JSON.stringify([
      { id: "1", name: "My first project", todos: [] },
      { id: "2", name: "My second project", todos: [] },
      { id: "3", name: "My third project", todos: [] },
      { id: "4", name: "My fourth project", todos: [] },
    ]),
  );
}

export const api = {
  get: async (
    url: string,
  ): Promise<
    ResponseType<ProjectType[] | TodoType[] | ProjectType | TodoType | null>
  > => {
    if (!url.startsWith("/")) {
      throw new Error("URL must start with '/'");
    }

    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await localStorage.getItem(DB_NAME);
          const projects = JSON.parse(response || "[]") as ProjectType[];

          if (url === "/projects") {
            resolve({ data: projects });
            return;
          }

          const projectMatch = url.match(/^\/projects\/(\d+)$/);
          if (projectMatch) {
            const project = projects.find((p) => p.id === projectMatch[1]);
            resolve({ data: project || null });
            return;
          }

          const todoMatch = url.match(/^\/projects\/(\d+)\/todos$/);
          if (todoMatch) {
            const project = projects.find((p) => p.id === todoMatch[1]);
            resolve({ data: project?.todos || [] });
            return;
          }

          const singleTodoMatch = url.match(
            /^\/projects\/(\d+)\/todos\/(\d+)$/,
          );
          if (singleTodoMatch) {
            const project = projects.find((p) => p.id === singleTodoMatch[1]);
            const todo = project?.todos.find(
              (t) => t.id === singleTodoMatch[2],
            );
            resolve({ data: todo || null });
            return;
          }

          reject(new Error("Invalid URL format"));
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  },

  post: async (
    url: string,
    data: Partial<ProjectType> | Partial<TodoType>,
  ): Promise<ResponseType<ProjectType | TodoType | null>> => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await localStorage.getItem(DB_NAME);
          const projects = JSON.parse(response || "[]") as ProjectType[];

          if (url === "/projects") {
            const newProject = {
              ...data,
              id: crypto.randomUUID(),
              todos: [],
            } as ProjectType;
            projects.push(newProject);
            localStorage.setItem(DB_NAME, JSON.stringify(projects));
            resolve({ data: newProject });
            return;
          }

          const todoMatch = url.match(/^\/projects\/(\d+)\/todos$/);
          if (todoMatch) {
            const projectIndex = projects.findIndex(
              (p) => p.id === todoMatch[1],
            );
            if (projectIndex !== -1) {
              const newTodo = { ...data, id: crypto.randomUUID() } as TodoType;
              projects[projectIndex].todos.push(newTodo);
              localStorage.setItem(DB_NAME, JSON.stringify(projects));
              resolve({ data: newTodo });
              return;
            }
          }

          reject(new Error("Invalid URL for POST request"));
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  },

  put: async (
    url: string,
    data: ProjectType | TodoType,
  ): Promise<ResponseType<ProjectType | TodoType | null>> => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await localStorage.getItem(DB_NAME);
          const projects = JSON.parse(response || "[]") as ProjectType[];

          const projectMatch = url.match(/^\/projects\/(\d+)$/);
          if (projectMatch) {
            const index = projects.findIndex(
              (p) => p.id === (data as ProjectType).id,
            );
            if (index !== -1) {
              projects[index] = { ...projects[index], ...data } as ProjectType;
              localStorage.setItem(DB_NAME, JSON.stringify(projects));
              resolve({ data: projects[index] });
              return;
            }
          }

          const todoMatch = url.match(/^\/projects\/(\d+)\/todos\/(\d+)$/);
          if (todoMatch) {
            const projectIndex = projects.findIndex(
              (p) => p.id === todoMatch[1],
            );
            if (projectIndex !== -1) {
              const todoIndex = projects[projectIndex].todos.findIndex(
                (t) => t.id === (data as TodoType).id,
              );
              if (todoIndex !== -1) {
                projects[projectIndex].todos[todoIndex] = {
                  ...data,
                } as TodoType;
                localStorage.setItem(DB_NAME, JSON.stringify(projects));
                resolve({ data: projects[projectIndex].todos[todoIndex] });
                return;
              }
            }
          }

          reject(new Error("Resource not found"));
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  },

  delete: async (url: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await localStorage.getItem(DB_NAME);
          const projects = JSON.parse(response || "[]") as ProjectType[];

          const projectMatch = url.match(/^\/projects\/(\d+)$/);
          if (projectMatch) {
            const filteredProjects = projects.filter(
              (p) => p.id !== projectMatch[1],
            );
            localStorage.setItem(DB_NAME, JSON.stringify(filteredProjects));
            resolve({ data: null });
            return;
          }

          const todoMatch = url.match(/^\/projects\/(\d+)\/todos\/(\d+)$/);
          if (todoMatch) {
            const projectIndex = projects.findIndex(
              (p) => p.id === todoMatch[1],
            );
            if (projectIndex !== -1) {
              projects[projectIndex].todos = projects[
                projectIndex
              ].todos.filter((t) => t.id !== todoMatch[2]);
              localStorage.setItem(DB_NAME, JSON.stringify(projects));
              resolve({ data: null });
              return;
            }
          }

          reject(new Error("Invalid URL format for DELETE request"));
        } catch (error) {
          reject(error);
        }
      }, 300);
    });
  },
};
