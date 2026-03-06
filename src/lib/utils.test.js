import { describe, it, expect } from 'vitest';
import { detectInputType } from './utils';

describe('detectInputType', () => {
    it('should detect an email', () => {
        expect(detectInputType('test@example.com')).toBe('email');
        expect(detectInputType('user.name+filter@domain.co.uk')).toBe('email');
    });

    it('should detect an IPv4 address', () => {
        expect(detectInputType('192.168.1.1')).toBe('ip_domain');
        expect(detectInputType('8.8.8.8')).toBe('ip_domain');
        expect(detectInputType('255.255.255.255')).toBe('ip_domain');
    });

    it('should detect a domain', () => {
        expect(detectInputType('google.com')).toBe('ip_domain');
        expect(detectInputType('sub.domain.co.uk')).toBe('ip_domain');
        expect(detectInputType('example.org')).toBe('ip_domain');
    });

    it('should detect a phone number', () => {
        expect(detectInputType('+34600123456')).toBe('phone');
        expect(detectInputType('600123456')).toBe('phone');
        expect(detectInputType('+1234567890')).toBe('phone');
    });

    it('should fallback to username for other strings', () => {
        expect(detectInputType('john_doe')).toBe('username');
        expect(detectInputType('JaneDoe123')).toBe('username');
        // If it doesn't match the strict regexes for domain/ip/email/phone, it's a username
        expect(detectInputType('TargetName')).toBe('username');
    });
});
