import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatIds = process.env.TELEGRAM_CHAT_ID?.split(',').map(id => id.trim()).filter(id => id.length > 0) || [];

    if (!botToken || chatIds.length === 0) {
      console.warn("Telegram credentials missing in environment variables.");
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    const { name, phone, model, problem, note, language } = data;

    const templates: Record<string, any> = {
      uz: {
        title: "🔥 <b>Yangi Buyurtma! (Malika Service)</b>",
        client: "👤 <b>Mijoz:</b>",
        phone: "📱 <b>Raqam:</b>",
        device: "📞 <b>Qurilma:</b>",
        problem: "🛠 <b>Muammo:</b>",
        note: "💬 <b>Qo'shimcha izoh:</b>",
        empty: "Kiritilmadi",
        no_note: "Yo'q"
      },
      ru: {
        title: "🔥 <b>Новый Заказ! (Малика Сервис)</b>",
        client: "👤 <b>Клиент:</b>",
        phone: "📱 <b>Номер:</b>",
        device: "📞 <b>Устройство:</b>",
        problem: "🛠 <b>Проблема:</b>",
        note: "💬 <b>Примечание:</b>",
        empty: "Не указано",
        no_note: "Нет"
      },
      en: {
        title: "🔥 <b>New Order! (Malika Service)</b>",
        client: "👤 <b>Client:</b>",
        phone: "📱 <b>Phone:</b>",
        device: "📞 <b>Device:</b>",
        problem: "🛠 <b>Problem:</b>",
        note: "💬 <b>Note:</b>",
        empty: "Not provided",
        no_note: "None"
      },
      tr: {
        title: "🔥 <b>Yeni Sipariş! (Malika Servis)</b>",
        client: "👤 <b>Müşteri:</b>",
        phone: "📱 <b>Numara:</b>",
        device: "📞 <b>Cihaz:</b>",
        problem: "🛠 <b>Sorun:</b>",
        note: "💬 <b>Ek not:</b>",
        empty: "Belirtilmedi",
        no_note: "Yok"
      }
    };

    const t = templates[language] || templates['uz'];

    const message = `
${t.title}

${t.client} ${name || t.empty}
${t.phone} ${phone || t.empty}
${t.device} ${model || t.empty}
${t.problem} ${problem || t.empty}
${t.note} ${note || t.no_note}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const sendPromises = chatIds.map(chatId => 
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      })
    );

    const responses = await Promise.all(sendPromises);

    for (const response of responses) {
      if (!response.ok) {
        const errorData = await response.text();
        console.error("Telegram API Error:", errorData);
        // We log the error but don't strictly throw if one fails, maybe others succeeded.
      }
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
