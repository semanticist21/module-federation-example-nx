import { z } from 'zod';
export declare const serviceItemSchema: z.ZodObject<{
    id: z.ZodString;
    svcCode: z.ZodString;
    svc_name: z.ZodString;
    svcSign: z.ZodString;
    svcCategory: z.ZodEnum<["유선", "무선"]>;
    svgUsageCategory: z.ZodEnum<["채널검색", "통합검색"]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    svcCode: string;
    svc_name: string;
    svcSign: string;
    svcCategory: "유선" | "무선";
    svgUsageCategory: "채널검색" | "통합검색";
}, {
    id: string;
    svcCode: string;
    svc_name: string;
    svcSign: string;
    svcCategory: "유선" | "무선";
    svgUsageCategory: "채널검색" | "통합검색";
}>;
export type serviceItemType = z.infer<typeof serviceItemSchema>;
export declare const SERVICE_MOCK_DATA: serviceItemType[];
export declare const SVC_CATEGORY_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const SVG_USAGE_CATEGORY_OPTIONS: {
    label: string;
    value: string;
}[];
