export type Language = 'EN' | 'UA';

export const translations = {
  EN: {
    // Navbar
    nav: {
      technology: 'Technology',
      solutions: 'Solutions',
      applications: 'Applications',
      whyUs: 'Why Us',
      contact: 'Contact',
      requestDemo: 'Request Demo',
    },
    // Hero Section
    hero: {
      badge: 'Advanced Defense Technology',
      title: 'Laser Protection Systems',
      subtitle: 'Against UAVs',
      description: 'High-precision AI laser systems for neutralizing unmanned aerial vehicles and protecting critical infrastructure',
      learnMore: 'Learn More',
      requestDemo: 'Request Demo',
      stats: {
        range: 'Detection Range',
        rangeValue: 'Up to 5 km',
        precision: 'Neutralization Accuracy',
        precisionValue: '95%',
        response: 'Response Time',
        responseValue: '<2 sec',
      },
    },
    // About Section
    about: {
      badge: 'About Company',
      title: 'Leader in Laser Defense Systems',
      description: 'COMMON LASER TECHNOLOGIES LIMITED has been developing innovative laser systems for protecting ground objects from unmanned aerial vehicles since 2026. Our solutions combine advanced optical technologies with intelligent threat detection and tracking systems.',
      mission: 'Our Mission',
      missionText: 'To create the most effective and reliable protection systems that save lives and preserve critical infrastructure from aerial threats.',
      stats: {
        projects: 'Projects',
        projectsValue: '150+',
        countries: 'Countries',
        countriesValue: '25+',
        systems: 'Systems Deployed',
        systemsValue: '500+',
      },
    },
    // Technology Section
    technology: {
      badge: 'Technology',
      title: 'How Our Systems Work',
      description: 'Multi-layered protection with intelligent threat detection and neutralization',
      steps: {
        detection: {
          title: 'Detection',
          description: 'Radar and optical systems detect objects at distances up to 5 km',
        },
        identification: {
          title: 'Identification',
          description: 'AI analyzes the threat and determines neutralization priority',
        },
        tracking: {
          title: 'Tracking',
          description: 'Continuous target tracking with trajectory calculation',
        },
        neutralization: {
          title: 'Neutralization',
          description: 'Pulsed laser beam destroys electronics and optics',
        },
      },
      specs: {
        detection: 'Detection Range',
        detectionValue: 'Up to 5 km',
        response: 'Response Time',
        responseValue: '<2 seconds',
        efficiency: 'Efficiency',
        efficiencyValue: '99.9%',
      },
    },
    // Solutions Section
    solutions: {
      badge: 'Solutions',
      title: 'Our Products',
      description: 'A complete range of laser systems for any security requirements',
      dazzler: {
        name: 'LASER DAZZLER',
        category: 'Automated System',
        power: 'Low power (Watts)',
        range: 'Up to 300 m',
        targets: 'Visible/IR cameras',
        description: 'Automatic detection and blinding of visible and infrared cameras',
      },
      cameraKiller: {
        name: 'LASER CAMERA KILLER',
        category: 'Pulse System',
        power: '532 nm, up to 1 J',
        range: 'Up to 3350 m',
        targets: 'FPV sensors',
        description: 'Pulsed laser for damaging FPV drone sensors',
      },
      antiRecon: {
        name: 'ANTI-RECONNAISSANCE LASER',
        category: 'Long-Range System',
        power: '532 nm, up to 2 J',
        range: '4-5 km',
        targets: 'Long-range cameras',
        description: 'Optimized for highly sensitive long-range reconnaissance cameras',
      },
      nightVision: {
        name: 'NIGHT-VISION KILLER',
        category: 'Specialized System',
        power: 'SWIR - LWIR',
        range: 'Variable',
        targets: 'Night vision devices',
        description: 'Specialized laser matching sensor sensitivity wavelengths',
      },
      specs: {
        power: 'Power',
        range: 'Range',
        targets: 'Targets',
      },
      learnMore: 'Learn More',
      customConfig: 'Need a custom configuration?',
      contactUs: 'Contact Us',
    },
    // Protection Capabilities Section
    protection: {
      badge: 'Protection Capabilities',
      title: 'What We Protect Against',
      description: 'Comprehensive protection against all types of modern and emerging threats',
      threatsTitle: 'Threat Types',
      threats: {
        fpv: {
          name: 'FPV bombers',
          description: 'Tactical and operational',
        },
        recon: {
          name: 'Reconnaissance UAVs',
          description: 'At altitudes up to 5 km',
        },
      },
      targetsTitle: 'Protected Objects',
      targets: {
        infrastructure: 'Critical Infrastructure',
        military: 'Military Facilities',
        airfields: 'Airfields',
      },
      stats: {
        coverage: '360°',
        coverageLabel: 'All-round Protection',
        uptime: '24/7',
        uptimeLabel: 'Continuous Operation',
      },
    },
    // Advantages Section
    advantages: {
      badge: 'Why Us',
      title: 'Our Advantages',
      description: 'Technologies that set new standards in defense systems',
      items: {
        precision: {
          title: 'High Precision',
          description: 'Advanced optical systems ensure target engagement accuracy of 99.9%',
        },
        speed: {
          title: 'Instant Response',
          description: 'Detection, identification, and neutralization in less than 2 seconds',
        },
        range: {
          title: 'Long Range',
          description: 'Effective operation at distances up to 5 km in any weather conditions',
        },
        autonomous: {
          title: 'Autonomous Operation',
          description: 'AI-based systems work 24/7 without human intervention',
        },
        integration: {
          title: 'Easy Integration',
          description: 'Compatibility with existing security and air defense systems',
        },
        eco: {
          title: 'Eco-Friendly',
          description: 'No explosive materials or toxic substances. Minimal environmental impact',
        },
      },
      techSpecs: 'Want to learn more about technical specifications?',
      downloadBrochure: 'Download Brochure',
    },
    // Use Cases Section
    useCases: {
      badge: 'Applications',
      title: 'Application Scenarios',
      description: 'Real-world protection for various types of facilities',
      scenarios: {
        military: {
          title: 'Military Bases',
          description: 'Protection of strategic facilities and troop concentrations',
          features: ['Perimeter protection', 'Integration with air defense', 'Autonomous operation'],
        },
        infrastructure: {
          title: 'Critical Infrastructure',
          description: 'Security of energy facilities and industrial complexes',
          features: ['24/7 monitoring', 'Fast response', 'Weather independence'],
        },
        airports: {
          title: 'Airports',
          description: 'Prevention of unauthorized UAV intrusions into airspace',
          features: ['Wide coverage area', 'Integration with ATC', 'Minimal interference'],
        },
        events: {
          title: 'Mass Events',
          description: 'Security for sports competitions and public gatherings',
          features: ['Mobile deployment', 'Easy setup', 'Rapid response'],
        },
      },
      stats: {
        facilities: 'Protected Facilities',
        facilitiesValue: '150+',
        intercepted: 'Threats Intercepted',
        interceptedValue: '50,000+',
        countries: 'Countries',
        countriesValue: '25+',
      },
    },
    // Trust Section
    trust: {
      badge: 'Trust',
      title: 'Certificates and Partners',
      description: 'International recognition and highest quality standards',
      certificates: {
        iso: 'ISO 9001:2015',
        isoDesc: 'Quality Management',
        nato: 'NATO STANAG',
        natoDesc: 'Military Standards',
        ce: 'CE Marking',
        ceDesc: 'European Safety',
      },
      partners: 'Trusted Partners',
      testimonial: 'The accuracy, reliability and response speed of COMMON LASER systems exceed all existing analogues on the market',
      testimonialAuthor: 'Ministry of Defense',
      testimonialRole: 'Strategic Systems Department',
    },
    // Contact Section
    contact: {
      badge: 'Contact Us',
      title: 'Request a Demo',
      description: 'Leave your details and our specialists will contact you to arrange a demonstration of our systems',
      form: {
        name: { label: 'Full Name', placeholder: 'John Doe' },
        email: { label: 'Email', placeholder: 'john@company.com' },
        company: { label: 'Company', placeholder: 'Your Company' },
        phone: { label: 'Phone', placeholder: '+1 234 567 8900' },
        message: { label: 'Message', placeholder: 'Tell us about your requirements...' },
        consent: { label: 'I agree to the processing of personal data and accept the privacy policy' },
        submit: { label: 'Send Request', loading: 'Sending...', disclaimer: 'Your data is protected and will not be transferred to third parties' },
        success: 'Thank you!',
        successMessage: 'We will contact you soon.',
        error: 'Error sending form. Please try again.',
      },
      info: {
        title: 'Contact Information',
        address: 'Address',
        addressValue: '123 Defense Avenue, Tech City, TC 12345',
        email: 'Email',
        emailValue: 'info@commonlaser.com',
        phone: 'Phone',
        phoneValue: '+1 234 567 8900',
      },
    },
    // Footer
    footer: {
      description: 'Leader in laser defense systems for protecting against UAVs and aerial threats',
      products: 'Products',
      company: 'Company',
      companyLinks: {
        about: 'About Us',
        technology: 'Technology',
        certificates: 'Certificates',
      },
      support: 'Support',
      supportLinks: {
        documentation: 'Documentation',
        contact: 'Contact',
      },
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  UA: {
    // Navbar
    nav: {
      technology: 'Технологія',
      solutions: 'Рішення',
      applications: 'Застосування',
      whyUs: 'Чому ми',
      contact: 'Контакти',
      requestDemo: 'Запит демо',
    },
    // Hero Section
    hero: {
      badge: 'Передова технологія захисту',
      title: 'Лазерні системи захисту',
      subtitle: 'Від безпілотників',
      description: 'Високоточні AI лазерні системи для нейтралізації безпілотних літальних апаратів та захисту критичної інфраструктури',
      learnMore: 'Дізнатися більше',
      requestDemo: 'Запит демо',
      stats: {
        range: 'Дальність виявлення',
        rangeValue: 'До 5 км',
        precision: 'Точність нейтралізації',
        precisionValue: '95%',
        response: 'Час реакції',
        responseValue: '<2 сек',
      },
    },
    // About Section
    about: {
      badge: 'Про компанію',
      title: 'Лідер у лазерних системах захисту',
      description: 'COMMON LASER TECHNOLOGIES LIMITED з 2026 року розробляє інноваційні лазерні системи для захисту наземних об\'єктів від безпілотних літальних апаратів. Наші рішення поєднують передові оптичні технології з інтелектуальними системами виявлення та супроводу цілей.',
      mission: 'Наша місія',
      missionText: 'Створювати найефективніші та надійні системи захисту, які рятують життя та зберігають критичну інфраструктуру від повітряних загроз.',
      stats: {
        projects: 'Проєктів',
        projectsValue: '150+',
        countries: 'Країн',
        countriesValue: '25+',
        systems: 'Систем встановлено',
        systemsValue: '500+',
      },
    },
    // Technology Section
    technology: {
      badge: 'Технологія',
      title: 'Як працюють наші системи',
      description: 'Багаторівневий захист з інтелектуальним виявленням та нейтралізацією загроз',
      steps: {
        detection: {
          title: 'Виявлення',
          description: 'Радари та оптичні системи виявляють об\'єкти на відстані до 5 км',
        },
        identification: {
          title: 'Ідентифікація',
          description: 'ШІ аналізує загрозу та визначає пріоритет нейтралізації',
        },
        tracking: {
          title: 'Супровід',
          description: 'Постійне відстеження цілі з розрахунком траєкторії',
        },
        neutralization: {
          title: 'Нейтралізація',
          description: 'Імпульсний лазерний промінь знищує електроніку та оптику',
        },
      },
      specs: {
        detection: 'Дальність виявлення',
        detectionValue: 'До 5 км',
        response: 'Час реакції',
        responseValue: '<2 секунд',
        efficiency: 'Ефективність',
        efficiencyValue: '99.9%',
      },
    },
    // Solutions Section
    solutions: {
      badge: 'Рішення',
      title: 'Наші продукти',
      description: 'Повний спектр лазерних систем для будь-яких вимог безпеки',
      dazzler: {
        name: 'LASER DAZZLER',
        category: 'Автоматизована система',
        power: 'Низька потужність (Вати)',
        range: 'До 300 м',
        targets: 'Видимі/ІЧ камери',
        description: 'Автоматичне виявлення та осліплення видимих та інфрачервоних камер',
      },
      cameraKiller: {
        name: 'LASER CAMERA KILLER',
        category: 'Імпульсна система',
        power: '532 нм, до 1 Дж',
        range: 'До 3350 м',
        targets: 'Сенсори FPV',
        description: 'Імпульсний лазер для пошкодження сенсорів FPV дронів',
      },
      antiRecon: {
        name: 'ANTI-RECONNAISSANCE LASER',
        category: 'Далекобійна система',
        power: '532 нм, до 2 Дж',
        range: '4-5 км',
        targets: 'Камери дальнього спостереження',
        description: 'Оптимізований для високочутливих камер дальньої розвідки',
      },
      nightVision: {
        name: 'NIGHT-VISION KILLER',
        category: 'Спеціалізована система',
        power: 'SWIR - LWIR',
        range: 'Змінна',
        targets: 'Пристрої нічного бачення',
        description: 'Спеціалізований лазер, відповідний довжині хвилі чутливості сенсора',
      },
      specs: {
        power: 'Потужність',
        range: 'Дальність',
        targets: 'Цілі',
      },
      learnMore: 'Дізнатися більше',
      customConfig: 'Потрібна індивідуальна конфігурація?',
      contactUs: 'Зв\'яжіться з нами',
    },
    // Protection Capabilities Section
    protection: {
      badge: 'Можливості захисту',
      title: 'Від чого ми захищаємо',
      description: 'Комплексний захист від усіх типів сучасних і перспективних загроз',
      threatsTitle: 'Типи загроз',
      threats: {
        fpv: {
          name: 'FPV бомбери',
          description: 'Тактичні та оперативні',
        },
        recon: {
          name: 'БПЛА розвідники',
          description: 'На висоті до 5 км',
        },
      },
      targetsTitle: 'Об\'єкти захисту',
      targets: {
        infrastructure: 'Критична інфраструктура',
        military: 'Військові об\'єкти',
        airfields: 'Аеродроми',
      },
      stats: {
        coverage: '360°',
        coverageLabel: 'Кругова захист',
        uptime: '24/7',
        uptimeLabel: 'Безперервна робота',
      },
    },
    // Advantages Section
    advantages: {
      badge: 'Чому ми',
      title: 'Наші переваги',
      description: 'Технології, які встановлюють нові стандарти в системах захисту',
      items: {
        precision: {
          title: 'Висока точність',
          description: 'Передові оптичні системи забезпечують точність ураження цілі 99.9%',
        },
        speed: {
          title: 'Миттєва реакція',
          description: 'Виявлення, ідентифікація та нейтралізація менш ніж за 2 секунди',
        },
        range: {
          title: 'Велика дальність',
          description: 'Ефективна робота на відстані до 5 км в будь-яких погодних умовах',
        },
        autonomous: {
          title: 'Автономна робота',
          description: 'Системи на базі ШІ працюють 24/7 без втручання людини',
        },
        integration: {
          title: 'Легка інтеграція',
          description: 'Сумісність з існуючими системами безпеки та ППО',
        },
        eco: {
          title: 'Екологічність',
          description: 'Без вибухових матеріалів та токсичних речовин. Мінімальний вплив на довкілля',
        },
      },
      techSpecs: 'Хочете дізнатися більше про технічні характеристики?',
      downloadBrochure: 'Завантажити брошуру',
    },
    // Use Cases Section
    useCases: {
      badge: 'Застосування',
      title: 'Сценарії застосування',
      description: 'Реальний захист різних типів об\'єктів',
      scenarios: {
        military: {
          title: 'Військові бази',
          description: 'Захист стратегічних об\'єктів та скупчень військ',
          features: ['Захист периметра', 'Інтеграція з ППО', 'Автономна робота'],
        },
        infrastructure: {
          title: 'Критична інфраструктура',
          description: 'Безпека енергетичних об\'єктів та промислових комплексів',
          features: ['Моніторинг 24/7', 'Швидка реакція', 'Незалежність від погоди'],
        },
        airports: {
          title: 'Аеропорти',
          description: 'Запобігання несанкціонованим проникненням БПЛА у повітряний простір',
          features: ['Широка зона покриття', 'Інтеграція з УПР', 'Мінімальні перешкоди'],
        },
        events: {
          title: 'Масові заходи',
          description: 'Безпека спортивних змагань та громадських зібрань',
          features: ['Мобільне розгортання', 'Легке налаштування', 'Швидка реакція'],
        },
      },
      stats: {
        facilities: 'Захищені об\'єкти',
        facilitiesValue: '150+',
        intercepted: 'Знищених загроз',
        interceptedValue: '50,000+',
        countries: 'Країни',
        countriesValue: '25+',
      },
    },
    // Trust Section
    trust: {
      badge: 'Довіра',
      title: 'Сертифікати та партнери',
      description: 'Міжнародне визнання та найвищі стандарти якості',
      certificates: {
        iso: 'ISO 9001:2015',
        isoDesc: 'Управління якістю',
        nato: 'NATO STANAG',
        natoDesc: 'Військові стандарти',
        ce: 'Маркування CE',
        ceDesc: 'Європейська безпека',
      },
      partners: 'Надійні партнери',
      testimonial: 'Точність, надійність та швидкість реакції систем COMMON LASER перевищують всі існуючі аналоги на ринку',
      testimonialAuthor: 'Міністерство оборони',
      testimonialRole: 'Департамент стратегічних систем',
    },
    // Contact Section
    contact: {
      badge: 'Зв\'яжіться з нами',
      title: 'Запит на демонстрацію',
      description: 'Залиште свої дані і наші спеціалісти зв\'яжуться з вами для організації демонстрації наших систем',
      form: {
        name: { label: 'Повне ім\'я', placeholder: 'Іван Петренко' },
        email: { label: 'Електронна пошта', placeholder: 'ivan@company.com' },
        company: { label: 'Компанія', placeholder: 'Ваша компанія' },
        phone: { label: 'Телефон', placeholder: '+380 XX XXX XXXX' },
        message: { label: 'Повідомлення', placeholder: 'Розкажіть про ваші вимоги...' },
        consent: { label: 'Я згоден на обробку особистих даних та приймаю політику конфіденційності' },
        submit: { label: 'Відправити запит', loading: 'Відправка...', disclaimer: 'Ваші дані захищені та не будуть передані третім особам' },
        success: 'Дякуємо!',
        successMessage: 'Ми зв\'яжемося з вами найближчим часом.',
        error: 'Помилка відправки форми. Спробуйте ще раз.',
      },
      info: {
        title: 'Контактна інформація',
        address: 'Адреса',
        addressValue: 'вул. Оборонна, 123, Техно-Сіті, ТС 12345',
        email: 'Електронна пошта',
        emailValue: 'info@commonlaser.com',
        phone: 'Телефон',
        phoneValue: '+380 XX XXX XXXX',
      },
    },
    // Footer
    footer: {
      description: 'Лідер у лазерних системах захисту від БПЛА та повітряних загроз',
      products: 'Продукти',
      company: 'Компанія',
      companyLinks: {
        about: 'Про нас',
        technology: 'Технологія',
        certificates: 'Сертифікати',
      },
      support: 'Підтримка',
      supportLinks: {
        documentation: 'Документація',
        contact: 'Контакти',
      },
      rights: 'Усі права захищені',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання',
    },
  },
};