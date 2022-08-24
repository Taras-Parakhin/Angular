import {environment} from '../../environments/environment';

const {API} = environment;

export const urls = {
  comments: `${API}/comments`,
  posts: `${API}/posts`,
  users: `${API}/users`
}
