import styles from "@styles/Home.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const FAQ = () => {
  const faqData = [
    {
      question: "What is the Non-Fungible Airplane Club?",
      answer:
        "The non-fungible Airplane Club is a dapp built for owners and future owners of our NFT collection.",
    },
    {
      question: "Is there any advantages of being part of the Airplane Club?",
      answer:
        "Right now you can have the most advantage of all that is being a part of the family who fly around the world and share lots of love to everyone:)",
    },
    {
      question:
        "If I have questions or run into any issues, where can I ask them?",
      answer:
        "Just send us an email. We'll try to get back to you as soon as possible!",
    },
  ];

  return (
    <div id="faq">
      <div className={styles.container}>
        <main className={styles.mainPadding}>
          <h1 className={styles.title}>FAQ</h1>
          <div className={styles.content}>
            <Accordion sx={{ width: "100%" }} allowToggle>
              {faqData.map((faq, idx) => {
                return (
                  <AccordionItem key={idx}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <p style={{ fontWeight: "bold", fontSize: 18 }}>
                            {faq.question}
                          </p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p> {faq.answer}</p>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQ;
