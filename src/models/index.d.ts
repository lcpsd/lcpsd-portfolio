import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type BudgeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CertificationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TechMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Budge {
  readonly id: string;
  readonly name?: string | null;
  readonly whatsapp?: string | null;
  readonly summary?: string | null;
  readonly ref1?: string | null;
  readonly ref2?: string | null;
  readonly clientArea?: string | null;
  readonly application?: string | null;
  readonly applicationInfo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Budge, BudgeMetaData>);
  static copyOf(source: Budge, mutator: (draft: MutableModel<Budge, BudgeMetaData>) => MutableModel<Budge, BudgeMetaData> | void): Budge;
}

export declare class Certification {
  readonly id: string;
  readonly imageUrl?: string | null;
  readonly title?: string | null;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Certification, CertificationMetaData>);
  static copyOf(source: Certification, mutator: (draft: MutableModel<Certification, CertificationMetaData>) => MutableModel<Certification, CertificationMetaData> | void): Certification;
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