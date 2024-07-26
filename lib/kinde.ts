// lib/kinde.ts
import { KindeClient } from '@kinde-oss/kinde-auth-nextjs';

export const kinde = new KindeClient({
  clientId: process.env.KINDE_CLIENT_ID,
  clientSecret: process.env.KINDE_CLIENT_SECRET,
  domain: process.env.KINDE_DOMAIN,
});
