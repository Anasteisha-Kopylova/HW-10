const user = {
    name: 'Anastasiia',
    age: 28,
    city: 'Kyiv',
    country: 'Ukraine',
  

  getUserInfo() {
    let info = 'User card:\n';
    for (const [key, value] of 
        Object.entries(this)) {
            if (typeof value !== 'function') {
                info += `${key}: ${value}\n`;
            }
        }
        return info;
    }
};

  alert(user.getUserInfo());