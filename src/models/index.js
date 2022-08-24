// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Tech, Profile } = initSchema(schema);

export {
  Project,
  Tech,
  Profile
};