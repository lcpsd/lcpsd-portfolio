import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TechMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Project {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly order?: number | null;
  readonly screenshot?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
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