import type { Metadata } from 'next'

export const seoConfig: Metadata = {
  metadataBase: new URL('https://www.nsgss.edu.bd'),
  title: {
    default: 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয় | উৎকর্ষের কেন্দ্রবিন্দু | NSGSS',
    template: '%s | নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয় (NSGSS)',
    absolute: 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয় - শিক্ষার উৎকর্ষ ও মূল্যবোধের মিলনক্ষেত্র | NSGSS'
  },
  description: 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয় (NSGSS) - যশোর জেলার অভয়নগরের শীর্ষস্থানীয় শিক্ষা প্রতিষ্ঠান। আমরা প্রদান করি উচ্চমানের শিক্ষা, আধুনিক প্রযুক্তি-নির্ভর শিক্ষণ পদ্ধতি, এবং ব্যক্তিত্ব বিকাশের সুযোগ। আমাদের লক্ষ্য হলো ছাত্র-ছাত্রীদের সর্বাঙ্গীণ বিকাশ ও তাদেরকে দেশপ্রেমিক, মূল্যবোধসম্পন্ন নাগরিক হিসেবে গড়ে তোলা।',
  applicationName: 'NSGSS Online Portal',
  keywords: [
    'nsgss', 'এন এস জি এস এস', 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয়', 
    'Noapara Shankarpasha Government Secondary School', 'Jashore District schools', 
    'Abhaynagar schools', 'ডিজিটাল শিক্ষা', 'অনলাইন লার্নিং', 'মাধ্যমিক শিক্ষা বাংলাদেশ', 
    'যশোর শিক্ষা প্রতিষ্ঠান', 'বাংলাদেশ শিক্ষা বোর্ড', 'SSC preparation', 'JSC preparation',
    'STEM education Bangladesh', 'ডিজিটাল বাংলাদেশ', 'শিক্ষা ৪.০', 'Education 4.0',
    'বাংলাদেশের সেরা স্কুল', 'Top schools in Bangladesh', 'Extra-curricular activities',
    'স্মার্ট স্কুল', 'Smart School Bangladesh', 'ICT in education', 'শিক্ষায় তথ্যপ্রযুক্তি'
  ],
  authors: [
    { name: 'NSGSS IT Team', url: 'https://www.nsgss.edu.bd/it-team' },
    { name: 'NSGSS Administration', url: 'https://www.nsgss.edu.bd/administration' }
  ],
  creator: 'NSGSS Development Team',
  publisher: 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয় কর্তৃপক্ষ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: 'strict-origin-when-cross-origin',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
    other: {
      me: ['my-email@example.com', 'https://example.com/profile'],
    },
  },
  openGraph: {
    title: 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয় | শিক্ষার উৎকর্ষের কেন্দ্র | NSGSS',
    description: 'যশোর জেলার অভয়নগরের শীর্ষস্থানীয় শিক্ষা প্রতিষ্ঠান। উচ্চমানের শিক্ষা, আধুনিক প্রযুক্তি, এবং মূল্যবোধের সমন্বয়ে গড়ে উঠছে আগামীর বাংলাদেশ।',
    url: 'https://www.nsgss.edu.bd',
    siteName: 'NSGSS - নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয়',
    locale: 'bn_BD',
    type: 'website',
    images: [
      {
        url: 'https://www.nsgss.edu.bd/images/school-building-hd.jpg',
        width: 1920,
        height: 1080,
        alt: 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয়ের প্রধান ভবন - আধুনিক শিক্ষার প্রতীক',
      },
      {
        url: 'https://www.nsgss.edu.bd/images/school-logo-large.png',
        width: 1024,
        height: 1024,
        alt: 'NSGSS লোগো - শিক্ষা, মূল্যবোধ, ও উন্নয়নের প্রতীক',
      },
      {
        url: 'https://www.nsgss.edu.bd/images/students-in-lab.jpg',
        width: 1600,
        height: 900,
        alt: 'NSGSS-এর আধুনিক ল্যাবে গবেষণারত ছাত্র-ছাত্রীরা',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয় | উৎকর্ষের কেন্দ্রবিন্দু | NSGSS',
    description: 'যশোর জেলার অভয়নগরের শীর্ষস্থানীয় শিক্ষা প্রতিষ্ঠান। উচ্চমানের শিক্ষা, আধুনিক প্রযুক্তি, এবং মূল্যবোধের সমন্বয়ে গড়ে উঠছে আগামীর বাংলাদেশ।',
    siteId: '1467726470533754880',
    creator: '@NSGSS_Official',
    creatorId: '1467726470533754880',
    images: ['https://www.nsgss.edu.bd/images/school-building-hd.jpg'],
  },
  alternates: {
    canonical: 'https://www.nsgss.edu.bd',
    languages: {
      'en-US': 'https://www.nsgss.edu.bd/en',
      'bn-BD': 'https://www.nsgss.edu.bd',
    },
    media: {
      'only screen and (max-width: 640px)': 'https://m.nsgss.edu.bd',
    },
    types: {
      'application/rss+xml': 'https://www.nsgss.edu.bd/rss.xml',
    },
  },
  category: 'education',
  classification: 'Secondary Education Institution, Digital Learning Center',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/shortcut-icon.png',
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: '/manifest.json',
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/app/nsgss-mobile/id123456789',
      app_store_id: '123456789',
    },
    android: {
      package: 'bd.edu.nsgss.app',
      app_name: 'NSGSS Mobile',
    },
    web: {
      url: 'https://www.nsgss.edu.bd/app',
      should_fallback: true,
    },
  },
  archives: [
    'https://www.nsgss.edu.bd/2022',
    'https://www.nsgss.edu.bd/2021',
    'https://www.nsgss.edu.bd/2020',
  ],
  assets: ['https://www.nsgss.edu.bd/assets/'],
  bookmarks: ['https://www.nsgss.edu.bd/honor-board/'],
  other: {
    'google-site-verification': 'your-google-site-verification-code',
    'msvalidate.01': 'your-bing-site-verification-code',
    'yandex-verification': 'your-yandex-site-verification-code',
    'norton-safeweb-site-verification': 'your-norton-safeweb-site-verification-code',
  },
}

