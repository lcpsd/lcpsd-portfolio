import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProjectScreenshotMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectTechMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TechMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectProjectScreenshotMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ProjectScreenshot {
  readonly id: string;
  readonly url?: string | null;
  readonly ProjectName?: string | null;
  readonly order?: number | null;
  readonly projects?: (ProjectProjectScreenshot | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProjectScreenshot, ProjectScreenshotMetaData>);
  static copyOf(source: ProjectScreenshot, mutator: (draft: MutableModel<ProjectScreenshot, ProjectScreenshotMetaData>) => MutableModel<ProjectScreenshot, ProjectScreenshotMetaData> | void): ProjectScreenshot;
}

export declare class Project {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly ProjectTechs?: (ProjectTech | null)[] | null;
  readonly ProjectScreenshots?: (ProjectProjectScreenshot | null)[] | null;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class ProjectTech {
  readonly id: string;
  readonly title?: string | null;
  readonly logoUrl?: string | null;
  readonly projectID: string;
  readonly ProjectName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProjectTech, ProjectTechMetaData>);
  static copyOf(source: ProjectTech, mutator: (draft: MutableModel<ProjectTech, ProjectTechMetaData>) => MutableModel<ProjectTech, ProjectTechMetaData> | void): ProjectTech;
}

export declare class Tech {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly order?: number | null;
  readonly logoUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tech, TechMetaData>);
  static copyOf(source: Tech, mutator: (draft: MutableModel<Tech, TechMetaData>) => MutableModel<Tech, TechMetaData> | void): Tech;
}

export declare class Profile {
  readonly id: string;
  readonly avatarUrl?: string | null;
  readonly name?: string | null;
  readonly linkedIn?: string | null;
  readonly github?: string | null;
  readonly whatsapp?: string | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

export declare class ProjectProjectScreenshot {
  readonly id: string;
  readonly projectScreenshot: ProjectScreenshot;
  readonly project: Project;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProjectProjectScreenshot, ProjectProjectScreenshotMetaData>);
  static copyOf(source: ProjectProjectScreenshot, mutator: (draft: MutableModel<ProjectProjectScreenshot, ProjectProjectScreenshotMetaData>) => MutableModel<ProjectProjectScreenshot, ProjectProjectScreenshotMetaData> | void): ProjectProjectScreenshot;
}