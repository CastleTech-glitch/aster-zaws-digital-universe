ASTER ZAW'S DIGITAL UNIVERSE — PORTFOLIO WEBSITE STARTER
===========================================

ဒီဖိုင်က Static Portfolio Website Starter ဖြစ်ပါတယ်။
HTML + CSS + JavaScript သာသုံးထားပြီး npm install မလိုပါ။
လက်ရှိ Telegram Bot code ကို မထိပါ။ Google Drive ကိုလည်း ပြောင်းလဲမလုပ်ပါ။

ဖိုင်များ
--------
index.html       Website စာမျက်နှာ
styles.css       Dark navy / neon blue responsive UI
script.js        Mobile menu, theme switch, social links
assets/          Profile photo

အဆင့် ၁ — ဖိုင်ကို စမ်းကြည့်ရန်
-------------------------------
1. ZIP ကို Extract လုပ်ပါ။
2. index.html ကို Browser ဖြင့်ဖွင့်ပါ။
3. ဖုန်းနှင့် Computer အရွယ်အစားနှစ်မျိုးလုံး စမ်းကြည့်ပါ။

အဆင့် ၂ — မိမိအချက်အလက်များ ပြင်ရန်
-------------------------------------
1. index.html ထဲက GENIUS EXCEL AI၊ မိတ်ဆက်စာ၊ Project details တို့ကို ပြင်ပါ။
2. assets/profile-photo.jpg ကို မိမိအသုံးပြုလိုသောပုံဖြင့် အစားထိုးနိုင်သည်။
3. script.js ထဲက SITE_CONFIG အောက်တွင် အောက်ပါ URL များကို ပြင်ပါ။
   - telegramBotUrl: https://t.me/YourBotUsername
   - youtube, tiktok, facebook, telegram, github
4. စာအုပ်ကတ်များသည် နမူနာများဖြစ်သည်။ ကိုယ်ပိုင်စာအုပ်/အရင်းအမြစ်များနှင့် အစားထိုးပါ။

အဆင့် ၃ — GitHub Repository အသစ်တစ်ခုဖန်တီးရန်
-------------------------------------------------
1. GitHub တွင် New repository ကိုနှိပ်ပါ။
2. ဥပမာ genius-excel-portfolio ဟု အမည်ပေးပါ။
3. Public/Private ကို မိမိလိုအပ်ချက်အရ ရွေးပါ။ Bot repository ကို မပြောင်းပါနှင့်။
4. ဒီ ZIP ထဲက ဖိုင်များကို Repository အသစ်ထဲ Upload လုပ်ပါ။
5. index.html ကို repository root မှာထားပါ။

အဆင့် ၄ — Cloudflare Pages ဖြင့် Free Hosting
-----------------------------------------------
1. Cloudflare account သို့ ဝင်ပါ။
2. Workers & Pages > Create application > Pages ကိုရွေးပါ။
3. Connect to Git ကိုရွေးပြီး genius-excel-portfolio repository ကိုချိတ်ပါ။
4. Static HTML site ဖြစ်သောကြောင့် Build command ကို ဗလာထားပါ။
5. Build output directory ကို / သို့မဟုတ် repository root (dashboard တွင်ပြသသည့်ညွှန်ကြားချက်အတိုင်း) သတ်မှတ်ပါ။
6. Deploy လုပ်ပြီး ပေးလာသော pages.dev URL ကို စမ်းသပ်ပါ။

သတိပြုရန်
----------
- ဒီ Starter သည် Portfolio UI သာဖြစ်သည်။ Admin login, database, API backend မပါသေးပါ။
- Website ထဲမှာ Groq API key, Telegram bot token, Google service account JSON,
  OAuth client secret, payment secret တို့ကို မထည့်ပါနှင့်။
- Telegram Bot ကို GitHub Codespaces ထဲမှာ run ထားခြင်းက အမြဲတမ်း free production hosting ဖြစ်မည်ဟု မယူဆပါနှင့်။
  Codespaces session ပိတ်သွားလျှင် process ရပ်နိုင်သည်။
- Website repository အသစ်ဖန်တီးခြင်းက Bot repository ကို မပြောင်းလဲပါ။
- Google Drive ဖိုင်များကို Public မဖွင့်ပါနှင့်။ Public ပေးလိုသည့် lesson များကိုသာ ခွင့်ပြုထားသော link ဖြင့် ချိတ်ပါ။
- GitHub Pages သို့မဟုတ် Cloudflare Pages သုံးသော်လည်း free plan limit/terms ပြောင်းလဲနိုင်သည်။
