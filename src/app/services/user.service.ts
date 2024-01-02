export class UserService {
  userList = [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      age: 50,
      gender: 'male',
      email: 'atuny0@sohu.com',
      phone: '+63 791 675 8914',
      address: {
        address: '1745 T Street Southeast',
        city: 'Washington',
        coordinates: { lat: 38.867033, lng: -76.979235 },
        postalCode: '20020',
        state: 'DC',
      },
    },
    {
      id: 2,
      firstName: 'Sheldon',
      lastName: 'Quigley',
      age: 28,
      gender: 'male',
      email: 'hbingley1@plala.or.jp',
      phone: '+7 813 117 7139',
      address: {
        address: '6007 Applegate Lane',
        city: 'Louisville',
        coordinates: { lat: 38.1343013, lng: -85.6498512 },
        postalCode: '40219',
        state: 'KY',
      },
    },
    {
      id: 3,
      firstName: 'Terrill',
      lastName: 'Hills',
      age: 38,
      gender: 'male',
      email: 'rshawe2@51.la',
      phone: '+63 739 292 7942',
      address: {
        address: '560 Penstock Drive',
        city: 'Grass Valley',
        coordinates: { lat: 39.213076, lng: -121.077583 },
        postalCode: '95945',
        state: 'CA',
      },
    },
    {
      id: 4,
      firstName: 'Miles',
      lastName: 'Cummerata',
      age: 49,
      gender: 'male',
      email: 'yraigatt3@nature.com',
      phone: '+86 461 145 4186',
      address: {
        address: '150 Carter Street',
        city: 'Manchester',
        coordinates: { lat: 41.76556000000001, lng: -72.473091 },
        postalCode: '06040',
        state: 'CT',
      },
    },
    {
      id: 5,
      firstName: 'Mavis',
      lastName: 'Schultz',
      age: 38,
      gender: 'male',
      email: 'kmeus4@upenn.edu',
      phone: '+372 285 771 1911',
      address: {
        address: '2721 Lindsay Avenue',
        city: 'Louisville',
        coordinates: { lat: 38.263793, lng: -85.700243 },
        postalCode: '40206',
        state: 'KY',
      },
    },
    {
      id: 6,
      firstName: 'Alison',
      lastName: 'Reichert',
      age: 21,
      gender: 'female',
      email: 'jtreleven5@nhs.uk',
      phone: '+351 527 735 3642',
      address: {
        address: '18 Densmore Drive',
        city: 'Essex',
        coordinates: { lat: 44.492953, lng: -73.101883 },
        postalCode: '05452',
        state: 'VT',
      },
    },
    {
      id: 7,
      firstName: 'Oleta',
      lastName: 'Abbott',
      age: 31,
      gender: 'female',
      email: 'dpettegre6@columbia.edu',
      phone: '+62 640 802 7111',
      address: {
        address: '637 Britannia Drive',
        city: 'Vallejo',
        coordinates: { lat: 38.10476999999999, lng: -122.193849 },
        postalCode: '94591',
        state: 'CA',
      },
    },
    {
      id: 8,
      firstName: 'Ewell',
      lastName: 'Mueller',
      age: 29,
      gender: 'male',
      email: 'ggude7@chron.com',
      phone: '+86 946 297 2275',
      address: {
        address: '5601 West Crocus Drive',
        city: 'Glendale',
        coordinates: { lat: 33.6152469, lng: -112.179737 },
        postalCode: '85306',
        state: 'AZ',
      },
    },
    {
      id: 9,
      firstName: 'Demetrius',
      lastName: 'Corkery',
      age: 22,
      gender: 'male',
      email: 'nloiterton8@aol.com',
      phone: '+86 356 590 9727',
      address: {
        address: '5403 Illinois Avenue',
        city: 'Nashville',
        coordinates: { lat: 36.157077, lng: -86.853827 },
        postalCode: '37209',
        state: 'TN',
      },
    },
    {
      id: 10,
      firstName: 'Eleanora',
      lastName: 'Price',
      age: 37,
      gender: 'female',
      email: 'umcgourty9@jalbum.net',
      phone: '+60 184 408 0824',
      address: {
        address: '8821 West Myrtle Avenue',
        city: 'Glendale',
        coordinates: { lat: 33.5404296, lng: -112.2488391 },
        postalCode: '85305',
        state: 'AZ',
      },
    }
  ];

  constructor() {}

  getUserList(): any[] {
    return JSON.parse(JSON.stringify(this.userList));
  }

  getSearchUserList(searchTerm: string): any[] {
    const searchUserList = this.userList.filter(u => u.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || u.lastName.toLowerCase().includes(searchTerm.toLowerCase()));
    return searchUserList;
  }
}
