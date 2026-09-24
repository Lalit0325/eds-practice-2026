// export default function decorate(block) {
//   const rows = [...block.children];

//   // First row
//   const imageCell = rows[0]?.children[0];
//   const nameCell = rows[0]?.children[1];

//   // Other rows
//   const role = rows[1]?.children[1]?.textContent.trim();
//   const experience = rows[2]?.children[1]?.textContent.trim();
//   const skills = rows[3]?.children[1]?.textContent.trim();

//   // Create image container
//   const imageWrapper = document.createElement('div');
//   imageWrapper.className = 'author-image';

//   const picture = imageCell?.querySelector('picture');

//   if (picture) {
//     imageWrapper.append(picture);
//   }

//   // Create content container
//   const authorContent = document.createElement('div');
//   authorContent.className = 'author-content';

//   // Name
//   const name = document.createElement('h2');
//   name.textContent = nameCell?.textContent.trim();

//   // Role
//   const roleElement = document.createElement('p');
//   roleElement.className = 'author-role';
//   roleElement.textContent = role;

//   // Experience
//   const experienceElement = document.createElement('p');
//   experienceElement.className = 'author-experience';
//   experienceElement.textContent = experience;

//   // Skills
//   const skillsElement = document.createElement('p');
//   skillsElement.className = 'author-skills';
//   skillsElement.textContent = skills;

//   // Build content
//   authorContent.append(
//     name,
//     roleElement,
//     experienceElement,
//     skillsElement,
//   );

//   // Replace original block content
//   block.textContent = '';

//   block.append(
//     imageWrapper,
//     authorContent,
//   );
// }