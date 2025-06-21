import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                title: 'Fast Global Shipping',
                description: 'Quick and reliable delivery across international borders'
            },
            {
                icon: Shield,
                title: 'Secure Trade Practices',
                description: 'Compliance with global trade regulations and safety standards'
            },
            {
                icon: TabletSmartphone,
                title: 'Real-Time Tracking',
                description: 'Monitor your shipments from origin to destination'
            },
            {
                icon: Smile,
                title: 'Customer-Centric Service',
                description: 'Support tailored to client needs and satisfaction'
            },
            {
                icon: Type,
                title: 'Multilingual Support',
                description: 'Communicate in your preferred language with ease'
            },
            {
                icon: CodeXml,
                title: 'Digitally Streamlined Operations',
                description: 'Tech-driven systems for seamless import-export management'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Trusted by Clients Worldwide',
                description: 'Built long-term partnerships across multiple countries'
            },
            {
                icon: Coffee,
                title: 'Always Operational',
                description: 'Round-the-clock service to match global time zones'
            },
            {
                icon: Smile,
                title: 'Simplified Customs Handling',
                description: 'We handle the complexity so you don’t have to'
            }
        ]
    }
};
