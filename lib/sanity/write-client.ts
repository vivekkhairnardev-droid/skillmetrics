import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./config";

const token = process.env.SANITY_WRITE_TOKEN;

// We only instantiate the write client if a token is present, as write actions require auth
export const writeClient = token
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
    })
  : null;
