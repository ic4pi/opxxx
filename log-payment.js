/**
 * MOCK API ENDPOINT
 * Logs sensitive demonstration data to the server console.
 * In a real production environment, this would be handled by a PCI-compliant processor.
 */

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { plan, card_number, timestamp, userAgent } = req.body;

  // LOGGING TO "MOCK API" (Server Console)
  console.log("--- [VEIL PROTOCOL: SECURE LOG ENTRY] ---");
  console.log(`TIMESTAMP: ${timestamp}`);
  console.log(`PLAN_SELECTED: ${plan}`);
  console.log(`CARD_DATA_CAPTURED: ${card_number}`);
  console.log(`CLIENT_AGENT: ${userAgent}`);
  console.log("------------------------------------------");

  // Return success to the user to maintain the illusion
  return res.status(200).json({ 
    status: 'success', 
    message: 'Transaction processed through protocol shadow-layer.' 
  });
}
