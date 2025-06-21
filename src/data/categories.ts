interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'Business Tips',
    slug: 'business-tips',
    description: 'Expert tips to make the most out of your resources for maximum profit'
  },
  {
    name: 'Industry Insights',
    slug: 'industry-insights',
    description: 'Current global trade industry insigts'
  },
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
