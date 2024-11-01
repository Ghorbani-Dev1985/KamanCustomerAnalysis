import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GetBasicAnalysisSettings, GetCustomerSegmentationSettings, GetScoringMethodScore, UpdateDataAnalysisSettingsApi } from "services/DataAnalysisConfigServices";

export const useUpdateDataAnalysisSettings = () =>{
  const queryClient = useQueryClient();
 const {isPending : isUpdateDataAnalysisSettings, mutate: UpdateDataAnalysisSettings} = useMutation({
    mutationFn: UpdateDataAnalysisSettingsApi,
    onSuccess: ({error}) => {
      if(!error.hasError){
        toast.success("تنظیمات با موفقیت ثبت شد")
        queryClient.invalidateQueries({ queryKey: ["getUpdateDataAnalysisSettings"] });
      }else{
        toast.error("تنظیمات انجام نشد")
      }
    },
    onError: (error) => {
      toast.error("خطایی رخ داده است")
    }
   })
   return {isUpdateDataAnalysisSettings , UpdateDataAnalysisSettings}
}
export const useCustomerSegmentationSettings = () =>
    useQuery({
      queryKey: ["getSegmentationScoringSettings"],
      queryFn: async () => {
        const [SegmentationSettings, ScoringMethodScore] = await Promise.all([
          GetCustomerSegmentationSettings(),
          GetScoringMethodScore()
        ]);
        return {SegmentationSettings, ScoringMethodScore};
      },
    });
export const useBasicAnalysisSettings = () =>
      useQuery({
        queryKey: ["getBasicAnalysisSettings"],
        queryFn: GetBasicAnalysisSettings,
      });