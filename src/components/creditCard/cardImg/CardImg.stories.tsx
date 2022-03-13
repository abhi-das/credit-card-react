import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardImg from '.';

export default {
    component: CardImg,
    title: "Card Image",
    parameters: {
        layout: "fullscreen"
    }
} as ComponentMeta<typeof CardImg>;

const masterCardDefaultProps = {
    src: './assets/images/master-card.svg',
    alt: 'Master Card',
    classes: 'w-25',
    icon: false
};

export const MasterCard: ComponentStory<typeof CardImg> = () => (
    <CardImg {...masterCardDefaultProps} />
);

const visaCardDefaultProps = {
    src: './assets/images/visa-card.svg',
    alt: 'Visa Card',
    classes: 'w-25',
    icon: false
};

export const VisaCard: ComponentStory<typeof CardImg> = () => (
    <CardImg {...visaCardDefaultProps} />
);