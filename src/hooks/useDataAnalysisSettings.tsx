import { useQuery } from "@tanstack/react-query";
import { GetBasicAnalysisSettings, UpdateDataAnalysisSettings } from "services/DataAnalysisServics";


export const useCustomerSegmentationSettings = () =>
    useQuery({
      queryKey: ["getUpdateDataAnalysisSettings"],
      queryFn: UpdateDataAnalysisSettings,
    });

export const useBasicAnalysisSettings = () =>
      useQuery({
        queryKey: ["getBasicAnalysisSettings"],
        queryFn: GetBasicAnalysisSettings,
      });