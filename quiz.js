document.addEventListener("DOMContentLoaded", () => {
  const questions = [
     { question: "سن شما در چه بازه‌ایه؟",
   options: [ { text: "۱۳ تا ۱۷ سال", code: "teen" },
        { text: "۱۸ تا ۲۵ سال", code: "young-adult" },
        { text: "بالای ۲۶ سال", code: "adult" } ] },
 {
  question: "اگه یه روز کامل وقت آزاد داشته باشی، چطور می‌گذرونی؟",
  options: [
    { text: "تنهایی کتاب می‌خونم یا فیلم می‌بینم 📚", code: "A1" },
    { text: "میرم بیرون قدم می‌زنم یا خرید می‌کنم 🚶‍♀️", code: "A2" },
    { text: "دوستامو می‌بینم و باهاشون حرف می‌زنم 🗣", code: "A3" },
    { text: "میرم تو یه جمع جدید و سعی می‌کنم آشنا بشم 🤝", code: "A4" }
  ]
},
{
  question: "اگه بخوای زبان یاد بگیری، بیشتر دلت می‌خواد با کدوم روش جلو بری؟",
  options: [
    { text: "با یاد گرفتن کلمات جدید و بازی با واژگان 📚", code: "B1" },
    { text: "با صحبت کردن و تمرین مکالمه با بقیه 👀", code: "B2" },
    { text: "با یاد گرفتن ساختار جمله‌ها و قواعد (گرامر) 📝", code: "B3" },
    { text: "با دیدن فیلم یا شنیدن آهنگ و تمرین باهاشون 🎶", code: "B4" }
  ]
},
{
  question: "اگه سر کلاس زبان با هم‌کلاسی یا معلمت درباره یه موضوع اختلاف نظر داشته باشی، معمولاً چی‌کار می‌کنی؟",
  options: [
    { text: "سعی می‌کنم با دلیل قانعش کنم حتی اگه ناراحت بشه 📊", code: "C1" },
    { text: "تا جایی که میشه بحث نمی‌کنم چون نمی‌خوام کسی ناراحت شه 💔", code: "C2" },
    { text: "اول احساسات طرف رو در نظر می‌گیرم بعد نظرم رو می‌گم 🤔", code: "C3" },
    { text: "فقط اگه خیلی مهم باشه حرف می‌زنم وگرنه بی‌خیال می‌شم 😐", code: "C4" }
  ]
},
{
  question: "اگه بخوای یه پروژه گروهی انجام بدی، کدوم نقش برات جذابه؟",
  options: [
    { text: "رهبری و برنامه‌ریزی کارها 📅", code: "D1" },
    { text: "پیدا کردن ایده‌های خلاقانه 💡", code: "D2" },
    { text: "انجام دادن کارای مشخص و دقیق ✔️", code: "D3" },
    { text: "کمک به بقیه با هرچی لازم باشه بدون برنامه 📎", code: "D4" }
  ]
},
{
  question: "وقتی می‌خوای یه زبان جدید یاد بگیری، چی برات مهم‌تره؟",
  options: [
    { text: "اینکه بتونم سریع تو موقعیت واقعی ازش استفاده کنم 🗣", code: "E1" },
    { text: "اینکه ساختارها و قواعد رو درست یاد بگیرم 📚", code: "E2" },
    { text: "اینکه از مسیر یادگیری لذت ببرم و خسته نشم 🎶", code: "E3" },
    { text: "اینکه بتونم برای آینده‌م برنامه‌ریزی کنم و نتیجه بگیرم 📈", code: "E4" }
  ]
},
{
  question: "وقتی وارد یه کلاس زبان جدید می‌شی، معمولاً چی‌کار می‌کنی؟",
  options: [
    { text: "یه گوشه می‌شینم و سعی می‌کنم کم‌کم با فضا آشنا بشم 😇", code: "F1" },
    { text: "سریع با بقیه هم‌کلاسی‌ها ارتباط برقرار می‌کنم 😄", code: "F2" },
    { text: "بیشتر گوش می‌دم و فقط وقتی لازم باشه صحبت می‌کنم 👂", code: "F3" },
    { text: "خودم شروع‌کننده‌ صحبت یا سوال پرسیدنم 🎤", code: "F4" }
  ]
},
{
  question: "چطور برای کلاس زبان آماده می‌شی؟",
  options: [
    { text: "از قبل درس می‌خونم، تمرین می‌کنم، نوت برمی‌دارم 📚", code: "G1" },
    { text: "حس و حال اون روزم مهمه، اگه انرژی داشته باشم می‌خونم 😌", code: "G2" },
    { text: "یه نگاه سریع به مطالب میندازم تا دست پر نرم سر کلاس 👀", code: "G3" },
    { text: "بیشتر با انجام تمرین‌ها توی خود کلاس یاد می‌گیرم نه خونه 💬", code: "G4" }
  ]
},
{
  question: "وقتی به یه اصطلاح جدید انگلیسی برمی‌خوری چی‌کار می‌کنی؟",
  options: [
    { text: "سرچش می‌کنم و سعی می‌کنم چندتا مثال ازش پیدا کنم 🔍", code: "H1" },
    { text: "می‌پرسم ببینم بقیه چطوری ازش استفاده می‌کنن 🧠", code: "H2" },
    { text: "همون لحظه امتحانش می‌کنم توی جمله خودم 🏁", code: "H3" },
    { text: "یادم می‌مونه ولی شاید بعداً فراموشش کنم 😅", code: "H4" }
  ]
},
{
  question: "فکر میکنی چه چیزی میتونه تو یادگیری زبان کمکت کنه؟",
  options: [
    { text: "اینکه بدونم چرا یه جمله اینطوری ساخته شده و منطقش رو بفهمم 🧐", code: "I1" },
    { text: "اینکه از مسیر یادگیری لذت ببرم و حس خوبی بهم بده 💖", code: "I2" },
    { text: "اینکه بتونم تو جمع تمرین کنم و از بقیه یاد بگیرم 🗣", code: "I3" },
    { text: "اینکه روش یادگیری متنوع باشه تا خسته نشم 🎨", code: "I4" }
  ]
    },
{
  question: "کدوم جمله بیشتر به نگرشت به یادگیری زبان می‌خوره؟",
  options: [
    { text: "برنامه و نظم کلید موفقیته 🧩", code: "J1" },
    { text: "با لذت بردن یادگیری هم آسون‌تر می‌شه 🌈", code: "J2" },
    { text: "تو موقعیت یاد می‌گیریم، نه فقط از روی کتاب 🌪", code: "J3" },
    { text: "اگه ندونی هدفت چیه، گم می‌شی 🧭", code: "J4" }
  ]
    },
    // ... (ادامه سوالات همونطور که فرستادی)
  ];

  let currentQuestion = 0;
  let selectedAnswers = [];

  const questionText = document.getElementById("questionText");
  const optionsContainer = document.getElementById("optionsContainer");
  const nextBtn = document.getElementById("nextBtn");
  const prevButton = document.getElementById("prevButton");
  const startBtn = document.getElementById("startBtn");
  const quizContainer = document.getElementById("quiz-container");
  const startContainer = document.getElementById("start-container");

  function loadQuestion(index) {
    const q = questions[index];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    prevButton.style.display = index === 0 ? "none" : "inline-block";

    q.options.forEach((opt) => {
      const button = document.createElement("button");
      button.className = "option";
      button.textContent = opt.text;
      button.dataset.answerCode = opt.code;

      button.addEventListener("click", () => {
        selectedAnswers[index] = opt.code;
        localStorage.setItem("userAnswers", JSON.stringify(selectedAnswers));
        nextBtn.style.display = "inline-block";
        document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
        button.classList.add("selected");
      });

      optionsContainer.appendChild(button);
    });
  } 
  
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("option")) {
    const allOptions = e.target.closest(".options").querySelectorAll(".option");
    allOptions.forEach(option => option.classList.remove("selected"));
    e.target.classList.add("selected");
  }
});
  startBtn.addEventListener("click", () => {
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion(currentQuestion);
  });

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion(currentQuestion);
      nextBtn.style.display = "none";
    } else {
      quizContainer.style.display = "none";
      document.getElementById("user-info-form").style.display = "block";
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion(currentQuestion);
      nextBtn.style.display =
      selectedAnswers[currentQuestion] ?
      "inline-block" : "none";
    }
  }
);

  document.getElementById("submitInfoBtn").addEventListener("click", () => {
    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phoneNumber").value.trim();
    const phonePattern = /^09\d{9}$/;
    if (!name ) {
      alert("لطفاً نامت رو کامل وارد کن.");
      return;
    }

    if (!phonePattern.test(phone)) {
      alert("شماره تلفن نا معتبر است. لطفا شماره ای مثل 09123456789 وارد کن.");
      return;
    }

     localStorage.setItem("userName", name);
    localStorage.setItem("userPhone", phone);

  // محاسبه نتایج
    const answerToCategoryMap = {
  // سوال 2
  A1: "Creativity & Expression",
  A2: "Growth & Insight", 
  A3: "Talk & Connect",
  A4: "Talk & Connect",

  // سوال 3
  B1: "Creativity & Expression",
  B2: "Talk & Connect",
  B3: "Logic & Structure",
  B4: "Creativity & Expression",

  // سوال 4
  C1: "Logic & Structure",
  C2: "Talk & Connect", 
  C3: "Growth & Insight",
  C4: "Creativity & Expression",

  // سوال 5
  D1: "Logic & Structure",
  D2: "Creativity & Expression",
  D3: "Talk & Connect",
  D4: "Growth & Insight",

  // سوال 6
  E1: "Talk & Connect",
  E2: "Growth & Insight",
  E3: "Creativity & Expression",
  E4: "Logic & Structure",

  // سوال 7
  F1: "Growth & Insight",
  F2: "Talk & Connect",
  F3: "Logic & Structure",
  F4: "Creativity & Expression",

  // سوال 8
  G1: "Logic & Structure",
  G2: "Talk & Connect", 
  G3: "Creativity & Expression",
  G4: "Growth & Insight",

  // سوال 9
  H1: "Growth & Insight",
  H2: "Talk & Connect",
  H3: "Creativity & Expression",
  H4: "Logic & Structure",

  // سوال 10
  I1: "Logic & Structure",
  I2: "Growth & Insight",
  I3: "Talk & Connect",
  I4: "Creativity & Expression",

  // سوال 11
  J1: "Logic & Structure",
  J2: "Talk & Connect",
  J3: "Creativity & Expression",
  J4: "Growth & Insight",
};

    const categoryScores = {
      "Creativity & Expression": 0,
      "Logic & Structure": 0,
      "Talk & Connect": 0,
      "Growth & Insight": 0
    };

    const selectedAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
   selectedAnswers.forEach(code => {
      const cat = answerToCategoryMap[code];
      if (cat) categoryScores[cat]++;
    });

    const finalCategory = Object.keys(categoryScores).reduce((a, b) =>
      categoryScores[a] > categoryScores[b] ? a : b
    );

    localStorage.setItem("finalCategory", finalCategory);
    window.location.href = "results.html";

      fetch("https://script.google.com/macros/s/AKfycbzptXJLSJJOrzb26BAOIzWVBNlXJfAJlwRJi-FdkKFQgQ3d31n9d9evA-fRFxIjn7hJ/exec", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    phone: phone,
    category: finalCategory
  }),
  headers: {
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => {
  console.log("✅ اطلاعات با موفقیت ثبت شد:", data);
})
.catch(err => {
  console.error("❌ خطا در ارسال اطلاعات:", err);
});
  });

  const formBackBtn = 
    document.getElementById("formBackBtn");

    formBackBtn.addEventListener("click", () => {
      document.getElementById("user-info-form").style.display = "none";
      quizContainer.style.display = "block";
      loadQuestion(currentQuestion);
    }
  );
});