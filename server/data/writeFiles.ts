import { writeFiles as writeFilesDescriptions } from './genDataDescriptions';
import { writeFiles as writeFilesItems } from './genDataItems';

await writeFilesDescriptions();
await writeFilesItems();
