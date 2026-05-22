// app/api/chat/route.ts
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { message, messageCount } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({
                reply: "يا هلا بك في مركز كار ستايل لزينة وتظليل السيارات، جاري تهيئة المساعد الذكي. يمكنك التواصل معنا مباشرة عبر الواتساب أو الاتصال."
            });
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);

        // تعديل الشخصية والقواعد لتناسب مشروع محمد الرباحي (كار ستايل)
        const systemPrompt = `أنت المساعد الذكي لمركز "كار ستايل" (Car Style) لزينة وتلميع وتظليل السيارات بالرياض، بإدارة محمد الرباحي.
        قواعد الرد:
        1. أجب باختصار شديد جداً (سطر أو سطرين).
        2. استخدم لهجة سعودية مهنية، ودودة ومرحبة بالعملاء (يا هلا والله، أبشر من عيوني، حياك الله، غالي والطلب رخيص).
        3. أجب على استفسار العميل مباشرة (تظليل، عازل حراري، تلميع، شاشات، نانو سيراميك، تلبيس مقاعد) دون مقدمات طويلة.
        4. لا تذكر تفاصيل الفوترة أو الأمور التقنية أبداً، وركز على خدمة العميل وتوجيهه لزيارة المركز.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `${systemPrompt}\n\nالعميل يقول: ${message}` }] }]
            }),
            signal: controller.signal
        });

        clearTimeout(timeout);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error Status:", response.status, "Details:", errorText);
            throw new Error(`Gemini API Error: ${response.status}`);
        }

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "يا هلا بك في كار ستايل، شرفنا بالزيارة أو تواصل معنا مباشرة وأبشر بسعدك!";

        return NextResponse.json({ reply });

    } catch (error: any) {
        console.error("Catch Block:", error.message);
        return NextResponse.json({
            reply: "يا هلا بك يا غالي، حالياً لدينا ضغط رسايل في مركز كار ستايل، يسعدنا تواصلك معنا مباشرة أو تشريفنا بالزيارة وأبشر بسعدك!"
        });
    }
}
