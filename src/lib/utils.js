import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const detectInputType = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    const domainRegex = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (emailRegex.test(input)) return "email";
    if (ipRegex.test(input)) return "ip_domain";
    if (domainRegex.test(input)) return "ip_domain";
    if (phoneRegex.test(input)) return "phone";
    // Default fallback or more complex regex for username/social later
    return "username";
};
