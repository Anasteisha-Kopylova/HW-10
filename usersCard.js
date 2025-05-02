const user = {
    name: 'Anastasiia',
    age: 28,
    city: 'Kyiv',
    country: 'Ukraine',
  };

  let userInfo = 'User card:\n';
  
  for (const [key, value] of Object.entries(user)) {
    userInfo += `${key}: ${value}\n`;
  }

  alert(userInfo);