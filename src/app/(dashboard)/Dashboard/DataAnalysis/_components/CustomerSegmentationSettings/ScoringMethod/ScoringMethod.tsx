'use client';
import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react'
import Fieldset from '@/common/Fieldset'
import { Accordion, AccordionItem} from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { useCustomerSegmentationSettings } from 'hooks/useDataAnalysisSettings'
import Recency from './Recency'
import Frequency from './Frequency';
import Monetary from './Monetary';

const ScoringMethod = ({children, handler, setIsScoringMethod}: {
  children: ReactNode;
  handler: (data: any) => void;
  setIsScoringMethod: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data } = useCustomerSegmentationSettings();
  const { SegmentationSettings } = data || {};

  const defaultScores = {
    recency: [100, 80, 60, 40, 20, 0],
    frequency: [100, 80, 60, 40, 20, 0],
    monetary: [100, 80, 60, 40, 20, 0]
  };

  const { register, handleSubmit, getValues, watch, setValue } = useForm({
    defaultValues: Object.entries(defaultScores).reduce((acc: Record<string, number>, [key, values]) => {
      values.forEach((value, index) => {
        acc[`${key}${value}`] = value;
      });
      return acc;
    }, {})
  });

  useEffect(() => {
    if (SegmentationSettings?.results) {
      const metrics = ['recency', 'frequency', 'monetary'];
      metrics.forEach(metric => {
        [20, 40, 60, 80].forEach(score => {
          setValue(
            `${metric}${score}`, 
            SegmentationSettings.results[`${metric}${score === 20 ? 1 : score === 40 ? 2 : score === 60 ? 3 : 4}`]
          );
        });
      });
    }
  }, [SegmentationSettings, setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      const hasChanged = ['recency', 'frequency', 'monetary'].some(metric => 
        [80, 60, 40, 20].some(score => 
          value[`${metric}${score}`] !== 
          SegmentationSettings?.results?.[`${metric}${score === 20 ? 1 : score === 40 ? 2 : score === 60 ? 3 : 4}`]
        )
      );
      
      setIsScoringMethod(hasChanged);
    });
    
    return () => subscription.unsubscribe();
  }, [watch, SegmentationSettings, setIsScoringMethod]);

  return (
    <Fieldset title="شیوه امتیازدهی">
      <p>در این قسمت می توانید بازه‌های پیش‌فرض امتیازدهی Frequency, Recency و Monetary را که در محاسبه نهایی تحلیل RFM استفاده می شوند را به دلخواه خود، تغییر دهید.</p>
      <form onSubmit={handleSubmit(handler)}>
        <Accordion variant="splitted" className="!px-0">
          <AccordionItem 
            key="r" 
            aria-label="Recency (R)" 
            title="Recency (R)" 
            subtitle="شیوه امتیازدهی تازگی مشتری" 
            classNames={{
              base: "shadow-sm border px-0 overflow-hidden my-2",
              heading: "px-1 bg-gray-100 rtl:data-[open=true]:border-b",
              title: "text-zinc-700 text-base",
              content: "px-2 py-10",
              indicator: "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"
            }}
          >
            <Recency register={register} getValues={getValues} />
          </AccordionItem>
          <AccordionItem 
            key="f" 
            aria-label="Frequency (F)" 
            title="Frequency (F)" 
            subtitle="شیوه امتیازدهی میانگین سفارشات مشتری"
            classNames={{
              base: "shadow-sm border px-0 overflow-hidden my-2",
              heading: "px-1 bg-gray-100 rtl:data-[open=true]:border-b", 
              title: "text-zinc-700 text-base",
              content: "px-2 py-10",
              indicator: "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"
            }}
          >
            <Frequency register={register} getValues={getValues} />
          </AccordionItem>
          <AccordionItem 
            key="m" 
            aria-label="Monetary (M)" 
            title="Monetary (M)" 
            subtitle="شیوه امتیازدهی میانگین درآمد مشتری"
            classNames={{
              base: "shadow-sm border px-0 overflow-hidden my-2",
              heading: "px-1 bg-gray-100 rtl:data-[open=true]:border-b",
              title: "text-zinc-700 text-base",
              content: "px-2 py-10",
              indicator: "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"
            }}
          >
            <Monetary register={register} getValues={getValues} />
          </AccordionItem>
        </Accordion>
        {children}
      </form>
    </Fieldset>
  );
};

export default ScoringMethod