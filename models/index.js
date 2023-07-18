// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { URL } = initSchema(schema);

export {
  URL
};