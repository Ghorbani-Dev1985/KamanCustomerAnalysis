"use client";
import SingleAccordion from "@/common/SingleAccordion";
import React, { useState } from "react";

const BasicAnalysisSettings = () => {
  const [isOpenSingleAccordion, setIsOpenSingleAccordion] = useState(false)
  return (
    <SingleAccordion
    isOpenSingleAccordion={isOpenSingleAccordion} setIsOpenSingleAccordion={setIsOpenSingleAccordion}
      title="تنظیمات پایه تحلیل"
      subTitle="(نمای کلی، بخش‌بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، فاصله خرید مشتریان، خوشه‌بندی مشتریان، تحلیل سبد مشتریان)">
      sd
    </SingleAccordion>
  );
};

export default BasicAnalysisSettings;
