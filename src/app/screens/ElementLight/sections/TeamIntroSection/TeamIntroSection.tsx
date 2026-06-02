import { PlusIcon, MinusIcon } from "lucide-react";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";

const leftColumnFaqs = [
  { id: "item-1", question: "What exactly is included in your Hong Kong PSP setup service?", answer: "Our complete Hong Kong PSP package includes: Hong Kong Limited company formation, registered business address, Airwallex multi-currency business account, Ocean Payment merchant account, PayPal HK verified account, full compliance documentation, ongoing support until all PSPs are active. Everything needed for unlimited payment processing." },
  { id: "item-2", question: "How much does the Hong Kong PSP setup cost and what payment methods do you accept?", answer: "The complete Hong Kong PSP setup is $4,000 USD, payable via cryptocurrency, wire transfer, or existing payment processors. This one-time investment includes all company formation, banking, PSP activation, and compliance setup. No hidden fees or ongoing costs." },
  { id: "item-3", question: "How long does the complete Hong Kong PSP setup take?", answer: "Complete setup takes 2-4 weeks total: Hong Kong company formation (3-5 days), business address & compliance (2-3 days), Airwallex account opening (3-7 days), Ocean Payment activation (5-10 days), PayPal HK verification (2-5 days). We handle everything remotely - no need to visit Hong Kong." },
  { id: "item-4", question: "Why Hong Kong for PSP setup instead of other jurisdictions?", answer: "Hong Kong offers unique advantages: world-class banking infrastructure, stable regulatory environment, favorable business laws, strategic Asia-Pacific location, multiple currency support, and established relationships with global payment networks. It's the optimal jurisdiction for reliable, long-term payment processing." },
  { id: "item-5", question: "What ongoing support do you provide after setup?", answer: "We provide comprehensive post-setup support including: PSP account management guidance, compliance assistance, transaction monitoring setup, dispute resolution help, account optimization recommendations, and direct access to our team for any processing issues or questions." },
  { id: "item-6", question: "How do I get started with the Hong Kong PSP setup?", answer: "You can contact us directly on whatsapp +1 (786) 927-4708. We'll conduct a business assessment, explain the complete process, provide timeline expectations, and can begin Hong Kong company formation within 24-48 hours of payment confirmation." },
];

const rightColumnFaqs = [
  { id: "item-7", question: "Can you help if I've been banned by Stripe, PayPal, or other processors?", answer: "Absolutely! Our Hong Kong PSP setup is specifically designed for businesses experiencing random bans, holds, or shutdowns from traditional processors. We've helped 2500+ entrepreneurs escape payment processor restrictions and achieve stable, unlimited processing capacity." },
  { id: "item-8", question: "What processing volumes can the Hong Kong PSP handle?", answer: "Our Hong Kong PSP setup supports unlimited processing volumes with 99.8% uptime. Clients regularly process $500k-$5M+ monthly without holds, freezes, or volume restrictions. The infrastructure is designed for high-volume, high-risk businesses that traditional processors reject." },
  { id: "item-9", question: "What types of businesses can use Hong Kong PSP accounts?", answer: "Our Hong Kong PSP works for most business models including: e-commerce stores, digital marketing agencies, SaaS platforms, consulting services, affiliate marketing, online education, media buying, luxury brands, and other high-risk industries that traditional processors decline or restrict." },
  { id: "item-10", question: "Is the Hong Kong PSP setup completely legal and compliant?", answer: "Yes, absolutely. All Hong Kong company formations, banking relationships, and PSP accounts are established through proper legal channels with full regulatory compliance. We work with licensed Hong Kong corporate service providers and maintain all required documentation for transparency." },
  { id: "item-11", question: "Do you offer any guarantees on the Hong Kong PSP setup?", answer: "Yes, we offer a money-back guarantee. If we fail to deliver the complete Hong Kong PSP setup as promised due to issues on our end, we provide a full refund. Our 5+ years of experience and 2500+ successful setups demonstrate our proven track record." },
  { id: "item-12", question: "What documents do I need to provide for the Hong Kong PSP setup?", answer: "Required documents include: passport copy, business registration documents (if existing business), proof of address, business description/website, and basic KYC information. We'll guide you through the exact requirements and help prepare all necessary documentation for smooth processing." },
];

const FaqItem = ({ faq }: { faq: typeof leftColumnFaqs[0] }) => (
  <AccordionItem
    value={faq.id}
    className="relative flex flex-col gap-2 pl-4 pr-4 py-3 rounded-xl border border-solid border-[#1544ea22] data-[state=open]:bg-transparent"
  >
    <AccordionTrigger className="flex w-full hover:no-underline text-left [&[data-state=open]>.plus-icon]:hidden [&[data-state=closed]>.minus-icon]:hidden">
      <span className="[font-family:'Inter',Helvetica] text-[#1d1c20] text-sm md:text-base tracking-[-0.32px] leading-6 font-normal pr-8">
        {faq.question}
      </span>
      <PlusIcon className="plus-icon absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1d1c20] shrink-0" />
      <MinusIcon className="minus-icon absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1d1c20] shrink-0" />
    </AccordionTrigger>
    <AccordionContent>
      <p className="text-xs md:text-sm text-[#58585f] leading-5 md:leading-6">{faq.answer}</p>
    </AccordionContent>
  </AccordionItem>
);

export const TeamIntroSection = () => {
  const allFaqs = [...leftColumnFaqs, ...rightColumnFaqs];
  return (
    <section className="flex flex-col w-full max-w-[1400px] mx-auto gap-8 md:gap-10 lg:gap-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] py-10 md:py-16 lg:py-[70px]">
      <header className="flex flex-col items-center w-full gap-3 md:gap-4">
        <Badge variant="outline" className="inline-flex items-center px-[15px] py-[5px] bg-[#f4f4fe] rounded-[32px] border-[#1544ea33] shadow-[inset_0px_-7px_11px_#1544ea1f] backdrop-blur-[2px]">
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#1544ea] text-xs sm:text-sm leading-5">FAQ</span>
        </Badge>
        <h2 className="[font-family:'Cambo',Helvetica] font-normal text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-center tracking-[-1.68px] leading-[120%] px-4">
          <span className="tracking-[-0.94px] bg-[radial-gradient(38.63%_62.02%_at_43.72%_20.95%,#1544ea_0%,#1d1c20_100%)] bg-clip-text text-transparent">Your Burning </span>
          <br />
          <span className="font-normal text-[#1d1c20]">Questions, Answered:</span>
        </h2>
        <p className="max-w-[848px] [font-family:'Inter',Helvetica] tracking-[-1.5px] text-[#58585f] text-sm sm:text-base md:text-[18px] text-center leading-6 md:leading-7 font-[300] px-4">
          We know payment infrastructure can sound complex. That&apos;s why we&apos;ve answered the most important questions so you can understand exactly how our Hong Kong PSP setup works.
        </p>
      </header>

      {/* md and above: Two columns */}
      <div className="hidden md:grid md:grid-cols-2 w-full gap-4 md:gap-6 lg:gap-8 xl:gap-14">
        <Accordion type="single" collapsible className="flex flex-col gap-3 md:gap-4">
          {leftColumnFaqs.map((faq) => <FaqItem key={faq.id} faq={faq} />)}
        </Accordion>
        <Accordion type="single" collapsible className="flex flex-col gap-3 md:gap-4">
          {rightColumnFaqs.map((faq) => <FaqItem key={faq.id} faq={faq} />)}
        </Accordion>
      </div>

      {/* Mobile: Single column */}
      <div className="flex md:hidden flex-col w-full gap-3">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {allFaqs.map((faq) => <FaqItem key={faq.id} faq={faq} />)}
        </Accordion>
      </div>
    </section>
  );
};
