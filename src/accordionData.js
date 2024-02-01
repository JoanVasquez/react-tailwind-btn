function genAccordionData() {
  const accordionData = [];

  for (let i = 0; i <= 5; i++) {
    accordionData.push({
      id: `${i}accordion`,
      title: `${i} Title`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            eum, commodi perspiciatis nulla modi expedita mollitia similique
            impedit necessitatibus recusandae dolorem reprehenderit
            explicabo, aut quidem libero obcaecati magnam temporibus nobis?`,
    });
  }
  return accordionData;
}

export const accordionData = genAccordionData();
