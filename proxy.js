// Private dynamic bridge to capture livecounts data securely
export default async function handler(req, res) {
    const targetUrl = 'https://lcedit.com';
    try {
        const response = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'application/json'
            }
        });
        const rawData = await response.json();
        
        // Inject secure headers so the web browser never blocks your layout grid
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Content-Type', 'application/json');
        
        return res.status(200).json(rawData);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to extract live registry' });
    }
}
