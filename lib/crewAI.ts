// lib/crewAi.ts
import CrewAI from 'crew-ai';

const crew = new CrewAI({ apiKey: process.env.CREW_AI_API_KEY });

export async function getBestCandidates(ballotInfo) {
  // Implement your logic to process ballotInfo and get the best candidates
  const processedData = await crew.process(ballotInfo);
  return processedData;
}
