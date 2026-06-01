import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const leftColumnQuestions = [
  "What exactly is included in your Hong Kong PSP\nsetup service?",
  "How much does the Hong Kong PSP setup cost and what\npayment methods do you accept?",
  "How long does the complete Hong Kong PSP setup take?",
  "Why Hong Kong for PSP setup instead of other jurisdictions?",
  "What ongoing support do you provide after setup?",
  "How do I get started with the Hong Kong\nPSP setup?",
];

const rightColumnQuestions = [
  "Can you help if I've been banned by Stripe, PayPal, or other\nprocessors?",
  "What processing volumes can the Hong Kong\nPSP handle?",
  "What types of businesses can use Hong Kong PSP accounts?",
  "Is the Hong Kong PSP setup completely legal and compliant?",
  "Do you offer any guarantees on the Hong Kong PSP setup?",
  "What documents do I need to provide for the Hong Kong\nPSP setup?",
];

const renderQuestion = (question: string) =>
  question.split("\n").map((line, index, array) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < array.length - 1 ? <br /> : null}
    </span>
  ));

export const TeamIntroSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full px-5 py-[70px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start gap-14 px-0 md:px-10 lg:px-[120px]">
        <header className="flex w-full flex-col items-center gap-4">
          <Badge className="rounded-[32px] border-0 bg-[linear-gradient(61deg,rgba(22,68,235,1)_0%,rgba(128,156,255,1)_80%)] px-[15px] py-[5px] text-sm font-medium leading-5 text-white shadow-[inset_0px_-7px_11px_1px_#a48fff1f,0px_4px_24px_#00000040] backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)] hover:bg-[linear-gradient(61deg,rgba(22,68,235,1)_0%,rgba(128,156,255,1)_80%)]">
            FAQ
          </Badge>
          <div className="flex w-full items-center justify-center px-4">
            <img
              className="h-auto w-full max-w-[642px]"
              alt="Your burning questions, answered"
              src="https://c.animaapp.com/mpv8f0th9epBAX/img/your-burning-questions--answered-.svg"
            />
          </div>
          <div className="flex w-full max-w-[848px] items-center justify-center px-[17.59px]">
            <p className="[font-family:'Inter',Helvetica] text-center text-lg font-light leading-7 tracking-[-1.50px] text-[#58585f]">
              We know Web3 security can sound like a black box. That&apos;s why
              we&apos;ve answered the most important questions so you
              <br />
              can explore how Cirius keeps your finances safe, smart, and
              future-ready.
            </p>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 items-start justify-center gap-4 lg:grid-cols-2 lg:gap-14">
          {[leftColumnQuestions, rightColumnQuestions].map(
            (column, columnIndex) => (
              <div
                key={`column-${columnIndex}`}
                className="flex flex-col items-start gap-4"
              >
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {column.map((question, questionIndex) => (
                    <AccordionItem
                      key={`question-${columnIndex}-${questionIndex}`}
                      value={`item-${columnIndex}-${questionIndex}`}
                      className="overflow-hidden rounded-xl border border-solid border-[#1d1c201f] bg-[#ffffff01] shadow-[0px_16px_32px_-12px_#0e121b1a]"
                    >
                      <Card className="border-0 bg-transparent shadow-none">
                        <CardContent className="p-0">
                          <AccordionTrigger className="px-6 py-6 text-left hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 [&>svg]:text-[#1d1c20]">
                            <span className="block pr-6 [font-family:'Inter',Helvetica] text-base font-normal leading-7 tracking-[-0.32px] text-[#1d1c20]">
                              {renderQuestion(question)}
                            </span>
                          </AccordionTrigger>
                        </CardContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
