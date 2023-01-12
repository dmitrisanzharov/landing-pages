import { navToolsItems } from "./navToolsMenuItems";

const footerMenuItems = [
    {
        heading: 'Tools',
        items: [...navToolsItems.map(el => el.title), 'Extras']
    },
    {
        heading: 'Resources',
        items: ['Blog', 'Content Library', 'Browser Extension', 'Free Image Editor']
    },
    {
        heading: 'Support',
        items: ['Help Center', 'Status', 'What\'s New', 'Product Roadmap']
    },
    {
        heading: 'Company',
        items: ['About', 'Transparency', 'Careers', 'Accessibility', 'Press', 'Sitemap']
    }
]


export default footerMenuItems;