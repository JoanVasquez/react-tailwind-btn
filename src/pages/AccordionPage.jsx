import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "../components/Accordion";
import { accordionData } from "../accordionData";

import { useState } from "react";

const AccordionPage = () => {
  const [displayAccordionById, setDisplayAccordionById] = useState(0);

  const displayAccordion = (id) => {
    setDisplayAccordionById((oldDisplayAccordionById) => {
      if (oldDisplayAccordionById === id) {
        return null;
      }

      return id;
    });
  };

  return (
    <div className="w-full">
      {accordionData.map((item) => (
        <div className="mt-5" key={item.id}>
          <Accordion>
            <AccordionHeader
              shouldDisplay={item.id === displayAccordionById}
              setShouldDisplay={() => displayAccordion(item.id)}
            >
              {item.title}
            </AccordionHeader>
            {item.id === displayAccordionById && (
              <AccordionBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                eum, commodi perspiciatis nulla modi expedita mollitia similique
                impedit necessitatibus recusandae dolorem reprehenderit
                explicabo, aut quidem libero obcaecati magnam temporibus nobis?
              </AccordionBody>
            )}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AccordionPage;
