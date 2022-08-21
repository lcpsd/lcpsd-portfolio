import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TechMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tech {
  readonly id: string;
  readonly logoUrl?: string | null;
  readonly description?: string | null;
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