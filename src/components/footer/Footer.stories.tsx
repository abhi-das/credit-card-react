import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from ".";

export default {
    component: Footer,
    title: 'Footer',
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Footer>;

export const WithSticky: ComponentStory<typeof Footer> = () => (
    <Footer/>
)

export const WithOutSticky: ComponentStory<typeof Footer> = () => (
    <Footer customClasses="fixed-bottom"/>
)
