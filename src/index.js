import { createElement } from 'lwc';
import MyApp from 'my/app';

const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
console.log(document.querySelector('body'));
document.querySelector('#main').appendChild(app);
