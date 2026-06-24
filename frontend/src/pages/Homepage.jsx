import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton
} from "@clerk/clerk-react";

function Homepage() {

  return (
      <div>
        <button className="btn btn-secondary">Click me</button>

        <SignedOut>
          <SignInButton mode="modal">
            <button>Login</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton />
        </SignedIn>

        <UserButton />
      </div>
    
  )
}

export default Homepage
