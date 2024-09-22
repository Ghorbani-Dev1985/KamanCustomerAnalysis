import { useMutation } from "@tanstack/react-query";
import { GetFactorInfo, GetProductInfo } from "services/GetInfoServics";


export const useGetFactorInfo = () =>
  useMutation({ mutationFn: GetFactorInfo});

export const useGetProductInfo = () =>
  useMutation({ mutationFn: GetProductInfo});