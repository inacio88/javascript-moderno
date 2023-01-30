import { addTitle, sytleBody,contact } from './dom';
import users, {getPremUsers} from './data'
console.log('index file')
sytleBody();
addTitle('oioi mundo');


addTitle('teste')
console.log(contact)

const premUsers = getPremUsers(users)
console.log(users, premUsers)
