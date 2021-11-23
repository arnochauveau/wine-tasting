export const WineColours = ['Red', 'White', 'Rosé'];

export const SubColours: {
    Red: WineColour[];
    White: WineColour[];
    Rosé: WineColour[];
} = {
    Red: [
        {
            name: 'Ruby',
            description: 'The most common colour for red wine is **(Ruby)**',
            colourCode: '#801C34',
        },
        {
            name: 'Purple',
            description:
                'Wines with noticable blue or purple colour are **(Purple)**',
            colourCode: '#5A1A31',
        },
        {
            name: 'Garnet',
            description:
                'If there is a noticeable orange or brown colour, it is **(Garnet)**',
            colourCode: '#7E1B1E',
        },
        {
            name: 'Tawny',
            description:
                'If the wine is more brown than red, it may be described as **(Tawny)**',
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
            'The wine is lightly pigmented from rim to core. The stem is **(clearly visible)** when looking at the wine from above.',
    },
    {
        colour: 'Red',
        intensity: 'Medium',
        description:
            'The stem is **(barely but still visible)** when looking at the wine from above.',
    },
    {
        colour: 'Red',
        intensity: 'Deep',
        description:
            'The wine is deeply pigmented from rim to core. It is **(impossible to see the stem)** when looking at the wine from above',
    },
    {
        colour: 'White',
        intensity: 'Pale',
        description:
            'When holding the wine at a 45 degree angle, it has a **(broad watery rim)**.',
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
            "When holding the wine at a 45 degree angle, it's **(pigment nearly reaches the rim)**",
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
        'The aromas are **(hard to detect and faint)**, even after swirling the glass.',
    Medium: 'The aromas are easy to detect **(after swirling the glass)**.',
    Pronounced:
        'The aromas are **(immediately appareant)** without swirling the glass.',
};

export const PrimaryDescriptors: Descriptor[] = [
    {
        name: 'Blossom',
        color: '#F0CADF',
    },
    {
        name: 'Rose',
        color: '#C40111',
    },
    {
        name: 'Violet',
        color: '#A492C8',
    },
    {
        name: 'Apple',
        color: '#8DAA42',
    },
    {
        name: 'Pear',
        color: '#AEB50E',
    },
    {
        name: 'Gooseberry',
        color: '#ACAC42',
    },
    {
        name: 'Grape',
        color: '#BAD15B',
    },
    {
        name: 'Grapefruit',
        color: '#E6580C',
    },
    {
        name: 'Lemon',
        color: '#F2C71D',
    },
    {
        name: 'Lime',
        color: '#A6BA3F',
    },
    {
        name: 'Orange',
        color: '#DC5810',
    },
    {
        name: 'Peach',
        color: '#F7A318',
    },
    {
        name: 'Apricot',
        color: '#F59131',
    },
    {
        name: 'Nectarine',
        color: '#E1553F',
    },
    {
        name: 'Lychee',
        color: '#C03E50',
    },
    {
        name: 'Mango',
        color: '#F5C943',
    },
    {
        name: 'Melon',
        color: '#A6BD5B',
    },
    {
        name: 'Passion fruit',
        color: '#4F262A',
    },
    {
        name: 'Pineapple',
        color: '#CE994B',
    },
    {
        name: 'Redcurrant',
        color: '#E83220',
    },
    {
        name: 'Cranberry',
        color: '#BE0320',
    },
    {
        name: 'Raspberry',
        color: '#E25565',
    },
    {
        name: 'Strawberry',
        color: '#E52829',
    },
    {
        name: 'Red cherry',
        color: '#C10C22',
    },
    {
        name: 'Red plum',
        color: '#B9091C',
    },
    {
        name: 'Blackcurrant',
        color: '#0D0D18',
    },
    {
        name: 'Blackberry',
        color: '#272127',
    },
    {
        name: 'Blueberry',
        color: '#3F5B85',
    },
    {
        name: 'Black cherry',
        color: '#370203',
    },
    {
        name: 'Black plum',
        color: '#36262B',
    },
    {
        name: 'Green bell pepper',
        color: '#365F21',
    },
    {
        name: 'Grass',
        color: '#658D02',
    },
    {
        name: 'Tomato leaf',
        color: '#5FAB40',
    },
    {
        name: 'Asparagus',
        color: '#5B9212',
    },
    {
        name: 'Eucalyptus',
        color: '#2E6055',
    },
    {
        name: 'Mint',
        color: '#83C04A',
    },
    {
        name: 'Fennel',
        color: '#F0F5AD',
    },
    {
        name: 'Dill',
        color: '#78AB29',
    },
    {
        name: 'Dried herbs',
        color: '#606949',
    },
    {
        name: 'Black pepper',
        color: '#4E4843',
    },
    {
        name: 'White pepper',
        color: '#C1AF7F',
    },
    {
        name: 'Liquorice',
        color: '#714D22',
    },
    {
        name: 'Wet stones',
        color: '#B1B2B7',
    },
    {
        name: 'Candy',
        color: '#ED6374',
    },
];

export const SecondaryDescriptors: Descriptor[] = [
    {
        name: 'Biscuit',
        color: '#DAC072',
    },
    {
        name: 'Pastry',
        color: '#F1B884',
    },
    {
        name: 'Bread',
        color: '#DDAE70',
    },
    {
        name: 'Toasted bread',
        color: '#D99B4F',
    },
    {
        name: 'Bread dough',
        color: '#E2D9C9x',
    },
    {
        name: 'Cheese',
        color: '',
    },
    {
        name: 'Yoghurt',
        color: '',
    },
    {
        name: 'Butter',
        color: '',
    },
    {
        name: 'Cream',
        color: '',
    },
    {
        name: 'Vanilla',
        color: '',
    },
    {
        name: 'Cloves',
        color: '',
    },
    {
        name: 'Coconut',
        color: '',
    },
    {
        name: 'Cedar',
        color: '',
    },
    {
        name: 'Charred wood',
        color: '',
    },
    {
        name: 'Smoke',
        color: '',
    },
    {
        name: 'Chocolate',
        color: '',
    },
    {
        name: 'Coffee',
        color: '',
    },
];
export const TertiaryDescriptors: Descriptor[] = [];

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
    color: string;
}
