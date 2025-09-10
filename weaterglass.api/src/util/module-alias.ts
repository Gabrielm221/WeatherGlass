import path from 'path';
import { fileURLToPath } from 'url';
import moduleAlias from 'module-alias';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = path.resolve(__dirname, "../../");

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test'),
});
