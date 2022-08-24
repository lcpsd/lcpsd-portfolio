// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Budge, Certification, Project, Tech, Profile } = initSchema(schema);

export {
  Budge,
  Certification,
  Project,
  Tech,
  Profile
};