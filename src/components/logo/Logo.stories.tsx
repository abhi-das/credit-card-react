import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from '.';

export default {
    component: Logo,
    title: 'Logo',
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Logo>;

export const siteLogo: ComponentStory<typeof Logo> = () => <Logo />;
