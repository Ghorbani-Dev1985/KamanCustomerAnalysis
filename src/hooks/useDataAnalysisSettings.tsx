import { useQuery } from "@tanstack/react-query";
import { GetDataAnalysisSettings } from "services/DataAnalysisServics";


export const useDataAnalysisSettings = () =>
    useQuery({
      queryKey: ["getDataAnalysisSettings"],
      queryFn: GetDataAnalysisSettings,
    });33