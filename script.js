// Language Translation Data
const translations = {
    en: {
        title: "AgriCompare",
        navHome: "Home",
        navAbout: "About",
        navContact: "Contact",
        heroText: "Find the Best Solutions for Your Crops",
        labelCrop: "Select Crop:",
        labelDisease: "Select Disease:",
        btnSearch: "Search",
        footerText: "© 2025 AgriCompare. All rights reserved."
    },
    hi: {
        title: "एग्रीकंपेयर",
        navHome: "मुख्य पृष्ठ",
        navAbout: "के बारे में",
        navContact: "संपर्क करें",
        heroText: "अपनी फसलों के लिए सर्वोत्तम समाधान खोजें",
        labelCrop: "फसल चुनें:",
        labelDisease: "रोग चुनें:",
        btnSearch: "खोज",
        footerText: "© 2025 एग्रीकंपेयर। सर्वाधिकार सुरक्षित।"
    },
    mr: {
        title: "अॅग्रीकंपेअर",
        navHome: "मुख्यपृष्ठ",
        navAbout: "आमच्याबद्दल",
        navContact: "संपर्क करा",
        heroText: "तुमच्या पिकांसाठी सर्वोत्तम उपाय शोधा",
        labelCrop: "पीक निवडा:",
        labelDisease: "रोग निवडा:",
        btnSearch: "शोधा",
        footerText: "© 2025 अॅग्रीकंपेअर. सर्व हक्क राखीव."
    }
};

// Change Language Function
function changeLanguage(lang) {
    const elements = {
        "title": "title",
        "nav-home": "navHome",
        "nav-about": "navAbout",
        "nav-contact": "navContact",
        "hero-text": "heroText",
        "label-crop": "labelCrop",
        "label-disease": "labelDisease",
        "btn-search": "btnSearch",
        "footer-text": "footerText"
    };

    for (let id in elements) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = translations[lang][elements[id]];
        }
    }
}

// Search Results Function with Correct Path
function searchResults() {
    const crop = document.getElementById('crop').value;
    const disease = document.getElementById('disease').value;

    if (crop && disease) {
        window.location.href = `./Result/result.html?crop=${crop}&disease=${disease}`;
    } else {
        alert("Please select both crop and disease.");
    }
}
