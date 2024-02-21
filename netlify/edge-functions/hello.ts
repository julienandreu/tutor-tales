export const config = { path: '/hello' };

function hello() {
  console.log('Hello called');

  return new Response('Hello world');
}

export default hello;
