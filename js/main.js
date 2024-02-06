// רשימה של ההיבטים/כישורים שהלומדים יצטרכו להכיר וללמוד בהכשרתם
const jsonData = {
    "skills": [
     {
         "id": 1,
         "pic": "Images/הבנת המערכת.png",
         "title": "הבנת מערכת הביטוח הבריאותית",
         "abstract": "שימוש במערכת ביטוח בריאותית של הקופה לצרכי שירות",
         "fullContent": "נציגי התמיכה ישתמשו במערכת הביטוח הבריאות של הקופה באופן יומיומי, לכן יש להם להבין באופן מעמיק את הפרטים והתהליכים שלה.",
         "cat": "תקשוב"
     },
     {
         "id": 2,
         "pic": "Images/כישורי תקשורת.png",
         "title": "פיתוח כישורי תקשורת יעילים",
         "abstract": "כיצד לנהוג בשירותיות וסובלנות עם הלקוחות",
         "fullContent": "נציגי תמיכה יצטרכו לדבר עם לקוחות בצורה ברורה, יעילה ואדיבה. יש לספק להם כלים לשפר כישורי התקשורת שלהם.",
         "cat": "שירותיות"
     },
     {
         "id": 3,
         "pic": "Images/הכשרה טכנית על המערכות הממוחשבות.png",
         "title": "הכשרה טכנית על המערכת הממוחשבת",
         "abstract": "התמקצעות על המערכות הממוחשבות של הארגון",
         "fullContent": "שלב חומר הכשרה הכולל הדרכה טכנית על מערכת המידע והתוכנות הטכנולוגיות בשימוש בקופת החולים.",
         "cat": "תקשוב"
     },
     {
         "id": 4,
         "pic": "Images/דרכי פעולה במצב חירום.png",
         "title": "הבנת דרכי פעולה במקרי חירום",
         "abstract": "התמודדות עם תקלות טכניות ומצב חירום בריאותי",
         "fullContent": "נציגי תמיכה יצטרכו להתמודד עם לקוחות במצבי חירום. הם יצטרכו להכיר בהלכת המערכת במקרי חירום כגון תקלות טכניות או חירום בריאותי.",
         "cat": "שירותיות"
     },
     {
         "id": 5,
         "pic": "Images/קשרי צוות ושיתוף פעולה.png",
         "title": "פיתוח קשרי צוות ושיתוף פעולה",
         "abstract": "עבודת צוות ושיתוף פעולה בין הנציגים",
         "fullContent": "קדימון תהליכים של שיתוף פעולה בין נציגי התמיכה ומחלקות אחרות בקופה על מנת למנוע כפילויות וכדי לפתור במהירות בעיות שמתעוררות",
         "cat": "שירותיות"
     },
     {
         "id": 6,
         "pic": "Images/טיפול בלקוחות קשים.png",
         "title": "התמודדות וטיפול בלקוחות קשים",
         "abstract": "דרכי התמודדות עם לקוחות מאתגרים",
         "fullContent": "הכשרת נציגי תמיכה באופן שיכול להכין אותם להתמודד עם לקוחות קשים ולפתרון סוגי טעויות שונים.",
         "cat": "פתרונות"
     },
     {
         "id": 7,
         "pic": "Images/הבנת הלקוח.png",
         "title": "כלים להבנת הלקוח וצרכיו השונים",
         "abstract": "דרכי התמודדות עם שאלות ובעיות של הלקוח",
         "fullContent": "דגש על יכולת האזנה אקטיבית והבנה טובה של צרכי הלקוח, והכשרה להתמודד עם שאלות ובעיות שונות.",
         "cat": "פתרונות"
     },
     {
         "id": 8,
         "pic": "Images/מיומנות להצעת פתרונות.png",
         "title": "פיתוח מיומנות להצעת פתרונות",
         "abstract": "מתן פתרונות, שיווק ומכירות ללקוחות ושילובם יחד",
         "fullContent": "נציגי תמיכה יצטרכו להיות מוכנים להציע פתרונות יעילים וביצועיים ללקוחות, תוך כדי כישורי שיווק ומכירות.",
         "cat": "פתרונות"
     },
     {
         "id": 9,
         "pic": "Images/דרכי עבודה מותאמות אישית לכל נציג.png",
         "title": "הבנה של דרכי עבודה מותאמות אישית",
         "abstract": "התאמת דרכי עבודה לכל נציג שירות",
         "fullContent": "לכל נציג יש להבין כיצד להתאים את שיטות העבודה לסגנון ולצרכי הלקוח הספציפיים.",
         "cat": "ביצועים"
     },
     {
         "id": 10,
         "pic": "Images/פידבק אישי.png",
         "title": "משוב עצמי, מעקב ופידבק תדיר",
         "abstract": "מעקב ופידבק עצמי לאחר ביצועים",
         "fullContent": "הכשרת נציגי תמיכה צריכה לכלול מעקב תדיר ומתמיד אחריות על ביצועם, כמו גם מסגרות פידבק תדירות כדי לאפשר שיפור והתקדמות קבועים.",
         "cat": "ביצועים"
     }
     ]
 }
 
 //לאחר טעינת העמוד
 document.addEventListener("DOMContentLoaded", function (event) {
     // קריאה לפונקציה שתיצור את הרשימה אחרי עליית העמוד
     createItems();
 });
 
 // פונקציה ליצירת הרשימה
 function createItems() {
     // הבאת האלמנט בו ניצור את הרשימה בדף
     const skillsContainer = document.getElementById('skillsContainer');
     // איפוס של האלמנט
     skillsContainer.innerHTML = "";
 
     // מעבר על הרשימה מעלה והוספה של פריט לרשימה בדף בכל סיבוב
     jsonData.skills.forEach(skill => {
         // יצירה של תגית הפריט
         const itemDiv = document.createElement("div");
         // הוספת מזהה לתגית
         itemDiv.setAttribute("id", `div_${skill.id}`);
         // הוספת אירועים
 
         // יצירת תגית תמונה
         const imageElement = document.createElement("img");
         imageElement.src = skill.pic;
         imageElement.alt = skill.title;
         // הוספת התמונה לפריט
         itemDiv.appendChild(imageElement);
 
         // יצירת הטקסט של הכותרת
         const titleElement = document.createElement("h2");
         const titleText = document.createTextNode(`${skill.title}`);
         titleElement.appendChild(titleText);
         // הוספת הכותרת לפריט
         itemDiv.appendChild(titleElement);
 
         // יצירת הטקסט של התקציר
         const abstractElement = document.createElement("p");
         const abstractText = document.createTextNode(`${skill.abstract}`);
         abstractElement.appendChild(abstractText);
         // הוספת התקציר לפריט
         itemDiv.appendChild(abstractElement);
 
         //יצירת כפתור מידע נוסף לכל היבט/מיומנות
         const infoButton = document.createElement("button");
         infoButton.setAttribute("class", `item-info-btn`);
         infoButton.textContent = "מידע נוסף";
         // הוספת אירוע לחיצה על הכפתור להצגת המידע המלא על המיומנות
         infoButton.addEventListener("click", function() {
             openModal(skill);
         });
         //הוספת הכפתור לכל מיומנות/היבט שנמצא ברשימת הכישורים
         itemDiv.appendChild(infoButton);
 
         // הוספת הפריט לרשימה
         skillsContainer.appendChild(itemDiv);
     });
 }
 
 //פונקציה ללחיצה על תפריט ההמבורגר 
 function toggleNav(){
     document.getElementById("main-nav").classList.toggle("hide-mobile");
 }
//פונקציה לחיפוש לפי מילה או קטגוריה
function searchSkills() {
    //יצירת ערך לחיפוש לפי קטגוריה
        const searchInput = document.getElementById('textCategoryInput').value.toLowerCase();
        if(searchInput.length === 0){
            return renderSkills(jsonData.skills);
        }
    //יצירת פילטר בכל אופציות החיפוש - לפי קטגוריה, תקציר או כותרת
        const filteredItems = jsonData.skills.filter(skill => {
            const categoryMatch = skill.cat.toLowerCase() === searchInput;
            const titleOrAbstractMatch = skill.title.toLowerCase().includes(searchInput) || skill.abstract.toLowerCase().includes(searchInput);
    //החזרת ערכים לפי המילה שנמצאה/לא נמצאה
            return categoryMatch || (searchInput && titleOrAbstractMatch);
        });
    //הצגת הערכים שנמצאו
        renderSkills(filteredItems);
    }
    
    
 
 // פונקציה להצגת הפריטים שנמצאו - כולל תמונה, כותרת ותקציר
 function renderSkills(items) {
     const skillsContainer = document.getElementById('skillsContainer');
     skillsContainer.innerHTML = ""; //ניקוי הדף מחיפוש קודם
 
     items.forEach(skill => {
         const itemDiv = document.createElement("div");
         itemDiv.setAttribute("id", `div_${skill.id}`);
 
         const imageElement = document.createElement("img");
         imageElement.src = skill.pic;
         imageElement.alt = skill.title;
         itemDiv.appendChild(imageElement);
 
         const titleElement = document.createElement("h2");
         const titleText = document.createTextNode(`${skill.title}`);
         titleElement.appendChild(titleText);
         itemDiv.appendChild(titleElement);
 
         const abstractElement = document.createElement("p");
         const abstractText = document.createTextNode(`${skill.abstract}`);
         abstractElement.appendChild(abstractText);
         itemDiv.appendChild(abstractElement);
 
         //יצירת כפתור מידע נוסף לכל היבט/מיומנות
         const infoButton = document.createElement("button");
         infoButton.setAttribute("class", `item-info-btn`);
         infoButton.textContent = "מידע נוסף";
         // הוספת אירוע לחיצה על הכפתור להצגת המידע המלא על המיומנות
         infoButton.addEventListener("click", function() {
             openModal(skill);
         });
         //הוספת הכפתור לכל מיומנות/היבט שנמצא ברשימת הכישורים
         itemDiv.appendChild(infoButton);
         skillsContainer.appendChild(itemDiv);
     });
 }
 //פתיחת חלונית הפופ אפ בלחיצה על כפתור ״מידע נוסף״
 function openModal(skill) {
     // וידוא שאלמנט של תוכן המודל קיים בקוד
     const modalContent = document.getElementById("modalContent");
     // הכנסת התוכן המלא למודל
     const modalBody = modalContent.querySelector(".modal-body p");
     modalBody.innerHTML = skill.fullContent;
 
     //הצגת הפופ אפ כולל התוכן המלא של הכישור
     $(modalContent).modal("show");
 }
 
 // הוספת אירוע לחיצה
 document.addEventListener("DOMContentLoaded", function (event) {
 //סגירת חלון המודאל בלחיצה על כפתור ה-x
     const closeModalButton = document.querySelector(".modal-header .close");
     if (closeModalButton) {
         closeModalButton.addEventListener("click", function () {
             closeModal();
         });
     }
 });
 
 //פונקציה לסגירת חלונית הפופ אפ של התוכן
 function closeModal() {
     //הסתרת חלונית המודאל
     $("#modalContent").modal("hide");
 }
 
//  פונקציה להוספת התגובה לאזור התוכן של התגובות בדף
 function addComment(username, comment) {
    const commentsSection = document.getElementById('comments-section');

    // הוספת תגובה חדשה
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `<strong>${username}:</strong> ${comment}`;

    //הוספת התגובה לאזור התגובות בעמוד
    commentsSection.appendChild(commentElement);
}

//פונקציה לשמירת הנתונים אותם המשתמש הזין, קישור להוספת תגובה ואיפוס הערכים לאחר הוספה
function submitComment() {
    //הכנסת הערכים למשתנה
    const usernameInput = document.getElementById('username');
    const commentInput = document.getElementById('comment');

    // שמירת הערכים
    const username = usernameInput.value;
    const comment = commentInput.value;

    // הוספת הפריטים לאזור התגובות
    addComment(username, comment);

    //איפוס השדות לאחר הוספה
    usernameInput.value = "";
    commentInput.value = "";
}