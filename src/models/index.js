// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Certification, Project, Tech, Profile } = initSchema(schema);

export {
  Certification,
  Project,
  Tech,
  Profile
};