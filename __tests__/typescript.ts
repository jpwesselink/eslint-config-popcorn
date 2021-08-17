import fs from 'fs';

import parser from '@typescript-eslint/eslint-plugin';

const something = (): void => {
    console.log('parser', parser);
    console.log('fs', fs);
};
export default something;
