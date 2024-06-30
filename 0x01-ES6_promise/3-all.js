import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  const p1 = uploadPhoto();
  const p2 = createUser();

  return Promise.all([p1, p2])
    .then((data) => {
      const result = Object.assign(...data);
      console.log(`${result.body} ${result.firstName} ${result.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
// Promise.all() is a method in JavaScript that takes an array
// (or an iterable) of promises and returns a single promise.
