export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;

        // ระบบตอบกลับแบบ Rule-based
        let response = "ฉันไม่เข้าใจคำถามของคุณ กรุณาลองใหม่อีกครั้ง";
        
        if (message.includes("สวัสดี") || message.includes("hello")) {
            response = "สวัสดีครับ! มีอะไรให้ช่วยไหม";
        } else if (message.includes("คุณชื่ออะไร")) {
            response = "ฉันคือบอทแชทครับ";
        } else if (message.includes("อากาศ")) {
            response = "ฉันไม่สามารถตรวจสอบสภาพอากาศได้ในขณะนี้";
        } else if (message.includes("ขอบคุณ")) {
            response = "ยินดีครับ! มีอะไรให้ช่วยอีกไหม";
        }

        res.status(200).json({ response });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
