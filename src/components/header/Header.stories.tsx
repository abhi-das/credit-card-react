import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from ".";


export default {
    component: Header,
    title: 'Header',
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Header>;

export const SiteHeader: ComponentStory<typeof Header> = () => (
    <Header />
);

