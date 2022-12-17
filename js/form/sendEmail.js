export default async function sendEmail(body) {
  try {
    const res = await fetch('https://nelsongamerodev.com/api/portfolioContact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
