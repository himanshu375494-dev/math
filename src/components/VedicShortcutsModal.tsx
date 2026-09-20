import React from 'react';
import { Lightbulb, X, Brain, CheckCircle2 } from 'lucide-react';

interface VedicShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VedicShortcutsModal: React.FC<VedicShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const tricks = [
    {
      title: '1. वैदिक सूत्र: 1000 का बेस (1000 - XYZ)',
      sutra: 'सूत्र: "निखिलं नवतश्चरमं दशतः" (All from 9, last from 10)',
      example: 'उदा: 1000 - 648 = ?',
      steps: [
        'पहले अंक 6 को 9 से घटाएं: 9 - 6 = 3',
        'दूसरे अंक 4 को 9 से घटाएं: 9 - 4 = 5',
        'अंतिम अंक 8 को 10 से घटाएं: 10 - 8 = 2',
        'उत्तर = 352 (मन में केवल 1 सेकंड में!)',
      ],
    },
    {
      title: '2. 100 से त्वरित घटाव (100 - X)',
      sutra: 'दहाई को 9 से, इकाई को 10 से घटाएं',
      example: 'उदा: 100 - 74 = ?',
      steps: [
        'दहाई अंक 7 को 9 से घटाएं: 9 - 7 = 2',
        'इकाई अंक 4 को 10 से घटाएं: 10 - 4 = 6',
        'उत्तर = 26',
      ],
    },
    {
      title: '3. रिफ्लेक्स ट्रैप से बचने का नियम',
      sutra: 'अक्सर 73 का 37 या 84 का 26 लिख देने का भ्रम होता है',
      example: 'उदा: 100 - 73 = 27 (न कि 37!)',
      steps: [
        '7 + 2 = 9 (दहाई का जोड़ 9 होना चाहिए)',
        '3 + 7 = 10 (इकाई का जोड़ 10 होना चाहिए)',
        'यदि 37 लिखा तो 73 + 37 = 110 हो जाएगा, जो गलत है!',
      ],
    },
    {
      title: '4. वर्ग निकालने की सुपरफास्ट ट्रिक (5 पर अंत)',
      sutra: 'सूत्र: "एकाधिकेन पूर्वेण" (One more than the previous)',
      example: 'उदा: 35² = ?',
      steps: [
        'पहला अंक 3 है, उसका अगला अंक 4: 3 × 4 = 12',
        'पीछे 25 लगा दें: उत्तर = 1225',
        'ऐसे ही: 25² = 625, 45² = 2025, 65² = 4225, 85² = 7225',
      ],
    },
    {
      title: '5. मानसिक 2-अंक गुणा (Left-to-Right Split)',
      sutra: 'दहाई और इकाई को अलग-अलग गुणा कर मन में जोड़ें',
      example: 'उदा: 18 × 7 = ?',
      steps: [
        '10 × 7 = 70',
        '8 × 7 = 56',
        '70 + 56 = 126 (कागज-कलम की आवश्यकता नहीं!)',
      ],
    },
    {
      title: '6. दशमलव कॉम्प्लिमेंट (100 - XX.YY)',
      sutra: 'दशमलव भाग को 100 से घटाएं, पूर्णांक में 1 जोड़कर घटाएं',
      example: 'उदा: 100 - 37.42 = ?',
      steps: [
        'दशमलव भाग: 100 - 42 = .58',
        'पूर्णांक 37 में 1 जोड़ें = 38 -> 100 - 38 = 62',
        'उत्तर = 62.58',
      ],
    },
    {
      title: '7. रैंडम 2-अंक × 2-अंक गुणा (स्प्लिट व क्रॉस)',
      sutra: 'विधि 1: स्प्लिट (34 × 26 = 34×20 + 34×6), विधि 2: उर्ध्व-तिर्यक',
      example: 'उदा: 34 × 26 = ?',
      steps: [
        'स्प्लिट विधि: 34 × 20 = 680',
        'इकाई से गुणा: 34 × 6 = 204',
        'मन में जोड़: 680 + 204 = 884 (सुपरफास्ट रिफ्लेक्स!)',
      ],
    },
  ];

  return (
    <div
      id="vedic-shortcuts-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3"
      onClick={onClose}
    >
      <div
        id="vedic-shortcuts-modal"
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">माइंड शार्प ट्रिक्स & वैदिक सूत्र</h2>
              <p className="text-xs text-slate-400">Mental Math Shortcuts & Formulas</p>
            </div>
          </div>
          <button
            id="close-vedic-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto space-y-4 max-h-[65vh]">
          {tricks.map((trick, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2"
            >
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-amber-400 shrink-0" />
                <h3 className="font-bold text-slate-100 text-sm sm:text-base">{trick.title}</h3>
              </div>
              <div className="text-xs font-semibold text-sky-400 bg-sky-950/40 px-2.5 py-1 rounded border border-sky-900/50">
                {trick.sutra}
              </div>
              <div className="text-xs text-amber-300 font-bold bg-amber-950/20 px-2 py-0.5 rounded">
                {trick.example}
              </div>
              <div className="space-y-1 pt-1">
                {trick.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-slate-800 bg-slate-950/40 text-center">
          <p className="text-xs text-slate-400">
            रोजाना 10 मिनट अभ्यास से आपकी मानसिक गणना शक्ति 5x तेज हो जाएगी!
          </p>
        </div>
      </div>
    </div>
  );
};
