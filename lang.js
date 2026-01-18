// Language translations
const translations = {
    en: {
        navTitle: "Rubik's Cube LBL Tutorial",
        mainTitle: "Layer by Layer (LBL) Method",
        introText: "Learn to solve the Rubik's cube step by step using the beginner-friendly LBL method.",
        step1Title: "Step 1: Solve the White Cross",
        step1Content: `<p>Start by finding the white center piece and solving the white cross on the bottom face. Look for white edge pieces that match the center colors of adjacent faces.</p>
                        <h5>Goal:</h5>
                        <p>Create a white cross with matching edge colors on the bottom layer.</p>
                        <h5>Algorithm:</h5>
                        <p>1. Find white edges and move them to the bottom layer using R, L, U, D moves.</p>
                        <p>2. Position them correctly so colors match the centers.</p>
                        <p class="text-muted">Tip: White should be on bottom, green on front. Don't worry about the top layer yet.</p>
                        <h5>Common Mistakes:</h5>
                        <ul>
                            <li>Moving pieces to wrong positions</li>
                            <li>Not matching edge colors to centers</li>
                        </ul>`,
        step2Title: "Step 2: Solve White Corners",
        step2Content: `<p>Now place the four white corner pieces in their correct positions to complete the first layer.</p>
                        <h5>Goal:</h5>
                        <p>All white corners in place with correct adjacent colors.</p>
                        <h5>Algorithm:</h5>
                        <p>R U R' U' (repeat until corner is positioned, then insert with R U R')</p>
                        <p>For corners in top layer: Position above correct spot, then R U R' U'</p>
                        <h5>Tips:</h5>
                        <ul>
                            <li>Look for corners with white and two other colors</li>
                            <li>Match the two side colors to the centers</li>
                        </ul>`,
        step3Title: "Step 3: Solve Middle Layer Edges",
        step3Content: `<p>Solve the four edge pieces in the middle layer.</p>
                        <h5>Goal:</h5>
                        <p>Middle layer complete with correct edge positions.</p>
                        <h5>Algorithms:</h5>
                        <p><strong>Right side:</strong> U R U' R' U' F' U F</p>
                        <p><strong>Left side:</strong> U' L' U L U F U' F'</p>
                        <h5>How to use:</h5>
                        <p>1. Find edge not in middle layer</p>
                        <p>2. Position it in top layer above correct spot</p>
                        <p>3. Apply algorithm based on which side it goes</p>`,
        step4Title: "Step 4: Solve Yellow Cross",
        step4Content: `<p>Create a yellow cross on the top face.</p>
                        <h5>Goal:</h5>
                        <p>Yellow cross formed on top.</p>
                        <h5>Algorithm:</h5>
                        <p>F R U R' U' F' (repeat 1-3 times)</p>
                        <h5>Patterns:</h5>
                        <ul>
                            <li>Dot: Apply algorithm once</li>
                            <li>L-shape: Apply algorithm twice</li>
                            <li>Line: Apply algorithm once</li>
                        </ul>`,
        step5Title: "Step 5: Orient Yellow Edges",
        step5Content: `<p>Position the yellow cross edges correctly.</p>
                        <h5>Goal:</h5>
                        <p>All top edges in correct positions.</p>
                        <h5>Algorithm:</h5>
                        <p>R U R' U R U2 R' U</p>
                        <p>Apply until all edges are positioned (may need 1-4 times)</p>`,
        step6Title: "Step 6: Position Yellow Corners",
        step6Content: `<p>Place the yellow corners in the correct positions.</p>
                        <h5>Goal:</h5>
                        <p>Yellow corners in right spots, but may need orientation.</p>
                        <h5>Algorithm:</h5>
                        <p>U R U' L' U R' U' L</p>
                        <p>Repeat until all corners are positioned.</p>`,
        step7Title: "Step 7: Orient Yellow Corners",
        step7Content: `<p>Rotate the yellow corners to complete the cube.</p>
                        <h5>Goal:</h5>
                        <p>All faces solved.</p>
                        <h5>Algorithm:</h5>
                        <p>R' D' R D (repeat for each corner)</p>
                        <p>Hold cube with yellow up, apply to misoriented corners.</p>`,
        controlsTitle: "Controls",
        controlsContent: `<p><strong>Mouse:</strong> Orbit camera</p>
                          <p><strong>Click:</strong> Rotate face</p>
                          <p><strong>Keyboard:</strong></p>
                          <ul>
                              <li>R/L/U/D/F/B: Rotate faces</li>
                              <li>Shift + key: Counterclockwise</li>
                          </ul>`
    },
    ar: {
        navTitle: "دليل مكعب روبيك - طريقة LBL",
        mainTitle: "طريقة الطبقات (LBL)",
        introText: "تعلم حل مكعب روبيك خطوة بخطوة باستخدام طريقة LBL السهلة للمبتدئين.",
        step1Title: "الخطوة 1: حل الصليب الأبيض",
        step1Content: `<p>ابدأ بإيجاد قطعة المركز الأبيض وحل الصليب الأبيض على الوجه السفلي. ابحث عن قطع الحواف البيضاء التي تطابق ألوان مراكز الوجوه المجاورة.</p>
                        <h5>الهدف:</h5>
                        <p>إنشاء صليب أبيض مع مطابقة ألوان الحواف على الطبقة السفلية.</p>
                        <h5>الخوارزمية:</h5>
                        <p>1. ابحث عن الحواف البيضاء وانقلها إلى الطبقة السفلية باستخدام حركات R, L, U, D.</p>
                        <p>2. ضعها بشكل صحيح بحيث تطابق الألوان المراكز.</p>
                        <p class="text-muted">نصيحة: الأبيض يجب أن يكون في الأسفل، الأخضر في الأمام. لا تقلق بشأن الطبقة العلوية بعد.</p>
                        <h5>الأخطاء الشائعة:</h5>
                        <ul>
                            <li>نقل القطع إلى مواضع خاطئة</li>
                            <li>عدم مطابقة ألوان الحواف مع المراكز</li>
                        </ul>`,
        step2Title: "الخطوة 2: حل زوايا الأبيض",
        step2Content: `<p>الآن ضع قطع الزوايا البيضاء الأربع في مواضعها الصحيحة لإكمال الطبقة الأولى.</p>
                        <h5>الهدف:</h5>
                        <p>جميع زوايا الأبيض في مكانها مع الألوان المجاورة الصحيحة.</p>
                        <h5>الخوارزمية:</h5>
                        <p>R U R' U' (كرر حتى يتم وضع الزاوية، ثم أدخل بـ R U R')</p>
                        <p>للزوايا في الطبقة العلوية: ضع فوق المكان الصحيح، ثم R U R' U'</p>
                        <h5>نصائح:</h5>
                        <ul>
                            <li>ابحث عن الزوايا ذات اللون الأبيض ولونين آخرين</li>
                            <li>طابق اللونين الجانبيين مع المراكز</li>
                        </ul>`,
        step3Title: "الخطوة 3: حل حواف الطبقة الوسطى",
        step3Content: `<p>حل قطع الحواف الأربع في الطبقة الوسطى.</p>
                        <h5>الهدف:</h5>
                        <p>الطبقة الوسطى مكتملة مع مواضع الحواف الصحيحة.</p>
                        <h5>الخوارزميات:</h5>
                        <p><strong>الجانب الأيمن:</strong> U R U' R' U' F' U F</p>
                        <p><strong>الجانب الأيسر:</strong> U' L' U L U F U' F'</p>
                        <h5>كيفية الاستخدام:</h5>
                        <p>1. ابحث عن حافة ليست في الطبقة الوسطى</p>
                        <p>2. ضعها في الطبقة العلوية فوق المكان الصحيح</p>
                        <p>3. طبق الخوارزمية بناءً على الجانب الذي تذهب إليه</p>`,
        step4Title: "الخطوة 4: حل الصليب الأصفر",
        step4Content: `<p>أنشئ صليباً أصفر على الوجه العلوي.</p>
                        <h5>الهدف:</h5>
                        <p>صليب أصفر مشكل في الأعلى.</p>
                        <h5>الخوارزمية:</h5>
                        <p>F R U R' U' F' (كرر 1-3 مرات)</p>
                        <h5>الأنماط:</h5>
                        <ul>
                            <li>نقطة: طبق الخوارزمية مرة واحدة</li>
                            <li>شكل L: طبق الخوارزمية مرتين</li>
                            <li>خط: طبق الخوارزمية مرة واحدة</li>
                        </ul>`,
        step5Title: "الخطوة 5: توجيه حواف الأصفر",
        step5Content: `<p>ضع حواف الصليب الأصفر بشكل صحيح.</p>
                        <h5>الهدف:</h5>
                        <p>جميع الحواف العلوية في المواضع الصحيحة.</p>
                        <h5>الخوارزمية:</h5>
                        <p>R U R' U R U2 R' U</p>
                        <p>طبق حتى يتم وضع جميع الحواف (قد يحتاج 1-4 مرات)</p>`,
        step6Title: "الخطوة 6: وضع زوايا الأصفر",
        step6Content: `<p>ضع زوايا الأصفر في المواضع الصحيحة.</p>
                        <h5>الهدف:</h5>
                        <p>زوايا الأصفر في الأماكن الصحيحة، لكن قد تحتاج إلى توجيه.</p>
                        <h5>الخوارزمية:</h5>
                        <p>U R U' L' U R' U' L</p>
                        <p>كرر حتى يتم وضع جميع الزوايا.</p>`,
        step7Title: "الخطوة 7: توجيه زوايا الأصفر",
        step7Content: `<p>دور زوايا الأصفر لإكمال المكعب.</p>
                        <h5>الهدف:</h5>
                        <p>جميع الوجوه محلولة.</p>
                        <h5>الخوارزمية:</h5>
                        <p>R' D' R D (كرر لكل زاوية)</p>
                        <p>امسك المكعب بالأصفر لأعلى، طبق على الزوايا ذات التوجيه الخاطئ.</p>`,
        controlsTitle: "التحكم",
        controlsContent: `<p><strong>الفأرة:</strong> دوران الكاميرا</p>
                          <p><strong>النقر:</strong> دوران الوجه</p>
                          <p><strong>لوحة المفاتيح:</strong></p>
                          <ul>
                              <li>R/L/U/D/F/B: دوران الوجوه</li>
                              <li>Shift + مفتاح: عكس اتجاه عقارب الساعة</li>
                          </ul>`
    }
};

let currentLang = 'en';

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Update button text
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'العربية' : 'English';
    
    // Update all translatable elements
    const elements = {
        'nav-title': 'navTitle',
        'main-title': 'mainTitle',
        'intro-text': 'introText',
        'step1-title': 'step1Title',
        'step1-content': 'step1Content',
        'step2-title': 'step2Title',
        'step2-content': 'step2Content',
        'step3-title': 'step3Title',
        'step3-content': 'step3Content',
        'step4-title': 'step4Title',
        'step4-content': 'step4Content',
        'step5-title': 'step5Title',
        'step5-content': 'step5Content',
        'step6-title': 'step6Title',
        'step6-content': 'step6Content',
        'step7-title': 'step7Title',
        'step7-content': 'step7Content'
    };
    
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[currentLang][elements[id]];
        }
    });
}

document.getElementById('lang-toggle').addEventListener('click', switchLanguage);