import { ComponentMeta, ComponentStory } from '@storybook/react';
import Banner from '.';

export default {
    component: Banner,
    title: 'Banner',
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Banner>;

export const SiteBanner: ComponentStory<typeof Banner> = () => <Banner />;
