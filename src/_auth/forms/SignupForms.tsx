import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {Link}from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  /* FormDescription, */
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { SignupValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader";
import { createUserAccount } from "@/lib/appwrite/api";
import { useToast } from "@/components/ui/use-toast";

const SignupForms = () => {
  const { toast } = useToast();
  const isLoading = false;
  // 1 define your form
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

    // Queries
    const { mutateAsync: createUserAccount, isLoading: isCreatingAccount } = useCreateUserAccountMutation(); 1.32

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
 
    const newUser = await createUserAccount(values);
    console.log(newUser);
    if(!newUser){
      return toast({
        title:'Sign up failed, Please try again.'
      });
    }
    // const session = await signInAccount()
    /// create a user
    //50.35
    
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a New Account
        </h2>
        <p>To use SnapGram enter, Please your details</p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="shad-button-primary">
            {
              isLoading ? (
                <div className="flex-center gap-2">
                  <Loader/> ...Loading

                </div>
              ): "Sign Up"
            }
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link to="/sign-in" className="test-primary-500 text-small-semibold ml-1">Log In </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForms;
