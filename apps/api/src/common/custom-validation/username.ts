import { z } from 'nestjs-zod/z';

export const Username = z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username is too long')
    .regex(
        /^[a-zA-Z0-9]{3,20}$/,
        'Username can only contain letters and numbers',
    );
