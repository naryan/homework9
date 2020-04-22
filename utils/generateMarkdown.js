
function generateMarkdown({name, email, title, description,avatar_url, html_url, installation, question1}) 
{
  return `
## ${title}
### Description
${description}
### Installation
${installation}

### Question-1
${question1}
### Name
${name}
### Email
${email}
  *Profile Picture
 ![Profile Picture](${avatar_url})
 ### GitHub URL
 ${html_url}
`;

}

module.exports = generateMarkdown;
