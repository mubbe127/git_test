const para = document.createElement('p');
para.classList.add('first');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

const headerT = document.createElement('h3');
headerT.classList.add('rubrik');
headerT.textContent = 'I\'m a blue h3';
headerT.style.color = 'blue';

const container = document.createElement('div');
container.style.border = '2px solid black';
container.style.backgroundColor = 'pink';

const content = document.createElement('h1');
content.textContent = 'I\'m in a div';
container.appendChild(content);

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';
container.appendChild(para2);

const bigContainer = document.querySelector('body');
bigContainer.appendChild(para)
bigContainer.appendChild(headerT)
bigContainer.appendChild(container);