import { useMutation } from "@tanstack/react-query";
import { signUp as signUpAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpAPI,
    retry: false,
    onSuccess: (user) => {
      console.log(user);

      toast.success(
        "Account successfully created, Please verify the new account from the user's email address.",
      );
    },
    onError: (error) => {
      toast.error(error.message);

      console.log(error.message);
    },
  });

  return { signUp, isPending };
}
