export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 1200,
                label: 'Shipments Completed',
                prefix: '+'
            },
            {
                value: 35,
                label: 'Countries Served'
            },
            {
                value: 8,
                label: 'Logistics Partners'
            },
            {
                value: 99,
                label: 'On-Time Delivery Rate',
                suffix: '%'
            }
        ]
    },
    withContent: {
        id: 'withContent',
        stats: [
            {
                value: 5,
                label: 'Continents Covered'
            },
            {
                value: 24,
                label: 'Hour Customer Support',
                suffix: '/7'
            },
            {
                value: 300,
                label: 'Clients Served',
                prefix: '+'
            },
            {
                value: 98,
                label: 'Customer Satisfaction Rate',
                suffix: '%'
            }
        ],
        content: {
            title: "Why Businesses Trust FZC",
            description: "Our global footprint and dedication to timely, safe, and transparent trade operations make us a leading name in the import-export industry.",
            button: {
                text: "Discover Our Solutions",
                link: "/services",
                variant: "primary"
            }
        }
    }
};
