export default function ({ route, redirect }) {
  const isAuthenticated = false;
  if (!isAuthenticated ) {
    redirect('/login');
  }
}
