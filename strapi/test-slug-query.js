const fetch = require('node-fetch');

const query = `
  query TestSlugQuery {
    consultingServices(filters: { slug: { eq: "tasys-shrka-ajnbya-fy-alsawdya" } }) {
      documentId
      name
      slug
      locale
      localizations {
        documentId
        name
        slug
        locale
      }
    }
  }
`;

fetch('http://localhost:1337/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 34b14bff9910e6c8c6ab16fcfc59dd8176d705716475563998178b0647ddcb3ec943948ead23351bcb83e75b9ab4233e6a55270b1bcc5d6c295c2b1518057020aa0b2414c0d8ddef6efffb8384619616594f80d8d8dbfbdd0f99619a0836ec8de2d77735602b1f948a80d98947a7afe4bf2c5180be993f110d165515a675b9a7'
  },
  body: JSON.stringify({ query })
})
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(err => console.error('Error:', err));
