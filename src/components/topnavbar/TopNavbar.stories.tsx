import { ComponentMeta, ComponentStory } from "@storybook/react";
import TopNavbar from "."

export default {
    component: TopNavbar,
    title: 'TopNavBar',
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof TopNavbar>;

export const SiteTopNavbar: ComponentStory<typeof TopNavbar> = () => (
    <TopNavbar />
);
