import { generateUniqueID as gen} from './index.js'
import { addAccount as add} from './index.js'
// you can rename the import to avoid name conflicts
// this renaming can also be done in the export line in the source file


console.log(gen("Allan", "Turing")); 

console.log(add(["Alan", "Turing", "aturing@w3c.com", 58]))



