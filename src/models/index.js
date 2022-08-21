// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tech, Profile } = initSchema(schema);

export {
  Tech,
  Profile
};