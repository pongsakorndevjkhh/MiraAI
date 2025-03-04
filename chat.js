export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;

        // ตัวอย่างการตอบกลับแบบง่ายๆ
        const response = `คุณพูดว่า: ${message}`;

        res.status(200).json({ response });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
