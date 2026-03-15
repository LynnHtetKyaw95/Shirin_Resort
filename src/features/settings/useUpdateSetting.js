import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: mutateUpdateSetting } = useMutation({
    mutationFn: (newSettings) => updateSetting(newSettings),
    onSuccess: () => {
      toast.success("Setting successfully updated");

      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isUpdating, mutateUpdateSetting };
}
