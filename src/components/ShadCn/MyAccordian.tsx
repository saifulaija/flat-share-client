import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface AccordionItemProps {
    title: string;
    content: string;
  }
  
  interface ReusableAccordionProps {
    data: AccordionItemProps[];
  }
  
  const MyAccordion: React.FC<ReusableAccordionProps> = ({ data }) => {
    return (
      <Accordion type="single" collapsible className="w-full">
        {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };
  
  export default MyAccordion;
  