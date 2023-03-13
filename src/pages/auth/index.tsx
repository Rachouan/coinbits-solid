import Button from "@app/components/button";
import Container from "@app/components/container";
import TextInput from "@app/components/text-input";
import { Motion } from "@motionone/solid";
import { Link, Navigate, Route, Routes, useLocation } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";

const [email, setEmail] = createSignal<string>("");

const AuthForm = () => {
  const location = useLocation();
  const onHandleSignIn = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      setTimeout(() => console.log("Email is", email()), 2000);
    } finally {
      setLoading(false);
    }
  };
  const [isSignUp, setIsSignup] = createSignal<boolean>(false);
  const [loading, setLoading] = createSignal<boolean>(false);

  createEffect(() => {
    setIsSignup(location.pathname.includes("signup"));
  }, [location]);

  return (
    <div class="flex flex-col gap-y-6 text-center">
      <h1 class="text-2xl font-semibold">
        {isSignUp() ? "Get Started with Coinbits" : "Sign in to Coinbits"}
      </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      <form onSubmit={onHandleSignIn} class="flex flex-col gap-4">
        <TextInput
          focus
          type="email"
          value={email()}
          onChange={(value) => setEmail(value)}
          placeholder="Enter your email address"
          required
          classes="flex-grow"
        />
        <Button loading={loading()}>Get Started</Button>
      </form>
      {!isSignUp() ? (
        <p class="text-sm">
          Don't have an account yet?{" "}
          <Link href="/auth/signup" class="font-medium underline">
            Create an account
          </Link>
        </p>
      ) : (
        <p class="text-sm">
          Do you have an account?{" "}
          <Link href="/auth/singin" class="font-medium underline">
            Sign In
          </Link>
        </p>
      )}
    </div>
  );
};

const AuthPage = () => {
  return (
    <>
      <div class="flex justify-center items-center w-full min-h-screen">
        <Motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            easing: "ease-in-out",
          }}
        >
          <Container size="xs">
            <Routes>
              <Route path={["signup", "signin"]} element={<AuthForm />} />
              <Route path="*" element={<Navigate href="/auth/signin" />} />
            </Routes>
          </Container>
        </Motion.div>
      </div>
    </>
  );
};

export default AuthPage;
