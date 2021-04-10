import requset from '../requst'

 // post
export async function login(params) {
  return requset.post('home/login', params,{ });
}

// get
export async function selectPage(params) {
  return requset.get('home/login', params);
}

