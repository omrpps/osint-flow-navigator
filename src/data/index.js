import { opsec } from './categories/opsec';
import { email } from './categories/email';
import { image_video } from './categories/image_video';
import { phone } from './categories/phone';
import { username } from './categories/username';
import { social } from './categories/social';
import { ip_domain } from './categories/ip_domain';
import { physical } from './categories/physical';
import { assets } from './categories/assets';
import { factcheck } from './categories/factcheck';
import { darkweb } from './categories/darkweb';

// Aggregate all tools and flows
const allCategories = [
    opsec,
    email,
    image_video,
    phone,
    username,
    social,
    ip_domain,
    physical,
    assets,
    factcheck,
    darkweb
];

export const dataModel = {
    categories: allCategories.map(c => ({
        id: c.id,
        name: c.name,
        icon: c.icon,
        description: c.description
    })),
    tools: allCategories.flatMap(c => c.tools),
    flows: allCategories.flatMap(c => c.flows)
};

// Log for debugging
if (import.meta.env.DEV) {
    console.log(`[DataModel] Loaded ${dataModel.tools.length} tools and ${dataModel.flows.length} flows.`);
}
