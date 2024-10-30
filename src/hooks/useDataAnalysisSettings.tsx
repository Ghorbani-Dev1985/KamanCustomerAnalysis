import { useQuery } from "@tanstack/react-query";
import { GetBasicAnalysisSettings, GetCustomerSegmentationSettings, GetScoringMethodScore } from "services/DataAnalysisConfigServices";



export const useCustomerSegmentationSettings = () =>
    useQuery({
      queryKey: ["getUpdateDataAnalysisSettings"],
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