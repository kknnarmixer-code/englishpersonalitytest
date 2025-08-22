document.addEventListener("DOMContentLoaded", () => {
  const finalCategory = localStorage.getItem("finalCategory");
  const ageGroup = localStorage.getItem("ageGroup") || "adult";
  const userName = localStorage.getItem("userName") || "کاربر عزیز";
  
  localStorage.removeItem("userAnswers");
  localStorage.removeItem("finalCategory");

  const resultData = {
    "Creativity & Expression": {
      personality: "✨ تو احتمالاً جزو این تیپ‌های شخصیتی هستی: ENFP - INFP - ISFP - ESFP",
      description: `<p>تو آدمی هستی که بیشتر با احساسات درونی و رویاها زندگی می‌کنی. عمیق فکر می‌کنی، به جزئیات دقت داری و وقتی چیزی رو واقعاً درک کنی، دیگه فراموشش نمی‌کنی.
      یادگیری برای تو فقط حفظ کردن کلمات یا قوانین گرامری نیست، تو نیاز داری با زبان ارتباط احساسی بگیری. وقتی زبان با یه داستان، آهنگ، فیلم یا حتی یه موضوع فلسفی ترکیب می‌شه، تازه توجّهت کامل جذب می‌شه.
      </p>
    <br>
      <p>
تو به شکل خودت یاد می‌گیری، توی سکوت، با انتخاب‌های خودت، با تمرکز بالا و با معنا. به همین خاطر:
</p>
<p>🧠 احتمالاً از یادگیری زبان از طریق موسیقی، فیلم، یا مکالمات عمیق درباره موضوعات واقعی بیشتر لذت می‌بری.</p>
<P>🎧 تمرین‌های شخصی‌سازی‌شده، فضای خلوت برای فکر کردن، و راه‌هایی که بتونی حرف دلت رو بزنی، بیشتر برات جواب می‌ده.</P>
<p>📖 حفظ کردن خشک یا رقابت توی کلاس‌های پر سر و صدا ممکنه خسته‌ت کنه، چون تو به عمق نیاز داری نه سطح.
</p>
<br>
<p>اینا دوره هایی هستن ک با روحیه و شخصیت تو هماهنگن. بهت پیشنهاد میکنم حتما بری دنبالشون و توشون شرکت کنی‌؛ شاید دقیقا همون چیزی باشن که منتظرش بودی!✨</p>`,
        
        courses: {
        teen: ["English Through Music", "Creative Writing", "Expressive Speaking"],
        adult: ["Advanced Storytelling", "Philosophical Conversations", "Creative Expression Workshop"]
      } 
    },

    "Logic & Structure": {
      personality: "🧠 تو احتمالاً جزو این تیپ‌های شخصیتی هستی: INTJ - ISTJ - ENTJ - ESTJ",
      description: `<p>تو ذهن فعالی داری که با نظم، تحلیل و منطق زنده‌ست. وقتی یه سیستم واضح جلوت باشه یا یه مسئله پیچیده رو بخوای حل کنی، تمرکزت به اوج می‌رسه.
</p>
<br>
<p>تو دنبال معنی پشت چیزها هستی، ولی نه از راه احساس؛ از راه ساختار، تفکر و چارچوب.</p>
<p>یادگیری برای تو یه پروژه جدّیه، نه یه تفریح گذرا. دلت می‌خواد هر قدمی که برمی‌داری، هدفمند و مؤثر باشه.</p>
<p>📊 برنامه‌ریزی، ساختار، و تمرین‌های مرحله‌به‌مرحله بهت آرامش می‌ده.
🔍 وق</p>
<p>تو قواعد زبان رو با منطق یاد می‌گیری، انگار همه‌چی برات سر جاش می‌افته.</p>
<p>🏗 کلاس‌های حرفه‌ای، هدف‌مند و با ساختار منظم بیشتر با شخصیتت هماهنگه.</p>
<p>تو می‌خوای زبان رو دقیق و کامل یاد بگیری، نه صرفاً برای مکالمه، بلکه برای تسلّط. و اگه این مسیر رو با نظم و تمرکز جلو ببری، بدون شک موفق میشی.
</p>
<br>
<p>اینا دوره هایی هستن ک با روحیه و شخصیت تو هماهنگن. بهت پیشنهاد میکنم حتما بری دنبالشون و توشون شرکت کنی‌؛ شاید دقیقا همون چیزی باشن که منتظرش بودی! ✨</p>`,

      courses: {
        teen: ["Grammar Mastery", "Language Analysis", "Structured Speaking"],
        adult: ["Advanced Grammar & Syntax", "Business English", "Formal Writing"]
      }
    },

    "Talk & Connect": {
      personality: "💬 تو احتمالاً جزو این تیپ‌های شخصیتی هستی: ENFJ - ESFJ - INFJ - ISFJ",
      description: `
      <p>و زنده‌ای وقتی در ارتباطی. یادگیری برای تو یعنی گفت‌وگو، تبادل، شوخی، تجربه‌های واقعی. تو با انرژی جمعی شارژ می‌شی و توی محیط‌های شاد و فعال، ذهنت بهتر کار می‌کنه.
</p>
<br>
<p>کلاس‌های خشک یا ساکت خسته‌ت می‌کنن. تو نیاز داری شنیده شی، حرف بزنی، بخندی، بازی کنی.</p>
<p>🎤 مکالمه‌های گروهی، بازی‌های زبانی، و کار تیمی برای تو ایده‌آلن.</p>
<p>🌈 تو وقتی رشد می‌کنی که توی جمع باشی، با آدما درگیر شی، حتی اگه اشتباه کنی.</p>
<p>🎯 زبان برای تو یه مهارته، ولی مهم‌تر از اون یه پل ارتباطیه بین تو و دنیای بیرون.</p>
<p>وقتی سبک یادگیریت اجتماعی باشه، یاد گرفتن برات یه ماجراجویی خوشایند می‌شه، نه یه اجبار.</p>
<br>
<p>اینا دوره هایی هستن ک با روحیه و شخصیت تو هماهنگن. بهت پیشنهاد میکنم حتما بری دنبالشون و توشون شرکت کنی‌؛ شاید دقیقا همون چیزی باشن که منتظرش بودی! ✨</p>`,

      courses: {
        teen: ["Conversational English", "Group Discussions", "Interactive Roleplays"],
        adult: ["Public Speaking", "Networking English", "Social Communication Skills"]
      }
    },

    "Growth & Insight": {
      personality: "🌱 تو احتمالاً جزو این تیپ‌های شخصیتی هستی: ENTP - INTP - ISFP - ISTP",
      description: `<p>تو به دنبال عمقی، که فراتر از کلمات و قواعده. برات مهمه که زبان چه تأثیری روی طرز فکرت، روی روحت و روی نگاهت به زندگی می‌ذاره.
</p>
<br>
      <p>یادگیری برای تو یه مسیر رشد شخصیه. دنبال فهمیدن دنیایی، که هم بیرون از توئه، هم درونت.</p>
<p>درس‌ها وقتی برات معنا پیدا می‌کنن که به زندگی، فلسفه یا خودشناسی گره بخورن.</p>
<p>🌌 کلاس‌هایی که باعث شن بیشتر فکر کنی، از درونت سؤال بپرسی و به زندگی از زاویه تازه‌ای نگاه کنی، بهت انگیزه می‌دن.</p>
<p>📚 تو با بحث‌های عمیق، تحلیل، و کشف لایه‌های پنهان بیشتر ارتباط می‌گیری.</p>
<p>🧘‍♀️ برات مهمه که زبان فقط ابزار ارتباط نباشه، بلکه مسیر شناخت خودت هم باشه.</p>
<p>وقتی یادگیری با رشد درونی گره بخوره، مسیرت روشن می‌شه و لذت یادگیری چند برابر.</p>
<br>
<p>اینا دوره هایی هستن ک با روحیه و شخصیت تو هماهنگن. بهت پیشنهاد میکنم حتما بری دنبالشون و توشون شرکت کنی‌؛ شاید دقیقا همون چیزی باشن که منتظرش بودی! ✨</p>`,

      courses: {
        teen: ["Mindful Reading", "Creative Reflection", "Growth Discussions"],
        adult: ["Life English", "Insightful Speaking", "Philosophy in Language"]
      }
    }
  };

  if (!finalCategory || !resultData[finalCategory]) {
    document.getElementById("result-personality").textContent = "اطلاعات تست پیدا نشد.";
    document.getElementById("result-description").textContent = "لطفاً ابتدا تست را کامل انجام دهید.";
    return;
  }

  const result = resultData[finalCategory];
  document.getElementById("result-personality").textContent = result.personality;
  document.getElementById("result-description").innerHTML = result.description;

  const list = document.getElementById("courses-list");
  list.innerHTML = "";
  result.courses[ageGroup].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});
