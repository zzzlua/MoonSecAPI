export default function handler(req, res) {
    if (req.method === 'POST') {
        const { script_key, hwid, productName } = req.body;
        const validSecretKey = "Kzzhhh";

        if (script_key === validSecretKey && hwid && productName) {
            res.status(200).json({ status: 'success' });
        } else {
            res.status(400).json({ status: 'error', message: 'Invalid data or credentials' });
        }
    } else {
        res.status(405).json({ status: 'error', message: 'Only POST method is allowed' });
    }
}
