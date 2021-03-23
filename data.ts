export const WineColours = ['Red', 'White', 'Rosé'];

export const SubColours: {
    Red: WineColour[];
    White: WineColour[];
    Rosé: WineColour[];
} = {
    Red: [
        {
            name: 'Ruby',
            description: 'The most common colour for red wine is Ruby',
            colourCode: '#801C34',
        },
        {
            name: 'Purple',
            description:
                'Wines with noticable blue or purple colour are Purple',
            colourCode: '#5A1A31',
        },
        {
            name: 'Garnet',
            description:
                'If there is a noticeable orange or brown colour, it is Garnet',
            colourCode: '#7E1B1E',
        },
        {
            name: 'Tawny',
            description:
                'If the wine is more brown than red, it may be described as Tawny',
            colourCode: '#903922',
        },
    ],
    White: [
        {
            name: 'Lemon',
            description: 'The most common colour for white wines is Lemon',
            colourCode: '#F4EB87',
        },
        {
            name: 'Gold',
            description:
                'If there is a hint of orange or brown, the wine is Gold',
            colourCode: '#F5D56B',
        },
        {
            name: 'Amber',
            description:
                'Wines with a very noticeable level of browning are described as Amber',
            colourCode: '#F6B652',
        },
    ],
    Rosé: [
        {
            name: 'Pink',
            description: 'The wine has a very pure Pink colour',
            colourCode: '#F08C93',
        },
        {
            name: 'Pink-orange',
            description:
                'If a Pink wine shows a hint of Orange, it can be described as Pink-Orange',
            colourCode: '#F3836C',
        },
    ],
};

export const ColourIntensityExplanations: ColourIntensityExplanation[] = [
    {
        colour: 'Red',
        intensity: 'Pale',
        description:
            'The wine is lightly pigmented from rim to core. The stem is clearly visible when looking at the wine from above.',
    },
    {
        colour: 'Red',
        intensity: 'Medium',
        description:
            'The stem is barely but still visible when looking at the wine from above.',
    },
    {
        colour: 'Red',
        intensity: 'Deep',
        description:
            'The wine is deeply pigmented from rim to core. It is impossible to see the stem when looking at the wine from above',
    },
    {
        colour: 'White',
        intensity: 'Pale',
        description:
            'When holding the wine at a 45 degree angle, it has a broad watery rim.',
    },
    {
        colour: 'White',
        intensity: 'Medium',
        description: "The wine's colour intensity is between pale and deep",
    },
    {
        colour: 'White',
        intensity: 'Deep',
        description:
            "When holding the wine at a 45 degree angle, it's pigment nearly reaches the rim",
    },
    {
        colour: 'Rosé',
        intensity: 'Pale',
        description: 'TODO pale',
    },
    {
        colour: 'Rosé',
        intensity: 'Medium',
        description: 'TODO medium',
    },
    {
        colour: 'Rosé',
        intensity: 'Deep',
        description: 'TODO deep',
    },
];

export const AromaIntensityExplanations = {
    Light:
        'The aromas are hard to detect and faint, even after swirling the glass.',
    Medium: 'The aromas are easy to detect after swirling the glass.',
    Pronounced:
        'The aromas are immediately appareant without swirling the glass.',
};

export const Descriptors: Descriptor[] = [
    {
        name: 'Blossom',
        category: {
            name: 'Floral',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Rose',
        category: {
            name: 'Floral',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Violet',
        category: {
            name: 'Floral',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Apple',
        category: {
            name: 'Green fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Pear',
        category: {
            name: 'Green fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Gooseberry',
        category: {
            name: 'Green fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Grape',
        category: {
            name: 'Green fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Grapefruit',
        category: {
            name: 'Citrus fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Lemon',
        category: {
            name: 'Citrus fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Lime',
        category: {
            name: 'Citrus fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Orange',
        category: {
            name: 'Citrus fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Peach',
        category: {
            name: 'Stone fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Apricot',
        category: {
            name: 'Stone fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Nectarine',
        category: {
            name: 'Stone fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
    {
        name: 'Banana',
        category: {
            name: 'Tropical fruit',
            color: '',
            icon: 'TODO',
            categoryType: 'Primary',
        },
    },
];

export interface WineColour {
    name: string;
    description: string;
    colourCode: string;
}

export interface ColourIntensityExplanation {
    intensity: 'Pale' | 'Medium' | 'Deep';
    colour: 'Red' | 'White' | 'Rosé';
    description: string;
}

export interface Descriptor {
    name: string;
    category: DescriptorCategory;
}

export interface DescriptorCategory {
    name: string;
    color: string;
    icon: string;
    categoryType: 'Primary' | 'Secondary' | 'Teriary';
}
