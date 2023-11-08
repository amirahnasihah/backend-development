- [Fetch and Display Different API Data Structure and Format](#fetch-and-display-different-api-data-structure-and-format)

# Fetch and Display Different API Data Structure and Format

1. dummyJSON 👉 'https://dummyjson.com/users' (The objects returned are highly nested)

```
{
	"users": [ ...
 	],
	"total": 1,
	"skip": 0,
	"limit": 1
}
```

2. jsonplaceholder 👉 https://jsonplaceholder.typicode.com/users (Nested objects) but it  display arrays

```
[
	{ ...
	},
	{ ...
	},
	{ ...
	},
	{ ...
	},
]
```

The main differences between the two APIs you mentioned, `dummyJSON` and `jsonplaceholder`, are in their data structure and response format:

1. `dummyJSON` API:
- Data Structure: The data is nested within an object. The actual user data is contained within the `"users"` key.
- Response Format:
```json
{
  "users": [ ... ],
  "total": 1,
  "skip": 0,
  "limit": 1
}
```

**Here's example to response:**

```javascript
// async await must for axios
const axios = require('axios')

const getData = async () => {
	const URL = `https://dummyjson.com/users`
	try {
		const response = await axios.get(URL);
		// console.log("response:-", response.data.users[0]);
		const actualData = response.data.users[0]
		
		const {ssn, company, firstName} = actualData
		console.log(company.address.address)
	} catch (error) {
		console.log(error.message)
	}
};

getData();
```

2. `jsonplaceholder` API:
- Data Structure: The data is in the form of an array of objects, where each object represents a user.
- Response Format:
```json
[
  { ... },
  { ... },
  { ... },
  { ... }
]
```

The primary difference is in how the data is structured within the API response. `dummyJSON` provides user data within an object with some additional metadata, while `jsonplaceholder` offers an array of user objects directly. When you access these APIs, you'll need to handle the data accordingly based on their respective formats.
