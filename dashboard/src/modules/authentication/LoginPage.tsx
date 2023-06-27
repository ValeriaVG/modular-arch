export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <form method="POST">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
