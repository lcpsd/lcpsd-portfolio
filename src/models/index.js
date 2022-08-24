// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ProjectScreenshot, Project, ProjectTech, Tech, Profile, ProjectProjectScreenshot } = initSchema(schema);

export {
  ProjectScreenshot,
  Project,
  ProjectTech,
  Tech,
  Profile,
  ProjectProjectScreenshot
};