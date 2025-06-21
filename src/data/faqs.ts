export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "What services does MAK Import Export Solutions offer?",
                answer: "We offer comprehensive import and export services, including customs clearance, freight forwarding, logistics, and consulting. We help businesses navigate global trade with ease."
            },
            {
                question: "How do I get started with MAK Import Export?",
                answer: "To get started, simply reach out to us via our contact page. We’ll schedule a consultation to understand your needs and provide tailored solutions for your import-export requirements."
            },
            {
                question: "How can I track my shipments?",
                answer: "We provide real-time tracking of all shipments via our online portal. You'll receive updates on the status and location of your shipments from origin to destination."
            },
            {
                question: "What are your payment terms?",
                answer: "We offer flexible payment options based on the size and scope of the project. Typically, we require a deposit at the start of the project, with the balance due upon completion or as per the agreed terms."
            },
            {
                question: "How do you ensure compliance with international regulations?",
                answer: "Our team is well-versed in global trade regulations. We work closely with customs authorities to ensure all paperwork and compliance requirements are handled efficiently to avoid delays or penalties."
            }
        ]
    }
};
