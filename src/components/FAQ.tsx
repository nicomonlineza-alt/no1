import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'Services',
    questions: [
      {
        q: 'What services does Nicom Online offer?',
        a: 'We provide comprehensive digital solutions including web design & development, eCommerce platforms, AI-powered sales and support agents, social media marketing, Google Ads management, SEO services, content creation, workflow automation, and SMS/email marketing campaigns.'
      },
      {
        q: 'How do AI agents work for my business?',
        a: 'Our AI agents are trained on your business data and processes. They can handle customer inquiries, qualify leads, process sales, book appointments, and provide support 24/7 in multiple languages. They integrate seamlessly with your existing systems and learn continuously to improve performance.'
      },
      {
        q: 'Can you help with both new websites and existing ones?',
        a: 'Absolutely! We can build new websites from scratch or enhance, redesign, and optimize your existing site. We also offer ongoing maintenance, updates, and performance optimization services.'
      }
    ]
  },
  {
    category: 'Pricing',
    questions: [
      {
        q: 'How much do your services cost?',
        a: 'Pricing varies based on project scope, complexity, and ongoing support needs. We offer customized packages tailored to your budget and goals. Contact us for a free consultation and detailed quote specific to your requirements.'
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Yes, we offer flexible payment options including monthly subscriptions for ongoing services like AI agents and marketing management, as well as milestone-based payments for development projects.'
      },
      {
        q: 'Is there a setup fee for AI agents?',
        a: 'AI agent implementation includes an initial setup and training phase. The one-time setup cost covers integration, customization, and training. Monthly subscription fees then cover hosting, maintenance, and continuous improvements.'
      }
    ]
  },
  {
    category: 'Timelines',
    questions: [
      {
        q: 'How long does it take to build a website?',
        a: 'A basic website typically takes 2-4 weeks, while complex eCommerce platforms or custom applications may take 6-12 weeks. Timeline depends on project complexity, content readiness, and revision rounds. We provide detailed project schedules during the planning phase.'
      },
      {
        q: 'When will I see results from digital marketing?',
        a: 'SEO typically shows significant results in 3-6 months. Google Ads can generate leads immediately after launch. Social media growth builds over 2-3 months of consistent content and engagement. We provide monthly analytics reports to track progress.'
      },
      {
        q: 'How quickly can AI agents be deployed?',
        a: 'Basic AI chatbots can be deployed in 1-2 weeks. More sophisticated AI sales or voice agents requiring extensive training and integration typically take 3-4 weeks from kickoff to full deployment.'
      }
    ]
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'What kind of ongoing support do you provide?',
        a: 'We offer various support packages including technical maintenance, content updates, security monitoring, performance optimization, and marketing campaign management. Our team is available during business hours with emergency support available 24/7 for critical issues.'
      },
      {
        q: 'Can you train our team to manage the systems?',
        a: 'Yes! We provide comprehensive training for your team on content management systems, marketing dashboards, AI agent management interfaces, and any other tools we implement. We also offer ongoing training and consultation as needed.'
      },
      {
        q: 'What if I need changes after launch?',
        a: 'We encourage iterative improvements! Minor updates and tweaks are included in our support packages. Larger changes or new features can be handled through additional project agreements. We remain your long-term partner in digital success.'
      }
    ]
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover:neon-glow transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="text-white pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#00ff7f] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-gray-400">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section ref={ref} className="min-h-screen py-24 px-4 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="neon-text mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our services, pricing, and processes
          </p>
        </motion.div>

        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-[#00ff7f] mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <AccordionItem
                    key={`${categoryIndex}-${qIndex}`}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openItems[`${categoryIndex}-${qIndex}`] || false}
                    onToggle={() => toggleItem(`${categoryIndex}-${qIndex}`)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card p-12 rounded-2xl mt-16 text-center"
        >
          <h3 className="text-[#00ff7f] mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-8">
            Our team is here to help. Get in touch and we'll answer any questions you have about 
            how we can support your digital transformation.
          </p>
          <button className="glass-button px-8 py-4 rounded-lg">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}