export const categories = [
	{
	  name: 'Python',
	  image: 'https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg',
	},
	{
	  name: 'ReactJS',
	  image: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage-thumbnail.png',
	},
	{
	  name: 'JavaScript',
	  image: 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com019.jpg',
	},
	{
	  name: 'PyGame',
	  image: 'https://styles.redditmedia.com/t5_2rkfn/styles/communityIcon_cmjo55tgjjp81.png',
	},
	{
	  name: 'Machine Learning',
	  image: 'https://siliconcoder.com/wp-content/uploads/2019/12/Machine-Learning-using-Python.png',
	},
	{
	  name: 'Web Development',
	  image: 'https://p7.hiclipart.com/preview/142/419/654/web-development-computer-icons-software-development-technology-software.jpg',
	},
	{
	  name: 'Panda Bits',
	  image: 'https://i.seadn.io/gae/dQczak5CZs4Tk-oCrEvYVBRL0JIl72vSw8TRKLsf2jr4-UD7KEek4jsDIvzGon_Ll0GKEBL7ePI8qqEj1dWcYymCVPhmWxAKc5R3bg?auto=format&w=1000',
	},
	{
	  name: 'Other',
	  image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
	},
  ];

  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
	image{
	  asset->{
		url
	  }
	},
		_id,
		destination,
		postedBy->{
		  _id,
		  userName,
		  image
		},
		save[]{
		  _key,
		  postedBy->{
			_id,
			userName,
			image
		  },
		},
	  } `;
  
  export const pinDetailQuery = (pinId) => {
	const query = `*[_type == "pin" && _id == '${pinId}']{
	  image{
		asset->{
		  url
		}
	  },
	  _id,
	  title, 
	  about,
	  category,
	  destination,
	  postedBy->{
		_id,
		userName,
		image
	  },
	 save[]{
		postedBy->{
		  _id,
		  userName,
		  image
		},
	  },
	  comments[]{
		comment,
		_key,
		postedBy->{
		  _id,
		  userName,
		  image
		},
	  }
	}`;
	return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
	const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
	  image{
		asset->{
		  url
		}
	  },
	  _id,
	  destination,
	  postedBy->{
		_id,
		userName,
		image
	  },
	  save[]{
		_key,
		postedBy->{
		  _id,
		  userName,
		  image
		},
	  },
	}`;
	return query;
  };
  
  export const searchQuery = (searchTerm) => {
	const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
		  image{
			asset->{
			  url
			}
		  },
			  _id,
			  destination,
			  postedBy->{
				_id,
				userName,
				image
			  },
			  save[]{
				_key,
				postedBy->{
				  _id,
				  userName,
				  image
				},
			  },
			}`;
	return query;
  };
  
  export const userQuery = (userId) => {
	const query = `*[_type == "user" && _id == '${userId}']`;
	return query;
  };
  
  export const userCreatedPinsQuery = (userId) => {
	const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
	  image{
		asset->{
		  url
		}
	  },
	  _id,
	  destination,
	  postedBy->{
		_id,
		userName,
		image
	  },
	  save[]{
		postedBy->{
		  _id,
		  userName,
		  image
		},
	  },
	}`;
	return query;
  };
  
  export const userSavedPinsQuery = (userId) => {
	const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
	  image{
		asset->{
		  url
		}
	  },
	  _id,
	  destination,
	  postedBy->{
		_id,
		userName,
		image
	  },
	  save[]{
		postedBy->{
		  _id,
		  userName,
		  image
		},
	  },
	}`;
	return query;
  };